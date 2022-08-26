
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

    def print_in_order(self):
        if self.left:
            self.left.print_in_order()
        print(self.data)
        if self.right:
            self.right.print_in_order()


class BinaryExpressionTree:
    def __init__(self):
        self.stack = []
        self.operators = set(['+', '-', '*', '/', '(', ')', '^'])

    def construct_expression(self, expression):
        for i in range(len(expression)):
            node = Node(expression[i])
            if expression[i] not in self.operators:
                node.data = int(node.data)
                self.stack.append(node)
            else:
                r = self.stack.pop()
                l = self.stack.pop()
                node.right = r
                node.left = l
                self.stack.append(node)

    def evaluate(self, root):
        if root.data is None: # empty tree?
            return 0

        if root.left is None and root.right is None: # leaf?
            return root.data

        left_sum = self.evaluate(root.left) # evaluate left tree
        right_sum = self.evaluate(root.right) # evaluate right tree
        # well duh! there's no ^ evaluator here
        if root.data == '+':
            return left_sum + right_sum
        elif root.data == '-':
            return left_sum - right_sum
        elif root.data == '*':
            return left_sum * right_sum
        elif root.data == '^':
            return left_sum ** right_sum
        else:
            return left_sum // right_sum

            
test_tree = BinaryExpressionTree()
test_tree.construct_expression(['3', '5', '9', '+', '2', '*', '+'])
test_tree.stack[0].print_in_order()
answer = test_tree.evaluate(test_tree.stack[0])
print('answer: ', answer)
    
test_tree2 = BinaryExpressionTree()
test_tree2.construct_expression(['8', '2', '^', '6', '+', '2', '10', '*', '2', '/', '-'])
test_tree2.stack[0].print_in_order()
answer2 = test_tree2.evaluate(test_tree2.stack[0])
print('answer2: ', answer2)
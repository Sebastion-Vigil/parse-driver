
class BinaryTree:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

    def insert(self, val):
        new_node = BinaryTree(val)
        if val <= self.data:
            if not self.left:
                self.left = new_node
            else:
                self.left.insert(val)
        else:
            if not self.right:
                self.right = new_node
            else:
                self.right.insert(val)
    
    def contains(self, val):
        if val == self.data:
            return True
        elif val < self.data:
            if not self.left:
                return False
            else:
                return self.left.contains(val)
        else:
            if not self.right:
                return False
            else:
                return self.right.contains(val)

    def print_in_order(self):
        if self.left:
            self.left.print_in_order()
        print(self.data)
        if self.right:
            self.right.print_in_order()


tree = BinaryTree(10)
tree_data = [15, 8, 5, 9, 11, 12, 3, 4]
for i in range(len(tree_data)):
    tree.insert(tree_data[i])

tree.print_in_order()

tree2 = BinaryTree()
print(tree2.data)
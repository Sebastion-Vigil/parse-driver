Operators = set(['+', '-', '*', '/', '(', ')', '^'])  # collection of Operators

Priority = {'+':1, '-':1, '*':2, '/':2, '^':3} # dictionary having priorities of Operators
 
 
def infixToPostfix(expression): 
    stack = [] # initialization of empty stack

    output = []

    

    for character in expression:

        if character not in Operators:  # if an operand append in postfix expression

            output.append(character)

        elif character=='(':  # else Operators push onto stack

            stack.append('(')

        elif character==')':

            while stack and stack[-1]!= '(':

                output.append(stack.pop())

            stack.pop()

        else: 

            while stack and stack[-1]!='(' and Priority[character]<=Priority[stack[-1]]:

                output.append(stack.pop())

            stack.append(character)

    while stack:

        output.append(stack.pop())

    return ' '.join(output)


infix = ['8', '^', '2', '+', '6', '-', '2', '*', '10', '/', '2']
postfix = infixToPostfix(infix)
print('infix: ', ' '.join(infix))
print('postfix: ', postfix)
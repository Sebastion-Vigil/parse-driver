Operators = set(['+', '-', '*', '/', '(', ')', '^'])  # collection of Operators

Priority = {'+':1, '-':1, '*':2, '/':2, '^':3} # dictionary having priorities of Operators
 
 
def infixToPostfix(expression): 
    expression = expression.split(' ')
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


expression = input('Enter infix expression ')

print('infix notation: ',expression)

print('postfix notation: ',infixToPostfix(expression))

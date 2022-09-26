const operators = ['+', '-', '*', '/', '(', ')', '^']

const priority = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 }

function infixToPostfix(expression) {
    const stack = []
    const output = []

    expression.forEach((character) => {
        if (!operators.includes(character)) {
            output.push(character)
        }
        else if (character === '(') {
            stack.push('(')
        }
        else if (character === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                output.push(stack.pop())
            }
            stack.pop()
        }
        else {
            while (stack.length > 0 && stack[stack.length - 1] !== '(' && priority[character] <= priority[stack[stack.length - 1]]) {
                output.push(stack.pop())
            }
            stack.push(character)
        }
    })
    while (stack.length > 0) {
        output.push(stack.pop())
    }
    console.log('stack after conversion: ', stack)
    return output.join(' ')
}

const testInput = ['8', '^', '2', '+', '6', '-', '2', '*', '10', '/', '2']
const postFixExpression = infixToPostfix(testInput)
console.log('testInput: ', testInput.join(' ')) 
console.log('postfix: ', postFixExpression)
const testInput2 = ['8', '(', '(', '^', '2']
const postfix2 = infixToPostfix(testInput2)
console.log(postfix2)


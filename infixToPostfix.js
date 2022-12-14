const operators = ['+', '-', '*', '/', '(', ')', '^']

const priority = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 }

function infixToPostfix(expression) {
    let open = 0
    let closed = 0
    const stack = []
    const output = []

    expression.forEach((character) => {
        if (!operators.includes(character)) {
            output.push(character)
        }
        else if (character === '(') {
            stack.push('(')
            open += 1
        }
        else if (character === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                output.push(stack.pop())
                closed += 1
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
    console.log('Parens: open, closed: ', open, closed)
    return output.join(' ')
}

const testInput = ['8', '^', '2', '+', '6', '-', '2', '*', '10', '/', '2']
const postFixExpression = infixToPostfix(testInput)
console.log('testInput: ', testInput.join(' ')) 
console.log('postfix: ', postFixExpression)

const testInput2 = ['1', '+', '(', '(', '2', '*', '8', ')']
const postFixExpression2 = infixToPostfix(testInput2)
console.log('testInput2: ', testInput2.join(' ')) 
console.log('postfix2: ', postFixExpression2)
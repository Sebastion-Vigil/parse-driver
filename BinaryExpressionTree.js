class Node {
    constructor(data) {
        this.data = data,
        this.left = null,
        this.right = null
    }
}


class BinaryExpressionTree {
    constructor() {
        this.stack = [],
        this.operations = {
            '^': (a, b) => a ** b,
            '*': (a, b) => a * b,
            '/': (a, b) => a / b,
            '+': (a, b) => a + b,
            '-': (a, b) => a - b
        } 
    }

    parse(expression) {
        expression.forEach((char) => {
            const node = new Node(char)
            if (!Object.keys(this.operations).includes(char)) {
                node.data = parseInt(node.data, 10)
                this.stack.push(node)
            } else {
                node.right = this.stack.pop()
                node.left = this.stack.pop()
                this.stack.push(node)
            }
        })    
    }

    operate(n1, o, n2)  { // operand in middle
        return this.operations[o](n1, n2) 
      }

    evaluate(root) {
        if (!root.data) { 
            return 0
        }
        if (!root.left && !root.right) {
            return root.data
        }
        const leftResult = this.evaluate(root.left)
        const rightResult = this.evaluate(root.right)
        return this.operate(leftResult, root.data, rightResult)
    }
    returnAnswer() {
        return this.evaluate(this.stack[0])
    }    
}


const input = ['8', '2', '^', '6', '+', '2', '10', '*', '2', '/', '-']
const testTree = new BinaryExpressionTree()
testTree.parse(input)
const answer = testTree.returnAnswer()
console.log('postfix input: ', input.join(' '))
console.log('answer: ', answer)

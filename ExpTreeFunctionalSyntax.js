

const expressionTree = {
    // need 2 determine tree ht if possible    
    stack: [],
    operations: {
            '^': (a, b) => a ** b,
            '*': (a, b) => a * b,
            '/': (a, b) => a / b,
            '+': (a, b) => a + b,
            '-': (a, b) => a - b
        },

    createNode(data) {
        const node = {
            data: data,
            left: null,
            right: null
        }
        return node
    },

    parse(expression) {
        expression.forEach((char) => {
            const newNode = this.createNode(char)
            if (!Object.keys(this.operations).includes(char)) {
                newNode.data = parseInt(newNode.data, 10)
                this.stack.push(newNode)
            } else {
                newNode.right = this.stack.pop()
                newNode.left = this.stack.pop()
                this.stack.push(newNode)
            }
        })
    },

    operate(n1, o, n2) {
        return this.operations[o](n1, n2)
    },

    evaluate(root) {
        if (!root.data) return 0
        if (!root.left && !root.right) return root.data
        const leftResult = this.evaluate(root.left)
        const rightResult = this.evaluate(root.right)
        return this.operate(leftResult, root.data, rightResult)
    },

    returnAnswer() {
        return this.evaluate(this.stack[0])
    }
}




const input = ['8', '2', '^', '6', '+', '2', '10', '*', '2', '/', '-']
expressionTree.parse(input)
const answer = expressionTree.returnAnswer()
console.log('Postfix input: ', input.join(' '))
console.log('answer: ', answer)
console.log(JSON.stringify(expressionTree.stack[0], null, 4))

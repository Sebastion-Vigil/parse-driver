

const expressionTree = {
    // need 2 determine tree ht if possible    
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
        const treeStack = []
        expression.forEach((char) => {
            const newNode = this.createNode(char)
            if (!Object.keys(this.operations).includes(char)) {
                newNode.data = parseInt(newNode.data, 10)
                treeStack.push(newNode)
            } else {
                newNode.right = treeStack.pop()
                newNode.left = treeStack.pop()
                treeStack.push(newNode)
            }
        })
        console.log('parsed input tree pre-evaluation: ')
        console.log(JSON.stringify(treeStack[0], null, 4))
        return treeStack[0]
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

    returnAnswer(input) { // postfix
        return this.evaluate(this.parse(input))
    }
}




const input = ['8', '2', '^', '6', '+', '2', '10', '*', '2', '/', '-']
const answer = expressionTree.returnAnswer(input)
console.log('Postfix input: ', input.join(' '))
console.log('answer: ', answer)
// 12  2  6-*
const input2 = ['12', '2', '6', '-', '*']
const answer2 = expressionTree.returnAnswer(input2)
console.log('Postfix input2: ', input2.join(' '))
console.log('answer2: ', answer2)
// 12  2 * 6-
const input3 = ['12', '2', '*', '6', '-']
const answer3 = expressionTree.returnAnswer(input3)
console.log('Postfix input3: ', input3.join(' '))
console.log('answer3: ', answer3)
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
        this.operators = ['+', '-', '*', '/', '(', ')', '^']
    }

    buildExpressionTree(expression) {
        expression.forEach((char) => {
            const node = new Node(char)
            if (!this.operators.includes(char)) {
                node.data = parseInt(node.data, 10)
                this.stack.push(node)
            } else {
                const r = this.stack.pop()
                const l = this.stack.pop()
                node.right = r
                node.left = l
                this.stack.push(node)
            }
        })    
    }

    operate(n1, o, n2)  { // operand in middle
        const operations = {
          '^': function (a, b) {
              return a ** b
          },
          '*': function (a, b) {
              return a * b
          },
          '/': function (a, b) {
              return a / b
          },
          '+': function (a, b) {
              return a + b
          },
          '-': function (a, b) {
              return a - b
          }
        } 
        return operations[o](n1, n2) 
      }

    evaluate(root) {
        if (!root.data) { // empty tree?
            return 0
        }
        if (!root.left && !root.right) {
            return root.data
        }
        let leftSum = this.evaluate(root.left)
        let rightSum = this.evaluate(root.right)
        return this.operate(leftSum, root.data, rightSum)
    }
}

const testTree = new BinaryExpressionTree()
testTree.buildExpressionTree(['8', '2', '^', '6', '+', '2', '10', '*', '2', '/', '-'])
const answer = testTree.evaluate(testTree.stack[0])
console.log('answer: ', answer)
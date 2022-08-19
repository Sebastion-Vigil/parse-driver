

class Queue {
    constructor() {
        this.storage = []
    }

    get length() {
        return this.storage.length
    }

    enqueue(x) {
        this.storage.push(x)
    }

    dequeque() {
        return this.storage.shift()
    }

    isEmpty() {
        return this.storage.length === 0
    }
}


class BinaryTree {
    constructor(v) {
        this.v = v
        this.left = null
        this.right = null
    }

    insert(v) {
        const newNode = new BinaryTree(v)
        if (v < this.v) {
            if (!this.left) {
                this.left = newNode
            } else {
                this.left.insert(v)
            }
        } else {
            if (!this.right) {
                this.right = newNode
            } else {
                this.right.insert(v)
            }
        }
    }
    
    contains(t) {
        if (this.v === t) {
            return true
        }
        if (this.left) {
            if (this.left.contains(t)) return true
        }
        if (this.right) {
            if (this.right.contains(t)) return true
        }
        return false
    }

    depthFirstSearch() {
        console.log(this.v)
        if (this.left !== null) {
            this.left.depthFirstSearch()
        }
        if (this.right !== null) {
            this.right.depthFirstSearch()
        }
    }

    breadthFirstSearch() {
        const q = new Queue 
        q.enqueue(this)

        while(!q.isEmpty) {
            const node = q.dequeque()
            console.log(node.v)
            if (node.left) {
                q.enqueue(node.left)
            }
            if (node.right) {console.log(tree)
                q.enqueue(node.right)
            }
        }
    }
}


const tree = new BinaryTree(8)
const test_nums = [1, 3, 4, 6, 7, 10, 14, 13]
test_nums.forEach((n) => {
    tree.insert(n)
})
tree.depthFirstSearch()
console.log(JSON.stringify(tree))
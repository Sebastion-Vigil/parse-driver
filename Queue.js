

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

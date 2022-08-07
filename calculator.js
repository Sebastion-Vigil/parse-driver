// P E M D A S
// user enters n/o/n/o 1 at a time
// think about that while building
// security -> make impossible to use device keyboard
// only strs are entered

const testInput = "8 ^ 2 + 6 - 2 * 10 / 2" // should return 60

const operandPairs = [
    ['^', '^'],
    ['*', '/'],
    ['+', '-']
]

const evaluate = (n1, o, n2) => { // operand in middle
  const evaluations = {
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
  return evaluations[o](n1, n2) 
}

let currentInput = testInput
let nextInput = ""

const scanInput = (input, oPair) => {
    arrayedInput = input.split(' ') 
    arrayedInput.forEach((x, i) => { // i -> will need to condense input str
        if (x === oPair[0] || x === oPair[1]) {
            console.log('found: ', x)
        } 
        else {
            nextInput += x
            if (i < arrayedInput.length - 1) {
                nextInput += " "
            }
        }
    })
    currentInput = nextInput.split(' ').join(' ')
    nextInput = ""    
}

console.log('currentInput: ', currentInput)
scanInput(currentInput, operandPairs[0])
console.log('currentInput: ', currentInput)
scanInput(currentInput, operandPairs[1])
console.log('currentInput: ', currentInput)
scanInput(currentInput, operandPairs[2])
console.log('currentInput: ', currentInput)
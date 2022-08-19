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

  const operandPairs = [
    ['^', '^'],
    ['*', '/'],
    ['+', '-']
]


const testInput = ['8', '^', '2', '+', '6', '-', '2', '*', '10', '/', '2']

for (let i = 1; i < testInput.length - 1; i+=2) {
    console.log(testInput[i])
}

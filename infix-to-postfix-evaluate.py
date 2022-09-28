# Takes user infix expression [tokens delimited by spaces]
# Converts infix to postfix
# Parses and evaluates expression
# Returns answer

def precedence(op): #determine operator precedence	
	if op == '+' or op == '-':
		return 1
	if op == '*' or op == '/':
		return 2
	if op == '^':
		return 3
	return 0

def applyOp(a, b, op): # math logic
	if op == '+': return a + b
	if op == '-': return a - b
	if op == '*': return a * b
	if op == '/': return a // b
	if op == '^': return a ** b

def evaluate(tokens): 
	print('Program begin with input of: ' + tokens)
	values = [] # integers
	ops = [] # operators
	i = 0
	
	while i < len(tokens):
		if tokens[i] == ' ': # skip if whitespace
			i += 1
			continue
		
		elif tokens[i] == '(': # push '(' to ops
			print("Opening '(' found. ")
			ops.append(tokens[i])
			print('ops: ', ops)
		
		elif tokens[i].isdigit(): # push Ns to values
			val = 0
			while (i < len(tokens) and # multiple digit check
				tokens[i].isdigit()): 
				val = (val * 10) + int(tokens[i])
				i += 1	
			values.append(val)
			print('Token is digit, pushing to values. ')
			print('values: ', values)
			# right now the i points to
			# the character next to the digit,
			# since the for loop also increases
			# the i, we would skip one
			# token position; we need to
			# decrease the value of i by 1 to
			# correct the offset.
			i-=1
			
		elif tokens[i] == ')': # solve expr within closing brace
			while len(ops) != 0 and ops[-1] != '(':	
				val2 = values.pop()
				val1 = values.pop()
				op = ops.pop()
				values.append(applyOp(val1, val2, op))
			ops.pop() # and then pop opening brace
		   
		else: # Apply operator on top of 'ops'
			while (len(ops) != 0 and    # While top of 'ops' has same or
				precedence(ops[-1]) >=  # greater precedence to current
				precedence(tokens[i])): # token, which is an operator.
				val2 = values.pop()     # current token operator 
				val1 = values.pop()     # to top two elements in values stack.
				op = ops.pop()
				values.append(applyOp(val1, val2, op))
			ops.append(tokens[i]) # Push current token to 'ops'.	
		i += 1
	print('Entire expression parsed at this point: ')
	print('Apply remaining ops to remaining values: ')
	while len(ops) != 0: # Entire expr parsed @ this point:
		print('values: ', values)
		val2 = values.pop() # apply remaining ops to remaining vals
		val1 = values.pop()
		print('val1, val2: ', val1, val2)
		print('ops before pop: ', ops)
		op = ops.pop()
		print('ops after pop: ', ops)
		print('values before pushing eval of val1, val2, and op: ', values)
		values.append(applyOp(val1, val2, op))
		print('Values after: ', values)
	return values[-1] # return the result at top of 'values'

# Driver Code
if __name__ == "__main__":
	
	# print(evaluate("8 ^ 2 + 6 - 2 * 10 / 2"))
	# print(evaluate("10 + 2 * 6"))
	# print(evaluate("100 * 2 + 12"))
	  print(evaluate("100 * ( 2 + 12 )"))
	# print(evaluate("100 * ( 2 + 12 ) / 14"))
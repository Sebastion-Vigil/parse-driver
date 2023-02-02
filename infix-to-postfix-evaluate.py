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
		print('Top of while i: ', i)
		if tokens[i] == ' ': # skip if whitespace
			i += 1
			continue
		
		elif tokens[i] == '(': # push '(' to ops
			print("Open '(' found. ")
			ops.append(tokens[i])
			print('ops: ', ops)
			print('i: ', i)
		
		elif tokens[i].isdigit(): # push Ns to values
			val = 0
			while (i < len(tokens) and # multiple digit check
				tokens[i].isdigit()):
				print('multi-digit: ', tokens[i])
				val = (val * 10) + int(tokens[i])
				i += 1	
			values.append(val)
			print('Token is digit, pushing to values: ', values)
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
				print("Closed ')' found. ")
				val2 = values.pop()
				val1 = values.pop()
				op = ops.pop()
				print('val1, val2, op: ', val1, val2, op)
				values.append(applyOp(val1, val2, op))
				print('Evaluates to: ', values[-1])
				print('values: ', values)
				print('ops: ', ops)
			ops.pop() # and then pop opening brace
		   
		else: # Apply operator on top of 'ops'
			# print(
			# 	"""
			# Apply operator on top of 'ops':
			# While top of 'ops' has same or greater precedence
			# to current token, which is an operator,
			# current token operator 
			# to top two elements in values stack.
			# 	"""
			#      )
			while (len(ops) != 0 and
				precedence(ops[-1]) >=
				precedence(tokens[i])):
				val2 = values.pop() 
				val1 = values.pop()
				op = ops.pop()
				print('val1, val2, op: ', val1, val2, op)
				values.append(applyOp(val1, val2, op))
				print('Evaluates to: ', values[-1])
				print('values: ', values)
				print('ops: ', ops)
			ops.append(tokens[i]) # Push current token to 'ops'.
			print('Token is operator, pushing to ops: ', ops)
		i += 1
	print('Entire expression parsed at this point: ')
	print('Apply remaining ops to remaining values: ')
	while len(ops) != 0: # Entire expr parsed @ this point:
		print('values: ', values)
		val2 = values.pop() # apply remaining ops to remaining vals
		val1 = values.pop()
		op = ops.pop()
		print('val1, val2, op: ', val1, val2, op)
		print('values before pushing eval of val1, val2, and op: ', values)
		values.append(applyOp(val1, val2, op))
		print('Evaluates to: ', values[-1])
		print('Values after: ', values)
		print('ops after pop: ', ops)
	return values[-1] # return the result at top of 'values'

# Driver Code
if __name__ == "__main__":
	
	# print(evaluate("8 ^ 2 + 6 - 2 * 10 / 2"))
	# print(evaluate("10 + 2 * 6"))
	# print(evaluate("100 * 2 + 12"))
	  print(evaluate("100 * ( 2 + 12 )"))
	# print(evaluate("100 * ( 2 + 12 ) / 14"))

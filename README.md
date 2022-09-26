# parse-driver
calculator

## We Now Have Code That: ##
#### (Successfully converted from class to functional/(object/prototypal?) syntax) ####
  - converts user infix input to postfix 
  - takes postfix and parses expression tree 
  - evaluates expression tree and returns answer

#### Must Now Detect Invalid User Input ####
Support two states, ExpectOperand and ExpectOperator.

    Set State to ExpectOperand
    While there are tokens to read:
        If token is a constant (number)
            Error if state is not ExpectOperand.
            Push token to output queue.
            Set state to ExpectOperator.
        If token is a variable.
            Error if state is not ExpectOperand.
            Push token to output queue.
            Set state to ExpectOperator.
        If token is an argument separator (a comma).
            Error if state is not ExpectOperator.
            Until the top of the operator stack is a left parenthesis  (don't pop the left parenthesis).
                Push the top token of the stack to the output queue.
                If no left parenthesis is encountered then error.  Either the separator was misplaced or the parentheses were mismatched.
            Set state to ExpectOperand.
        If token is a unary operator.
            Error if the state is not ExpectOperand.
            Push the token to the operator stack.
            Set the state to ExpectOperand.
        If the token is a binary operator.
            Error if the state is not ExpectOperator.
            While there is an operator token at the top of the operator stack and either the current token is left-associative and of lower 
            then or equal precedence to the operator on the stack, or the current token is right associative and of lower precedence than 
            the operator on the stack.
                Pop the operator from the operator stack and push it onto the output queue.
            Push the current operator onto the operator stack.
            Set the state to ExpectOperand. 
        If the token is a Function.
            Error if the state is not ExpectOperand.  
            Push the token onto the operator stack.
            Set the state to ExpectOperand.
        If the token is a open parentheses.
            Error if the state is not ExpectOperand.
            Push the token onto the operator stack.
            Set the state to ExpectOperand.
        If the token is a close parentheses.
             Error if the state is not ExpectOperator.
             Until the token at the top of the operator stack is a left parenthesis.
                Pop the token off of the operator stack and push it onto the output queue.
             Pop the left parenthesis off of the operator stack and discard.
             If the token at the top of the operator stack is a function then pop it and push it onto the output queue.
             Set the state to ExpectOperator.
    At this point you have processed all the input tokens.
    While there are tokens on the operator stack.
        Pop the next token from the operator stack and push it onto the output queue.
        If a parenthesis is encountered then error.  There are mismatched parenthesis.
                 
You can easily differentiate between unary and binary operators (I'm specifically speaking about the negative prefix and subtraction operator) by looking at the previous token.  If there is no previous token, the previous token is an open parenthesis, or the previous token is an operator then you have encountered a unary prefix operator, else you have encountered the binary operator.

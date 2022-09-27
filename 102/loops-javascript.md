# Loops  

**While and For**:

## For final repelit node.js*

Objective: 
*implement for and while loops to accomplish meaningful tasks in their code.

**Loops**  
    -offer an easy way to do something repeatedly. 
There are many loops and each of them do essentially the same

- They repeat an action a certain number of times Focus only on for statement and while statement loops.  

## For loops  

A **for** statement looks as follows:
for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement:  

When a **for loop** is executed the following occurs  

    1. Initial value, - This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.  

    2. Condition- 	The conditionExpression expression is evaluated. If the value of conditionExpression is true, the loop statements execute. Otherwise, the for loop terminates. (If the conditionExpression expression is omitted entirely, the condition is assumed to be true.).   
    3. The statement executes.  
    4. If present, the update expression incrementExpression is executed.  
    5.Control returns to Step 2.


## While Statements -  

executes its statements as long as a specified condition evaluates to true.
  The structure is as follows:  

			while  (condition)
  				statement  

-   If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.

-   The condition test occurs before statement in the loop is executed.   
If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops, and control is passed to the statement following while.  
-   To execute multiple statements, use a block statement ({ }) to group those statements.

An example:  
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}

The above **iterates** as long as (n) is less than 3 

With each iteration, the loop increments n and adds that value to x. Therefore, x and n take on the following values:

* After the first pass: n = 1 and x = 1  

* After the second pass: n = 2 and x = 3

* After the third pass: n = 3 and x = 6
After completing the third pass, the condition n < 3 is no longer true, so the loop terminates.

## Comparison operators -  

A comparison operator compares its operands and returns a logical value based on whether the comparison is true. The operands can be numerical, string, logical, or object values.  

In most cases, if the two operands are not of the same type, JavaScript attempts to convert them to an appropriate type for the comparison. This behavior generally results in comparing the operands numerically.  
The sole exceptions to type conversion within comparisons involve the === and !== operators, which perform strict equality and inequality comparisons. These operators do not attempt to convert the operands to compatible types before checking equality.

## Comparison operators Examples

Operator Description Examples  
 returning true Equal (==) Returns true if the operands are equal.  
 3 == var1
 "3" == var1
 3 == '3'  

Not equal (!=)Returns true if the operands are not equal. var1 != 4
var2 != "3"  

Strict equal (===)Returns true if the operands are equal and of the same type. See also Object.is and sameness in JS.3 === var1  

Strict not equal (!==) Returns true if the operands are of the same type but not equal, or are of different type. var1 !== "3"
3 !== '3'  

Greater than (>)Returns true if the left operand is greater than the right operand.var2 > var1
"12" > 2  

Greater than or equal (>=)	Returns true if the left operand is greater than or equal to the right operand.	var2 >= var1  

var1 >= 3
Less than (<)	Returns true if the left operand is less than the right operand.	var1 < var2
"2" < 12  

Less than or equal (<=)	Returns true if the left operand is less than or equal to the right operand.	var1 <= var2
var2 <= 5  

***Note: => is not a comparison operator but rather is the notation for Arrow functions***.  

## Assignment operators- 

An assignment operator assigns a value to its left operand based on the value of its right operand. The simple assignment operator is equal (=), which assigns the value of its right operand to its left operand. That is, x = f() is an assignment expression that assigns the value of f() to x.

- Assigning properties - If an expression evaluates to an object, then the left-hand side of an assignment expression may make assignments to properties of that expression. If an expression does not evaluate to an object, then assignments to properties of that expression do not assign. 

***Best practices avoid assignment chains and nesting***  

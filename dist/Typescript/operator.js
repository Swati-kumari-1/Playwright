//1. addition or concatenation operator
let num1 = 10;
let num2 = 20;
console.log(num1 + num2); //30
//2. subtraction operator-returns the difference between two numbers
console.log(num1 - num2); //-10
//3. multiplication operator-returns the product of two numbers
console.log(num1 * num2); //200
//4. division operator-returns the quotient of two numbers
console.log(num1 / num2); //0.5
//5. modulus operator-returns the remainder after division of one number by another
console.log(num1 % num2); //10
// 6. Exponential operator-returns the result of
//  raising a number to a power
console.log(num1 ** num2); //10000000000
//7. Increment operator-returns the value of a variable after incrementing it by 1
num1++;
console.log(num1); //11
//8. Pre-increment operator-1st value of a variable will
//get increment and then the action will be performed
++num1;
console.log(num1); //12
//9. Post-increment operator-returns the value of a 
// variable before incrementing it by 1, 1st increase the value and the
//action will be performed after the value is increased
console.log(num1++); //12
//10. Decrement operator-returns the value of a
//  variable after decrementing it by 1
console.log(num1--); //12
console.log(num1); //11 
//Pre-decrement operator-1st value of a variable will get decremented and then the action will be performed
console.log(--num1); //10
console.log(num1); //10
//Post-decrement operator-returns the value of a variable before decrementing it by 1, 1st decrease the value and the action will be performed after the value is decreased
console.log(num1--); // 10-1=9 
console.log(num1); //9   
//Comparison operator- allows us to evaluate multiple expressions 
// and return the value of the last expression in form 
//of true or false or 0 or 1
// 1. Equal to operator(==)-returns true if the operands are equal, 
// otherwise returns false
let num3 = 2;
let num4 = "abc";
console.log(num1 == num2); //false
//Type coercion- when we compare two values of different types,
// // implicuitly converts  JavaScript will try to convert one
//  of the values to the same type as the other value before making 
// //the comparison
//2. Not equal to operator(!=)-returns true if the
//  operands are not equal
//3. Strict equal to operator(===)-returns true if 
// the operands are equal and of the same type, otherwise 
// returns false
let num5 = 2;
let num6 = "2";
//console.log(num5===num6)   //false
//4. Strict not equal to operator(!===)-returns true if 
// the operands are not equal or not of the same type,
//  otherwise returns false
//console.log(num5!==num6) //true 
//5. Greater than operator(>)-returns true 
// if the left operand is greater than the right operand, 
// otherwise returns false
//6.Greater than or equal to operator(>=)-returns true 
// if the left operand is greater than or equal to 
//  the right operand, otherwise returns false
//7. Less than operator(<)-returns true if the 
// left operand is less than the right operand, otherwise returns false
//8. Less than or equal to operator(<=)-returns
//  true if the left operand is less than or equal to 
// the right operand, otherwise returns false
//Logical operators- allows us to combine multiple expressions
//1. Logical AND operator(&&)-returns true if both operands 
//  are true, otherwise returns false
let isAdult = true;
let hasID = true;
console.log(isAdult && hasID); //true
console.log(10 > 5 && 5 > 3); //true
console.log;
//2. Logical OR operator(||)-returns true if at least 
// one of the operands is true, otherwise returns false
let isStudent = true;
let isEmployed = false;
console.log(isStudent || isEmployed); //true
//3. Logical NOT operator(!)-returns true if 
// the operand is false, otherwise returns false
console.log(!isStudent); //false
console.log(!isEmployed); //true 
console.log(!isAdult); //false
export {};

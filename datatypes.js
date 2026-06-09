let num1 = 90.45;
let num2 = 45;
//type of operator is used to find the type of variable
console.log(typeof num1);
console.log(typeof num2);
//what is difference between var, let and const
//var is function scoped and can be re-declared and updated
//let is block scoped and can be updated but not re-declared
//const is block scoped and cannot be updated or re-declared
//STRING DATA TYPE- sequence of characters enclosed in single or double quotes
//1.single quotes
let str1 = 'Hello, TypeScript!';
//2.double quotes
let str2 = "Welcome to TypeScript!";
//3.template literals
let name = "John";
//Backticks are used to create template literals which 
// can contain placeholders for variables and expressions
// 1.Multiline strings-using backticks we can create multiline strings without using escape characters
//for string parameterization-calling a vairiable inside
//  a string using ${variable name}
let str3 = `My name is ${name} and I am learning TypeScript.`;
console.log(str1);
console.log(str2);
console.log(str3);
let age = 30;
let message = `Your age is ${age}`;
console.log(message);
//3. Boolean data type- represents a logical value that
//  can be either true or false
let isStudent = true;
let isEmployed = false;
console.log(isStudent);
console.log(isEmployed);
//Null and Undefined data types
//Null represents the intentional absence of any object value
let nullValue = null;
//Undefined represents a variable that has been declared 
//  but has not been assigned a value
let undefinedValue = undefined;
console.log(nullValue);
console.log(undefinedValue);
//5. Undefined and Null are subtypes of all other types in TypeScript
//  which means that they can be assigned to variables of any type
let num3 = undefined;
let num4;
let num5 = 50;
//Any data type- represents any value and 
// can be assigned to any variable
let anyValue = 42;
anyValue = "Now I'm a string";
console.log(anyValue);
//6. Void data type- represents the absence of any value and is
//  typically used as the return type of functions that 
// do not return a value
function greet() {
    console.log("Hello, World!");
}
//7. Union data type- represents a value that can be one of several
//  types. It is denoted by the pipe (|) symbol
let unionValue;
unionValue = 42;
console.log(unionValue);
unionValue = "Now I'm a string";
console.log(unionValue);
export {};

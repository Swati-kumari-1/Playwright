//Function- IT is a block of code that performs a specific task. 
// 
//fill the user name
// fill the pass
// click on login button
// 
//
/* function(){

}

//Named function/function declaration- it has a name and can be
// called by its name
//Anonymous function- it does not have a name and is often used as
//a callback function or assigned to a variable
//Arrow function/Lamda function(ES6(2015)- it is a shorter syntax for writing functions and
// does not have its own this keyword
//Constructor function- it is used to create objects and is
//  called using the new keyword

// 1. Named function/function declaration

     //parameterised function,non returning function

     function greet(){
    console.log("Hello, TypeScript!")
     } */
//NON parameterised function, non returning function
function add(a, b) {
    const result = a + b;
    return result;
}
const result = add(5, 10);
{
    console.log(result);
}
//Anonymous function/function expression- it does not have a name and is often used as
//a callback function or assigned to a variable
//callback function- it is a function that is passed 
// as an argument to another function and is 
// executed after a certain event or condition is met
//Syntax
let message = function (name, age) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
};
message("Playwright", 5);
message("TypeScript", 10);
// Arrow function/Lamda function(ES6(2015)- it is a shorter syntax for
//  writing functions and
// does not have its own this keyword 
let message1 = (name, age) => {
    console.log(`Hello, ${name}! You are ${age} years old.`);
};
message1("Joe", 28);
//Default parameter & optional parameter-Interview question
//Default parameter- it is a parameter that has a default value if no value is provided when the function is called
//Optional parameter- it is a parameter that may or may not be provided when the function is called 
//Method overloading- it is a feature that allows a class
// to have multiple methods with the same name but different parameters
function sum2(a, b = 50) {
    console.log(a + b);
}
sum2(10);
sum2(10, 60);
//optional parameter- it is a parameter that may or may not be
//  provided when the function is called
function display(name, age) {
    console.log(name, age);
}
display("Priya");
display("Raj", 20);
// Assignment -3
//Display name if age parameter is not provided and
//  display name and age 
// if age parameter is provided
function display1(name, age) {
    if (age !== undefined) {
        console.log(`Name: ${name}, Age: ${age}`);
    }
    else {
        console.log(`Name: ${name}`);
    }
}
display1("Smith");
display1("Smith", 30);
export {};

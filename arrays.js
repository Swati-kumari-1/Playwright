//Non-primitive data types- store collections of values and 
// more complex entities. They include arrays, tuples, enums, and objects.
//1. Arrays- it is a collection of elements of the same type and is
//2. Arrays is an ordered list of values that can be of
//  any type, including primitive types, objects, and even
//  other arrays.
//Arrays start with 0 index
//Arrays is dynamic in nature, which means that we can add or 
// remove elements from an array at runtime.
let arr = [10];
console.log(typeof arr);
let array = [1, "Java", 2, true, null, undefined, 30, 40];
console.log(array);
console.log(array[0]);
console.log(array[1]);
//Using array literal syntax
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
//Using generic array type
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);
//Using array constructor-
let colors = new Array("Red", "Green", "Blue");
console.log(colors);
console.log(colors[0]);
let arr1 = [20, 30, 40, 60, "Ram", "Banana"];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}
//for of loop- it is used to iterate over the elements of an
//  array and
let arr3 = [10, 20, 30, 40, 50, "Pink", "Yellow", "Green"];
for (let element of arr3) {
    console.log(element);
}
console.log("-----------------Method of an array--------------");
//.Push()- it is used to add an element at the end of an array and
// returns the new length of the array
//Pop()- it is used to remove the last element from an array and
// returns the removed element
//what is difference push() and unshift() method of an array?
//what is difference between pop() and shift() method of an array?
//slice(),splice(),indexOf(),lastIndexOf(),includes(),join(),
//  concat(),reverse(),sort() methods of an array
//splice()- it is used to add or remove elements from an array and
// returns the removed elements as an array
//splice(start, deleteCount, item1, item2, ...)
//start- it is the index at which to start changing the array
//deleteCount- it is the number of elements to remove from the array
//item1, item2, ...- it is the elements to add to the array
let arr4 = [10, 20, 30, 30, "TS", 50, 60];
console.log(arr4);
arr4.splice(2, 1, "JavaScript");
console.log(arr4);
//slice()- it is used to extract a portion of an array and returns
// a new array containing the extracted elements
//slice(start, end)
console.log(arr4.slice(2, 5)); //from index 2 to index 4
//IndexOf()- it is used to find the index of the first occurrence of
// an element in an array and returns the index of the element if
// found, otherwise it returns -1   
console.log(arr4.indexOf(30)); //index of first occurrence of 30
console.log(arr4.lastIndexOf(30)); //index of last occurrence of 30
console.log(arr4.includes(30)); //true
console.log(arr4.includes(100)); //false
//Assigment- 
//to find out all of the index of 10 available in the array-0,6,8
//lastIndexOf()- it is used to find the index of the last occurrence
//  of
// an element in an array and returns the index of the element if
// found, otherwise it returns -1
let num1= [1,2,10,5,6,8,20,30,10,20,24]
let numtobefind=10;
let target= []
for(let i=0;i<num1.length;i++){
   if(num1[i]==numtobefind){
    target.push(i)
   }
}
console.log(`The index of ${numtobefind} in the array is ` +target)




console.log(arr4.lastIndexOf(30, 50)); //index of last occurrence of 10
//includes()- it is used to check if an element is present 
// in an array
console.log(arr4.includes(30)); //true
console.log(arr4.includes(100)); //false
//join(separator)- it is used to join the elements of an array into a
// string and returns the resulting string
let arr5 = [19, 9, 1985];
console.log(arr5.join("-")); //19-9-1985
//tostring()- it is used to convert an array to a string and returns the
// resulting string
console.log(arr5.toString()); //19,9,1985
//concat()- it is used to merge two or more arrays and returns a new
// array containing the merged elements
let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
console.log(arr6.concat(arr7)); //1,2,3,4,5,6    
export {};
//string
//object & class-framework generation
//github
//playwright

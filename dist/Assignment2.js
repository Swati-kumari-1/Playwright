//1.Find sum of first 25 number
function sumOfFirst25Numbers() {
    let sum = 0;
    for (let i = 1; i <= 25; i++) {
        sum = sum + i;
    }
    return sum;
}
const sum = sumOfFirst25Numbers();
console.log("The sum of the first 25 numbers is:", sum);
console.log("\n");
//2.Count digit in a number. Example - 12345 output - 5
function countDigits(num) {
    const numStr = num.toString();
    return numStr.length;
}
const number = 12345;
const digitCount = countDigits(number);
console.log(`The number of digits in ${number} is: ${digitCount}`);
//3. Generate a multiplication table for 5, like 5 *1 =5, 5 *2 = 10,.....
const number1 = 5;
for (let i = 1; i <= 10; i++) {
    const result = number1 * i;
    console.log(`${number} * ${i} = ${result}`);
    console.log("\n");
}
// 4. Print the star pyramid:
const pattern = [1, 2, 1, 2, 2];
for (let i = 0; i < pattern.length; i++) {
    let stars = '';
    for (let j = 0; j < pattern[i]; j++) {
        stars += '*';
    }
    console.log(stars);
}
export {};

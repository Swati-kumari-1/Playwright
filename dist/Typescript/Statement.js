//conditional statement- execute a block of code if a 
// specified condition is true
let admin = 'admin';
if (admin == "admin") {
    console.log("Welcome, admin!");
}
else {
    console.log("Access denied. You are not an admin.");
}
//Write a prgram to display the grade of student
//90> -A
//>80 && <90-B
//>70 && <80-C
//>50 && <70-D
//<50-failed
const marks = 85;
let grade;
if (marks > 90) {
    grade = "A";
}
else if (marks > 80 && marks <= 90) {
    grade = "B";
}
else if (marks > 70 && marks <= 80) {
    grade = "C";
}
else if (marks > 50 && marks <= 70) {
    grade = "D";
}
else {
    grade = "Failed";
}
console.log(`Studentgrade is: ${grade}`);
// For loop- used to execute a block of code a specified number of times
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
export {};

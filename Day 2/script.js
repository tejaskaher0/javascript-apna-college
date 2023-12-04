
// This code prints Hello World!
console.log("Hello World ❤️");
// This is a single line comment

/* This is a multi line 
comment */


// Arithematic Operators
let a = 5;
let b = 2;

console.log("a = ", a, " b = ", b);     // Addition
console.log("a + b = ", a + b);     // Addition
console.log("a - b = ", a - b);     // Substraction
console.log("a * b = ", a * b);     // Multiplication
console.log("a / b = ", a / b);     // Division
console.log("a % b = ", a % b);     // Modulo
console.log("a ** b = ", a ** b);   // Exponential
console.log("a++ = ", a++);       // Post-Increament
console.log("++a = ", ++a);       // Pre-Increament
console.log("a-- = ", a--);       // Post-Decreament
console.log("--a = ", --a);       // Pre-Increament


// Excels
// Columns = BigInt(16384);
// Rows = BigInt(1048576);





/* 
    a+=4 : a=a+4
    a-=9 : a=a-9
    a*=9 : a=a*9
    a/=9 : a=a/9
    a**=3 : a=a**3
*/



/*
    == to compare two numbers if they are equal
    != to compare two number if they are not equal
*/


// Comparison Operators
let aa = 5;
let bb = 2;
console.log("5 == 2", aa == bb);
console.log("5 != 2", aa != bb);
console.log("5 === 2", aa === bb);
console.log("5 !== 2", aa !== bb);


let aaa = 5;    // number
let bbb = "5";  // string ->number
console.log('5 == "5"', aaa == bbb); //true
//      < , > , <= , >=




// Logical Operators

a = true;
b = false;

console.log("A && B = ", a && b);   //And
console.log("A || B = ", a || b);   //Or
console.log("A! ", !a);             //Not (Opposite)



let mode = "dark-mode";
let color;
if (mode === "dark-mode") {
    color = "black";
}
console.log("Black");

mode = "light";
if (mode === "light") {
    color = "white";
}
console.log("White");



// Conditional Statements 

let age = 52;
if (age >= 18) {
    console.log("You Can Vote");
}


age = 12;
if (age < 18) {
    console.log("You Cannot Vote");
}


if (age >= 18) {
    console.log("vote");
} else {
    console.log("Cannot vote");
}


let num = 10;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}




let num1 = 10;
if (num % 2 === 0) {
    console.log("Even");
} else if (num1 % 2 != 0) {
    console.log("Odd");
}




if (mode === "dark") {
    color = "black";
} else if (mode === "blue") {
    color = "blue";
} else if (mode === "pink") {
    color = "pink";
} else {
    color = "none";
}


if (mode === "dark") console.log(mode = "Black");



// Ternary Operators

// a ? b : c

let result = age > 18 ? "Adult" : "Not Adult";
console.log(result);


age > 18 ? console.log("Adult") : console.log("Not Adult");



//  MDN DOCS





alert("Hello!");                // One Time Pop Up
let name2 = prompt("Hello!");   // 
console.log(name2);


let num2 = prompt("Enter a number: ");
if (num2 % 5 === 0) {
    console.log("Given Number is in 5th Table");
} else {
    console.log("Given Number is not in 5th Table");
}


let grade;
let marks = prompt("Enter Marks Obtained By Student (0-100): ");
if (marks <= 100 && marks > 80){
    grade = "A";
} else if (marks <= 80 && marks > 70){
    grade = "B";
} else if (marks <= 70 && marks > 60){
    grade = "C";
} else if (marks <= 60 && marks > 50){
    grade = "D";
} else if (marks <= 50 && marks >= 0){
    grade = "F";
}
console.log("Your Grade Is: ",grade);






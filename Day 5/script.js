// Fuctions and Methods

// function functionName() {
//     Block of Code
// }


function myFunction(msg) {
    console.log("Welcome My Boy Welcome!");
    console.log("Here you will learn JS :)");
    console.log(msg);
}

myFunction("Hello");    // Argument


function sum(x, y) {
    console.log(x + y);
}

sum(120, 39);


function sum2(x, y) {
    // local variables -> scope
    s = x + y;
    console.log("Before Return");
    return s;
    console.log("After Return");
}

let val = sum2(120, 39);
console.log(val);

// console.log(x);

// function parameter means local variables of function. They have only block of Scope.



// Sum Function
function sum(a, b) {
    return a + b;
}

// Multiplication Function
function mul(a, b) {
    return a * b;
}



// Syntax Of Arrow Function
// const functionName = (parameter1, parameter2,...) => {
//     Do Some Work
// }

// Example
const sum4 = (a, b) => {
    return a + b;
}



const arrowSum = (a, b) => {
    console.log(a + b);
}
arrowSum(3, 4);


const arrowMul = (x, y) => {
    console.log(x * y);
    // return x * y;
}
arrowMul(4, 7);



const printHello = () => {
    console.log("Hello World");
}

let count = 0;
function countVowels(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U") {
            count++;
        }
    }
    return count;
}
countVowels("Hello World");


function countVowels2(str) {
    let count = 0;
    for (const char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }
    }

    console.log(count);
    // return count;
}

countVowels2("apna college");


const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }
    }

    console.log(count);
    // return count;
}


countVow("Hii");



// forEach Loop in Array

let arr = [1, 2, 3, 4, 5, 6];

arr.forEach(function printVal(val) {
    console.log(val);
});


let arr2 = ["Hello", "HII", "Tejas", "Aher"];
arr2.forEach((val) => {
    console.log(val);
});



arr2.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});


// The functions which are used in another function as an argument they are called higher order function/methods.

let arrNum = [1, 2, 3, 4, 5, 6, 7];

arrNum.forEach((val) => {
    console.log(val * val); // val ** 2
});


let nums = [67, 52, 39];
let calcSquare = (num) => {
    console.log(num * num);
};
nums.forEach(calcSquare);



let nums2 = [67, 52, 39];

let newArr = nums2.map((val) => {
    return val;
});

console.log(newArr);



let newArr2 = arrNum.filter((val) => {
    return val % 2 === 0;
});

console.log(newArr2);



let array1 = [1, 2, 3, 4, 5, 6, 7];

let output = array1.reduce((res, curr) => {
    return res + curr;
});

console.log(output);


output = array1.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});

console.log(output);


let output2 = array1.reduce((prev, curr) => {
    return prev < curr ? prev : curr;
});

console.log(output2);




// Practice Question

let marks = [97, 64, 32, 57, 39, 56];

let toppersArr = marks.filter((val) => {
    return val > 90;
});

console.log(toppersArr);


let n = prompt("Enter value of n = ");
let af = [];

for (let i = 1; i <= n; i++) {
    af[i - 1] = i;
}

console.log(af);

let sum9 = af.reduce((res, curr) => {
    return res + curr;
});

console.log("Sum = ", sum9);



let factorial = af.reduce((pre, cur) => {
    return pre * cur;
});
console.log("Factorial = ", factorial);




for (let count = 1; count <= 105; count++) {
    console.log("Hii World!");  // Print 105 Times
}
console.log("Loop Has Ended");



let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
// 0 + 1 + 2 + 3 + 4 + 5 = 15
console.log("Sum: ", sum);



for (let i = 1; i <= 5; i++) {
    console.log("i = ", i);
}



/*
for ( let i = 1; i<=0 ; i++) {
    console.log("i = ", i);
}
*/


let k = 1;
while (k <= 5) {
    console.log("k = ", k);
    k++;
}


let j = 20;
do {
    console.log("j = ", j);
    j++;
} while (j <= 10);


let n = 1;
do {
    console.log("n = ", n);
    n++;
} while (n <= 10);


// for-of loop
let str = "JavaScript";
let size = 0;


for (let val of str) {
    console.log("val = ", val);
    size++;
}
console.log("String Size: ", size);



let student = {
    fullname: "Tejas Aher",
    age: 21,
    cgpa: 7.88,
    isPass: true,
    city: "Nashik"
};

for (let key in student) {
    console.log("Key = ", key, "Value = ", student.key);
}

// Practice Q.1
for (let t = 0; t <= 100; t++) {
    console.log("1-100 : ", t);
}


for (let t = 0; t <= 100; t++) {
    if (t % 2 == 0) {
        // even numbers
        console.log("1-100 : ", t);
    }
}


for (let t = 0; t <= 100; t++) {
    if (t % 2 != 0) {
        // odd numbers
        console.log("1-100 : ", t);
    }
}




// Practice Q.2
let gameNum = 20;

let userNum = prompt("Guess The Game Number : ");

while (userNum != gameNum) {
    userNum = prompt("You Entered Wrong Number. Guess Again : ");
}
console.log("Congratulations, You Entered The Right Number");



// Strings
let str2 = "Hello There";
let str3 = 'Tejas Here';

console.log(str2.length);
console.log(str2[8]);


// Template Literals
let specialString = `This is a special string`;
console.log(specialString);


let obj = {
    item: "pen",
    price: 100
};
let output = `The cost of ${obj.item} is ${obj.price} rupees.`
console.log(output);
console.log("The cost of ", obj.item, " is ", obj.price," rupees.");


output = `The cost of ${obj.item} is ${1+2+3+4} rupees.`
console.log(output);



console.log("Apna\nCollege");
console.log("Apna\tCollege");


let str4 = "   Apna College   ";
console.log(str4.length);


str4 = str4.toUpperCase();
console.log(str4);


str4 = str4.toLowerCase();
console.log(str4);


str4 = str4.trim();
console.log(str4);


str4 = str4.slice(0,5);
console.log(str4);


let str5 = "Apna";
let str6 = "College";
let res =  str5.concat(str6);
console.log(res);


res = str5 + str6 + str2;
console.log(res);


str5 = str5.replace("na", "no");
console.log(str5);


str5 = str5.replaceAll("na", "no");
console.log(str5);


let stp = "ILoveJS";
console.log(str.charAt(3));


let dp = "ILoveJS";
dp[0] = "S";        // It does not affect original string because strings are immutable
console.log(dp);


// Practice Question
let show = prompt("Enter your full name without spaces : ");
show = show.trim();
let numb = show.length;
let userName = "@" + show + numb ;
console.log(userName);


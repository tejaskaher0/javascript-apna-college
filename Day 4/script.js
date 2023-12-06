// Arrays

let hero = ["Ironman", "Hulk", "Thor", "Batman"];

let stu1 = 94;
let stu2 = 86;
let stu3 = 79;

let std = {
    stu1: 92,
    stu2: 84,
    stu3: 79
};

let info = ["Rahul", "Niwane", 21];
let marks = [97, 12, 87, 39, 96, 84];
console.log(marks);
console.log(marks.length);  // Property
console.log(marks[2]);

let names = ["Tejas", "Pranav", "Kartik", "Zaid", "Shreyash"];

// Strings --> Immutable
// Arrays  --> Mutable
// marks[3] = 69;

// for(let idx=0; idx<arr.length; idx++){
//     console.log(arr[idx]);
//     statements;
// };


// for of
for (let el of hero) {
    console.log(el);
};


let cities = ["Delhi", "Hydrabad", "Mumbai", "Pune", "Nashik"];

for (const city of cities) {
    console.log(city);
};


// Practice Question 1
let sum = 0;
marks = [85, 97, 44, 37, 76, 60];
for (let s of marks) {
    sum += s;
};
let avg = sum / marks.length;
console.log(`Average Marks of The Class = ${avg}`);



// Practice Question 2
let currentPrice = [250, 645, 300, 900, 50];
for (const nw of currentPrice) {
    let disc = nw * 0.10;
    let price = nw - disc;
    console.log(price);
};



let items = [250, 645, 300, 900, 50];
let i = 0;
for (const val of items) {
    let offer = val / 10;
    items[i] -= offer;
    console.log(`Value after Offer = ${items[i]}`);
    i++;
};




for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;

};
console.log(items);



let foodItems = ['apple', 'litchi', 'Pine-Apple', 'Paneer', 'Burger'];
foodItems.push('chips', 'pizza', 'Mango');
console.log(foodItems);


let foodItem = ['apple', 'litchi', 'Pine-Apple', 'Paneer', 'Burger'];
console.log(foodItem);
foodItem.pop();
console.log(foodItem);
console.log(foodItem.toString());


let marvelHeroes = ["Thor", "Spider-Man", "Hela", "Thanos", "Iron-Man"];
let dcHeroes = ["Super-Man", "Aqua-Man", "Bat-Man", "Flash"];
let indianHeroes = ["Shakti-Man", "Krish", "Flying-Jutt"];
let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
console.log(heroes);


marvelHeroes = ["Thor", "Spider-Man", "Hela", "Thanos", "Iron-Man"];
marvelHeroes.unshift("Ant-Man");


marvelHeroes = ["Thor", "Spider-Man", "Hela", "Thanos", "Iron-Man"];
let val = marvelHeroes.shift();
console.log("Deleted", val);



marvelHeroes = ["Thor", "Spider-Man", "Hela", "Thanos", "Iron-Man", "Dr. Strange"];
console.log(marvelHeroes.slice(1, 3));


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.splice(2, 1, 101, 102);
console.log(arr);


// Add Element
// arr.splice(2, 0, 101);

// Delete Element
// arr.splice(3,1);

// Replace Element
// arr.splice(3, 1, 101);



// Practice Question
let comp = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
comp.splice(0, 1);
// comp.shift();
console.log(comp);


comp = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
comp.splice(2, 1, "Ola");
console.log(comp);


comp = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
comp.splice(comp.length, 0, "Amazon");
// comp.push("Amazon");
console.log(comp);



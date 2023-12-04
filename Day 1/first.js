console.log("Hello World!");
console.log("I Love Animal Movie");
alert("Hello, Hello, Hello!");


Name = "Tony Stark";
age = 34;
f_value = 199.999;
radius = 22/7;
x = null;
y = undefined;
isFollow = true;
isFollow = false;
console.log(Name,age,f_value,x,y,radius,isFollow);



Name = "Tony Stark";
namee = "Tony Stark";
_Name = "Tony Stark";
$Name = "Tony Stark";



// var can redeclare values n number of times & they have global scope
// let can only declare one time variable but also can update the value of existing variable & they have block scope
// const is a fixed value variable which cannot be updated or redefined & they have block scope



const profile = {
    username: "@tejas__aher",
    isFollow: true,
    isMessage: false,
    followers: 289,
    following: 313,
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veritatis vitae incidunt voluptatibus beatae nemo ipsam ullam, molestias cum natus voluptatem, fugiat, nisi magnam asperiores commodi! Cum, in saepe. Veritatis, quas deleniti."
}



console.log(typeof profile.followers);
console.log(typeof profile["followers"]);

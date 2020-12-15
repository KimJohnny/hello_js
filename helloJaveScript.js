// Hello JS

console.log('Im working. Im JS.');
console.log("hello JS")

// Variable; let, const, Var

let a = 221;
let b = a - 10;
a=5;
console.log(b);
console.log(a);

let a = 221;
let b = a-1;
// a=4; const변수는 바꿀 수 없다.
console.log(b,a);

var a = 221;
var b = 1;
a=1;
console.log(b,a);


// Data Types

// string type
const what = "text";
console.log(what);

// boolean type
const what = false;
const what2 = true;
const what3 = 0;
const what4 = 1;

// num type
const what = 1;

// float type
const what = 0.1;


// array
const daysOfWeek = ["Mon", "Tue", "Wed"];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);

// object
const johnnyInfo = {
    name:"johnny",
    age:27,
    gender:"male",
    favMovies:["HarryPotter", "LOTR", "Intern"],
    favFoods: [
        {name:"Chicken", fatty:true},
        {name:"Salad", fatty:false}]
    }

console.log(johnnyInfo);
console.log(johnnyInfo.name);

johnnyInfo.age = 28;

console.log(johnnyInfo.favFoods[0].fatty);

// Function

function sayHello(name) {
    console.log(name,"hello");

}

sayHello("johnny");

function sayHello(name, age) {
    return console.log(`hello ${name} you are ${age} years`);
}

const greetJohnny = sayHello("johnny",27);
console.log(greetJohnny);

// Nested fuction in Object
const calculator = {
    plus: function(a,b) {
        return a+b;
    },
    minus: function(a,b) {
        return a-b;
    },
    mul: function(a,b) {
        return a*b;
    },
    pow:function(a,b) {
        return a**b;
    },
    div: function(a,b) {
        return a/b;
    }
}
console.log(calculator.plus(5,5));

// if-else

if (12>10) {
    console.log("hi");
} else {
    console.log("bye");
}

if (1===1) {
    console.log("correct");
} else {
    console.log("wrong");
}

if (1===2) {
    console.log("true")
} else if (1 === 1) {
    console.log("true");
} else {
    console.log("hahaha");
}

if (20 > 10 && "HJ" === "HJ" || 2===1 ) {
    console.log("true");
} else {
    console.log("false");
}

const age = prompt("name? ");
console.log(age);

if (age > 19) {
    console.log("can buy alchol");
} else {
    console.log("cannot buy alchol");
}






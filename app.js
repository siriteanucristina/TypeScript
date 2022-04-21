//The number type
// 1.
var price = 9.95;
console.log("Pretul este:", price);
// 2.
var counter = 50;
var x = 100, y = 200;
console.log(counter, x + y, y - x);
//The string type
// 1.
var firstName = "Carl";
var secondName = "Stooddard";
var fullName = "His name is ".concat(firstName).concat(secondName, ".");
console.log(fullName);
// 2.
var message = "Hello, World!";
var heading = document.createElement("h1");
heading.textContent = message;
document.body.appendChild(heading);
//The object type
var list;
list = {
    one: "E",
    two: "B",
    three: "S"
};
console.log(list);
//The array type
// 1.
var books = ["Se numea Sarah", "Persuasiune"];
console.log("Carti preferate:", books);
// 2.
var pow = [0, 2, 4, 6];
var powArray = pow.map(function (e) { return e * e; });
console.log(powArray);
// 3.
var combination;
combination = [1, "One", 2, "Two", 3, "Three"];
console.log(combination);
//The tuple type
var person; // Rule!! Prima pe pozitie este string inseamna ca introducem string, daca introducem numer va da eroare
person = ["Mr.X", 30];
console.log(person);
//The enum type
var isSummer = "iunie";
switch (isSummer) {
    case "iunie":
        console.log("It is June!");
        break;
    case "iulie":
        console.log("It is July!");
        break;
    case "august":
        console.log("It is August!");
        break;
    default:
        console.log("It isn't summer!");
        break;
}
// if-else
var nr1 = 10;
var nr2 = 15;
if (nr1 > nr2) {
    nr2++;
}
else {
    nr2--;
}
console.log(nr2);
//if - else if - else
var count;
var number = 90;
if (number > 0 && number <= 35) {
    console.log(count, "Numarul este intre 0..35");
}
else if (number > 35 && number <= 70) {
    console.log(count, "Numarul este intre 35..70");
}
else {
    count = 100;
    console.log("Numarul este intre 70..100");
}
//for
for (var i_1 = 1; i_1 <= 10; i_1++) {
    console.log(i_1);
}
//do..while
var i = 1;
do {
    console.log(i);
    ++i;
} while (i <= 5);
//Functii
function add(x, y) {
    return x + y;
}
function add1(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a * b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(", ", b);
    }
}
function multiply(a, b, c) {
    if (typeof c !== "undefined") {
        return a * b * c;
    }
    return a * b;
}
//Class
var Girl = /** @class */ (function () {
    function Girl() {
    }
    return Girl;
}());
var girl = new Girl();
girl.name = "Clare";
girl.surname = "Fortun";
girl.age = 7;
girl.hobby = "Dans";
console.log(girl);
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var myRect = new Rectangle(10, 15);
console.log("Aria cercului este ", myRect.getArea());

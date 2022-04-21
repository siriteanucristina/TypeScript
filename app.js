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
//Functii
function add(x, y) {
    return x + y;
}

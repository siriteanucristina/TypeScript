//The number type
// 1.
let price = 9.95;
console.log("Pretul este:", price);

// 2.
let counter: number = 50;
let x: number = 100,
  y: number = 200;
console.log(counter, x + y, y - x);

//The string type
// 1.
let firstName: string = "Carl";
let secondName: string = "Stooddard";
let fullName: string = `His name is ${firstName}${secondName}.`;
console.log(fullName);
// 2.
let message: string = "Hello, World!";
let heading = document.createElement("h1");
heading.textContent = message;
document.body.appendChild(heading);

//The object type
let list: object;
list = {
  one: "E",
  two: "B",
  three: "S",
};
console.log(list);

//The array type
// 1.
let books = ["Se numea Sarah", "Persuasiune"];
console.log("Carti preferate:", books);
// 2.
let pow = [0, 2, 4, 6];
let powArray = pow.map((e) => e * e);
console.log(powArray);
// 3.
let combination: (string | number)[];
combination = [1, "One", 2, "Two", 3, "Three"];
console.log(combination);

//Functii
function add(x: number, y: number) {
  return x + y;
}

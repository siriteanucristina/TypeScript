//The number type
// 1.
let price = 9.95;
console.log("Pretul este:", price);

// 2.
let counter: number = 50;
let x: number = 100,
  y: number = 200;
console.log(counter, x + y);

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

//The boolean type

//The object type

//The array type

//The tuple type

function add(x: number, y: number) {
  return x + y;
}

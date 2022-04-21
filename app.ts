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

//The tuple type
let person: [string, number]; // Rule!! Prima pe pozitie este string inseamna ca introducem string, daca introducem numer va da eroare
person = ["Mr.X", 30];
console.log(person);

//The enum type
let isSummer = "iunie";

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
const nr1 = 10;
let nr2 = 15;
if (nr1 > nr2) {
  nr2++;
} else {
  nr2--;
}
console.log(nr2);

//if - else if - else
let count: number;
let number = 90;

if (number > 0 && number <= 35) {
  console.log(count, "Numarul este intre 0..35");
} else if (number > 35 && number <= 70) {
  console.log(count, "Numarul este intre 35..70");
} else {
  count = 100;
  console.log("Numarul este intre 70..100");
}

//for
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//do..while
let i = 1;

do {
  console.log(i);
  ++i;
} while (i <= 5);

//Functii
function add(x: number, y: number) {
  return x + y;
}

function add1(a: any, b: any) {
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(", ", b);
  }
}

function multiply(a: number, b: number, c?: number): number {
  if (typeof c !== "undefined") {
    return a * b * c;
  }
  return a * b;
}

//Class
class Girl {
  name: string;
  surname: string;
  age: number;
  hobby: string;
}
const girl = new Girl();
girl.name = "Clare";
girl.surname = "Fortun";
girl.age = 7;
girl.hobby = "Dans";
console.log(girl);

//Moștenire: Implementări
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}
const myRect = new Rectangle(10, 15);
console.log("Aria cercului este ", myRect.getArea());

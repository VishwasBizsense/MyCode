//-----Arithmetic operators--------------
let x=20;
let y=30;
console.log(x+y);

//-------assignment operator------//
  {
  let x = 5;
  console.log("Initial value of x: " + x); // Output: 5
  
  x += 3; // Equivalent to: x = x + 3
  console.log("After x += 3: " + x); // Output: 8
  
  x -= 2; // Equivalent to: x = x - 2
  console.log("After x -= 2: " + x); // Output: 6
  
  x *= 4; // Equivalent to: x = x * 4
  console.log("After x *= 4: " + x); // Output: 24
  
  x /= 3; // Equivalent to: x = x / 3
  console.log("After x /= 3: " + x); // Output: 8
  
  x %= 5; // Equivalent to: x = x % 5
  console.log("After x %= 5: " + x); // Output: 3
  
  x **= 2; // Equivalent to: x = x ** 2
  console.log("After x **= 2: " + x); // Output: 9}
  }
//-------------Comparison operators----------------------//
{
let p="20";
let q=20;
console.log(p==q);
}

{
let p="20";
let q=20;
console.log(p===q);
}

//-----------Nullish coalescing operator-------------------//

const value1 = undefined ?? 0;
const value2 = 2;
const value3 = 'Custom Value';

const result1 = value1 ?? "defaultValue"; // result1 will be 'Default Value'
const result2 = value2 ?? "defaultValue"; // result2 will be 'Default Value'
const result3 = value3 ?? "defaultValue"; // result3 will be 'Custom Value'
console.log("Output of value1 + value2",value1+value2);

//-----------coercion---------------//
console.log("---Coercion Examples-------------");
console.log(1 + '2' + '2');
console.log(1 + +'2' + '2');
console.log(1 + -'1' + '2');
console.log(+'1' + '1' + '2');
console.log('A' - 'B' + '2');

//--------scope example-------//
var xt = 10;
function foo() {
  console.log("Inside foo",xt);
  var xt = 5;
}
foo();
console.log("Outside foo",xt);//undefined

//------------------logical operator------------
{
  let x=0,y=1;
console.log("logical OR " + x||y);
}

//-----------------TypeOf ,instanceof ------------------//
function Car(make, model) {
  this.make = make;
  this.model = model;
}

var myCar = new Car('Toyota', 'Corolla');

console.log(myCar instanceof Car); // Output: true
//----------------
console.log(typeof(myCar));

//-----------------------bit wise
console.log("Bitwise AND: " + (5 & 3)); // Output: 1
console.log("Bitwise OR: " + (5 | 3)); // Output: 7
console.log("Bitwise XOR: " + (5 ^ 3)); // Output: 6
console.log("Bitwise NOT: " + (~5)); // Output: -6
console.log("Left Shift: " + (5 << 2)); // Output: 20
console.log("Sign-propagating Right Shift: " + (5 >> 1)); // Output: 2
console.log("Zero-fill Right Shift: " + (-5 >>> 1)); // Output: 2147483645

//-----------------Datatypes---------------
{
  let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
}

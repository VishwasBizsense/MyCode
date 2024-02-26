// let evens=[0,2,4,6,8,10,12,14];
// let fives=[];
// let odds = evens.map(v => v + 1);
// let nums = evens.map((v, i) => v + i);
// let pairs = evens.map(v => ({even: v, odd: v + 1}));
// // Statement bodies
// nums.forEach(function() {
//   if (v % 5 === 0)
//     fives.push(v);
// });
// Lexical this
// var bob = {
//   _name: "Bob",
//   _friends: ["me","you","us","everyone"],
//   printFriends() {
//     this._friends.forEach(f =>
//       console.log(this._name + " knows " + f));
//   }
// }
// bob.printFriends();


//****************************String interpolation******************************** */
// let object={
//   name:"Joe",
//   age:19,
//   Months:3
// }
// console.log(`${object.name} is ${object.age} years and ${object.Months} months old.`);


//********************************Object destructuring****************************//

let names="joe";
let age="50";

let person=[names, age];
console.log(person);

let [myName,years]=person;
console.log(`${myName} is ${years} years old.`);

//****************************spread operator******************************** */
const ar1=[1,2,3,4,5];
const ar2=[6,7,8,9,10];
console.log(ar1+ar2);
console.log("Combined array is : ",...ar1,...ar2);

const obj1 = { name: 'John' };
const obj2 = { age: 30 };
const combinedObject = { ...obj1, ...obj2 };
console.log("Combined object is ",combinedObject); // Output: { name: 'John', age: 30 }

//function call
const numbers = [1, 2, 3, 4, 5];
console.log("Maximum value among given array is:",Math.max(...numbers)); // Output: 5

//Array cloning
const originalArray = [1, 2, 3];
const clonedArray = [...originalArray];
console.log("Cloned array is : ",clonedArray); // Output: [1, 2, 3]


//****************************rest operator******************************** */
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log("first value is ",first); // Output: 1
console.log("Second value is ",second); // Output: 2
console.log("All the rest values are ",rest); // Output: [3, 4, 5]

function f1(...array){
  console.log("...Rest considers all the arguments as an array :",array.filter((ele)=>ele>8));
}
f1(1,2,3,4,5,6,7,8,9,10);


//****************************Js Maps******************************** */

const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

console.log("Value of key1 is :",myMap.get('key1')); // Output: value1
console.log("Size of map is : ",myMap.size); // Output: 2

//****************************Js Set******************************** */
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // Duplicates are ignored in a Set

console.log("Set has 2 as an element :",mySet.has(2)); // Output: true
console.log("Size of set is ",mySet.size); // Output: 3

//**************************proxies*************************** */
// const target = {
//   name: 'John',
//   age: 30
// };

// const handler = {
//   get: function(target, prop, receiver) {
//     console.log(`Getting property "${prop}"`);
//     if(prop==="age")return "";
//     else return target[prop];
//   },
// };

// const proxy = new Proxy(target, handler);
// console.log(proxy.name,proxy.age); // Output: Getting property "name", John

// Proxying a function object
var target = function () { return 'I am the target'; };
var handler = {
  apply: function (receiver, ...args) {
    return 'I am the proxy';
  }
};

var p = new Proxy(target, handler);
console.log(p() === 'I am the proxy');

// console.log(typeof handler);

//***************Generators********************** */
// function* generateNumbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const iterator = generateNumbers();
// console.log(iterator.next()); // Output: { value: 1, done: false }
// console.log(iterator.next()); // Output: { value: 2, done: false }
// console.log(iterator.next()); // Output: { value: 3, done: false }
// console.log(iterator.next()); // Output: { value: undefined, done: true }

//**************************object.entries***************************** */
const obj = { a: 100, b: 200 }
console.log("Getting object values as an array: ",Object.values(obj))// => [100, 200]

const obje = { self: 'that', norf: 'quux' }
console.log(Object.entries(obje))

// => [ ['self', 'that'], ['norf', 'quux'] ]



const objec = { 50: 'a', 1: 'b', 5: 'c' };
console.log("array entries ordered by key ",Object.entries(objec)) ;

// => [ ['1', 'b'], ['5', 'c'], ['50', 'a'] ]

//*****************************getOwnPropertyDescriptor********************************* */

let myObj = {
  property1: 'foo',
  property2: 'bar',
  property3: 42,
  property4: () => console.log('prop4')  
}

console.log(Object.getOwnPropertyDescriptors(myObj)); 

console.log('1'.padStart(3, 0));


console.log('1'.padEnd(5, 0));

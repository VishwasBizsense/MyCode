document.getElementById("getElement").innerHTML="Lets start with JavaScript";

//----------------------Change html Attributes---------------
function off(){
  document.getElementById('myImage').src="/html_code/Multimedia/pic_bulboff.gif";
  alert("Bulb is turned off");
}
function on(){
  document.getElementById('myImage').src="/html_code/Multimedia/pic_bulbon.gif";
  alert("Bulb is turned on");
}

//------------Change title of page--------------------
function edit(){
  let data=document.querySelector(".myTextarea").value;
  document.querySelector(".displayDiv").innerHTML=data;
  document.querySelector(".myTextarea").value="";
}


function changeTitle() {
  var newTitle = document.getElementById("titleInput").value;

  document.title = newTitle;
}

//HTML Event handlers----------------------

const displayDate = () => {
  document.getElementById("demo").innerHTML = Date();
};

const emptyP = () => {
  document.querySelector('#demo').innerHTML='';
}
document.addEventListener("keydown", function(event) {
  // Check if the key pressed is Enter
  if (event.key === "Enter") {
    emptyP(); // Call emptyP function when Enter key is pressed
  }
});




let arr = [1, 2, 3, 4, 5];

// Output div
let outputDiv2 = document.getElementById("output2");

// Function to empty output div
function emptyOutput2() {
  outputDiv2.innerText = "[1, 2, 3, 4, 5]";
}

// Array methods
function arrayLength() {
  outputDiv2.innerText += `Length of the array: ${arr.length}\n`;
}

function arrayToString() {
  outputDiv2.innerText += `Array as string: ${arr.toString()}\n`;
}

function arrayAt() {
  outputDiv2.innerText += `Element at index 2: ${arr[2]}\n`;
}

function arrayJoin() {
  outputDiv2.innerText += `Array joined with '-': ${arr.join('-')}\n`;
}

function arrayPop() {
  let poppedElement = arr.pop();
  outputDiv2.innerText += `Popped element: ${poppedElement}\n`;
}

function arrayPush() {
  arr.push(6);
  outputDiv2.innerText += `Array after pushing 6: ${arr}\n`;
}

function arrayShift() {
  let shiftedElement = arr.shift();
  outputDiv2.innerText += `Shifted element: ${shiftedElement}\n`;
}

function arrayUnshift() {
  arr.unshift(0);
  outputDiv2.innerText += `Array after unshifting 0: ${arr}\n`;
}

// function arrayDelete() {
//   delete arr[2];
//   outputDiv.innerText += `Array after deleting element at index 2: ${arr}\n`;
// }

function arrayConcat() {
  let newArr = arr.concat([6, 7]);
  outputDiv2.innerText += `Concatenated array: ${newArr}\n`;
}

function arrayCopyWithin() {
  let copiedArr = arr.copyWithin(0, 2);
  outputDiv2.innerText += `Array after copying within: ${copiedArr}\n`;
}

function arrayFlat() {
  let nestedArr = [1, [2, 3], [4, [5, 6]]];
  let flattenedArr = nestedArr.flat();
  outputDiv2.innerText += `Flattened array: ${flattenedArr}\n`;
}

function arraySplice() {
  let splicedArr = arr.splice(2, 1, 10, 11);
  outputDiv2.innerText += `Array after splicing: ${arr}\n`;
  outputDiv2.innerText += `Spliced elements: ${splicedArr}\n`;
}

function arrayToSpliced() {
  let splicedArr = arr.toSpliced();
  outputDiv2.innerText += `Array after converting to spliced: ${splicedArr}\n`;
}

function arraySlice() {
  let slicedArr = arr.slice(1, 3);
  outputDiv2.innerText += `Sliced array: ${slicedArr}\n`;
}



//Javascript string methods--------------//
let Str = "Red, Yellow, Green";
let outputDiv = document.getElementById("output");

function getStringLength() {
  outputDiv.innerText += `Length of the string: ${Str.length}\n`;
}

function getCharAt() {
  outputDiv.innerText += `Character at index 2: ${Str.charAt(2)}\n`;
}

function getCharCodeAt() {
  outputDiv.innerText += `Character code at index 2: ${Str.charCodeAt(2)}\n`;
}

function getAt() {
  outputDiv.innerText += `Character at index -2 is:${Str.at(-2)}\n`;
}

function getBracket() {
  outputDiv.innerText += `Character at index 2 using []: ${Str[2]}\n`;
}

function getSlice() {
  outputDiv.innerText += `Slice from index 4 to 10: ${Str.slice(4, 10)}\n`;
}

function getSubstring() {
  outputDiv.innerText += `Substring from index 4 to 10: ${Str.substring(4, 10)}\n`;
}

function getSubstr() {
  outputDiv.innerText += `Substr starting from index 4 with length 6: ${Str.substr(4, 6)}\n`;
}

function getToUpperCase() {
  outputDiv.innerText += `Uppercase string: ${Str.toUpperCase()}\n`;
}

function getToLowerCase() {
  outputDiv.innerText += `Lowercase string: ${Str.toLowerCase()}\n`;
}

function getConcat() {
  outputDiv.innerText += `Concatenating 'Blue': ${Str.concat(', Blue')}\n`;
}

function getTrim() {
  outputDiv.innerText += `Trimmed string: "${Str.trim()}"\n`;
}

function getTrimStart() {
  outputDiv.innerText += `Trimmed string from start: "${Str.trimStart()}"\n`;
}

function getTrimEnd() {
  outputDiv.innerText += `Trimmed string from end: "${Str.trimEnd()}"\n`;
}

function getPadStart() {
  outputDiv.innerText += `Padded string from start: "${Str.padStart(20, '-')}"`
}

function getPadEnd() {
  outputDiv.innerText += `Padded string from end: "${Str.padEnd(20, '-')}"`
}

function getRepeat() {
  outputDiv.innerText += `Repeated string: "${Str.repeat(3)}"\n`;
}

function getReplace() {
  outputDiv.innerText += `Replacing 'Red' with 'Blue': "${Str.replace('Red', 'Blue')}"\n`;
}

function getSplit() {
  outputDiv.innerText += `Splitting by comma: ${Str.split(', ')}\n`;
}

function getReplaceAll() {
  outputDiv.innerText += `Replacing all commas with spaces: "${Str.replaceAll(',', ' ')}"\n`;
}
function emptyOutput() {
  outputDiv.innerText = "Red, Yellow, Green";
}

//For string searching and matching--------------------
let str = "Hello, World";

// Output div
let outputDiv1 = document.getElementById("output1");

// Function to empty output div
function emptyOutput1() {
  outputDiv1.innerText = "Hello, World";
}

// String methods
function stringIndexOf() {
  outputDiv1.innerText += `Index of 'o': ${str.indexOf('o')}\n`;
}

function stringLastIndexOf() {
  outputDiv1.innerText += `Last index of 'o': ${str.lastIndexOf('o')}\n`;
}

function stringSearch() {
  outputDiv1.innerText += `Index of 'W': ${str.search('W')}\n`;
}

function stringMatch() {
  let matchArray = str.match(/l/);
  outputDiv1.innerText += `Characters matched with 'l': ${matchArray}\n`;
}

function stringMatchAll() {
  let matches = str.matchAll(/l+/g);
  let matchResult = '';
  for (let match of matches) {
    matchResult += `${match} at index: ${match.index}\n` ;
  }
  outputDiv1.innerText += `All matches of 'l':\n${matchResult}\n`;
}

function stringIncludes() {
  outputDiv1.innerText += `Does string include 'World': ${str.includes('World')}\n`;
}

function stringStartsWith() {
  outputDiv1.innerText += `Does string start with 'Hello': ${str.startsWith('Hello')}\n`;
}

function stringEndsWith() {
  outputDiv1.innerText += `Does string end with 'World': ${str.endsWith('World')}\n`;
}
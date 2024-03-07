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


//*********************************searching*********************
let array = [1, 2, 3, 4, 5, 2, 3];

// Output div
let arrayOutputDiv = document.getElementById("array-output");

// Function to empty output div
function emptyArrayOutput() {
  arrayOutputDiv.innerText = "[1, 2, 3, 4, 5, 2, 3]";
}

// Array methods
function arrayIndexOf() {
  arrayOutputDiv.innerText += `Index of element 2: ${array.indexOf(2)}\n`;
}

function arrayLastIndexOf() {
  arrayOutputDiv.innerText += `Last index of element 2: ${array.lastIndexOf(2)}\n`;
}

function arrayIncludes() {
  arrayOutputDiv.innerText += `Does array include element 6: ${array.includes(6)}\n`;
}

function arrayFind() {
  let foundElement = array.find(element => element > 2);
  arrayOutputDiv.innerText += `First element greater than 2: ${foundElement}\n`;
}

function arrayFindIndex() {
  let foundIndex = array.findIndex(element => element > 2);
  arrayOutputDiv.innerText += `Index of first element greater than 2: ${foundIndex}\n`;
}

function arrayFindLast() {
  let foundLastElement = array.reverse().find(element => element > 2);
  arrayOutputDiv.innerText += `Last element greater than 2: ${foundLastElement}\n`;
}

function arrayFindLastIndex() {
  let foundLastIndex = array.reverse().findIndex(element => element > 2);
  arrayOutputDiv.innerText += `Index of last element greater than 2: ${foundLastIndex}\n`;
}


//*******************************Sorting******************************

let ar = [5, 3, 8, 1, 4];
    
    // Output div
    let outputDiv3 = document.getElementById("method-output");

    // Function to empty output div
    function emptyOutput3() {
      outputDiv3.innerText = "[5, 3, 8, 1, 4]";
    }

    // Array methods
    function arraySort() {
      let sortedArray = ar.slice().sort();
      outputDiv3.innerText += `Sorted array: ${sortedArray}\n`;
    }

    function arrayReverse() {
      let reversedArray = ar.slice().reverse();
      outputDiv3.innerText += `Reversed array: ${reversedArray}\n`;
    }

    function arrayToSorted() {
      let sortedArray = [...ar].sort();
      outputDiv3.innerText += `New sorted array: ${sortedArray}\n`;
    }

    function arrayToReversed() {
      let reversedArray = [...ar].reverse();
      outputDiv3.innerText += `New reversed array: ${reversedArray}\n`;
    }

    // Math functions
    function mathMin() {
      let min = Math.min(...ar);
      outputDiv3.innerText += `Minimum value: ${min}\n`;
    }

    function mathMax() {
      let max = Math.max(...ar);
      outputDiv3.innerText += `Maximum value: ${max}\n`;
    }

    // Homemade min and max functions
    function homeMadeMin() {
      let min = ar[0];
      for (let i = 1; i < ar.length; i++) {
        if (ar[i] < min) {
          min = ar[i];
        }
      }
      outputDiv3.innerText += `Home made minimum value: ${min}\n`;
    }

    function homeMadeMax() {
      let max = ar[0];
      for (let i = 1; i < ar.length; i++) {
        if (ar[i] > max) {
          max = ar[i];
        }
      }
      outputDiv3.innerText += `Home made maximum value: ${max}\n`;
    }
    //*******************************Array iteration methods*************************
    let arr1 = [1, 2, 3, 4, 5];

    // Output div
    let arrayOutputDiv1 = document.getElementById("array-method-output");

    // Function to empty output div
    function emptyArrayMethodOutput() {
      arrayOutputDiv1.innerText = "[1, 2, 3, 4, 5]";
    }

    // Array methods
    function arrayForEach() {
      arr1.forEach(element => {
        arrayOutputDiv1.innerText += `${element} `;
      });
      arrayOutputDiv1.innerText += "\n";
    }

    function arrayMap() {
      let mappedArray = arr1.map(element => element * 2);
      arrayOutputDiv1.innerText += `Mapped array: ${mappedArray}\n`;
    }

    function arrayFlatMap() {
      let flatMappedArray = arr1.flatMap(element => [element, element * 2]);
      arrayOutputDiv1.innerText += `Flat-mapped array: ${flatMappedArray}\n`;
    }

    function arrayFilter() {
      let filteredArray = arr1.filter(element => element % 2 === 0);
      arrayOutputDiv1.innerText += `Filtered array: ${filteredArray}\n`;
    }

    function arrayReduce() {
      let reducedValue = arr1.reduce((accumulator, currentValue) => accumulator + currentValue);
      arrayOutputDiv1.innerText += `Reduced value: ${reducedValue}\n`;
    }

    function arrayReduceRight() {
      let reducedRightValue = arr1.reduceRight((accumulator, currentValue) => accumulator + currentValue);
      arrayOutputDiv1.innerText += `Reduced right value: ${reducedRightValue}\n`;
    }

    function arrayEvery() {
      let everyResult = arr1.every(element => element > 0);
      arrayOutputDiv1.innerText += `Every element greater than 0: ${everyResult}\n`;
    }

    function arraySome() {
      let someResult = arr1.some(element => element > 5);
      arrayOutputDiv1.innerText += `Some elements greater than 5: ${someResult}\n`;
    }

    function arrayFrom() {
      let arrayFromResult = Array.from(arr1, element => element * 2);
      arrayOutputDiv1.innerText += `Array from result: ${arrayFromResult}\n`;
    }

    function arrayKeys() {
      let keys = Array.from(arr1.keys());
      arrayOutputDiv1.innerText += `Keys of the array: ${keys}\n`;
    }

    function arrayEntries() {
      let entries = Array.from(arr1.entries());
      arrayOutputDiv1.innerText += `Entries of the array: ${entries}\n`;
    }

    function arrayWith() {
      let arrayWithResult = Array.of(1, 2, 3);
      arrayOutputDiv1.innerText += `Array with result: ${arrayWithResult}\n`;
    }
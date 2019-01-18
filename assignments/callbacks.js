// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function(len) {
  console.log(len);
}); //logs 4



function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

last(items, function(lastItem) {
  console.log(lastItem);
}); //logs 'Gum'



function sumNums(x, y, cb) {
  return cb(x + y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

sumNums(3, 4, function(sum) {
  console.log(sum);
}); //logs 7


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(3, 4, function(product) {
  console.log(product);
}); //logs 12

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}

contains('Gum', items, function(doesContain) {
  console.log(doesContain);
}); // logs true
contains('Money', items, function(doesContain) {
  console.log(doesContain);
}); // logs false

/* STRETCH PROBLEM */

testArr = [0, 1, 1, 2, 3, 5, 8]

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb([...new Set(array)])
}

removeDuplicates(testArr, function(duplicateFreeArr) {
  console.log(duplicateFreeArr);
}); //logs [0, 1, 2, 3, 5, 8]

console.log(testArr); // logs [0, 1, 1, 2, 3, 5, 8]
// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const foo = 'bar';
const closure = () => foo;

console.log(closure());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  count++;
  return count;
};

let count = 0;

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter;
console.log(count); // 0

newCounter(); // 1
console.log(count);

newCounter(); // 2
console.log(count);

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

console.log('*****stretch*****')

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  const incrDecr = {
    increment: () => {
      count2++;
      return count2;
    },
    decrement: () => {
      count2--;
      return count2;
    }
  }
  return incrDecr;
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

let count2 = 0;
console.log(count2); // 0

const incrDecrInstance = counterFactory();

incrDecrInstance.increment();
console.log(count2); // 1

incrDecrInstance.increment();
console.log(count2); // 2

incrDecrInstance.decrement();
console.log(count2); // 1
// What is the order in which the letters are output?
// Extra Credit: Approx. how long before each letter is displayed?

// Order:

setTimeout(() => {
  console.log('A');
}, 0);

console.log('B');

setTimeout(() => {
  console.log('C');
}, 0);

setTimeout(() => {
  console.log('D');
}, 100);

var i = 0;
while (i < 100000000) {
  // Takes ~500ms to run this loop
  var ignore = Math.sqrt(i);
  i++;
}

console.log('E');

const amounts = [61.00, 52.25, 112.99, 5.00]; 

// const total = 0;
// for (let i = 0; i < amounts.length; i++) {
//   total =+ amounts[i];
// }
// console.log('Order total is: ', total);


// const total = 0;
// for (let amount of amounts) {
//   total += amount;
// }
// console.log('Order total is: ', total);

// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(length) {
  // Let's build a huge string equivalent to the triangle
  var triangle = "";

  //Let's start from the topmost line
  var lineNumber = 1;

  for(lineNumber=1; lineNumber<=length; lineNumber++){
      // We will not print one line at a time.
      // Rather, we will make a huge string that will comprise the whole triangle
      triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}

// test your code by uncommenting the following line
// Note that the function buildTriangle() must return a string 
// because the console.log() accepts a string argument
console.log(buildTriangle(10));

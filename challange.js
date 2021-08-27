// **********Challange**************

// const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

// const finalPosition = (moves) => {
//     let position = [0, 0]

//     for (let i of moves){
//         if (i === "west")  position[0] --
//         else if (i === "east")  position[0] ++
//         else if (i === "north")  position[1] ++
//         else  position[1] --
//     }
//     return  position   
// }
// console.log(finalPosition(moves))


// *********Challange****************

// function ageCalculator (name, yearOfBirth, currentYear) {
//   let age = currentYear - yearOfBirth;
//   return name + " is " + age + " years old.";
// }

// console.log(ageCalculator("Miranda", 1983, 2015));
// console.log(ageCalculator("Ferdinand", 1988, 2015)); = 

// ************ Challange***************

// function howManyHundreds(number) {
//   let numberOfHundreds = number / 100;
//   return Math.floor(numberOfHundreds);
// }

// console.log(howManyHundreds(1000), "=?", 10);
// console.log(howManyHundreds(894), "=?", 8);
// console.log(howManyHundreds(520), "=?", 5);
// console.log(howManyHundreds(99), "=?", 0);
// console.log(howManyHundreds(0), "=?", 0);


// **********Challange*****************

// let lenght;
// let width;
// let base;
// let height;
// let radius;

// function calculateRectangleArea(length, width) {
//   if (length > 0 && width > 0) {
//     let result = length * width;
//     return result;
//   }
// }
// function calculateTriangleArea(base, height){
//   if (base > 0 && height > 0) {
//     let result = base * height / 2;
//     return result;
//   }
  
// }
// function calculateCircleArea(radius) {
//   if (radius > 0) {
//     let result = Math.PI * (radius * radius);
//     return result;
//   }
// }


// console.log(calculateRectangleArea(10, 5));     // should print 50
// console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
// console.log(calculateRectangleArea(10, -5));    // should print undefined

// console.log(calculateTriangleArea(10, 5)); // should print 25
// console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
// console.log(calculateTriangleArea(10, -5)); // should print undefined

// console.log(calculateCircleArea(10)); // should print 314.159...
// console.log(calculateCircleArea(3.5)); // should print 38.484...
// console.log(calculateCircleArea(-1)); 

var donuts = ["cookies", "cinnamon sugar", "creme de leche"];

donuts.splice(-2, 0, "chocolate frosted", "glazed");

console.log(donuts);


var turnMeIntoAString = ["U", "d", "a", "c", "i", "t", "y"];

let result = turnMeIntoAString.join();

console.log(result);

words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});
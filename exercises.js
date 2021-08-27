// var donuts = [
//   { type: "Jelly", cost: 1.22 },
//   { type: "Chocolate", cost: 2.45 },
//   { type: "Cider", cost: 1.59 },
//   { type: "Boston Cream", cost: 5.99 }
// ];

// donuts.forEach(function(donut) {
//   console.log(donut.type + " donuts cost $" + donut.cost + " each");
// });

//***********************Challange*********************

// bins = {
//   waste: 0,
//   recycling: 0,
//   compost: 0
// }

// const smartGarbage = function (trash, bins) {
  
  
//   if(trash === "waste") {
//     bins.waste++
//   }else if (trash === "recycling") {
//     bins.recycling++
//   }else if (trash === "compost") {
//     bins.compost++
//   }
//   return bins
// }

// console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));



//***********************Challange*********************



// const cars = [
//   {
//     time: 1568329654807,
//     speed: 40,
//   },
//   {
//     time: 1568329821632,
//     speed: 42,
//   },
//   {
//     time: 1568331115463,
//     speed: 35
//   }
// ]

// const speed = 38;

// const carPassing = function(cars, speed) {
//   let newObj = { time:Date.now(), speed:speed }
//   cars.push(newObj)
//   return cars
// }
// console.log(carPassing(cars, speed))

//***********************Challange*********************

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'



const judgeVegetable = (vegetables, metric) => {
  return   vegetables.reduce( (winner, contestant) =>
                          contestant[metric] > winner[metric] ? contestant : winner).submitter
}

console.log(judgeVegetable(vegetables, metric));
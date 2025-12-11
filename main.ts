/**
 * @author Bianca Boo
 * @version 1.0.0
 * @date 2025-12-10
 * @fileoverview This program keeps track of car stats.
 */

// Function: oilChange
function oilChange(mileage: number, lastOilChange: number): boolean {
  if (mileage - lastOilChange >= 5000) {
    console.log("An oil change was done.");
    oilChangeKM = mileage;   // update last oil change
    return true;
  } else {
    return false;
  }
}

// Constants and Variables
let odometer: number = 65000;       // mileage of Car
let oilChangeKM: number = 65000;    // value since last oil change
let carColor: string = "black";     // color of Car
let carModel: string = "Civic";     // model of Car
let carMake: string = "Honda";      // make of Car
let newMileage: number = 0;         // new mileage amount
let gasCost: number[] = new Array(10);  // cost of gas per fill-up
let gasCount: number = 0;           // how many fill-ups stored

// Function: carStats
function carStats(): string {
  let msg: string = "";
  msg += "Car Make: " + carMake + "\n";
  msg += "Car Model: " + carModel + "\n";
  msg += "Car Color: " + carColor + "\n";
  msg += "Odometer: " + odometer + " km\n";
  return msg;
}

// Function: wrapCar
function wrapCar(): string {
  const newColor: string = prompt("Enter a new colour: ") || carColor;
  return newColor;
}

// Function: drive
function drive(): number {
  const distance: number = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
  newMileage = distance;
  odometer += distance;
  return distance;
}

// Function: fillUp
function fillUp(): void {
  const cost: number = Number(prompt("How much did this fill-up cost? "));
  gasCost[gasCount] = cost;
  gasCount += 1;
}

// Function: displayCostToFillUp
function displayCostToFillUp(): number {
  let total: number = 0;
  console.log("Gas fill-up costs:");

  let i: number = 0;
  while (i < gasCount) {
    console.log(gasCost[i]);
    total += gasCost[i];
    i += 1;
  }

  const average: number = total / gasCount;
  return average;
}

// MAIN PROGRAM
console.log("Welcome to your Car Program!");
console.log(carStats());

// Test wrapCar
carColor = wrapCar();

// Test driving
const miles: number = drive();
console.log("You drove " + miles + " km.");

// Test oil change
if (!oilChange(odometer, oilChangeKM)) {
  console.log("Your car does not need an oil change.");
}

// Test filling up
fillUp();
fillUp();

const avg: number = displayCostToFillUp();
console.log("Average cost = " + avg);

console.log("\nDone.");

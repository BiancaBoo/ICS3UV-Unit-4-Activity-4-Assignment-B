/**
 * @author Bianca Boo
 * @version 1.0.0
 * @date 2025-12-10
 * @fileoverview This program keeps track of car stats.
 */

function oilChange(mileage: number, oilChangeKM: number): boolean {
  // This function will check to see if your car needs an oil change and
  // return the necessary responses, as well as update the variables.

  if (mileage - oilChangeKM >= 5000) {
    console.log("An oil change was done.");
    return true;
  } else {
    return false;
  }
}

// constants and variables
let odometer: number = 0.0;       // mileage of Car
let oilChangeKM: number = 0.0;    // value since the last oil change 
let carColor: string = null;      // color of Car
let carModel: string = null;      // model of Car
let newMileage: number = 0.0;     // new mileage amount
const gasCost: number[] = new Array(10); // cost of gas per fill up.

// INITIAL SETUP BASED ON THE ASSIGNMENT
carModel = "Used Car";
carColor = "Silver";
odometer = 65000;
oilChangeKM = 65000;
gasCost[0] = 74.0;   // first fill-up

// REQUIRED FUNCTIONS
function carStats(
  model: string,
  color: string,
  mileage: number,
  lastOil: number,
  gasArray: number[]
): string {
  return (
    "\n--- CAR STATS ---" +
    "\nModel: " + model +
    "\nColor: " + color +
    "\nOdometer: " + mileage + " km" +
    "\nLast Oil Change: " + lastOil + " km" +
    "\nGas Fill-Ups: " + gasArray.join(", ") +
    "\n------------------\n"
  );
}

function wrapCar(): string {
  const newColor = prompt("Enter a new color to wrap your car:");
  return newColor;
}

function drive(): number {
  const MIN = 100;
  const MAX = 1000;

  const km = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  return km;
}

function fillUp(gasArray: number[], index: number): number {
  const cost = Number(prompt("Enter the cost to fill up your car:"));
  gasArray[index] = cost;
  return cost;
}

function displayCostToFillUp(gasArray: number[]): number {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < gasArray.length; i++) {
    if (gasArray[i] > 0) {
      console.log("Fill-up " + (i + 1) + ": $" + gasArray[i]);
      sum += gasArray[i];
      count++;
    }
  }

  const avg = count > 0 ? sum / count : 0;
  console.log("Average cost: $" + avg.toFixed(2));

  return avg;
}

// TEST FUNCTION CALLS
carColor = wrapCar();

newMileage = drive(odometer);
console.log("\nYou drove " + newMileage + " km.");
odometer += newMileage;

fillUp(gasCost, 1);

displayCostToFillUp(gasCost);

if (oilChange(odometer, oilChangeKM)) {
  oilChangeKM = odometer;
} else {
  console.log("Your car does not need an oil change.");
}

console.log(carStats(carModel, carColor, odometer, oilChangeKM, gasCost));

console.log("\nDone.");

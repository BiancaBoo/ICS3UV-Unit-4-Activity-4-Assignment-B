// Author: Bianca Boo
// Version: 1.0.0
// Date: 2025-12-10
// Fileoverview: This program keeps track of car stats.

package main

import (
	"bufio"
	"fmt"
	"math/rand"
	"os"
	"strconv"
	"strings"
	"time"
)

func oilChange(mileage int, lastOil int) bool {
	// This function checks whether an oil change is needed.

	if mileage-lastOil >= 5000 {
		fmt.Println("An oil change was done.")
		return true
	}
	return false
}

func carStats(model string, color string, mileage int, lastOil int, gasArray []float64) string {
	joined := ""
	for i, v := range gasArray {
		if i > 0 {
			joined += ", "
		}
		joined += fmt.Sprintf("%.2f", v)
	}

	return fmt.Sprintf(
		"\n--- CAR STATS ---\nModel: %s\nColor: %s\nOdometer: %d km\nLast Oil Change: %d km\nGas Fill-Ups: %s\n------------------\n",
		model, color, mileage, lastOil, joined,
	)
}

func wrapCar() string {
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Enter a new color to wrap your car: ")
	colorInput, _ := reader.ReadString('\n')
	colorInput = strings.TrimSpace(colorInput)
	return colorInput
}

func drive() int {
	const min = 100
	const max = 1000

	rand.Seed(time.Now().UnixNano())
	km := rand.Intn(max-min+1) + min
	return km
}

func fillUp(gasArray []float64, index int) float64 {
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Enter the cost to fill up your car: ")

	input, _ := reader.ReadString('\n')
	input = strings.TrimSpace(input)

	cost, err := strconv.ParseFloat(input, 64)
	if err != nil {
		cost = 0
	}

	gasArray[index] = cost
	return cost
}

func displayCostToFillUp(gasArray []float64) float64 {
	sum := 0.0
	count := 0.0

	for i := 0; i < len(gasArray); i++ {
		if gasArray[i] > 0 {
			fmt.Printf("Fill-up %d: $%.2f\n", i+1, gasArray[i])
			sum += gasArray[i]
			count++
		}
	}

	avg := 0.0
	if count > 0 {
		avg = sum / count
	}

	fmt.Printf("Average cost: $%.2f\n", avg)
	return avg
}

func main() {
	// Variables
	odometer := 0
	lastOil := 0
	carColor := ""
	carModel := ""
	newMileage := 0

	// Gas cost array
	gasCost := make([]float64, 10)

	// INITIAL VALUES
	carModel = "Used Car"
	odometer = 65000
	lastOil = 65000
	gasCost[0] = 74.0

	// TEST FUNCTION CALLS
	carColor = wrapCar()

	newMileage = drive()
	fmt.Printf("\nYou drove %d km.\n", newMileage)
	odometer += newMileage

	fillUp(gasCost, 1)

	displayCostToFillUp(gasCost)

	if oilChange(odometer, lastOil) {
		lastOil = odometer
	} else {
		fmt.Println("Your car does not need an oil change.")
	}

	fmt.Println(carStats(carModel, carColor, odometer, lastOil, gasCost))

	fmt.Println("\nDone.")
}

import { getSumOfMaxValues } from '../tools/arrayTools.js';
import { getArrayFromFileLines } from '../tools/fileTools.js';
import { EMPTY_STRING } from '../tools/consts.js';
import fs from "fs";

const PATH_TO_INPUT_FILE = "../inputs/day1input.txt";
const BEST_ELVES_AMOUNT = 1;

const calculateEachElfCalories = (caloriesArray) => {
	const resultArray = [0];

	caloriesArray.forEach((data) => {
		const currentElf = resultArray.length - 1;
		const currentAmount = resultArray[currentElf];

		if (data !== EMPTY_STRING) {
			resultArray[currentElf] = currentAmount + Number(data);
		} else {
			resultArray.push(0);
		}
	});

	return resultArray;
}

const solveDayOne = (inpuData) => {
	const splitedInputData = getArrayFromFileLines(inpuData);
	const resultArray = calculateEachElfCalories(splitedInputData);

	return getSumOfMaxValues(BEST_ELVES_AMOUNT, resultArray);
}

fs.readFile(PATH_TO_INPUT_FILE, 'utf-8', (err, data) => {
	if (err) throw err;

	console.log(solveDayOne(data));
})

import { removeFromArray, checkIfAnyOfTheArraysPartlyContainsTheOther } from '../tools/arrayTools.js';
import { getArrayFromFileLines } from '../tools/fileTools.js';
import { EMPTY_STRING, ZERO, EMPTY_ARRAY, HYPEN, COMMA } from '../tools/consts.js';
import fs from "fs";

const PATH_TO_INPUT_FILE = "../inputs/day4input.txt";

const writeWorkSectionsIntoArray = (workSection) => {
	const splitedWorkSection = workSection.split(HYPEN);
	const workSectionArray = EMPTY_ARRAY;

	for (var i = Number(splitedWorkSection[0]); i <= Number(splitedWorkSection[1]); i++) {
		workSectionArray.push(i);
	}

	return workSectionArray;
}

const checkIfDuplicatedWorkInPair = (pair) => {
	const pairOfElves = pair.split(COMMA);
	const elf1 = writeWorkSectionsIntoArray(pairOfElves[0]);
	const elf2 = writeWorkSectionsIntoArray(pairOfElves[1]);

	return checkIfAnyOfTheArraysPartlyContainsTheOther(elf1, elf2);
}

const getAmountOfDuplicatedPairs = (pairArray) => {
	let cleanedPairArray = removeFromArray(EMPTY_STRING, pairArray);
	let result = ZERO;

	cleanedPairArray.forEach((data) => {
		result += checkIfDuplicatedWorkInPair(data);
	});

	return result;
}

const solveDayFour = (inpuData) => {
	const splitedInputData = getArrayFromFileLines(inpuData);
	const result = getAmountOfDuplicatedPairs(splitedInputData);

	return result;
}

fs.readFile(PATH_TO_INPUT_FILE, 'utf-8', (err, data) => {
	if (err) throw err;

	console.log(solveDayFour(data));
})

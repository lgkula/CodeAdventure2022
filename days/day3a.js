import { removeFromArray, getFirstHalfOfArray, getSecondHalfOfArray, getDuplicates } from '../tools/arrayTools.js';
import { getArrayFromFileLines } from '../tools/fileTools.js';
import { EMPTY_STRING, SMALL_A_ASCII_CODE, LARGE_A_ASCII_CODE, ZERO } from '../tools/consts.js';
import fs from "fs";

const PATH_TO_INPUT_FILE = "../inputs/day3input.txt";

const SMALL_ASCII_LETERS_SUBTRACTION = SMALL_A_ASCII_CODE - 1;
const LARGE_ASCII_LETERS_SUBTRACTION = LARGE_A_ASCII_CODE - 1;
const ADDITIONAL_POINTS_FOR_LETTER_SIZE = 26;

export const getPointsForPrio = (prio) => {
	const prioAsciiCode = prio.charCodeAt(ZERO);

	if (prioAsciiCode > SMALL_ASCII_LETERS_SUBTRACTION) {
		return prioAsciiCode - SMALL_ASCII_LETERS_SUBTRACTION;
	} else {
		return prioAsciiCode - LARGE_ASCII_LETERS_SUBTRACTION + ADDITIONAL_POINTS_FOR_LETTER_SIZE;
	}
}

const getRucksackPrio = (data) => {
	const firstCompartment = getFirstHalfOfArray(data);
	const secondCompartment = getSecondHalfOfArray(data);
	const filteredArray = getDuplicates(firstCompartment, secondCompartment);

	return filteredArray[ZERO];
}

const gatRucksackPoints = (rucksackItems) => {
	const prio = getRucksackPrio(Array.from(rucksackItems));

	return getPointsForPrio(prio);
}

const calculatePoints = (rucksackArray) => {
	let cleanRucksackArray = removeFromArray(EMPTY_STRING, rucksackArray);
	let result = ZERO;

	cleanRucksackArray.forEach((data) => {
		result += gatRucksackPoints(data);
	});

	return result;
}

const solveDayThree = (inpuData) => {
	const splitedInputData = getArrayFromFileLines(inpuData);
	const result = calculatePoints(splitedInputData);

	return result;
}

fs.readFile(PATH_TO_INPUT_FILE, 'utf-8', (err, data) => {
	if (err) throw err;

	console.log(solveDayThree(data));
})

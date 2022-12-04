import { removeFromArray } from '../tools/arrayTools.js';
import { getArrayFromFileLines } from '../tools/fileTools.js';
import { EMPTY_STRING, ZERO } from '../tools/consts.js';
import fs from "fs";

const PATH_TO_INPUT_FILE = "../inputs/day2input.txt";

const POINTS_FOR_ROCK = 1;
const POINTS_FOR_PAPER = 2;
const POINTS_FOR_SCISSORS = 3;

const POINTS_FOR_LOST = 0;
const POINTS_FOR_DRAW = 3;
const POINTS_FOR_WON = 6;

const FIRST_MOVE_INDEX = 0;
const SECOND_MOVE_INDEX = 2;

const getPointsWhenX = (firstMove) => {
	switch (firstMove) {
		case 'A':
			return POINTS_FOR_SCISSORS + POINTS_FOR_LOST;
		case 'B':
			return POINTS_FOR_ROCK + POINTS_FOR_LOST;
		case 'C':
			return POINTS_FOR_PAPER + POINTS_FOR_LOST;
	}
}

const getPointsWhenY = (firstMove) => {
	switch (firstMove) {
		case 'A':
			return POINTS_FOR_ROCK + POINTS_FOR_DRAW;
		case 'B':
			return POINTS_FOR_PAPER + POINTS_FOR_DRAW;
		case 'C':
			return POINTS_FOR_SCISSORS + POINTS_FOR_DRAW;
	}
}

const getPointsWhenZ = (firstMove) => {
	switch (firstMove) {
		case 'A':
			return POINTS_FOR_PAPER + POINTS_FOR_WON;
		case 'B':
			return POINTS_FOR_SCISSORS + POINTS_FOR_WON;
		case 'C':
			return POINTS_FOR_ROCK + POINTS_FOR_WON;
	}
}

const getPointsInRound = (round) => {
	switch (round[SECOND_MOVE_INDEX]) {
		case 'X':
			return getPointsWhenX(round[FIRST_MOVE_INDEX]);
		case 'Y':
			return getPointsWhenY(round[FIRST_MOVE_INDEX]);
		case 'Z':
			return getPointsWhenZ(round[FIRST_MOVE_INDEX]);
	}
}

const calculatePoints = (roundArray) => {
	let cleanRoundArray = removeFromArray(EMPTY_STRING, roundArray);
	let result = ZERO;

	cleanRoundArray.forEach((round) => {
		result += getPointsInRound(round);
	});

	return result;
}

const solveDayTwo = (inpuData) => {
	const splitedInputData = getArrayFromFileLines(inpuData);
	const result = calculatePoints(splitedInputData);

	return result;
}

fs.readFile(PATH_TO_INPUT_FILE, 'utf-8', (err, data) => {
	if (err) throw err;

	console.log(solveDayTwo(data));
})

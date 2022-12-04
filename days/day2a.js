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

const getPointsWhenRockInFirstMove = (secondMove) => {
	switch (secondMove) {
		case 'X':
			return POINTS_FOR_ROCK + POINTS_FOR_DRAW;
		case 'Y':
			return POINTS_FOR_PAPER + POINTS_FOR_WON;
		case 'Z':
			return POINTS_FOR_SCISSORS + POINTS_FOR_LOST;
	}
}

const getPointsWhenPaperInFirstMove = (secondMove) => {
	switch (secondMove) {
		case 'X':
			return POINTS_FOR_ROCK + POINTS_FOR_LOST;
		case 'Y':
			return POINTS_FOR_PAPER + POINTS_FOR_DRAW;
		case 'Z':
			return POINTS_FOR_SCISSORS + POINTS_FOR_WON;
	}
}

const getPointsWhenScissorsInFirstMove = (secondMove) => {
	switch (secondMove) {
		case 'X':
			return POINTS_FOR_ROCK + POINTS_FOR_WON;
		case 'Y':
			return POINTS_FOR_PAPER + POINTS_FOR_LOST;
		case 'Z':
			return POINTS_FOR_SCISSORS + POINTS_FOR_DRAW;
	}
}

const getPointsInRound = (round) => {
	switch (round[FIRST_MOVE_INDEX]) {
		case 'A':
			return getPointsWhenRockInFirstMove(round[SECOND_MOVE_INDEX]);
		case 'B':
			return getPointsWhenPaperInFirstMove(round[SECOND_MOVE_INDEX]);
		case 'C':
			return getPointsWhenScissorsInFirstMove(round[SECOND_MOVE_INDEX]);
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

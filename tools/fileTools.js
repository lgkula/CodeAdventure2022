import fs from "fs";
import { END_OF_LINE_REGEX } from '../tools/consts.js';

export const readFile = (inputPath) => {
	fs.readFile(inputPath, 'utf-8', (err, data) => {
		if (err) throw err;

		console.log(data);
		return data;
	})
}

export const getArrayFromFileLines = (array) => array.split(END_OF_LINE_REGEX);

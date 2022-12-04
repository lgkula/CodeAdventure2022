//-------------------------------------------------
//Remove
//---------------------
export const removeFromArray = (valueToRemove, array) => {
	var index = array.indexOf(valueToRemove);
	if (index !== -1) {
		array.splice(index, 1);
	}

	return array;
}


//-------------------------------------------------
//Get values
//---------------------
export const getMaxValue = (array) => {
	return array.reduce((a, b) => { return Math.max(a, b) });
}

export const getSumOfMaxValues = (amountOfBests, arrayToCalculate) => {
	let sum = 0;
	let array = [...arrayToCalculate];

	for (var i = 0; i < amountOfBests; i++) {
		const max = getMaxValue(array);
		sum += max;
		array = removeFromArray(max, array);
	}

	return sum;
}

//-------------------------------------------------
//Get arrays
//---------------------
export const getFirstHalfOfArray = (array) => {
	return array.slice(0, array.length / 2);
}

export const getSecondHalfOfArray = (array) => {
	return array.slice(array.length / 2);
}

export const getDuplicates = (array1, array2) => {
	return array1.filter(value => array2.includes(value));
}

//-------------------------------------------------
//Check values
//---------------------
export const checkIfAContainsB = (firstArray, secondArray) => firstArray.every(element => secondArray.includes(element));

export const checkIfAnyOfTheArraysFullyContainsTheOther = (firstArray, secondArray) => checkIfAContainsB(firstArray, secondArray) || checkIfAContainsB(secondArray, firstArray);

export const checkIfAHasSomeCommonPartsWithB = (firstArray, secondArray) => firstArray.every(element => secondArray.includes(element));

export const checkIfAnyOfTheArraysPartlyContainsTheOther = (firstArray, secondArray) => checkIfAHasSomeCommonPartsWithB(firstArray, secondArray) || checkIfAHasSomeCommonPartsWithB(secondArray, firstArray);

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

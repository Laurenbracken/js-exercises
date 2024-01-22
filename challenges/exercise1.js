export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
	// Your code here!
	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
	return person.city === 'Manchester';
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	// Your code here!
	const peoplePerBus = 40;
	const numberOfBuses = Math.ceil(people / peoplePerBus)
	return numberOfBuses;
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
	const sheepCount = arr.filter(animal => animal.toLowerCase() === 'sheep').length;
	return sheepCount;
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
}

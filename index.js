// const courseNew = [
// 	{ id: 1, name: "Node", author: "Jane" },
// 	{ id: 2, name: "React", author: "David" },
// 	{ id: 3, name: "Angular", author: "John" },
// 	{ id: 4, name: "Vue", author: "John" },
// ];

// let sortCourses = (courses) => {
// 	return courses.sort((a, b) => {
// 		if (a.author < b.author) return -1;
// 		if (a.author > b.author) return 1;

// 		if (a.name < b.name) return 1;
// 		if (a.name > b.name) return -1;

// 		return 0;
// 	});
// };

// const sortedCourses = sortCourses(courseNew);
// console.log(sortedCourses);

const numbers = [4, 2, 56, 24];

function findLargestOddNumber(array) {
	let largestOdd = -Infinity;
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 !== 0 && array[i] > largestOdd) {
			largestOdd = array[i];
		}
	}
	return largestOdd === -Infinity ? "No odd numbers in the array" : largestOdd;
}

const largestOdd = findLargestOddNumber(numbers);
console.log(largestOdd);

const students = {
	name: "John",
	age: 13,
	address: {
		road: "Mountain",
		zila: "Hill Tech",
	},
	marks: {
		chamistry: 89,
		physics: 90,
		mathamathic: 91,
	},
};
// console.log(students.name);
// console.log(students.address.zila);
// console.log(students["marks"]["mathamathic"]);
// const math = students.marks.mathamathic;

const subject = "mathamathic";
//If your propaties name is store in variable then you need to declare bracket notation===[]
// otherwise it is not working
// const subjectMark = students.marks.subject   ===  this is will be throw error
const subjectMark = students.marks[subject];
console.log(subjectMark);

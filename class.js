// syntactic sugar
class Instructor {
	name;
	designation = "Web Course Instructor";
	team = "Web Team";
	location;
	constructor(name, location) {
		this.name = name;
		this.location = location;
	}
	startSupportSession(time) {
		console.log(`Start the support session at ${time}`);
	}
	createQuize(module) {
		console.log(`create a quize for module ${module}`);
	}
	provideFeedback() {
		console.log(`${this.name} thank you for your feedback.`);
	}
}
const rasedClass = new Instructor();
// console.log(rasedClass);
// rasedClass.startSupportSession("09:30");
// rasedClass.createQuize(27);
const rahul = new Instructor("Rahul Molla", "Barishal");
rahul.provideFeedback();
console.log(rahul);

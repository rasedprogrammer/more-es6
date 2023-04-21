// syntactic sugar
class TeamMember {
	name;
	location;
	constructor(name, location) {
		this.name = name;
		this.location = location;
	}
	provideFeedback() {
		console.log(`${this.name} thank you for your feedback.`);
	}
}
class Instructor extends TeamMember {
	designation = "Web Course Instructor";
	team = "Web Team";
	constructor(name, location) {
		super(name, location);
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
// syntactic sugar
class Developer extends TeamMember {
	designation = "Web Course Instructor";
	team = "Web Team";
	tech;
	constructor(name, location, tech) {
		super(name, location);
		this.tech = tech;
	}
	developerFeature(feature) {
		console.log(`Please develop the ${feature}`);
	}
	release(virsion) {
		console.log(`Please release the virsion ${virsion}`);
	}
}
// syntactic sugar
class JobPlacement extends TeamMember {
	designation = "Job Placement Commandos";
	team = "Web Team";
	region;
	constructor(name, location, region) {
		super(name, location);
		this.region = region;
	}
	provideResume(feature) {
		console.log(`Please develop the ${feature}`);
	}
	prepareStudent(virsion) {
		console.log(`Please release the virsion ${virsion}`);
	}
}
const rased = new Developer("Rased", "Dhaka", "React Developer");
console.log(rased);
rased.provideFeedback();
const rahul = new JobPlacement("Rahul", "Barishal", "Bangladesh");
console.log(rahul);

// jekhan theke she inheritance kore oikhan theke she kisu data access korte pare
// Prototype Inheritance

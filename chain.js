const users = [
	{ id: 1, name: "John", email: "john@gmail.com", password: "nai" },
];
//console.log(users.name); // can not find users name because it's a array object
//console.log(users[0]); // it will be showing first object
//console.log(users[0].name); // now it will be showing users Name;

const data = {
	count: 5000,
	data: [
		{ id: 1, name: "John", email: "john@gmail.com", password: "nai" },
		{ id: 1, name: "Doe", email: "doe@gmail.com", password: "ace" },
		{ id: 1, name: "John", email: "john@gmail.com", password: "nai" },
	],
};

//console.log(data.data[1].email);
//console.log(data);
//console.log(data.data);
//console.log(data.data[1]);

const userData = {
	name: "John",
	email: "john@gmail.com",
	address: {
		road: "Mountain",
		lend: {
			latitude: -90.2349849,
			longitude: 23.2903849,
		},
	},
};

//console.log(userData);
//console.log(userData.address);
//console.log(userData.address.lend);
//console.log(userData.address.lend.longitude);
//console.log(userData.addres?.lend.longitude); // Optional Chain Method very needed usefull option
//console.log(userData.addres.lend.longitude); // undefined Errors

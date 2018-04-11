// function Person(name, age, city) {
// 	this.name = name;
// 	this.age = age;
// 	this.city = city;
// }

// Person.prototype.sayHello = function() {
// 	console.log(`Hello my name is ${this.name}. I am ${this.age} years old and I live in ${this.city}.`);
// };

class Person {
	constructor(name, age, city) {
		this.name = name;
		this.age = age;
		this.city = city;
	}
	sayHello() {
		console.log(`Hello my name is ${this.name}. I am ${this.age} years old and I live in ${this.city}.`);
	}
}

let p1 = new Person('Kalyn', 24, 'Hoover');
let p2 = new Person('Nick', 26, 'Hoover');
let p3 = new Person('Zack', 20, 'Leeds');
let p4 = new Person('Stephen', 31, 'Clanton');
let p5 = new Person('Marshay', 29, 'Bessemer');
p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();

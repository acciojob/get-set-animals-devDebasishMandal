//complete this code
class Animal {
	constructor(species){
		this.ip=species;
	}
	get species(){
		return this.ip;
	}
	makeSound(){
		console.log(`The ${this.species} makes a sound`)
	}
	
}

class Dog extends Animal {
	// constructor(){
	// 	super(species);
	// }
	
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	// constructor(){
	// 	super(species);
	// }
	purr(){
		console.log("purr");
	}
	
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

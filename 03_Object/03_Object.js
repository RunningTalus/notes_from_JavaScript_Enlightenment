//Conceptual Overview of Using Object() Objects

	var dave = new Object();
		//creates a new object with no properties
	for (key in dave) {
		if (dave.hasOwnProperty(key)){
			console.log(key);
				//no logs, no properties/empty object
		}
	}

//


//Object() Parameters

	var dave1 = new Object();
		console.log(dave1);
			//logs Object {}
			
	var dave2 = new Object(undefined);
		console.log(dave2);
			//logs Object {}

	var dave3 = new Object(null);
		console.log(dave3);
			//logs Object {}

	//IF a value besides null or undefined is passed to the Object() constructor, the value passed will be created as an object

	console.log(new Object('foo'));
		//logs String {0: "f", 1: "o", 2: "o", length: 3} 

	console.log(new Object(1));
		// logs Number {} 

	console.log(new Object([]));
		// logs []

	console.log(new Object(function() {}));
		//logs function() {}

	console.log(new Object(true));
		//logs Boolean {}

	console.log(new Object(/\bt[a-z]+\b/));
		//logs /\bt[a-z]+\b/ 

	//This is possible, but NEVER really done.  

//


//Object() Properties and Methods

	//The Object() object has the following properties (not including inherited properties and methods):

	//Properties (e.g., Object.prototype;);
		//prototype

//


//Object()Object Instance Properties and Methods

	//Instance Properties (QTY#1)
		//var myObject = {}; 
		//myObject.constructor();
		
		//constructor
		
	//Instance Methods (QTY#5)
		//var myObject = {};
		//myObject.toString();
		
		//hasOwnProperty();
		//isPrototypeOf();
		//propertyisEnumerable();
		//toLocaleString();
		//toString();
		//valueOf();

//


//Creating Object() Objects Using "Object Literals"

	//DOT notation

	var dave = new Object();
	dave.living = true;
	dave.age = 34;
	dave.gender = 'male';
	dave.getGender = function() {return dave.gender;}

	console.log(dave);
		//logs Object {living: true, age: 23, gender: "male", getGender: function}
			// age: 23
			// gender: "male"
			// getGender: function () {return dave.gender;}
			// living: true
			// __proto__: Object


	//Object Literals - THE preferred syntax for creating objects in JavaScript because of its terseness and readability

	var dave = {
		living: true,
		age: 23,
		gender: 'male',
		getGender: function() {return dave.gender;}
	};

	console.log(dave);
		//logs Object {living: true, age: 23, gender: "male", getGender: function}
			// age: 23
			// gender: "male"
			// getGender: function () {return dave.gender;}
			// living: true
			// __proto__: Object


	//Specifying Object Literal properties as strings
		//when a property name is a 'reserved word'
		//contains spaces or special characters
		//starts with a number

	var dave = {
		'living': true,
		'age': 23,
		'gender': 'male',
		'getGender': function() {return dave.gender;}
	};

	console.log(dave);
		//logs Object {living: true, age: 23, gender: "male", getGender: function}
			// age: 23
			// gender: "male"
			// getGender: function () {return dave.gender;}
			// living: true
			// __proto__: Object

	// NOTE: The last property of an object should NOT have a trailing comma!!! 

//


// All Objects Inherit From Object.prototype

	//augment the Object.prototype with a property foo
		Object.prototype.foo = 'foo';

			//create a string
				var myString = 'bar';

					//attempt to access the foo property of the string instance
						console.log(myString.foo);
							//logs foo
							
							//the myString instance does NOT have a foo property
								//the prototype chain is invoked and the value is looked for at the String.prototype
									//there is no value at the String.prototype
										//The foo value is found at Object.prototype.foo via the prototype chain, logging foo
	
//
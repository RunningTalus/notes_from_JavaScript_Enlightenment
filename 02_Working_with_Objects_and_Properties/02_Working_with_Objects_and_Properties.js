//02_Working_with_Objects_and_Properties.js

//Working with Objects and Properties

//Complex Objects Can Contain Most of the JavaScript Values as 02_Working_with_Objects_and_Properties

	var myObject = {};

	myObject.myFunction = function() {};
	console.log(myObject.myFunction);
	//logs function() {}

	myObject.myArray = [];
	console.log(myObject.myArray);
	//logs []

	myObject.myString = 'string';
	console.log(myObject.myString);
	//logs string

	myObject.myNumber = 34;
	console.log(myObject.myNumber);
	//logs 34

	myObject.myDate = new Date();
	console.log(myObject.myDate);
	//logs Mon May 05 2014 21:11:39 GMT-0600 (MDT) 

	myObject.myRegExp = /a/;
	console.log(myObject.myRegExp);
	//logs /a/

	myObject.myNull = null;
	console.log(myObject.myNull);
	//logs null

	myObject.myUndefined = undefined;
	console.log(myObject.myUndefined);
	//logs undefined

	myObject.myObject = {};
	console.log(myObject.myObject);
	//logs Object {}

	myObject.myMath_PI = Math.PI;
	console.log(myObject.myMath_PI);
	//logs 3.141592653589793

	myObject.myError = new Error('Crap!');
	console.log(myObject.myError);
	//logs Error {stack: (...), message: "Crap!"}

	//

	var myFunction = function() {};

	myFunction.myFunction = function() {};
	console.log(myFunction.myFunction);
	//logs function() {}

	myFunction.myArray = [];
	console.log(myFunction.myArray);
	//logs []

	myFunction.myString = 'string';
	console.log(myFunction.myString);
	//logs string

	myFunction.myNumber = 34;
	console.log(myFunction.myNumber);
	//logs 34

	myFunction.myDate = new Date();
	console.log(myFunction.myDate);
	//logs Mon May 05 2014 21:11:39 GMT-0600 (MDT) 

	myFunction.myRegExp = /a/;
	console.log(myFunction.myRegExp);
	//logs /a/

	myFunction.myNull = null;
	console.log(myFunction.myNull);
	//logs null

	myFunction.myUndefined = undefined;
	console.log(myFunction.myUndefined);
	//logs undefined

	myFunction.myObject = {};
	console.log(myFunction.myObject);
	//logs Object {}

	myFunction.myMath_PI = Math.PI;
	console.log(myFunction.myMath_PI);
	//logs 3.141592653589793

	myFunction.myError = new Error('Crap!');
	console.log(myFunction.myError);
	//logs Error {stack: (...), message: "Crap!"

//Encapsulating Complex Objects in a Programmatically Beneficial Way

	// Object(), Array(), and Function() objects can contain other complex objects

	// encapsulation using objects, creates object chains

	var object1 = {
		object1_1: {
			object1_1_1: {foo: 'bar'},
			object1_1_2: {},
		},
		object1_2: {
			object1_2_1: {},
			object1_2_2: {},
		}	
	};

	console.log(object1.object1_1.object1_1_1.foo);
		//logs bar

	//encapsulation using arrays, creates a multidimensional array chain

	var myArray = [[[]]];

	//encapsulation using functions

	var myFunction = function(){
		var myFunction = function(){
			var myFunction = function(){
			};
		};
	};

	//getting crazy with Arrays, Objects, and Functions...

	var foo = [{foo: [{ bar: {say: function() {return 'hi';}}}]}];
	console.log(foo[0].foo[0].bar.say());
	//logs hi


	//

//Getting/Setting/Updating an Object's Properties Using Dot Notation or Bracket Notation


//using Dot notation
var dave = new Object();

//setting properties

dave.living = true;
dave.age = 34;
dave.gender = 'male';
dave.getGender = function() {return dave.gender;};


//getting properties

console.log(dave.living);
//logs true

console.log(dave.age);
//logs 34

console.log(dave.gender);
//logs male

console.log(dave.getGender())
//logs male


//updating properties

dave.living = false;
dave.age = 99;
dave.gender = 'alien';
dave.getGender();

console.log(dave);
//logs Object {living: false, age: 99, gender: "alien", getGender: function}


//using Bracket notation
//creating the dave Object() object
var dave = new Object();

//setting properties
dave['living'] = true;
dave['age'] = 34;
dave['gender'] = 'male';
dave['getGender'] = function() {return dave.gender;};
//dave['getGender'] = function() {return dave['gender'];};

//getting properties

console.log(dave['living']);
//logs true

console.log(dave['age']);
//logs 34

console.log(dave['gender']);
//logs male

console.log(dave['getGender']()); //NOTE: just put the function invocation on the end!
//logs male

//
//Me messing around.  Are these the same thing?
// console.log(dave['getGender'] = function() {return dave.gender;});
//logs function () {return dave.gender;} 
// console.log(dave['getGender'] = function() {return dave['gender'];});
//logs function () {return dave['gender'];} 
//

//updating properties

dave['living'] = false;
dave['age'] = 99;
dave['gender'] = 'alien';
dave['getGender'] = function() {return 'gender = ' + dave.gender;};

console.log(dave);
//logs Object {living: false, age: 99, gender: "alien", getGender: function}

//

//Advantage of Bracket notation to access a property key when you have a variable that contains a string value representing the property name

var foobarObject = {foobar: 'Foobar is code for no code'};

var string1 = 'foo';
var string2 = 'bar';

console.log(foobarObject[string1 + string2]);
//logs Foobar is code for no code

//
//Bracket notation can be used to access property names that are invalid JavaScript identifiers (numbers and reserved words that are valid as strings).

var myObject = {'123':'zero', 'class':'foo'};
console.log(myObject['123'], myObject['class']);
//logs zero foo

//notes
	//object chaining
	//objects are mutable - meaning that you can get, set, or update them at any time.  
	//if a property inside an object is a mehthod, all you have to do is use the () operators [e.g., dave.getGender()] to invoke the property method.

//


//Deleting Object Properties





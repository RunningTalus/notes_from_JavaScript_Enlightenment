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
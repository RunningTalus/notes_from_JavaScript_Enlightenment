// Conceptual Overview of Using Function() Objects

	// A function is a container of code statements that can be invoked using the parentheses () operator.
	// Parameters can be passed inside of the the () during invocation so that the statements in the function can access certain values when the function is invoked. 

	// using a Constructor
	
	var addNumbersA = new Function ('num1', 'num2', 'return num1 + num2');
		console.log(addNumbersA(2,2));
			// logs 4


	// using a Literal - this is the more common way to code this

	var addNumbersB = function (num1, num2) {
		return num1 + num2;
	};

		console.log(addNumbersB(2,2));
			//logs 4

	// functions can be used to...
		// return a value
		// construct an object
		// or as a mechanism to run code

	// In its most basic form, a function is simply a unique scope of executable statements

//


// Function() Parameters

	// leveraging the Function constructor is NOT recommended
		// eval() will be needed to parse the string containing the function's logic

	// the first two parameters are available to the function being created
	// the last parameter passed to the Function constructor is a string containing statements that will make up the body of the function
	var addFunction = new Function ('num1', 'num2', 'return num1 + num2');
		console.log(addFunction(2,2));
			//logs 4

	// alternatively, a single comma-separated string with arguments can be the first parameter of the constructor
	// the last parameter passed to the Function constructor is a string containing statements that will make up the body of the function

	var timesFunction = new Function ('num1, num2', 'return num1 * num2');
		console.log(timesFunction(3,3));
			//logs 9

	// more commonly used patterns of instatiating a function object

	// expression form

	var addFunction2 = function (num1, num2) {
		return num1 + num2;
	};
		console.log(addFunction2(2,2));
			//logs 4

	//OR

	// statement form

	function addFunction2 (num1, num2) {
		return num1 + num2;
	};
		console.log(addFunction2(2,2));
			//logs 4

	// NO closure is created when invoking the Function() constructor directly

//


// Function() Properties and Methods

	// The function object has the following properties(not including inherited properties and methods):

		// Properties (e.g., Function.prototype;):
			// prototype

//


// Function Object Instance Properties and Methods

	// Instance Properties (QTY#3)
		// arguments
		// constructor
		// length

	// Instance Methods (QTY#3)
		// apply()
		// call()
		// toString()

//


// Functions Always Return a Value

	var sayHi = function () {
		return 'Hi';
	};

	console.log(sayHi());
		//logs Hi

	var yelp = function(){
		console.log('I am yelping!');
		//logs I am yelping!
	};

	console.log(yelp() === undefined);
		//logs true

//


// Functions Are First-Class Citizens (Not Just Syntax but Values)

	// Functions can be stored in
		// variables 
		// arrays 
		// objects

	var funcA = function(){};
		//called like so: funcA();

	var funcB = [function(){}];
		//called like so: funcB[0]();

	var funcC = {method: function(){}};
		// funcC.method()
		// or
		// funcC['method']();

	// functions can be sent to, and sent back from functions

	var funcD = function(func){
		return func;
	};

	var runFuncPassedToFuncD = funcD(function(){
		console.log('Hi');
	});

	runFuncPassedToFuncD();
		//logs Hi

	// functions are objects, which means they can have properties

	var funcE = function(){};

	funcE.answer = 'yup';

	console.log(funcE.answer);
		// logs yup

//


// Passing Parameters to a Function

// Parameters are vehicles for passing values into the scope of a function when it is invoked. 

	var addFunction = function(number1, number2){
		var sum = number1 + number2;
		return sum;
	};

	console.log(addFunction(3,3));
		//logs 6

//


// this and arguments Values Available To All Functions

	// inside the scope/body of all functions, the 'this' and 'arguments' values are available

	var add = function(){
		return arguments[0] + arguments[1];
	};

	console.log(add(4,4));
	//logs 8

	var myObject1 = {
		name: 'myObject1',
		myMethod: function(){
			console.log(this);
		}
	};

		myObject1.myMethod();
			//logs Object {name: "myObject1", myMethod: function}
	 
	var myObject2 = function(){
		console.log(this);
	}; 

		myObject2();
			//logs Window {top: Window, window: Window, location: Location, external: Object, chrome: Object…}

	//


	// The arguments.callee Property

	var foo = function foo() {
		console.log(arguments.callee);
	}();

	// recursively invokes foo and returns
		// function foo() {
		// 	console.log(arguments.callee);
		// } 

//


// The Function Instance length Property and arguments.length

	//the arguments object has a unique length property
		//it gives the number of parameters sent to the function during invocation

	var myFunction = function(z, s, d){
		return arguments.length;
	};
	console.log(myFunction());
		//logs 0, because no parameters were passed to the function

	//Using the length property of all Function() instances, we can grab the total number of parameters the function is expecting.

	var myFunction = function(a,b,c,d,e,f,g){
		return myFunction.length;
	};

	console.log(myFunction());
		//logs 7

//


// Redefining Function Parameters

	// A function's parameters can be redefined inside the function, or by using 'arguments' array

	var foo = false;
	var bar = false;

	var myFunction = function(foo, bar){
		arguments[0] = true;
		bar = true;
		console.log(arguments[0], bar);
	};

	myFunction();
		//logs true true

// 


// Return a Function Before It Is Done (Cancel Function Execution)

	var add = function(x, y){
		//if the parameters are not numbers, return error
		if (typeof x !== 'number' || typeof y !== 'number'){
			return 'pass in numbers';
		}
		return x + y;
	};

	console.log(add(3,3));
		//logs 6
	console.log(add('2', '2'));
		//logs pass in numbers

//


// Defining a Function (Statement, Expression, or Constructor) - QTY #3 ways

	var addConstructor = new Function('x', 'y', 'return x + y');
		console.log(addConstructor(2,2));
			//logs 4

	function addStatement (x,y) {
		return x+y;
	}
		console.log(addStatement(3,3));
			//logs 6

	var addExpression = function(x,y) {
		return x + y;
	};	
		console.log(addExpression(4,4));
			//logs 8

	//Okay and maybe a 4th way via a "Named Function Expression"

	var add = function add(x,y) {
		return x + y;
	};
		console.log(add(5,5));
			//logs 10

//


// Invoking a Function [Function, Method, Constructor, or call() and apply()]

	//QTY #4 function invocation patterns

		// As a function
		// As a method
		// As a constructor
		// Using apply() or call()

	// FUNCTION PATTERN

		var myFunction = function(){
			return 'foo';
		};
			console.log(myFunction());
				//logs foo


	// METHOD PATTERN

		var myObject = {myFunction: function(){
			return 'bar';
		}};
			console.log(myObject.myFunction());
				//logs bar


	// CONSTRUCTOR PATTERN

		var Dave = function(){
			this.living = true,
			this.age = 34,
			this.gender = 'male',
			this.getGender = function(){
				return this.gender;
			};
		};

		var dave = new Dave();
			console.log(dave);
				//logs Dave {living: true, age: 34, gender: "male", getGender: function}


	// APPLY() and CALL() PATTERN

		var greet = {
			runGreet: function(){
				console.log(this.name, arguments[0], arguments[1]);
			}
		};

		var dave = {name: 'dave'};
		var wilson = {name: 'wilson'};

		// CALL takes an object and two strings
		greet.runGreet.call(dave, 'is', 'learning');
			//logs dave is learning

		// APPLY takes an object and an array of strings
		greet.runGreet.apply(wilson, ['is a','dog']);
			//logs wilson is a dog

//


// Anonymous Functions

	// Anonymous functions do NOT have an identifier.
	// Anonymous functions are used for passing functions as a parameter to another function

	// Anonymous function, but we have NO way of invoking it
		
		// function() {
		// 	console.log('hi');
		// }

	// Create a function that can invoke the anonymous function
		
		var sayHi = function(f){
			f();
		};

	// Pass an anonymous function as a parameter
		
		sayHi(function(){
			console.log('hi');
				//logs hi
		});

//


// Self-invoking Function Expression

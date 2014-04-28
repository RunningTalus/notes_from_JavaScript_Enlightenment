//Creating Objects

	var dave = new Object();
	//use of Object Constructor function

	dave.living = true;
	dave.age = 34;
	dave.gender = 'male';

	console.log(dave); //logs Object{living = true, age = 34; gender = 'male'}

	dave.getGender = function(){return dave.gender;};

	console.log(dave.getGender()); //logs male


	//

	var myObject = new Object(); //produces an Object() Object
	myObject['0'] = 'f';
	myObject['1'] = 'o';
	myObject['2'] = 'o';

	console.log(myObject); //logs Object {0:"f", 1:"o", 2:"o"}


	var myString = new String('foo');  //produces a String() Object

	console.log(myString); //logs String {0:"f", 1: "o", 2: "o", length: 3}


	//

	var Person = function(living, age, gender) { //user-defined constructor function
		this.living = living;
		this.age = age;
		this.gender = gender;
		this.getGender = function() {return this.gender;};
	};

	var dave = new Person(true, 34, 'male');
	console.log(dave);  //logs Person {living: true, age: 34, gender: "male", getGender: function}

	var myString = new String('foo');
	console.log(myString);  //logs String {0:"f", 1: "o", 2: "o", length: 3}


	// example using an instance of the Object() constructor

	var daveA = new Object();
	daveA.living = true;
	daveA.age = 34;
	daveA.gender = 'male';
	daveA.getGender = function() {return daveA.gender;};

	console.log(daveA); //logs Object {living: true, age: 34, gender: "male", getGender: function}

	//example using the Person() constructor
	//Custom Objects created with the Person() constructor sets up prototypal inheritance for Person() instances.
	 
	var Person = function(living, age, gender) {
		this.living = living;
		this.age = age;
		this.gender = gender;
		this.getGender = function () {return this.gender};
	};

	var daveB = new Person(true, 34, 'male');
	console.log(daveB); //logs Person {living: true, age: 34, gender: "male", getGender: function}

//

//JavaScript Constructors Construct and Return Object Instances

	var Person = function Person(living, age, gender) {
		this.living = living;
		this.age = age;
		this.gender = gender;
		this.getGender = function() {return this.gender}
	};

	console.log(Person);  
	// logs the Person function 
		// function Person(living, age, gender) {
		// 	this.living = living;
		// 	this.age = age;
		// 	this.gender = gender;
		// 	this.getGender = function() {return this.gender}
		// } 

	var dave = new Person(true, 34, 'male');

	console.log(typeof dave); //logs object

	console.log(dave); //logs Person {living: true, age: 34, gender: "male", getGender: function}

	console.log(dave.constructor);
	//logs the Person function
		// 	function Person(living, age, gender) {
		// 	this.living = living;
		// 	this.age = age;
		// 	this.gender = gender;
		// 	this.getGender = function() {return this.gender}
		// } 


	// No different from the Array() constructor creating an Array() object.

	var myArray = new Array();

	console.log(typeof myArray); //logs object

	console.log(myArray); //logs []

	console.log(myArray.constructor); //logs function Array() { [native code] }

	//most values (excluding primitive values) involve objects being created, or instantiated from a constructor function.  

	//An object returned from a constructor is called an instance.  

//

//The JavaScript Native Built-in Object Constructors - There are 9 of them

	//Number()

	//String()

	//Boolean()

	//Object()

	//Array()

	//Function()

	//Date()

	//RegExp()

	//Error()

//

//User-Defined/Non-Native Object Constructors

	var Person = function(living, age, gender) {
		this.living = living;
		this.age = age;
		this.gender = gender;
		this.getGender = function() {return this.gender;};
	};

	var dave = new Person(true, 34, 'male');
	console.log(dave); //logs Person {living: true, age: 34, gender: "male", getGender: function}
	 
	var daria = new Person(true, 36, 'female');
	console.log(daria);  //logs Person {living: true, age: 36, gender: "female", getGender: function}

//

//Instantiating Constructors Using the new Operator

	var myString = new String('foo');
	console.log(myString);  //logs String {0: "f", 1: "o", 2: "o", length: 3} 

	//instantiate an instance for each native constructor using the new keyword.

	var myNumber = new Number(23);
	console.log(myNumber.constructor); 
	//logs function Number() { [native code] } 

	var myString = new String("hippopotamus");
	console.log(myString.constructor); 
	//logs function String() { [native code] } 

	var myBoolean = new Boolean(false);
	console.log(myBoolean.constructor); 
	//logs function Boolean() { [native code] } 

	var myObject = new Object();
	console.log(myObject.constructor);
	//logs function Object() { [native code] } 

	var myArray = new Array('JavaScript', 'Ruby' , 'Haskell');
	console.log(myArray.constructor);
	//logs function Array() { [native code] }

	var myFunction = new Function('x', 'y', 'return x*y');
	console.log(myFunction.constructor);
	//logs function Function() { [native code] }

	var myDate = new Date();
	console.log(myDate.constructor);
	//logs function Date() { [native code] }

	var myRegExp = new RegExp('\bt[a-z]+\b')
	console.log(myRegExp.constructor);
	//logs function RegExp() { [native code] }

	var myError = new Error('Throw ERROR');
	console.log(myError.constructor);
	//logs function Error() { [native code] } 

	//Math is a static object- a container for other methods, and is NOT a constructor that uses the "new" operator.  


//

//Creating Shorthand/Literal Values from Constructors


	//NOTE: NUMBER, STRING, and BOOLEAN, below are primitive values.

	var myNumber = new Number(23); //this is an object
	var myNumberLiteral = 23; //this is a primitive number value, not an object
	console.log(myNumber.constructor, myNumberLiteral.constructor);
	//logs function Number() { [native code] } function Number() { [native code] }


	var myString = new String('warm fuzzy'); //an object
	var myStringLiteral = 'warm fuzzy'; //this is a primitive string value, not an object
	console.log(myString.constructor, myStringLiteral.constructor);
	//logs function String() { [native code] } function String() { [native code] } 

	var myBoolean = new Boolean(false); //an object
	var myBooleanLiteral = false; //this is a primitive boolean value, not an object
	console.log(myBoolean.constructor, myBooleanLiteral.constructor);
	//logs function Boolean() { [native code] } function Boolean() { [native code] } 


	//NOTE: NUMBER, STRING, and BOOLEAN, above are primitive values.  

	var myObject = new Object();
	var myObjectLiteral = {};
	console.log(myObject.constructor, myObjectLiteral.constructor);
	//logs function Object() { [native code] } function Object() { [native code] } 


	var myArray = new Array('some', 'thing', 'here');
	var myArrayLiteral = ['some', 'thing', 'here'];
	console.log(myArray.constructor, myArrayLiteral.constructor);
	//logs function Array() { [native code] } function Array() { [native code] } 


	var myFunction = new Function('x', 'y', 'return x*y');
	var myFunctionLiteral = function(x,y) {return x*y};
	console.log(myFunction.constructor, myFunctionLiteral.constructor);
	//logs function Function() { [native code] } function Function() { [native code] } 

	var myRegExp = new RegExp('\bt[a-z]+\b');
	var myRegExpLiteral = /\bt[a-z]+\b/;
	console.log(myRegExp.constructor, myRegExpLiteral.constructor);
	//logs function RegExp() { [native code] } function RegExp() { [native code] } 


//

//Primitive (a.k.a Simple) Values
	//Primitive values are irreducible.  
	//number is a number
	//string is a string
	//boolean is either true or false
	//null is null
	//undefined is undefined

	var myString = 'string'
	console.log(myString); //logs string

	var myNumber = 10;
	console.log(myNumber); //logs 10

	var myBoolean = false;
	console.log(myBoolean); //logs false

	var myNull = null;
	console.log(myNull); //logs null

	var myUndefined = undefined;
	console.log(myUndefined); //logs undefined

	//

	var myObject = {
		myString: 'string',
		myNumber: 10,
		myBoolean: false,
		myNull: null,
		myUndefined: undefined
	};

	console.log(myObject);
	//logs Object {myString: "string", myNumber: 10, myBoolean: false, myNull: null, myUndefined: undefined} 

	var myArray = ['string', 10, false, null, undefined];
	console.log(myArray);
	//logs ["string", 10, false, null, undefined] 


//

//The Primitive Values null, undefined, "string", 10. true, and false Are NOT Objects

	var primitiveString1 = 'foo';
	var primitiveString2 = String('foo');
	console.log(typeof primitiveString1, typeof primitiveString2);
	//logs string string

	var primitiveNumber1 = 10;
	var primitiveNumber2 = Number('10');
	console.log(typeof primitiveNumber1, typeof primitiveNumber2);
	//logs number number

	var primitiveBoolean1 = true;
	var primitiveBoolean2 = Boolean('true');
	console.log(typeof primitiveBoolean1, typeof primitiveBoolean2);
	//logs boolean boolean

//using constructors and new keyword for creating objects

	var myNumber = new Number(23);
	console.log(typeof myNumber); 
	//logs object

	var myString = new String('male');
	console.log(typeof myString);
	//logs object

	var myBoolean = new Boolean(false);
	console.log(typeof myBoolean);
	//logs object

	var myObject = new Object();
	console.log(typeof myObject);
	//logs object

	var myArray = new Array('foo', 'bar');
	console.log(typeof myArray);
	//logs object

	var myFunction = new Function('x', 'y', 'return x*y');
	console.log(typeof myFunction);
	//logs function
	//Be Aware typeof returns function for ALL function objects

	var myDate = new Date();
	console.log(typeof myDate);
	//logs object

	var myRegExp = new RegExp('\\bt[a-z]+\\b');
	console.log(typeof myRegExp);
	//logs object

	var myError = new Error('Crap!');
	console.log(typeof myError);
	//logs object

//

//How Primitive Values Are Stored/Copied in JavaScript

	//primitive values are copied literally

	var myString = 'foo'
	var myStringCopy = myString;

	var myString = null;

	console.log(myString, myStringCopy);
	//logs null "foo"

//Primitive Values Are Equal by Value






















































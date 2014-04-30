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


//

//Primitive Values Are Equal by Value

	//Primitive Values are stored by VALUE
	//Complex Values are stored by REFERENCE

	var price1 = 10;
	var price2 = 10;
	var price3 = new Number('10');
	var price4 = price3;

	console.log(price1 === price2);
	//logs ture

	console.log(price1 === price3);
	//logs false
		//price1 is a primitive value, and price3 is a complex number object.

	console.log(price3 === price4);
	//logs true
		//complex values are equal by reference, NOT value

	price4 = 10;
	console.log(price4 === price3);
	//logs false
		//price4 is now a primitive value, NOT a complex number object.  


//

//The String, Number, and Boolean Primitive Values Act Like Objects When Used Like Objects

	var myNull = null;
	//console.log(myNull.toString());
	//logs Uncaught TypeError: Cannot read property 'toString' of null (anonymous function);

	var myUndefined = undefined;
	//console.log(myUndefined.toString());
	//logs Uncaught TypeError: Cannot read property 'toString' of undefined (anonymous function);

	var primitiveString1 = 'foo';
	console.log(primitiveString1.toString());
	//logs foo

	var primitiveString2 = String('foo');
	console.log(primitiveString2.toString());
	//logs foo

	var primitiveNumber1 = 10;
	console.log(primitiveNumber1.toString());
	//logs 10

	var primitiveNumber2 = Number('10');
	console.log(primitiveNumber2.toString());
	//logs 10

	var primitiveBoolean1 = true;
	console.log(primitiveBoolean1.toString());
	//logs true

	var primitiveBoolean2 = Boolean('true');
	console.log(primitiveBoolean2.toString());
	//logs true

	//Primitive Values: String, Number, and Boolean, are converted to objects to leverage the toString() method, and then are returned to primitive values once the method is invoked and returned.  


//

//Complex (a.k.a. Composite) Values

	//Native object constructors: Object(), Array(), Function(), Date(), Error(), and RegExp() are complex because they can contain ONE or MORE primitive of complex values.


	//COMPLEX/COMPOSITE VALUES BELOW

	var object = {
		myString: 'string',
		myNumber: 10,
		myBoolean: false,
		myNull: null,
		myUndefined: undefined
	};

	var array = ['string', 10, false, null, undefined];


	//PRIMITIVE VALUES BELOW: String, Number, Boolean, Null, and Undefined

	var myString = 'string';
	var myNumber = 10;
	var myBoolean = false;
	var myNull = null;
	var myUndefined = undefined;


//

//How Complex Values Are Stored/Copied in JavaScript

	var myObject = {};
	var copyOfMyObject = myObject;  //not copied by value, just the reference is copied

	myObject.foo = 'bar';

	console.log(myObject, copyOfMyObject);
	//logs Object {foo: "bar"} Object {foo: "bar"}

		//both objects have the foo property/key, because the REFERENCE the same object.
		//when you change a complex value, because it is stored in reference, you change the value stored in all variables that reference that complex value.


//

//Complex Objects Are Equal by Reference

	var objectFoo = {same: 'same'};
	var objectBar = {same: 'same'};

	console.log(objectFoo === objectBar);
	//logs false, JS does not care that they are identical and of the same object type


	var objectA = {foo: 'bar'};
	var objectB = objectA;

	console.log(objectA === objectB);
	//logs true because they reference the SAME object


//

//Complex Objects Have Dynamic Properties

	var objA = {property: 'value'};
	var pointer1 = objA;
	var pointer2 = pointer1;

	objA.property = null;
	console.log(objA);
	//logs object {property: null}

	console.log(objA.property, pointer1.property, pointer2.property);
	//logs null null null


//

//The typeof Operator Use on Primitive and Complex Values

	var myNull = null;
	console.log(typeof myNull);
	//logs object
		//BEWARE: this is NULL

	var myUndefined = undefined;
	console.log(typeof myUndefined);
	//logs undefined

	var primitiveString1 = "string";
	console.log(typeof primitiveString1);
	//logs string

	var primitiveString2 = String('string');
	console.log(typeof primitiveString2);
	//logs string

	var primitiveNumber1 = 10;
	console.log(typeof primitiveNumber1);
	//logs number

	var primitiveNumber2 = Number('10');
	console.log(typeof primitiveNumber2);
	//logs number

	var primitiveBoolean1 = true;
	console.log(typeof primitiveBoolean1);
	//logs boolean

	var primitiveBoolean2 = Boolean('true');
	console.log(typeof primitiveBoolean2);
	//logs boolean

	//COMPLEX VALUES

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

	var myFunction = new Function("x", "y", "return x * y");
	console.log(typeof myFunction);
	//logs function
		//BEWARE

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

//Dynamic Properties Allow for Mutable Objects

	String.augmentedProperties = [];
		//augment the built-in String constructor Function() with the augmentedProperties property

	//if the prototype does not have the trimIT() add it
	if (!String.prototype.trimIT) {	
		String.prototype.trimIT = function(){
		return this.replace(/^\s+|\s+$/g, '');
	}

	//now add trimIT string to the augmentedProperties array
	String.augmentedProperties.push('trimIT'); 
	}

	var myString = '    trim me    ';
	//invoke our custom trimIT string method
	console.log(myString.trimIT());
	//logs trim me

	console.log(String.augmentedProperties.join());
	//logs trimIT


//

//ALL Constructor Instances Have Constructor Properties that Point to Their Constructor Function

	var foo = {};

	console.log(foo.constructor === Object);
	//logs true, because object() constructed foo

	console.log(foo.constructor);
	//logs function Object() { [native code] } 
		//points to the Object() constructor function

	var myNumber = new Number('23');
	console.log(myNumber.constructor === Number);
	//logs true

	var myNumberLiteral = 23;
	console.log(myNumberLiteral.constructor === Number);
	//logs true

	var myString = new String ('male');
	console.log(myString.constructor === String);
	//logs true

	var myStringLiteral = 'male';
	console.log(myStringLiteral.constructor === String);
	//logs true

	var myBoolean = new Boolean('true');
	console.log(myBoolean.constructor === Boolean);
	//logs true

	var myBooleanLiteral = true;
	console.log(myBooleanLiteral.constructor === Boolean);
	//logs true

	var myObject = new Object();
	console.log(myObject.constructor === Object);
	//logs true

	var myObjectLiteral = {};
	console.log(myObjectLiteral.constructor === Object);
	//logs true

	var myArray = new Array();
	console.log(myArray.constructor === Array);
	//logs true

	var myArrayLiteral = [];
	console.log(myArrayLiteral.constructor === Array);
	//logs true

	var myFunction = new Function();
	console.log(myFunction.constructor === Function);
	//logs true

	var myFunctionLiteral = function() {};
	console.log(myFunctionLiteral.constructor === Function);
	//logs true

	var myDate = new Date();
	console.log(myDate.constructor === Date);
	//logs true

	var myRegExp = new RegExp('/./');
	console.log(myRegExp.constructor === RegExp);
	//logs true

	var myRegExpLiteral = /./;
	console.log(myRegExpLiteral.constructor === RegExp);
	//logs true

	var myError = new Error;
	console.log(myError.constructor === Error);
	//logs true

//

	var CustomConstructor = function CustomConstructor(){ return 'Wow!'; };
	var instanceOfCustomObject = new CustomConstructor();

	console.log(instanceOfCustomObject.constructor === CustomConstructor);
	//logs true

	console.log(instanceOfCustomObject.constructor);
	//logs function CustomConstructor(){ return 'Wow!'; } 
		//returns a reference to the CustomConstructor() function


//

//Verify that an Object Is an Instance of a Particular Constructor Function

	var CustomConstructor = function() {this.foo = 'bar';}; 
	//user defined object constructor

	var instanceOfCustomObject = new CustomConstructor(); 
	//instantiate an instance of CustomConstructor

	console.log(instanceOfCustomObject instanceof CustomConstructor);
	//logs true

	//works the same as a native object
	console.log(new Array('foo') instanceof Array);
	//logs true

	console.log('foo' instanceof String);
	//logs false

	//the instanceof operator will return false when dealing with primitive values that leverage object wrappers.

	//the instanceof operator only works with complex objects and instances created from constructor functions that return objects.  


//

//An Instance Created From a Constructor Can Have Its Own Independent Properties (Instance Properties)

	var myArray = new Array();
	myArray.prop = 'test';
	console.log(myArray.prop);
	//logs test

	//This can be done with all non-primitive constructors.
	var myString = new String();
	myString.prop = 'test';
	console.log(myString.prop);
	//logs test

	var myNumber = new Number();
	myNumber.prop = 'test';
	console.log(myNumber.prop);
	//logs test

	var myBoolean = new Boolean();
	myBoolean.prop = 'test';
	console.log(myBoolean.prop);
	//logs test

	var myObject = new Object();
	myObject.prop = 'test';
	console.log(myObject.prop);
	//logs test

	var myArray = new Array();
	myArray.prop = 'test';
	console.log(myArray.prop);
	//logs test

	var myFunction = new Function('return 2+2');
	myFunction.prop = 'test';
	console.log(myFunction.prop);
	//logs test

	var myRegExp = new RegExp('\bt[a-z]+\b');
	myRegExp.prop = 'test';
	console.log(myRegExp.prop);
	//logs test

	//BEWARE: Instance properties do NOT work with primitive/literal values.  

	var myString = 'string';
	myString.prop = true;
	console.log(myString.prop);
	//logs undefined

	var myNumber = 1;
	myNumber.prop = true;
	console.log(myNumber.prop);
	//logs undefined

	var myBoolean = true;
	myBoolean.prop = true;
	console.log(myBoolean.prop);
	//logs undefined


//

//The Semantics  of "JavaScript Objects" and "Object()Objects"

	//The Object() constructor function productes an empty generic object container, which is referred to as an "Object() object."
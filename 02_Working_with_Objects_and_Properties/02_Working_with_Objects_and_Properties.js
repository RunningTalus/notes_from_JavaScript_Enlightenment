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

	//dave['getGender'] = function() {return dave.gender;};
		// console.log(dave['getGender'] = function() {return dave.gender;});
			//logs function () {return dave.gender;} 

	//dave['getGender'] = function() {return dave['gender'];}		
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
		//if a property inside an object is a method, all you have to do is use the () operators [e.g., dave.getGender()] to invoke the property method.

//


//Deleting Object Properties

	var foo = {bar: 'bar'};
		console.log('bar' in foo); 
		//logs true
	delete foo.bar;

	console.log('bar' in foo);
		//logs false

	//NOTE: Delete will not delete properties on the prototype chain
		//Delete is the only way to actually remove a property from an object

//


//How References to Object Properties Are Resolved

	var myArray = [];
	console.log(myArray.foo);
		//logs undefined

			//JavaScript will look for it in Array.prototype.foo
				//It then checks for the object instance in Object.prototype (a.k.a ___proto___) to find the constructor function that created the instance.  
				//a function is an object with properties

	var myArray = ['foo','bar'];
	console.log(myArray.join());
		//logs foo,bar
			//the join() method is defined at Array.prototype.join

	console.log(myArray.hasOwnProperty('join'));
		//logs false

	console.log(myArray.toLocaleString());
		//logs foo,bar
		
			//toLocaleString() is NOT defined within the myArray Object
				//toLocaleString() is NOT defined on the Array.prototype
					//toLocaleString() is defined at Object.prototype.toLocaleString
					//if the toLocaleString() method had not been found on the Object it would have logged undefined
			
			//All prototype properties are objects

//


//Using hasOwnProperty, Verify That an Object Property Is Not From the Prototype Chain

	var myObject = {foo: 'value'};
		//ask myObject if it has its own property foo

	console.log(myObject.hasOwnProperty('foo'));
		//logs true

		//hasOwnPropertycan check an Object for a property that is NOT inheriting the property from the protoype chain.  

//


//Checking If an Object Contains a Given Property Using the 'in' Operator

		//the 'in' operator can check for properties of an object, including properties from the prototype chain
			//returns a boolean (true or false) value

	var myObject = {foo: 'value'};

	console.log('foo' in myObject);
		//logs true

	//toString was never defined on myObject, but is inherited from the prototype chain (Object.prototype.toString)

	console.log('toString' in myObject);
		//logs true

//


//Enumerate (Loop Over) an Object's Properties using the 'for in' Loop

	var dave = {
		age: 34,
		gender: 'male'
	};

	for (key in dave) {
		if (dave.hasOwnProperty(key)){
			console.log(key);
				//logs age
				//logs gender
		}
	}

	//'key' is a variable used to represent each property name
	//avoid properties inherited from the prototype chain by using an 'if' statement

	//NOTE: Look up 'propertyisEnumerable()' method

//


//Host Objects versus Native Objects

//Host objects are not part of the ECMAScript, but ARE available as objects during execution

for (x in window) {
	console.log(x);
}

	//logs all of the properties of the window/head object (QTY#187 in Chrome Version 35.0.1916.114)

	// top 
	// window 
	// location 
	// external 
	// chrome 
	// document 
	// $ 
	// jQuery 
	// myObject 
	// myFunction 
	// object1 
	// myArray 
	// foo 
	// dave 
	// foobarObject 
	// string1 
	// string2 
	// key 
	// speechSynthesis 
	// localStorage 
	// sessionStorage 
	// applicationCache 
	// webkitStorageInfo 
	// indexedDB 
	// webkitIndexedDB 
	// crypto 
	// CSS 
	// performance 
	// console 
	// devicePixelRatio 
	// styleMedia 
	// parent 
	// opener 
	// frames 
	// self 
	// defaultstatus 
	// defaultStatus 
	// status 
	// name 
	// length 
	// closed 
	// pageYOffset 
	// pageXOffset 
	// scrollY 
	// scrollX 
	// screenTop 
	// screenLeft 
	// screenY 
	// screenX 
	// innerWidth 
	// innerHeight 
	// outerWidth 
	// outerHeight 
	// offscreenBuffering 
	// frameElement 
	// clientInformation 
	// navigator 
	// toolbar 
	// statusbar 
	// scrollbars 
	// personalbar 
	// menubar 
	// locationbar 
	// history 
	// screen 
	// postMessage 
	// close 
	// blur 
	// focus 
	// ondeviceorientation 
	// ondevicemotion 
	// onunload 
	// onstorage 
	// onpopstate 
	// onpageshow 
	// onpagehide 
	// ononline 
	// onoffline 
	// onmessage 
	// onhashchange 
	// onbeforeunload 
	// onwaiting 
	// onvolumechange 
	// ontimeupdate 
	// onsuspend 
	// onsubmit 
	// onstalled 
	// onshow 
	// onselect 
	// onseeking 
	// onseeked 
	// onscroll 
	// onresize 
	// onreset 
	// onratechange 
	// onprogress 
	// onplaying 
	// onplay 
	// onpause 
	// onmousewheel 
	// onmouseup 
	// onmouseover 
	// onmouseout 
	// onmousemove 
	// onmouseleave 
	// onmouseenter 
	// onmousedown 
	// onloadstart 
	// onloadedmetadata 
	// onloadeddata 
	// onload 
	// onkeyup 
	// onkeypress 
	// onkeydown 
	// oninvalid 
	// oninput 
	// onfocus 
	// onerror 
	// onended 
	// onemptied 
	// ondurationchange 
	// ondrop 
	// ondragstart 
	// ondragover 
	// ondragleave 
	// ondragenter 
	// ondragend 
	// ondrag 
	// ondblclick 
	// oncuechange 
	// oncontextmenu 
	// onclose 
	// onclick 
	// onchange 
	// oncanplaythrough 
	// oncanplay 
	// oncancel 
	// onblur 
	// onabort 
	// onwheel 
	// onwebkittransitionend 
	// onwebkitanimationstart 
	// onwebkitanimationiteration 
	// onwebkitanimationend 
	// ontransitionend 
	// onsearch 
	// getSelection 
	// print 
	// stop 
	// open 
	// showModalDialog 
	// alert 
	// confirm 
	// prompt 
	// find 
	// scrollBy 
	// scrollTo 
	// scroll 
	// moveBy 
	// moveTo 
	// resizeBy 
	// resizeTo 
	// matchMedia 
	// getComputedStyle 
	// getMatchedCSSRules 
	// webkitConvertPointFromPageToNode 
	// webkitConvertPointFromNodeToPage 
	// requestAnimationFrame 
	// cancelAnimationFrame 
	// webkitRequestAnimationFrame 
	// webkitCancelAnimationFrame 
	// webkitCancelRequestAnimationFrame 
	// captureEvents 
	// releaseEvents 
	// atob 
	// btoa 
	// setTimeout 
	// clearTimeout 
	// setInterval 
	// clearInterval 
	// TEMPORARY 
	// PERSISTENT 
	// webkitRequestFileSystem 
	// webkitResolveLocalFileSystemURL 
	// openDatabase 
	// addEventListener 
	// removeEventListener 
	// dispatchEvent

//

for (x in window.document) {
	console.log();
}
	//doesn't log anything

//


// Enhancing and Extending Objects with Underscore.js
	
	// These functions work on all objects and arrays:

		// each()
		// map()
		// reduce()
		// reduceRight()
		// detect()
		// select()
		// reject()
		// all()
		// any()
		// include()
		// invoke()
		// pluck()
		// max()
		// min()
		// sortBy()
		// sortIndex()
		// toArray()
		// size()

	// These functions work on all objects:
	
		// keys()
		// values()
		// functions()
		// extend()
		// clone()
		// tap()
		// isEqual()
		// isEmpty()
		// isElement()
		// isArray()
		// isArguments
		// isFunction()
		// isString()
		// isNumber
		// isBoolean
		// isDate
		// isRegExp
		// isNaN
		// isNull
		// isUndefined
/*
 * Showing the output by copiing each codeblock and paste it into
 * your browsers console
 *
 * after -> I will show you the console output
 *
 */

// Types of variables in javascript
// --------------------------------

// Find out the type of an thing
// --------------------------------

// -> "object"
typeof {};

// -> "string"
typeof typeof {};

// You can use typeof as a function
// -> "object"
typeof({});

// What type is a variable
var someObject = {};
// -> "object"
typeof someObject;

// What type is a undefined variable
// -> "undefined"
typeof someUndefinedVar;

// Strings
// --------------------------------

// -> "string"
typeof 'Hello';

// A variable with typeof string
var someString = 'Hello';
// -> "string"
typeof someString;

// Numbers
// --------------------------------

// -> "number"
typeof 1;

// -> "number"
typeof 1.34354;

// -> "number"
typeof 1.445e7;

// -> "number"
typeof 1.445e-7;

// A hex number
// -> "number"
typeof 0xFF;

// infinity
// -> "number"
typeof Infinity;

// -> "number"
typeof -344;

// A big integer
// -> "number"
typeof 238983949394334734239239729472987489274;

// A float
// -> "number"
typeof 1.787287387925435435355543535355354353554;

// A variable with typeof float
var float = 1.787287387925435435355543535355354353554;
// -> "number"
typeof float;

// Cast a string to number part 1
var newfloat = "1.787287387925435435355543535355354353554";
// -> "string"
typeof newfloat;

// Cast a string to number part 2
// -> "number"
typeof Number(newfloat);

// Objects
// --------------------------------

// A new instance of object
// -> "object"
typeof new Object();

// Shorthand for a new instance of an object
// -> "object"
typeof {};

// Arrays are also instances of object
// -> "object"
typeof new Array();

// Shorthand for an new Array
// -> "object"
typeof [];

// A variable with typeof object
var anObject = {};
// -> "object"
typeof anObject;

// Classes ES5
// --------------------------------

// A class in ES5
// -> "function"
typeof function() {
  this.constructor = function() {
    console.log('Hello');
  };
};

// Store a class into a variable, Variant 1
var someClassEs51 = function() {
  this.constructor = function() {
    console.log('Hello');
  };
};
// -> "function"
typeof someClassEs51;

// Store a class into a variable, Variant 2
function someClassEs52 () {
  this.constructor = function() {
    console.log('Hello');
  };
};
// -> "function"
typeof someClassEs52;

// Classes ES6
// --------------------------------

// A class in ES6
// -> "function"
typeof class {
    constructor () {
        console.log('Hello')
    }
}

// Store a class into a variable, Variant 1
var someClassEs61 = class {
    constructor () {
        console.log('Hello')
    }
}
// -> "function"
typeof someClassEs61;

// Store a class into a variable, Variant 2
class someClassEs62 {
    constructor () {
        console.log('Hello')
    }
}
// -> "function"
typeof someClassEs62;

// Boolean
// --------------------------------

// true
// -> "boolean"
typeof true;

// false
// -> "boolean"
typeof false;

// a expression
// -> "boolean"
typeof (1 === 1);

// a operation
// -> "boolean"
typeof ("Hello world".includes("world"));

// Wrong, this is a string
// -> "string"
typeof "false";

// Wrong, this is a number
// -> "number"
typeof 0;

// A variable with typeof boolean
var aBoolean = true;
// -> "boolean"
typeof aBoolean;

// Null
// --------------------------------

// null
// -> "object"
typeof null;

// A variable with typeof null
var aNull = null;
// -> "object"
typeof aNull;

// Functions
// --------------------------------

// A anonymous function
// -> "function"
typeof function() {};

// A named function
function aNewFuntion() {};
// -> "function"
typeof aNewFuntion;

// A named function, by storing it into a string
var anotherFunction = function() {};
// -> "function"
typeof anotherFunction;

// A named function, by storing it into a string
var aThirdFunction = new Function();
// -> "function"
typeof aThirdFunction;

// undefined
// --------------------------------

// undefined as thing
// -> "undefined"
typeof undefined;

// undefined can be a value
var nope = undefined;
// -> "undefined"
typeof nope;

// a undefined variable
var someThing;
// -> "undefined"
typeof someThing;

// a undefined variable
// -> "undefined"
typeof someundefinedThing;

// a variable with the value undefined is save to use
var newNope = undefined;
// -> undefined
newNope;

// a initialiced but undefined variable without value is save to use
var newUndefined;
// -> undefined
newUndefined;

// a not initialiced variable is not save to use
// -> ReferenceError
someOtherUndefinedThing;

// you can not use a not initaliced variable in an operation
someOtherUndefinedThing === undefined

// Casting to Boolean
// --------------------------------

// Number 0 casting to false
// -> false
Boolean(0);

// Number 1 casting to true
// -> true
Boolean(1);

// Empty String casting to false
// -> false
Boolean('');

// String casting to true
// -> true
Boolean('false');

// String casting to true
// -> true
Boolean('true');

// String casting to false
// -> false
Boolean(null);

// Empty object casting to true
// -> true
Boolean({});

// Empty array casting to true
// -> true
Boolean([]);

// undefined casting to false
// -> false
Boolean(undefined);

// Infinity casting to true
// -> true
Boolean(Infinity);

// Empty function casting to true
// -> true
Boolean(function() {});

// Expressions
// --------------------------------

// == casts automaticly
// === is not casting

// -> true
1 == 1

// -> true
true == 1

// -> false
true === 1

// -> true
false == 0

// -> false
false === 0

// -> false
"false" == 0

// -> false
"true" == 0

// -> true
"false" == 1

// -> true
"true" == 1

// -> false
"false" === 0

// -> false
"true" === 0

// -> false
"false" === 1

// -> false
"true" === 1


// What is prototyping
// --------------------------------

// Everything in JavaScript is Object
// Every Object in JavaScript has a prototype

// Example: String
// --------------------------------

// Initialice a string
var thisIsAString = ' Hello ';
// -> "string"
typeof thisIsAString;

// Now use a prototype function with the string object
// -> "Hello"
thisIsAString.trim();


// So you can use Classes to create new objects
// --------------------------------

// A new instace of the class someClass
var anotherClass = function() {
  this.constructor = function() {
    console.log('Hello');
  };
};

var newObjectFromAnotherClass = new anotherClass();
// -> "object"
typeof newObjectFromAnotherClass;

// -> true
newObjectFromAnotherClass instanceof anotherClass;

// Adding some prototype to the class

// -> "undefined"
typeof newObjectFromAnotherClass.getHello;

anotherClass.prototype.getHello = function() { console.log('Hello'); };

// -> "function"
typeof newObjectFromAnotherClass.getHello;

// -> Hello
newObjectFromAnotherClass.getHello();

// Overwrite the prototype in the object instance

newObjectFromAnotherClass.getHello = function() { console.log('Horrey'); };

// -> "function"
typeof newObjectFromAnotherClass.getHello;

// -> Horrey
newObjectFromAnotherClass.getHello();

// Delete the function
delete newObjectFromAnotherClass.getHello;

// -> "function"
typeof newObjectFromAnotherClass.getHello;

// -> Hello
newObjectFromAnotherClass.getHello();

// You can only extend objects and classes (arrays also, but they are objects) with more properties

var cantExtendString = ' Hello ';

// -> " Hello "
cantExtendString;

// -> "string"
typeof cantExtendString;

// -> "Hello"
cantExtendString.trim();

// This would not work
cantExtendString.someProperty = 'String Value';

// -> "undefined"
typeof cantExtendString.someProperty;

// -> undefined
cantExtendString.someProperty;

// What is the scope
// --------------------------------

// Examples

// use your own scope with anonymous Functions

// only a anonymous function, it does nothing

// -> Syntax error
function() { console.log('Never printed string'); };

// This is executing everything what is written in your scope
(function() {

  // Your own scope

})();

// Call a anonymous function with parameters
(function(parameter1) {

  // -> Hello
  console.log(parameter1);

})('Hello');

// The thing with global and local variables
var globalVar = 'Me';

(function(localVar) {

  // -> "Me"
  console.log(localVar);

  localVar = "Not me";

  // -> "Not me"
  console.log(localVar);

  // -> undefined
  console.log(globalVar);

  // -> "Me"
  console.log(window.globalVar);

  var globalVar = "Blub";

  // -> "Blub"
  console.log(globalVar);

})(globalVar);

// The thing with "use strict"

// This will cause a Uncaught ReferenceError and undefined
(function() {

  "use strict";

  // -> Uncaught ReferenceError
  newGlobalVarWithStrict = 'Something';

})();

// -> Uncaught ReferenceError
newGlobalVarWithStrict;

// But ...

(function() {

  newGlobalVar = 'Something';

})();
// -> "Something";
newGlobalVar;

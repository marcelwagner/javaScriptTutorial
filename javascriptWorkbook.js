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

typeof {};
// -> "object"

typeof typeof {};
// -> "string"

// You can use typeof as a function
typeof({});
// -> "object"

// What type is a variable
var someObject = {};
typeof someObject;
// -> "object"

// What type is a undefined variable
typeof someUndefinedVar;
// -> "undefined"

// Strings
// --------------------------------

typeof 'Hello';
// -> "string"

// A variable with typeof string
var someString = 'Hello';
typeof someString;
// -> "string"

// Numbers
// --------------------------------

typeof 1;
// -> "number"

typeof 1.34354;
// -> "number"

typeof 1.445e7;
// -> "number"

typeof 1.445e-7;
// -> "number"

// A hex number
typeof 0xFF;
// -> "number"

// infinity
typeof Infinity;
// -> "number"

// And to set a number var to no number
typeof NaN;
// -> "number"

typeof -344;
// -> "number"

// A big integer
typeof 238983949394334734239239729472987489274;
// -> "number"

// A float
typeof 1.787287387925435435355543535355354353554;
// -> "number"

// A variable with typeof float
var float = 1.787287387925435435355543535355354353554;
typeof float;
// -> "number"

// Cast a string to number part 1
var newfloat = "1.787287387925435435355543535355354353554";
typeof newfloat;
// -> "string"

// Cast a string to number part 2
typeof Number(newfloat);
// -> "number"

// Objects
// --------------------------------

// A new instance of object
typeof new Object();
// -> "object"

// Shorthand for a new instance of an object
typeof {};
// -> "object"

// Arrays are also instances of object
typeof new Array();
// -> "object"

// Shorthand for an new Array
typeof [];
// -> "object"

// But then, how to find out, if a var is an Array?
var anArray = [];
// There is a new static function that is part of ES 5.1
Array.isArray(anArray);
// -> true

// A variable with typeof object
var anObject = {};
typeof anObject;
// -> "object"

// Classes ES5
// --------------------------------

// A class in ES5
typeof function() {
  this.constructor = function() {
    console.log('Hello');
  };
};
// -> "function"

// Store a class into a variable, Variant 1
var someClassEs51 = function() {
  this.constructor = function() {
    console.log('Hello');
  };
};
typeof someClassEs51;
// -> "function"

// Store a class into a variable, Variant 2
function someClassEs52 () {
  this.constructor = function() {
    console.log('Hello');
  };
};
typeof someClassEs52;
// -> "function"

// Classes ES6
// --------------------------------

// A class in ES6
typeof class {
    constructor () {
        console.log('Hello')
    }
}
// -> "function"

// Store a class into a variable, Variant 1
var someClassEs61 = class {
    constructor () {
        console.log('Hello')
    }
}
typeof someClassEs61;
// -> "function"

// Store a class into a variable, Variant 2
class someClassEs62 {
    constructor () {
        console.log('Hello')
    }
}
typeof someClassEs62;
// -> "function"

// Boolean
// --------------------------------

// true
typeof true;
// -> "boolean"

// false
typeof false;
// -> "boolean"

// a expression
typeof (1 === 1);
// -> "boolean"

// a operation
typeof ("Hello world".includes("world"));
// -> "boolean"

// Wrong, this is a string
typeof "false";
// -> "string"

// Wrong, this is a number
typeof 0;
// -> "number"

// A variable with typeof boolean
var aBoolean = true;
typeof aBoolean;
// -> "boolean"

// Null
// --------------------------------

// null
typeof null;
// -> "object"

// A variable with typeof null
var aNull = null;
typeof aNull;
// -> "object"

// Functions
// --------------------------------

// A anonymous function
typeof function() {};
// -> "function"

// A named function
function aNewFuntion() {};
typeof aNewFuntion;
// -> "function"

// A named function, by storing it into a string
var anotherFunction = function() {};
typeof anotherFunction;
// -> "function"

// A named function, by storing it into a string
var aThirdFunction = new Function();
typeof aThirdFunction;
// -> "function"

// undefined
// --------------------------------

// undefined as thing
typeof undefined;
// -> "undefined"

// undefined can be a value
var nope = undefined;
typeof nope;
// -> "undefined"

// a undefined variable
var someThing;
typeof someThing;
// -> "undefined"

// a undefined variable
typeof someundefinedThing;
// -> "undefined"

// a variable with the value undefined is save to use
var newNope = undefined;
newNope;
// -> undefined

// a initialiced but undefined variable without value is save to use
var newUndefined;
newUndefined;
// -> undefined

// a not initialiced variable is not save to use
someOtherUndefinedThing;
// -> ReferenceError

// you can not use a not initaliced variable in an operation
someOtherUndefinedThing === undefined

// Casting to Boolean
// --------------------------------

// Number 0 casting to false
Boolean(0);
// -> false

// Number 1 casting to true
Boolean(1);
// -> true

// Empty String casting to false
Boolean('');
// -> false

// String casting to true
Boolean('false');
// -> true

// String casting to true
Boolean('true');
// -> true

// String casting to false
// -> false
Boolean(null);

// Empty object casting to true
Boolean({});
// -> true

// Empty array casting to true
Boolean([]);
// -> true

// undefined casting to false
Boolean(undefined);
// -> false

// Infinity casting to true
Boolean(Infinity);
// -> true

// Empty function casting to true
Boolean(function() {});
// -> true

// Expressions
// --------------------------------

// == casts automaticly
// === no automatic casting

1 == 1
// -> true

true == 1
// -> true

true === 1
// -> false

false == 0
// -> true

false === 0
// -> false

"false" == 0
// -> false

"true" == 0
// -> false

"false" == 1
// -> true

"true" == 1
// -> true

"false" === 0
// -> false

"true" === 0
// -> false

"false" === 1
// -> false

"true" === 1
// -> false


// What is prototyping
// --------------------------------

// Everything in JavaScript is Object
// Every Object in JavaScript has a prototype

// Example: String
// --------------------------------

// Initialice a string
var thisIsAString = ' Hello ';
typeof thisIsAString;
// -> "string"

// Now use a prototype function with the string object
thisIsAString.trim();
// -> "Hello"


// So you can use Classes to create new objects
// --------------------------------

// A new instace of the class someClass
var anotherClass = function() {
  this.constructor = function() {
    console.log('Hello');
  };
};

var newObjectFromAnotherClass = new anotherClass();
typeof newObjectFromAnotherClass;
// -> "object"

newObjectFromAnotherClass instanceof anotherClass;
// -> true

// Adding some prototype to the class

typeof newObjectFromAnotherClass.getHello;
// -> "undefined"

anotherClass.prototype.getHello = function() { console.log('Hello'); };

typeof newObjectFromAnotherClass.getHello;
// -> "function"

newObjectFromAnotherClass.getHello();
// -> Hello

// Overwrite the prototype in the object instance

newObjectFromAnotherClass.getHello = function() { console.log('Horrey'); };

typeof newObjectFromAnotherClass.getHello;
// -> "function"

newObjectFromAnotherClass.getHello();
// -> Horrey

// Delete the function
delete newObjectFromAnotherClass.getHello;

typeof newObjectFromAnotherClass.getHello;
// -> "function"

newObjectFromAnotherClass.getHello();
// -> Hello

// You can only extend objects and classes (arrays also, but they are objects) with more properties

var cantExtendString = ' Hello ';

cantExtendString;
// -> " Hello "

typeof cantExtendString;
// -> "string"

cantExtendString.trim();
// -> "Hello"

// This would not work
cantExtendString.someProperty = 'String Value';

typeof cantExtendString.someProperty;
// -> "undefined"

cantExtendString.someProperty;
// -> undefined

// What is the scope
// --------------------------------

// Examples

// use your own scope with anonymous Functions

// only a anonymous function, it does nothing

// -> Syntax error
function() { console.log('Never printed string'); };

// This is executing everything what is written in your anonymous function -> your own scope
(function() {
  
  // Your own scope
  
})();

// In ES6 you can have your own scope by using curly brakets
{
  
  // Your own scope
  
}

// Call a anonymous function with parameters
(function(parameter1) {

  console.log(parameter1);

})('Hello');
// -> Hello

// The thing with global and local variables
var globalVar = 'Me';

(function(localVar) {

  console.log(localVar);
  // -> "Me"

  localVar = "Not me";

  console.log(localVar);
  // -> "Not me"

  console.log(globalVar);
  // -> undefined

  console.log(window.globalVar);
  // -> "Me"

  var globalVar = "Blub";

  console.log(globalVar);
  // -> "Blub"

})(globalVar);

console.log(globalVar);
// -> "Me"

// The thing with "use strict"

// This will cause a Uncaught ReferenceError and undefined
(function() {

  "use strict";

  newGlobalVarWithStrict = 'Something';

})();
// -> Uncaught ReferenceError

newGlobalVarWithStrict;
// -> Uncaught ReferenceError

// But ...

(function() {

  newGlobalVar = 'Something';

})();

newGlobalVar;
// -> "Something";

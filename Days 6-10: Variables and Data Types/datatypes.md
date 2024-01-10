# JavaScript Data Types

JavaScript has the primitive data types:

1. ```null```
2. ```undefined```
3. ```boolean```
4. ```number```
5. ```string```
6. ```symbol``` – available from ES2015
7. ```bigint``` – available from ES2020

and a complex data type ```object.```

JavaScript is a dynamically typed language. It means that a [variable](Variables.md) doesn’t associate with a type. In other words, a variable can hold a value of different types.

For example

```js
let counter = 120; // counter is a number
counter = false;   // counter is now a boolean
counter = "foo";   // counter is now a string
```

To get the current type of the value that the variable stores, you use the `typeof` operator:

```js
let counter = 120;
console.log(typeof(counter)); // "number"

counter = false; 
console.log(typeof(counter)); // "boolean"

counter = "Hi";
console.log(typeof(counter)); // "string"
```

## The undefined type

The `undefined` type is a primitive type that has only one value `undefined`. By default, when a variable is declared but not initialized, it is assigned the value of `undefined`.

For example.
```js
let counter;
console.log(counter);        // undefined
console.log(typeof counter); // undefined
```

## The null type

The `null` type is the second primitive data type that also has only one value `null`. For example:

```js
let obj = null;
console.log(typeof obj); // object
```

## The number type

JavaScript uses the number type to represent both integer and floating-point numbers.

The following statement declares a variable and initializes its value with an integer:

```js
let num = 100;
```

To represent a floating-point number, you include a decimal point followed by at least one number. 

For example:

```js
let price= 12.5; 
let discount = 0.05;
```

To get the range of the number type, you use `Number.MIN_VALUE `and `Number.MAX_VALUE`. 

For example:

```js
console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity
```

## NaN

`NaN` stands for Not a Number. It is a special numeric value that indicates an invalid number. For example, the division of a string by a number returns `NaN`:.

```js
console.log('a'/2); // NaN;
```

The NaN has two special characteristics:

- Any operation with NaN returns NaN.
- The NaN does not equal any value, including itself.

Here are some examples:

```js
console.log(NaN/2); // NaN
console.log(NaN == NaN); // false
```

## The string type

In JavaScript, a string is a sequence of zero or more characters. A string literal begins and ends with either a single quote`(')` or a double quote `(")`.

A string that begins with a double quote must end with a double quote. Likewise, a string that begins with a single quote must also end with a single quote:

```js
let greeting = 'Hi';
let message  = "Bye";
```

If you want to single quote or double quotes in a literal string, you need to use the backslash to escape it. For example:

```js
let message = 'I\'m also a valid string'; // use \ to escape the single quote (')
```

JavaScript strings are immutable. This means that it cannot be modified once created. However, you can create a new string from an existing string.

 For example:

 ```js
 let str = 'JavaScript';
str = str + ' String';
 ```


 ## The boolean type

 he `boolean` type has two literal values: `true` and `false` in lowercase. The following example declares two variables that hold the boolean values.

 ```js
 let inProgress = true;
let completed = false;

console.log(typeof completed); // boolean
 ```

 ## The symbol type

 JavaScript added a primitive type in ES6: the `symbol`. Different from other primitive types, the `symbol` type does not have a literal form.

To create a symbol, you call the `symbol` function as follows:

```js
let s1 = Symbol();
```

The `Symbol` function creates a new unique value every time you call it

```js
console.log(Symbol() == Symbol()); // false
```

## The bigint type

he `bigint` type represents the whole numbers that are larger than 253 – 1. To form a `bigint` literal number, you append the letter `n` at the end of the number:

```js
let pageView = 9007199254740991n;
console.log(typeof(pageView)); // 'bigint'
```
## Variables

A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.


We can easily grasp the concept of a “variable” if we imagine it as a “box” for data, with a uniquely-named sticker on it.

For instance, the variable message can be imagined as a box labeled "message" with the value `"Hello!"` in it:


We can put any value in the box.

We can also change it as many times as we want:

here is example code

```js
let message;

message = 'Hello!';

message = 'World!'; // value changed

alert(message);
```

To create a variable in JavaScript, use the `let` keyword.

The statement below creates (in other words: declares) a variable with the name “message”:


```js
let message;
```

Now, we can put some data into it by using the assignment operator ```=```:

```js
let message;

message = 'Hello'; // store the string 'Hello' in the variable named message
```

The string is now saved into the memory area associated with the variable. We can access it using the variable name:


```js
let message;
message = 'Hello!';

alert(message); // shows the variable content
```
To be concise, we can combine the variable declaration and assignment into a single line:


```js
let message = 'Hello!'; // define the variable and assign the value

alert(message); // Hello!
```

We can also declare multiple variables in one line:

```js
let user = 'John', age = 25, message = 'Hello';
```


### Variable naming

There are two limitations on variable names in JavaScript:

1.The name must contain only letters, digits, or the symbols `$` and `_`.

2.The first character must not be a digit.

```js 
let userName;
let test123;
```

When the name contains multiple words, camelCase is commonly used. That is: words go one after another, each word except first starting with a capital letter:` myVeryLongName.`

What’s interesting – the dollar sign `'$'` and the underscore `'_'` can also be used in names. They are regular symbols, just like letters, without any special meaning.

These names are valid:


### Reserved names

There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.

For example: 
```js
let, class, return, and function  
```
### Name things right

Talking about variables, there’s one more extremely important thing.

A variable name should have a clean, obvious meaning, describing the data that it stores.

Variable naming is one of the most important and complex skills in programming. A quick glance at variable names can reveal which code was written by a beginner versus an experienced developer.

In a real project, most of the time is spent modifying and extending an existing code base rather than writing something completely separate from scratch. When we return to some code after doing something else for a while, it’s much easier to find information that is well-labeled. Or, in other words, when the variables have good names.

Please spend time thinking about the right name for a variable before declaring it. Doing so will repay you handsomely.

Some good-to-follow rules are:

Use human-readable names like `userName` or `shoppingCart`.
Stay away from abbreviations or short names like `a`, `b`, `c`, unless you really know what you’re doing.
Make names maximally descriptive and concise. Examples of bad names are `data` and `value`. Such names say nothing. It’s only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
Agree on terms within your team and in your own mind. If a site visitor is called a “user” then we should name related variables `currentUser` or ` newUser` instead of `currentVisitor` or `newManInTown.`

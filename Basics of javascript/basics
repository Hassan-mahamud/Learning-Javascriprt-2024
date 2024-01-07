# Basics

- ~~About JavaScript.~~
- ~~Its uses and role in web development.~~
- ~~Set up the development environment with a code editor~~
- ~~Write your first "Hello world" program.😍~~
 


---
---
---
  
  


## Day 1 of my AJ90JS Challenge

### basics of javascript

- introduction of javascript
- What is JavaScript?
- How it works?
- What can in-browser JavaScript do & what can't?
- What makes JavaScript unique?
- Also I learnt that we can you use both client side and server side


## Day 2 of my AJ90JS Challenge

Set up the development environment with a code editor.

### Code editors

- There are two main types of code editors: IDEs and lightweight editors. Many people use one tool of each type.

    1. IDE
    2. Lightweight editors

### IDE

The term IDE (Integrated Development Environment) refers to a powerful editor with many features that usually operates on a “whole project.” As the name suggests, it’s not just an editor, but a full-scale “development environment.”

### Lightweight editors

Lightweight editors” are not as powerful as IDEs, but they’re fast, elegant and simple.

They are mainly used to open and edit a file instantly.

The main difference between a “lightweight editor” and an “IDE” is that an IDE works on a project-level, so it loads much more data on start, analyzes the project structure if needed and so on. A lightweight editor is much faster if we need only one file.


- There are other great editors in our big world but i chose VS code **Visual Studio Code** 


### Write your first "Hello world" program

``` js
console.log('Hello world')
```



## Day 3 of my AJ90JS Challenge
### Developer console

- Developer tools allow us to see errors, run commands, examine variables, and much more.
- They can be opened with F12 for most browsers on Windows. Chrome for Mac needs Cmd+Opt+J, Safari: Cmd+Opt+C (need to enable first).


Multi-line input
> Usually, when we put a line of code into the console, and then press Enter, it executes.

> To insert multiple lines, press Shift+Enter. This way one can enter long fragments of JavaScript code.

## The “script” tag

- We can use a ` <script>` tag to add JavaScript code to a page


JavaScript programs can be inserted almost anywhere into an HTML document using the `<script>` tag.

``` html
<!DOCTYPE HTML>
<html>

<body>

  <p>Before the script...</p>

  <script>
    alert( 'Hello, world!' );
  </script>

  <p>...After the script.</p>

</body>

</html>
```

ou can run the example by clicking the “Play” button in the right-top corner of the box above.

The `<script>` tag contains JavaScript code which is automatically executed when the browser processes the tag.

### Comments before and after scripts.

In really ancient books and guides, you may find comments inside `<script>` tags, like this:

```js
    <script type="text/javascript"><!--
    ...
    //--></script>
```

### External scripts

If we have a lot of JavaScript code, we can put it into a separate file.

Script files are attached to HTML with the `src` attribute:


```js
    <script src="/path/to/script.js"></script>
```




## Day 4 of my AJ90JS Challenge

### Code structure

The first thing we’ll study is the building blocks of code.

### Statements

Statements are syntax constructs and commands that perform actions.

We’ve already seen a statement,` alert('Hello, world!')`, which shows the message “Hello, world!”.
For example, here we split “Hello World” into two alerts:


```js
alert('Hello'); alert('World');
````
Usually, statements are written on separate lines to make the code more readable:


```js
  alert('Hello');
  alert('World');
```


### Semicolons

A semicolon may be omitted in most cases when a 

line break exists.

```js
  alert('Hello');
  alert('World');
```

**In most cases, a newline implies a semicolon. But “in most cases” does not mean “always”!**

There are cases when a newline does not mean a semicolon. For example:



```js
  alert(3 +
  1
  + 2);
```

### Comments

**One-line comments start with two forward slash characters //.**

like this

```js
  // This comment occupies a line of its own
  alert('Hello');

  alert('World'); // This comment follows the       statement
```


__Multiline comments start with a forward slash and an asterisk /* and end with an asterisk and a forward slash */__ 

like this


```js
  /* An example with two messages.
This is a multiline comment.
*/
alert('Hello');
alert('World');
```


## Day 5 of my AJ90JS Challenge

### The modern mode, "use strict"

For a long time, JavaScript evolved without compatibility issues. New features were added to the language while old functionality didn’t change.

That had the benefit of never breaking existing code. But the downside was that any mistake or an imperfect decision made by JavaScript’s creators got stuck in the language forever.

This was the case until 2009 when ECMAScript 5 (ES5) appeared. It added new features to the language and modified some of the existing ones. To keep the old code working, most such modifications are off by default. You need to explicitly enable them with a special directive: `"use strict"`.

### “use strict”

The directive looks like a string: `"use strict" or 'use strict'`. When it is located at the top of a script, the whole script works the “modern” way.

For example:

```js
    "use strict";

  // this code works the modern way
  ...
```


### Browser console
When you use a developer console to run code, please note that it doesn’t `use strict` by default.

Sometimes, when use strict makes a difference, you’ll get incorrect results.

So, how to actually `use strict` in the console?

First, you can try to press Shift+Enter to input multiple lines, and put `use strict` on top, like this:

```js
'use strict'; <Shift+Enter for a newline>
//  ...your code
<Enter to run>
```

### Should we “use strict”?

[a](aa)

The question may sound obvious, but it’s not so.

One could recommend to start scripts with `"use strict"`… But you know what’s cool?

Modern JavaScript supports “classes” and “modules” – advanced language structures (we’ll surely get to them), that enable `use strict` automatically. So we don’t need to add the `"use strict"` directive, if we use them.

So, for now `"use strict";` is a welcome guest at the top of your scripts. Later, when your code is all in classes and modules, you may omit it.

As of now, we’ve got to know about use strict in general.

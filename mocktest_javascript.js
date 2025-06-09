var questions = [
        // JavaScript Fundamentals (30 questions)
        {
            "question": "Which of these is NOT a valid way to declare a variable in JavaScript?",
            "options": [
                "var x = 5;",
                "let x = 5;",
                "const x = 5;",
                "int x = 5;"
            ],
            "correct": 3,
            "explanation": "'int' is not a valid keyword for variable declaration in JavaScript."
        },
        {
            "question": "What is the output of: console.log(5 + '5');",
            "options": [
                "10",
                "55",
                "Error",
                "undefined"
            ],
            "correct": 1,
            "explanation": "The + operator performs string concatenation when one operand is a string."
        },
        {
            "question": "Which of these is NOT a JavaScript data type?",
            "options": [
                "number",
                "string",
                "boolean",
                "character"
            ],
            "correct": 3,
            "explanation": "JavaScript doesn't have a separate 'character' type - it's treated as a single-character string."
        },
        {
            "question": "What is the correct way to write a JavaScript comment?",
            "options": [
                "// This is a comment",
                "<p>&lt;!-- This is a comment --&gt;</p>",
                "/* This is a comment */",
                "Both A and C"
            ],
            "correct": 3,
            "explanation": "JavaScript supports both single-line (//) and multi-line (/* */) comments."
        },
        {
            "question": "What does the 'typeof' operator return for an array?",
            "options": [
                "array",
                "object",
                "Array",
                "list"
            ],
            "correct": 1,
            "explanation": "Arrays are technically objects in JavaScript, so typeof returns 'object'."
        },
        {
            "question": "Which method adds an element to the end of an array?",
            "options": [
                "push()",
                "pop()",
                "shift()",
                "unshift()"
            ],
            "correct": 0,
            "explanation": "The push() method adds elements to the end of an array."
        },
        {
            "question": "What is the output of: console.log(0.1 + 0.2 === 0.3);",
            "options": [
                "true",
                "false",
                "Error",
                "undefined"
            ],
            "correct": 1,
            "explanation": "Due to floating-point precision issues, 0.1 + 0.2 equals approximately 0.30000000000000004."
        },
        {
            "question": "Which keyword is used to declare a function in JavaScript?",
            "options": [
                "function",
                "func",
                "def",
                "fn"
            ],
            "correct": 0,
            "explanation": "The 'function' keyword is used to declare functions in JavaScript."
        },
        {
            "question": "What is the correct way to create an object in JavaScript?",
            "options": [
                "let obj = {};",
                "let obj = new Object();",
                "let obj = Object.create();",
                "All of the above"
            ],
            "correct": 3,
            "explanation": "All these methods can be used to create objects in JavaScript."
        },
        {
            "question": "What does the 'this' keyword refer to in a global context?",
            "options": [
                "The current function",
                "The window object",
                "undefined",
                "null"
            ],
            "correct": 1,
            "explanation": "In browsers, 'this' in global context refers to the window object."
        },
        {
            "question": "Which operator is used for strict equality comparison?",
            "options": [
                "==",
                "===",
                "=",
                "equals()"
            ],
            "correct": 1,
            "explanation": "The === operator checks both value and type equality."
        },
        {
            "question": "What is the purpose of the 'use strict' directive?",
            "options": [
                "To enforce stricter parsing and error handling",
                "To make JavaScript run faster",
                "To enable experimental features",
                "To disable all warnings"
            ],
            "correct": 0,
            "explanation": "'use strict' enables strict mode which catches common coding mistakes."
        },
        {
            "question": "Which method converts a string to a number?",
            "options": [
                "Number()",
                "parseInt()",
                "parseFloat()",
                "All of the above"
            ],
            "correct": 3,
            "explanation": "All these methods can convert strings to numbers in different ways."
        },
        {
            "question": "What is the output of: console.log(typeof null);",
            "options": [
                "null",
                "object",
                "undefined",
                "number"
            ],
            "correct": 1,
            "explanation": "This is a known quirk in JavaScript - typeof null returns 'object'."
        },
        {
            "question": "Which method removes the last element from an array?",
            "options": [
                "push()",
                "pop()",
                "shift()",
                "unshift()"
            ],
            "correct": 1,
            "explanation": "The pop() method removes and returns the last array element."
        },
        {
            "question": "What is a closure in JavaScript?",
            "options": [
                "A function bundled with its lexical environment",
                "A way to close a web page",
                "A method to terminate loops",
                "A type of object"
            ],
            "correct": 0,
            "explanation": "A closure gives access to an outer function's scope from an inner function."
        },
        {
            "question": "Which is NOT a JavaScript looping structure?",
            "options": [
                "for",
                "while",
                "do-while",
                "repeat-until"
            ],
            "correct": 3,
            "explanation": "JavaScript doesn't have a 'repeat-until' loop construct."
        },
        {
            "question": "What is the purpose of the 'bind()' method?",
            "options": [
                "To create a new function with a specific 'this' value",
                "To concatenate strings",
                "To bind event handlers",
                "To merge objects"
            ],
            "correct": 0,
            "explanation": "bind() creates a new function with its 'this' keyword set to the provided value."
        },
        {
            "question": "What is hoisting in JavaScript?",
            "options": [
                "Moving variable declarations to the top of their scope",
                "A type of function",
                "A DOM manipulation technique",
                "An error handling mechanism"
            ],
            "correct": 0,
            "explanation": "Hoisting is JavaScript's behavior of moving declarations to the top of their containing scope."
        },
        {
            "question": "Which method joins array elements into a string?",
            "options": [
                "join()",
                "concat()",
                "merge()",
                "combine()"
            ],
            "correct": 0,
            "explanation": "The join() method joins all array elements into a string."
        },
        {
            "question": "What is the purpose of the 'arguments' object?",
            "options": [
                "To access all arguments passed to a function",
                "To handle command line arguments",
                "To create argument lists",
                "To validate function parameters"
            ],
            "correct": 0,
            "explanation": "The arguments object contains all arguments passed to a function."
        },
        {
            "question": "Which operator is used for nullish coalescing?",
            "options": [
                "??",
                "||",
                "&&",
                "?:"
            ],
            "correct": 0,
            "explanation": "The ?? operator returns the right operand when the left is null or undefined."
        },
        {
            "question": "What is the purpose of the 'map()' method?",
            "options": [
                "To create a new array by transforming each element",
                "To create a hash map",
                "To display elements on a page",
                "To convert objects to arrays"
            ],
            "correct": 0,
            "explanation": "map() creates a new array by calling a function on each array element."
        },
        {
            "question": "Which is NOT a valid way to create a function?",
            "options": [
                "function myFunc() {}",
                "let myFunc = function() {}",
                "let myFunc = () => {}",
                "function = myFunc() {}"
            ],
            "correct": 3,
            "explanation": "This is invalid syntax for function declaration."
        },
        {
            "question": "What is the purpose of the 'reduce()' method?",
            "options": [
                "To reduce an array to a single value",
                "To filter array elements",
                "To sort an array",
                "To concatenate arrays"
            ],
            "correct": 0,
            "explanation": "reduce() executes a reducer function on each element, resulting in a single output value."
        },
        {
            "question": "What is the purpose of the 'finally' block?",
            "options": [
                "To execute code after try/catch regardless of outcome",
                "To handle successful operations",
                "To terminate execution",
                "To declare final variables"
            ],
            "correct": 0,
            "explanation": "The finally block executes after try/catch regardless of whether an exception was thrown."
        },
        {
            "question": "Which method creates a new array with filtered elements?",
            "options": [
                "filter()",
                "map()",
                "reduce()",
                "forEach()"
            ],
            "correct": 0,
            "explanation": "filter() creates a new array with elements that pass a test."
        },
        {
            "question": "What is the purpose of template literals?",
            "options": [
                "To create strings with embedded expressions",
                "To define HTML templates",
                "To create reusable code blocks",
                "To format numbers"
            ],
            "correct": 0,
            "explanation": "Template literals (using backticks) allow string interpolation and multi-line strings."
        },
        {
            "question": "What is destructuring assignment?",
            "options": [
                "Unpacking values from arrays or objects",
                "Breaking down complex functions",
                "Removing object properties",
                "Deleting array elements"
            ],
            "correct": 0,
            "explanation": "Destructuring allows unpacking values from arrays or properties from objects into variables."
        },
        {
            "question": "What is the result of typeof NaN in JavaScript?",
            "options": [
                "undefined",
                "NaN",
                "number",
                "object"
            ],
            "correct": 2,
            "explanation": "`NaN` is considered a numeric value in JavaScript, so `typeof NaN` returns 'number'."
        },
        {
            "question": "Which keyword is used to declare a constant in JavaScript?",
            "options": [
                "var",
                "let",
                "const",
                "constant"
            ],
            "correct": 2,
            "explanation": "The `const` keyword is used to declare variables whose values cannot be reassigned."
        },
        // Object-Oriented Programming (30 beginner questions)
        {
            "question": "What is the most common way to create objects in JavaScript?",
            "options": [
                "Using classes",
                "Using object literals",
                "Using the Object constructor",
                "Using factory functions"
            ],
            "correct": 1,
            "explanation": "Object literals ({}) are the simplest and most common way to create objects."
        },
        {
            "question": "What is a constructor function?",
            "options": [
                "A function that creates and initializes objects",
                "A function that destroys objects",
                "A function that validates object properties",
                "A function that converts objects to strings"
            ],
            "correct": 0,
            "explanation": "Constructor functions create and initialize objects (used with the 'new' keyword)."
        },
        {
            "question": "What does the 'new' keyword do?",
            "options": [
                "Creates a new object",
                "Sets the prototype of the new object",
                "Binds 'this' to the new object",
                "All of the above"
            ],
            "correct": 3,
            "explanation": "The 'new' keyword does all these things when creating an object."
        },
        {
            "question": "What is prototypal inheritance?",
            "options": [
                "Objects inheriting directly from other objects",
                "Classes inheriting from other classes",
                "Functions inheriting from other functions",
                "Variables inheriting from other variables"
            ],
            "correct": 0,
            "explanation": "JavaScript uses prototypal inheritance where objects inherit directly from other objects."
        },
        {
            "question": "What is the purpose of the prototype property?",
            "options": [
                "To add properties/methods to all instances",
                "To create private members",
                "To define static methods",
                "To initialize object state"
            ],
            "correct": 0,
            "explanation": "The prototype property allows adding properties/methods to all instances of a constructor."
        },
        {
            "question": "How do you implement inheritance in JavaScript?",
            "options": [
                "Using the 'extends' keyword",
                "Using prototype chaining",
                "Using Object.create()",
                "All of the above"
            ],
            "correct": 3,
            "explanation": "JavaScript supports inheritance through all these methods."
        },
        {
            "question": "What is the __proto__ property?",
            "options": [
                "A reference to an object's prototype",
                "A deprecated property",
                "Both A and B",
                "A property to create new objects"
            ],
            "correct": 2,
            "explanation": "__proto__ references the prototype but is deprecated in favor of Object.getPrototypeOf()."
        },
        {
            "question": "What is a class in JavaScript?",
            "options": [
                "A special kind of function",
                "A completely new language feature",
                "A type of object",
                "A design pattern"
            ],
            "correct": 0,
            "explanation": "ES6 classes are syntactic sugar over JavaScript's existing prototype-based inheritance."
        },
        {
            "question": "What is method chaining?",
            "options": [
                "Calling multiple methods in sequence on an object",
                "Linking methods in a prototype chain",
                "Connecting classes together",
                "A way to handle errors"
            ],
            "correct": 0,
            "explanation": "Method chaining involves calling multiple methods on the same object in sequence."
        },
        {
            "question": "What is the 'super' keyword used for?",
            "options": [
                "To call parent class methods",
                "To create super objects",
                "To access super properties",
                "To mark methods as superior"
            ],
            "correct": 0,
            "explanation": "super is used to call parent class constructors and methods."
        },
        {
            "question": "What are getters and setters?",
            "options": [
                "Methods that get and set property values",
                "Functions that retrieve and store data",
                "Both A and B",
                "A way to create private variables"
            ],
            "correct": 2,
            "explanation": "Getters and setters are methods that get and set property values."
        },
        {
            "question": "What is a factory function?",
            "options": [
                "A function that creates and returns objects",
                "A constructor function",
                "A function that produces other functions",
                "A class method"
            ],
            "correct": 0,
            "explanation": "Factory functions create and return objects without using 'new'."
        },
        {
            "question": "What is the difference between Object.create() and the new keyword?",
            "options": [
                "Object.create() doesn't call a constructor",
                "new calls the constructor function",
                "Object.create() sets the prototype directly",
                "All of the above"
            ],
            "correct": 3,
            "explanation": "All these statements correctly describe differences between these approaches."
        },
        {
            "question": "What is the purpose of the 'instanceof' operator?",
            "options": [
                "To check if an object is an instance of a constructor",
                "To create new instances",
                "To compare object types",
                "To validate constructors"
            ],
            "correct": 0,
            "explanation": "instanceof checks if an object is an instance of a particular constructor function."
        },
        {
            "question": "What is a mixin?",
            "options": [
                "A way to add functionality to objects",
                "A type of inheritance",
                "Both A and B",
                "A design pattern for classes"
            ],
            "correct": 2,
            "explanation": "Mixins are a way to add functionality to objects and implement a form of multiple inheritance."
        },
        {
            "question": "What is the purpose of the 'static' keyword in classes?",
            "options": [
                "To define methods/properties on the class itself",
                "To prevent method overriding",
                "To make properties immutable",
                "To create singleton classes"
            ],
            "correct": 0,
            "explanation": "static defines methods/properties that belong to the class rather than instances."
        },
        {
            "question": "What is method overriding?",
            "options": [
                "Providing a new implementation in a child class",
                "Creating multiple methods with same name",
                "Changing method behavior at runtime",
                "Replacing a method completely"
            ],
            "correct": 0,
            "explanation": "Method overriding means providing a different implementation in a child class."
        },
        {
            "question": "What is encapsulation in JavaScript OOP?",
            "options": [
                "Hiding implementation details",
                "Bundling data with methods",
                "Both A and B",
                "Creating private classes"
            ],
            "correct": 2,
            "explanation": "Encapsulation involves bundling data with methods and hiding implementation details."
        },
        {
            "question": "How can you create private members in JavaScript classes?",
            "options": [
                "Using naming conventions (e.g., _private)",
                "Using closures",
                "Using WeakMaps",
                "All of the above"
            ],
            "correct": 3,
            "explanation": "JavaScript supports various patterns for creating private members."
        },
        {
            "question": "What is polymorphism in JavaScript?",
            "options": [
                "Different classes implementing the same method differently",
                "One interface with multiple implementations",
                "Both A and B",
                "A way to change object shapes"
            ],
            "correct": 2,
            "explanation": "Polymorphism allows different objects to respond to the same method in different ways."
        },
        {
            "question": "What is the purpose of the 'extends' keyword?",
            "options": [
                "To create class inheritance",
                "To add methods to existing classes",
                "To include external libraries",
                "To expand object properties"
            ],
            "correct": 0,
            "explanation": "extends is used to create a child class that inherits from a parent class."
        },
        {
            "question": "What is the difference between classical and prototypal inheritance?",
            "options": [
                "Classical uses classes, prototypal uses prototypes",
                "Classical is rigid, prototypal is flexible",
                "JavaScript uses prototypal inheritance",
                "All of the above"
            ],
            "correct": 3,
            "explanation": "All these statements accurately describe differences between these inheritance models."
        },
        {
            "question": "What is the purpose of the 'constructor' method in classes?",
            "options": [
                "To initialize object instances",
                "To define the class blueprint",
                "To create constructors for subclasses",
                "To set up inheritance"
            ],
            "correct": 0,
            "explanation": "The constructor method is called when a new instance is created to initialize it."
        },
        {
            "question": "What is the prototype chain?",
            "options": [
                "The sequence of prototypes an object inherits from",
                "A way to link constructors together",
                "A design pattern",
                "A method lookup path"
            ],
            "correct": 0,
            "explanation": "The prototype chain is the sequence of objects that JavaScript traverses to find properties."
        },
        {
            "question": "What is the difference between 'Object.create()' and 'new'?",
            "options": [
                "Object.create() doesn't invoke a constructor",
                "new sets up the prototype chain automatically",
                "Object.create() accepts a prototype object",
                "All of the above"
            ],
            "correct": 3,
            "explanation": "All these statements accurately describe differences between these approaches."
        },
        {
            "question": "What is a singleton pattern in JavaScript?",
            "options": [
                "A design pattern that restricts instantiation to one object",
                "A class with only static methods",
                "A way to create unique objects",
                "A prototype with one instance"
            ],
            "correct": 0,
            "explanation": "The singleton pattern ensures a class has only one instance."
        },
        {
            "question": "What is the purpose of the 'hasOwnProperty()' method?",
            "options": [
                "To check if an object has a specific property",
                "To check if a property is inherited",
                "To add new properties to an object",
                "To prevent property enumeration"
            ],
            "correct": 0,
            "explanation": "hasOwnProperty() checks if an object has a specific property (not inherited)."
        },
        {
            "question": "What is the purpose of the 'instanceof' operator?",
            "options": [
                "To check if an object is an instance of a constructor",
                "To create new instances of a class",
                "To compare object types",
                "To validate constructor functions"
            ],
            "correct": 0,
            "explanation": "instanceof checks if an object is an instance of a particular constructor."
        },
        {
            "question": "What is the 'this' keyword in object methods?",
            "options": [
                "A reference to the current object",
                "A reference to the global object",
                "A reference to the parent object",
                "A reference to the method itself"
            ],
            "correct": 0,
            "explanation": "In object methods, 'this' refers to the object the method was called on."
        }
];
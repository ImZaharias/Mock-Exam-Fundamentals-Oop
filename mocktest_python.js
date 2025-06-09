var questions = [
        // Python Fundamentals (30 questions)
        {
            "question": "Which of these is NOT a valid Python variable name?",
            "options": [
                "my_variable",
                "_variable",
                "2variable",
                "variable2"
            ],
            "correct": 2,
            "explanation": "Variable names cannot start with a number in Python."
        },
        {
            "question": "What is the output of: print(5 // 2)?",
            "options": [
                "2.5",
                "2",
                "3",
                "2.0"
            ],
            "correct": 1,
            "explanation": "The // operator performs floor division (integer division)."
        },
        {
            "question": "Which data type is mutable in Python?",
            "options": [
                "tuple",
                "string",
                "list",
                "int"
            ],
            "correct": 2,
            "explanation": "Lists are mutable (can be changed after creation), while tuples and strings are immutable."
        },
        {
            "question": "How do you create a comment in Python?",
            "options": [
                "// This is a comment",
                "/* This is a comment */",
                "# This is a comment",
                "&lt;!-- This is a comment --&gt;"
            ],
            "correct": 2,
            "explanation": "Python uses the # symbol for single-line comments."
        },
        {
            "question": "What does the 'len()' function do?",
            "options": [
                "Returns the length of a string",
                "Returns the length of a list",
                "Returns the length of a dictionary",
                "All of the above"
            ],
            "correct": 3,
            "explanation": "len() returns the number of items in an object, which works for strings, lists, tuples, dictionaries, etc."
        },
        {
            "question": "Which method is used to add an item to the end of a list?",
            "options": [
                "append()",
                "insert()",
                "add()",
                "push()"
            ],
            "correct": 0,
            "explanation": "The append() method adds an item to the end of a list."
        },
        {
            "question": "What is the output of: print('Hello' * 3)?",
            "options": [
                "HelloHelloHello",
                "Hello3",
                "TypeError",
                "Hello Hello Hello"
            ],
            "correct": 0,
            "explanation": "The * operator repeats strings when used with a string and integer."
        },
        {
            "question": "Which keyword is used to define a function in Python?",
            "options": [
                "func",
                "def",
                "function",
                "define"
            ],
            "correct": 1,
            "explanation": "Functions are defined using the 'def' keyword in Python."
        },
        {
            "question": "What is the correct way to create a dictionary?",
            "options": [
                "{'key': 'value'}",
                "dict(key='value')",
                "dict(['key', 'value'])",
                "Both A and B"
            ],
            "correct": 3,
            "explanation": "Both syntaxes are valid for creating dictionaries in Python."
        },
        {
            "question": "What does the 'range()' function return in Python 3?",
            "options": [
                "A list of numbers",
                "A tuple of numbers",
                "A range object",
                "A generator"
            ],
            "correct": 2,
            "explanation": "In Python 3, range() returns an immutable sequence type (range object), not a list."
        },
        {
            "question": "Which operator is used for exponentiation?",
            "options": [
                "^",
                "**",
                "*^",
                "^^"
            ],
            "correct": 1,
            "explanation": "The ** operator is used for exponentiation in Python (e.g., 2**3 = 8)."
        },
        {
            "question": "How do you check if a key exists in a dictionary?",
            "options": [
                "if key in dict:",
                "if dict.has_key(key):",
                "if dict.exists(key):",
                "if dict.contains(key):"
            ],
            "correct": 0,
            "explanation": "The 'in' keyword is used to check if a key exists in a dictionary."
        },
        {
            "question": "What is the output of: print(3 == '3')?",
            "options": [
                "True",
                "False",
                "TypeError",
                "None"
            ],
            "correct": 1,
            "explanation": "The integer 3 is not equal to the string '3' in Python."
        },
        {
            "question": "Which method removes and returns the last item from a list?",
            "options": [
                "remove()",
                "pop()",
                "delete()",
                "cut()"
            ],
            "correct": 1,
            "explanation": "The pop() method removes and returns the last item by default."
        },
        {
            "question": "What is the correct way to open a file for reading?",
            "options": [
                "open('file.txt', 'r')",
                "open('file.txt', 'read')",
                "open('file.txt', 'readonly')",
                "open('file.txt')"
            ],
            "correct": 3,
            "explanation": "The default mode is 'r' (read), so just open('file.txt') is sufficient."
        },
        {
            "question": "What does the 'strip()' method do?",
            "options": [
                "Splits a string into a list",
                "Removes whitespace from both ends",
                "Removes all occurrences of a substring",
                "Converts to lowercase"
            ],
            "correct": 1,
            "explanation": "strip() removes leading and trailing whitespace by default."
        },
        {
            "question": "Which of these is NOT a built-in Python data structure?",
            "options": [
                "list",
                "tuple",
                "array",
                "set"
            ],
            "correct": 2,
            "explanation": "array is available in the array module but not a built-in type like list, tuple, set, and dict."
        },
        {
            "question": "What is the output of: print(bool([]))?",
            "options": [
                "True",
                "False",
                "None",
                "Error"
            ],
            "correct": 1,
            "explanation": "Empty sequences like lists evaluate to False in boolean context."
        },
        {
            "question": "Which method is used to get a list of all keys in a dictionary?",
            "options": [
                "keys()",
                "get_keys()",
                "items()",
                "values()"
            ],
            "correct": 0,
            "explanation": "The keys() method returns a view of all keys in the dictionary."
        },
        {
            "question": "What is the correct way to create a set?",
            "options": [
                "{1, 2, 3}",
                "set([1, 2, 3])",
                "Both A and B",
                "None of the above"
            ],
            "correct": 2,
            "explanation": "Both syntaxes are valid for creating sets in Python."
        },
        {
            "question": "What is the output of: print('hello'.upper())?",
            "options": [
                "HELLO",
                "hello",
                "Hello",
                "hELLO"
            ],
            "correct": 0,
            "explanation": "The upper() method converts all characters to uppercase."
        },
        {
            "question": "Which keyword is used to handle exceptions?",
            "options": [
                "catch",
                "except",
                "handle",
                "trap"
            ],
            "correct": 1,
            "explanation": "Python uses try/except blocks for exception handling."
        },
        {
            "question": "What is the output of: print(10 + int('5'))?",
            "options": [
                "15",
                "105",
                "TypeError",
                "10"
            ],
            "correct": 0,
            "explanation": "The int() function converts the string '5' to integer 5, then adds to 10."
        },
        {
            "question": "Which module is used for working with dates and times?",
            "options": [
                "time",
                "datetime",
                "date",
                "All of the above"
            ],
            "correct": 3,
            "explanation": "Python has multiple modules for date/time operations including all listed."
        },
        {
            "question": "What is the correct way to create a tuple with one item?",
            "options": [
                "(1)",
                "(1,)",
                "tuple(1)",
                "[1]"
            ],
            "correct": 1,
            "explanation": "The comma makes it a tuple - (1,) is a tuple, while (1) is just an integer in parentheses."
        },
        {
            "question": "Which operator checks if a value is in a sequence?",
            "options": [
                "contains",
                "in",
                "has",
                "within"
            ],
            "correct": 1,
            "explanation": "The 'in' operator checks for membership in sequences."
        },
        {
            "question": "What does the 'enumerate()' function do?",
            "options": [
                "Counts the number of items in a sequence",
                "Returns both index and value from a sequence",
                "Converts a sequence to a dictionary",
                "Sorts a sequence"
            ],
            "correct": 1,
            "explanation": "enumerate() returns an iterator of tuples containing indexes and values."
        },
        // Object-Oriented Programming (30 beginner questions)
        {
            "question": "What is the correct way to define a class in Python?",
            "options": [
                "class MyClass:",
                "def MyClass():",
                "new class MyClass:",
                "object MyClass:"
            ],
            "correct": 0,
            "explanation": "Classes are defined using the 'class' keyword followed by the class name."
        },
        {
            "question": "What is the purpose of the __init__ method?",
            "options": [
                "To initialize the class object",
                "To create a class instance",
                "To define class variables",
                "To destroy the object"
            ],
            "correct": 0,
            "explanation": "__init__ is the constructor method that initializes new object instances."
        },
        {
            "question": "What does 'self' represent in Python class methods?",
            "options": [
                "A reference to the class itself",
                "A reference to the instance of the class",
                "A reference to the parent class",
                "A special keyword for static methods"
            ],
            "correct": 1,
            "explanation": "'self' refers to the instance of the class (by convention, not a keyword)."
        },
        {
            "question": "How do you create an instance of a class?",
            "options": [
                "new MyClass()",
                "MyClass.new()",
                "MyClass()",
                "create MyClass()"
            ],
            "correct": 2,
            "explanation": "Class instances are created by calling the class name like a function."
        },
        {
            "question": "What is inheritance in Python?",
            "options": [
                "Creating a new class from an existing class",
                "Copying methods from one class to another",
                "Importing classes from modules",
                "Sharing variables between classes"
            ],
            "correct": 0,
            "explanation": "Inheritance allows a class to inherit attributes and methods from another class."
        },
        {
            "question": "How do you make a class inherit from another class?",
            "options": [
                "class ChildClass(ParentClass):",
                "class ChildClass inherits ParentClass:",
                "class ChildClass extends ParentClass:",
                "class ChildClass: ParentClass"
            ],
            "correct": 0,
            "explanation": "Inheritance is specified by putting the parent class in parentheses after the child class name."
        },
        {
            "question": "What is method overriding?",
            "options": [
                "Creating multiple methods with the same name",
                "Providing a new implementation in a child class",
                "Calling a method from another method",
                "Making a method private"
            ],
            "correct": 1,
            "explanation": "Method overriding means providing a different implementation of a method in a child class."
        },
        {
            "question": "What is polymorphism in Python?",
            "options": [
                "Using the same method name for different purposes",
                "Creating multiple classes with same structure",
                "Converting between different data types",
                "Making methods work with any data type"
            ],
            "correct": 0,
            "explanation": "Polymorphism allows methods to have the same name but behave differently based on the object."
        },
        {
            "question": "What is encapsulation?",
            "options": [
                "Hiding implementation details",
                "Combining data and functions into a class",
                "Restricting access to certain components",
                "All of the above"
            ],
            "correct": 3,
            "explanation": "Encapsulation bundles data and methods while hiding internal details."
        },
        {
            "question": "How do you make an attribute private in Python?",
            "options": [
                "Using the private keyword",
                "Prefixing with a single underscore (_)",
                "Prefixing with double underscores (__)",
                "Python doesn't have truly private attributes"
            ],
            "correct": 2,
            "explanation": "Double underscore prefix invokes name mangling (not truly private but conventionally private)."
        },
        {
            "question": "What is the purpose of the super() function?",
            "options": [
                "To call a method from the parent class",
                "To create a superclass",
                "To make a class inherit from multiple parents",
                "To access class-level attributes"
            ],
            "correct": 0,
            "explanation": "super() is used to call methods from the parent class in the child class."
        },
        {
            "question": "What is a class variable?",
            "options": [
                "A variable defined inside a method",
                "A variable shared by all instances of a class",
                "A variable that can't be changed",
                "A variable imported from another module"
            ],
            "correct": 1,
            "explanation": "Class variables are shared among all instances of a class."
        },
        {
            "question": "What is an instance variable?",
            "options": [
                "A variable defined inside __init__",
                "A variable unique to each instance",
                "A variable that can't be accessed outside the class",
                "Both A and B"
            ],
            "correct": 3,
            "explanation": "Instance variables are unique to each instance, typically defined in __init__."
        },
        {
            "question": "What is a static method?",
            "options": [
                "A method that can't access class or instance variables",
                "A method that belongs to the class rather than instances",
                "A method that can't be overridden",
                "A method that doesn't take any parameters"
            ],
            "correct": 1,
            "explanation": "Static methods are bound to the class rather than instances and don't receive self/cls."
        },
        {
            "question": "How do you define a static method?",
            "options": [
                "@staticmethod",
                "@static",
                "static def method():",
                "def static method():"
            ],
            "correct": 0,
            "explanation": "The @staticmethod decorator is used to define static methods."
        },
        {
            "question": "What is a class method?",
            "options": [
                "A method that operates on the class rather than instances",
                "A method that can access class variables",
                "A method that receives the class as first parameter",
                "All of the above"
            ],
            "correct": 3,
            "explanation": "Class methods receive the class (cls) as first parameter and can access class-level attributes."
        },
        {
            "question": "How do you define a class method?",
            "options": [
                "@classmethod",
                "@class",
                "class def method():",
                "def class method():"
            ],
            "correct": 0,
            "explanation": "The @classmethod decorator is used to define class methods."
        },
        {
            "question": "What is multiple inheritance?",
            "options": [
                "A class inheriting from multiple parent classes",
                "A class having multiple child classes",
                "A method being inherited multiple times",
                "A class inheriting from a chain of classes"
            ],
            "correct": 0,
            "explanation": "Multiple inheritance means a class can inherit from more than one parent class."
        },
        {
            "question": "What is method resolution order (MRO)?",
            "options": [
                "The order in which methods are called",
                "The order Python searches for attributes in inheritance",
                "The sequence of method definitions in a class",
                "The order of parameters in a method"
            ],
            "correct": 1,
            "explanation": "MRO determines the search order for attributes in inheritance hierarchies."
        },
        {
            "question": "What is a magic/dunder method?",
            "options": [
                "A method with special meaning to Python",
                "A method that performs complex calculations",
                "A method that can't be overridden",
                "A method that's automatically private"
            ],
            "correct": 0,
            "explanation": "Dunder methods (__method__) provide special functionality like operator overloading."
        },
        {
            "question": "What does the __str__ method do?",
            "options": [
                "Returns the string representation of an object",
                "Converts an object to a string",
                "Both A and B",
                "Initializes string variables"
            ],
            "correct": 2,
            "explanation": "__str__ returns a human-readable string representation of an object."
        },
        {
            "question": "What is the difference between __str__ and __repr__?",
            "options": [
                "__str__ is for users, __repr__ is for developers",
                "__str__ is informal, __repr__ is official",
                "__repr__ is used by print() by default",
                "Both A and B"
            ],
            "correct": 3,
            "explanation": "__str__ is for end-user output while __repr__ is for developer representation."
        },
        {
            "question": "What is composition in OOP?",
            "options": [
                "Building complex objects from simpler ones",
                "Inheriting from multiple classes",
                "Combining methods from different classes",
                "Creating class hierarchies"
            ],
            "correct": 0,
            "explanation": "Composition means building objects by combining other objects (has-a relationship)."
        },
        {
            "question": "What is an abstract class?",
            "options": [
                "A class that can't be instantiated",
                "A class with abstract methods",
                "A class meant to be inherited from",
                "All of the above"
            ],
            "correct": 3,
            "explanation": "Abstract classes provide a blueprint for other classes and can't be instantiated directly."
        },
        {
            "question": "Which module is used to create abstract classes?",
            "options": [
                "abc",
                "abstract",
                "interface",
                "base"
            ],
            "correct": 0,
            "explanation": "The abc module (Abstract Base Classes) provides tools for creating abstract classes."
        },
        {
            "question": "What is an interface in Python?",
            "options": [
                "A special kind of abstract class",
                "A class with only abstract methods",
                "A concept implemented via abstract classes",
                "All of the above"
            ],
            "correct": 3,
            "explanation": "Python doesn't have a separate interface concept - they're implemented as abstract classes."
        },
        {
            "question": "What is a property in Python?",
            "options": [
                "A class variable",
                "A managed attribute with getter/setter",
                "A special kind of method",
                "An instance variable"
            ],
            "correct": 1,
            "explanation": "Properties allow controlled access to attributes with getter/setter methods."
        },
        {
            "question": "How do you create a property?",
            "options": [
                "@property",
                "@attribute",
                "def property():",
                "property = value"
            ],
            "correct": 0,
            "explanation": "The @property decorator is used to create getter methods for properties."
        },
        {
            "question": "What is name mangling in Python?",
            "options": [
                "Changing method names during inheritance",
                "Making attributes private with double underscores",
                "Converting between naming conventions",
                "Aliasing imported module names"
            ],
            "correct": 1,
            "explanation": "Name mangling changes attribute names with double underscores to _ClassName__attribute."
        },
        {
            "question": "What is the diamond problem in multiple inheritance?",
            "options": [
                "Ambiguity when same method exists in multiple parents",
                "Circular inheritance between classes",
                "A class inheriting from itself",
                "Too many levels of inheritance"
            ],
            "correct": 0,
            "explanation": "The diamond problem occurs when a class inherits from two classes that have a common ancestor."
        },
        {
            "question": "How does Python handle the diamond problem?",
            "options": [
                "Using method resolution order (MRO)",
                "By prohibiting multiple inheritance",
                "By randomly choosing which parent to use",
                "By requiring explicit method calls"
            ],
            "correct": 0,
            "explanation": "Python's C3 linearization algorithm determines method resolution order."
        },
        {
            "question": "What is a mixin class?",
            "options": [
                "A small class meant to provide specific functionality",
                "A class that can't be instantiated",
                "A class that mixes methods from other classes",
                "A class with only static methods"
            ],
            "correct": 0,
            "explanation": "Mixins are small classes that provide specific functionality to other classes."
        },
        {
            "question": "What is the purpose of the __slots__ attribute?",
            "options": [
                "To limit the attributes an instance can have",
                "To specify which methods a class has",
                "To declare class variables",
                "To make a class immutable"
            ],
            "correct": 0,
            "explanation": "__slots__ optimizes memory usage by preventing dynamic attribute creation."
        }
];
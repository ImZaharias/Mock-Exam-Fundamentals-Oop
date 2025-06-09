var questions = [
        // C# Fundamentals (30 questions)
        {
            "question": "What is the entry point of a C# program?",
            "options": [
                "Main() method",
                "Start() method",
                "Init() method",
                "Program() constructor"
            ],
            "correct": 0,
            "explanation": "Every C# application must have a Main method as its entry point."
        },
        {
            "question": "Which of these is NOT a valid C# data type?",
            "options": [
                "int",
                "float",
                "real",
                "decimal"
            ],
            "correct": 2,
            "explanation": "'real' is not a C# type - the floating-point types are float and double."
        },
        {
            "question": "What is the correct way to declare a variable in C#?",
            "options": [
                "var x = 5;",
                "int x = 5;",
                "x = 5;",
                "All of the above"
            ],
            "correct": 3,
            "explanation": "All are valid, though 'x = 5' requires 'x' to be declared elsewhere."
        },
        {
            "question": "Which operator is used to check type compatibility?",
            "options": [
                "typeof",
                "is",
                "as",
                "cast"
            ],
            "correct": 1,
            "explanation": "The 'is' operator checks if an object is compatible with a given type."
        },
        {
            "question": "What is the output of: Console.WriteLine(5 / 2);",
            "options": [
                "2.5",
                "2",
                "2.0",
                "2.5f"
            ],
            "correct": 1,
            "explanation": "Integer division truncates the fractional part, resulting in 2."
        },
        {
            "question": "Which collection stores key-value pairs?",
            "options": [
                "List<T>",
                "Dictionary<TKey, TValue>",
                "HashSet<T>",
                "Array"
            ],
            "correct": 1,
            "explanation": "Dictionary<TKey, TValue> stores data as key-value pairs."
        },
        {
            "question": "What is the default access modifier for class members?",
            "options": [
                "public",
                "private",
                "internal",
                "protected"
            ],
            "correct": 1,
            "explanation": "Class members are private by default in C#."
        },
        {
            "question": "Which keyword is used to create a constant?",
            "options": [
                "const",
                "readonly",
                "static",
                "final"
            ],
            "correct": 0,
            "explanation": "The 'const' keyword declares a compile-time constant."
        },
        {
            "question": "What does the 'using' statement do?",
            "options": [
                "Imports a namespace",
                "Disposes IDisposable objects automatically",
                "Both A and B",
                "Creates an alias for a type"
            ],
            "correct": 2,
            "explanation": "'using' has both namespace import and resource disposal functions."
        },
        {
            "question": "Which is NOT a valid C# loop?",
            "options": [
                "for",
                "while",
                "do-while",
                "repeat-until"
            ],
            "correct": 3,
            "explanation": "C# doesn't have a 'repeat-until' loop construct."
        },
        {
            "question": "What is boxing in C#?",
            "options": [
                "Converting a value type to object type",
                "Converting an object type to value type",
                "Wrapping code in try-catch blocks",
                "A design pattern"
            ],
            "correct": 0,
            "explanation": "Boxing is converting a value type to a reference type (object)."
        },
        {
            "question": "Which is the base class for all types in C#?",
            "options": [
                "System.Type",
                "System.Object",
                "System.Base",
                "System.Root"
            ],
            "correct": 1,
            "explanation": "System.Object (object) is the ultimate base class in C#."
        },
        {
            "question": "What is the purpose of the 'params' keyword?",
            "options": [
                "To make parameters optional",
                "To allow variable number of arguments",
                "To pass parameters by reference",
                "To specify parameter names"
            ],
            "correct": 1,
            "explanation": "'params' allows a method to accept a variable number of arguments."
        },
        {
            "question": "Which is NOT a valid C# access modifier?",
            "options": [
                "public",
                "private",
                "internal",
                "package"
            ],
            "correct": 3,
            "explanation": "C# doesn't have a 'package' access modifier (unlike Java)."
        },
        {
            "question": "What is the purpose of the 'out' keyword?",
            "options": [
                "To pass parameters by reference",
                "To specify output parameters",
                "To declare external methods",
                "To mark a method as virtual"
            ],
            "correct": 1,
            "explanation": "'out' is used for parameters that return values from methods."
        },
        {
            "question": "Which is used to handle exceptions?",
            "options": [
                "try-catch-finally",
                "throw",
                "Both A and B",
                "error-handle"
            ],
            "correct": 2,
            "explanation": "C# uses try-catch-finally blocks and throw statement for exceptions."
        },
        {
            "question": "What is a delegate in C#?",
            "options": [
                "A type-safe function pointer",
                "A lightweight thread",
                "A base class",
                "A reference type"
            ],
            "correct": 0,
            "explanation": "A delegate is a type that represents references to methods."
        },
        {
            "question": "Which is NOT a C# string verbatim identifier?",
            "options": [
                "@",
                "$",
                "Both are valid",
                "Neither is valid"
            ],
            "correct": 3,
            "explanation": "@ creates verbatim strings, $ enables string interpolation (both valid)."
        },
        {
            "question": "What is the purpose of 'yield' keyword?",
            "options": [
                "To pause iteration and return a value",
                "To improve performance",
                "To create threads",
                "To handle exceptions"
            ],
            "correct": 0,
            "explanation": "'yield' is used in iterators to provide values one at a time."
        },
        {
            "question": "Which is NOT a C# LINQ clause?",
            "options": [
                "from",
                "where",
                "select",
                "find"
            ],
            "correct": 3,
            "explanation": "'find' is not a LINQ clause - the basic clauses are from, where, select."
        },
        {
            "question": "What is the purpose of 'async' and 'await'?",
            "options": [
                "To create threads",
                "To simplify asynchronous programming",
                "To improve performance",
                "To handle exceptions"
            ],
            "correct": 1,
            "explanation": "async/await simplifies writing asynchronous code."
        },
        {
            "question": "Which is NOT a C# collection interface?",
            "options": [
                "IEnumerable",
                "ICollection",
                "IList",
                "IGroup"
            ],
            "correct": 3,
            "explanation": "IGroup is not a standard C# collection interface."
        },
        {
            "question": "What is the purpose of 'nameof' operator?",
            "options": [
                "To get variable names as strings",
                "To create names dynamically",
                "To compare names",
                "To declare variables"
            ],
            "correct": 0,
            "explanation": "nameof gets the name of a variable, type, or member as a string."
        },
        {
            "question": "Which is NOT a valid C# memory management technique?",
            "options": [
                "Garbage collection",
                "Stack allocation",
                "Manual memory allocation",
                "Reference counting"
            ],
            "correct": 3,
            "explanation": "C# uses garbage collection, not reference counting."
        },
        {
            "question": "What is the purpose of 'var' keyword?",
            "options": [
                "To declare dynamic types",
                "For implicit type declaration",
                "To create variants",
                "To improve performance"
            ],
            "correct": 1,
            "explanation": "'var' declares variables with types determined at compile-time."
        },
        {
            "question": "Which is NOT a C# accessor?",
            "options": [
                "get",
                "set",
                "init",
                "let"
            ],
            "correct": 3,
            "explanation": "C# property accessors are get, set, and init (since C# 9)."
        },
        {
            "question": "What is the purpose of '??' operator?",
            "options": [
                "Null coalescing",
                "Null conditional",
                "Null check",
                "Null propagation"
            ],
            "correct": 0,
            "explanation": "The ?? operator returns the left operand if not null, else the right operand."
        },
        {
            "question": "Which is NOT a C# string comparison method?",
            "options": [
                "Equals()",
                "Compare()",
                "CompareTo()",
                "Matches()"
            ],
            "correct": 3,
            "explanation": "Matches() is for regex, not direct string comparison."
        },
        {
            "question": "What is the purpose of 'lock' statement?",
            "options": [
                "To prevent concurrent access",
                "To improve performance",
                "To handle exceptions",
                "To create threads"
            ],
            "correct": 0,
            "explanation": "lock ensures only one thread can access a resource at a time."
        },

        // Object-Oriented Programming (30 beginner questions)
        {
            "question": "What are the four pillars of OOP?",
            "options": [
                "Abstraction, Encapsulation, Inheritance, Polymorphism",
                "Classes, Objects, Methods, Properties",
                "Public, Private, Protected, Internal",
                "Static, Virtual, Abstract, Sealed"
            ],
            "correct": 0,
            "explanation": "The four fundamental OOP concepts are Abstraction, Encapsulation, Inheritance, and Polymorphism."
        },
        {
            "question": "What is a class in C#?",
            "options": [
                "A primitive data type",
                "A blueprint for creating objects",
                "A collection of methods",
                "A namespace container"
            ],
            "correct": 1,
            "explanation": "A class defines the data and behavior that its objects will have."
        },
        {
            "question": "What is an object?",
            "options": [
                "A static method",
                "An instance of a class",
                "A value type",
                "A reference to a namespace"
            ],
            "correct": 1,
            "explanation": "An object is a concrete instance of a class."
        },
        {
            "question": "What is encapsulation?",
            "options": [
                "Hiding implementation details",
                "Creating multiple methods with same name",
                "Reusing code from existing classes",
                "Representing essential features"
            ],
            "correct": 0,
            "explanation": "Encapsulation bundles data with methods that operate on that data while hiding implementation."
        },
        {
            "question": "Which keyword is used for inheritance?",
            "options": [
                "inherits",
                "extends",
                ":",
                "derives"
            ],
            "correct": 2,
            "explanation": "C# uses a colon (:) to indicate inheritance."
        },
        {
            "question": "What is polymorphism?",
            "options": [
                "Creating multiple classes with same name",
                "One interface with multiple implementations",
                "Hiding complex implementation details",
                "Bundling data with methods"
            ],
            "correct": 1,
            "explanation": "Polymorphism allows objects of different types to be treated as objects of a common base type."
        },
        {
            "question": "What is method overloading?",
            "options": [
                "Redefining a method in a derived class",
                "Multiple methods with same name but different parameters",
                "Making a method available to all classes",
                "Creating an abstract method"
            ],
            "correct": 1,
            "explanation": "Overloading means having multiple methods with the same name but different signatures."
        },
        {
            "question": "What is method overriding?",
            "options": [
                "Providing a new implementation in a derived class",
                "Creating multiple methods with same name",
                "Making a method final",
                "Hiding a method implementation"
            ],
            "correct": 0,
            "explanation": "Overriding provides a specific implementation of a virtual method from a base class."
        },
        {
            "question": "What is an abstract class?",
            "options": [
                "A class that cannot be instantiated",
                "A class with only static methods",
                "A class that implements an interface",
                "A sealed class"
            ],
            "correct": 0,
            "explanation": "Abstract classes are incomplete and must be derived from to be used."
        },
        {
            "question": "What is an interface?",
            "options": [
                "A class that can't be extended",
                "A contract that defines members a class must implement",
                "A special kind of abstract class",
                "A collection of static methods"
            ],
            "correct": 1,
            "explanation": "An interface defines a contract without implementation."
        },
        {
            "question": "What is the purpose of 'base' keyword?",
            "options": [
                "To call base class constructors and members",
                "To create a base class",
                "To make a class final",
                "To implement an interface"
            ],
            "correct": 0,
            "explanation": "'base' accesses members of the immediate parent class."
        },
        {
            "question": "What is a constructor?",
            "options": [
                "A special method to initialize objects",
                "A method that returns a value",
                "A static block of code",
                "An abstract method"
            ],
            "correct": 0,
            "explanation": "Constructors initialize objects when they're created."
        },
        {
            "question": "Can constructors be inherited?",
            "options": [
                "Yes",
                "No",
                "Only if marked with virtual",
                "Only in abstract classes"
            ],
            "correct": 1,
            "explanation": "Constructors are not inherited in C#."
        },
        {
            "question": "What is the difference between interface and abstract class?",
            "options": [
                "Interfaces can have implementations",
                "Abstract classes can have fields and method implementations",
                "There is no difference",
                "Interfaces can be instantiated"
            ],
            "correct": 1,
            "explanation": "Abstract classes can have implementation while interfaces traditionally couldn't (until C# 8)."
        },
        {
            "question": "What is composition?",
            "options": [
                "Creating objects within a class",
                "Extending a base class",
                "Implementing multiple interfaces",
                "Overloading methods"
            ],
            "correct": 0,
            "explanation": "Composition means building objects by combining other objects (has-a relationship)."
        },
        {
            "question": "What is the 'is' operator used for?",
            "options": [
                "To create a new instance",
                "To check type compatibility",
                "To compare instances",
                "To call a static method"
            ],
            "correct": 1,
            "explanation": "'is' checks if an object is compatible with a type."
        },
        {
            "question": "What is a namespace?",
            "options": [
                "A collection of related classes",
                "A single class file",
                "A method library",
                "A DLL"
            ],
            "correct": 0,
            "explanation": "Namespaces organize related types and prevent naming conflicts."
        },
        {
            "question": "What is the purpose of access modifiers?",
            "options": [
                "To control visibility of types and members",
                "To modify method behavior",
                "To create abstract classes",
                "To implement interfaces"
            ],
            "correct": 0,
            "explanation": "Access modifiers (public, private, etc.) control visibility."
        },
        {
            "question": "Which access modifier is most restrictive?",
            "options": [
                "public",
                "protected",
                "private",
                "internal"
            ],
            "correct": 2,
            "explanation": "private limits access to the containing type only."
        },
        {
            "question": "What is a static method?",
            "options": [
                "A method that can't be overridden",
                "A method that belongs to the type rather than instances",
                "A method that is always public",
                "A method that returns a constant"
            ],
            "correct": 1,
            "explanation": "Static methods are called on the type, not instances."
        },
        {
            "question": "What is a sealed class?",
            "options": [
                "A class that can't be extended",
                "A class that must be inherited",
                "A class that implements all methods",
                "A class that can't be instantiated"
            ],
            "correct": 0,
            "explanation": "sealed prevents a class from being inherited."
        },
        {
            "question": "What is method hiding?",
            "options": [
                "Making a method private",
                "Redefining a non-virtual method in a derived class",
                "Overriding an instance method",
                "Declaring an abstract method"
            ],
            "correct": 1,
            "explanation": "Method hiding uses the 'new' keyword to redefine non-virtual methods."
        },
        {
            "question": "What is the diamond problem in multiple inheritance?",
            "options": [
                "Ambiguity when same method exists in multiple interfaces",
                "Circular inheritance between classes",
                "A class inheriting from itself",
                "Too many levels of inheritance"
            ],
            "correct": 0,
            "explanation": "C# avoids this by not allowing multiple class inheritance."
        },
        {
            "question": "What is a partial class?",
            "options": [
                "A class that can't be instantiated",
                "A class split across multiple files",
                "A class with only some methods implemented",
                "An abstract class"
            ],
            "correct": 1,
            "explanation": "Partial classes allow splitting class definitions across files."
        },
        {
            "question": "What is a property?",
            "options": [
                "A class variable",
                "A managed field with accessors",
                "A special kind of method",
                "An instance variable"
            ],
            "correct": 1,
            "explanation": "Properties encapsulate fields with get/set accessors."
        },
        {
            "question": "What is an auto-implemented property?",
            "options": [
                "A property with only get accessor",
                "A property with compiler-generated backing field",
                "A static property",
                "An abstract property"
            ],
            "correct": 1,
            "explanation": "Auto-properties automatically generate backing fields."
        },
        {
            "question": "What is the purpose of 'virtual' keyword?",
            "options": [
                "To allow method overriding",
                "To make a method static",
                "To create abstract methods",
                "To improve performance"
            ],
            "correct": 0,
            "explanation": "virtual allows derived classes to override the method."
        },
        {
            "question": "What is an indexer?",
            "options": [
                "A special kind of property",
                "A way to index objects like arrays",
                "Both A and B",
                "A collection initializer"
            ],
            "correct": 2,
            "explanation": "Indexers allow objects to be indexed like arrays."
        },
        {
            "question": "What is a delegate?",
            "options": [
                "A type-safe function pointer",
                "A lightweight thread",
                "A base class",
                "A reference type"
            ],
            "correct": 0,
            "explanation": "Delegates hold references to methods with specific signatures."
        },
        {
            "question": "What is an event?",
            "options": [
                "A special kind of delegate",
                "A notification mechanism",
                "Both A and B",
                "A system message"
            ],
            "correct": 2,
            "explanation": "Events are based on delegates and provide publish-subscribe mechanism."
        },
        {
            "question": "What is the purpose of 'readonly' keyword?",
            "options": [
                "To create constants",
                "To make fields immutable after construction",
                "To prevent method overriding",
                "To create read-only properties"
            ],
            "correct": 1,
            "explanation": "readonly fields can only be set during declaration or in a constructor."
        }

];

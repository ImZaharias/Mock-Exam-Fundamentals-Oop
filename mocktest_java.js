var questions = [
        // Java Fundamentals (30 questions)
        {
            "question": "What is the correct syntax to declare a main method in Java?",
            "options": [
                "public static int main(String[] args)",
                "public static void main(String[] args)",
                "public void main(String[] args)",
                "static void main(String[] args)"
            ],
            "correct": 1,
            "explanation": "The main method must be public, static, void, and accept a String array parameter."
        },
        {
            "question": "Which of these is NOT a primitive data type in Java?",
            "options": [
                "int",
                "boolean",
                "String",
                "double"
            ],
            "correct": 2,
            "explanation": "String is a class, not a primitive type. The primitives are byte, short, int, long, float, double, boolean, and char."
        },
        {
            "question": "What is the range of a byte data type in Java?",
            "options": [
                "0 to 256",
                "-128 to 127",
                "-32768 to 32767",
                "0 to 65535"
            ],
            "correct": 1,
            "explanation": "byte is an 8-bit signed two's complement integer with range -128 to 127."
        },
        {
            "question": "Which operator is used to compare two values for equality in Java?",
            "options": [
                "==",
                "=",
                "===",
                "equals()"
            ],
            "correct": 0,
            "explanation": "The == operator compares primitive values or object references for equality."
        },
        {
            "question": "What is the output of: System.out.println(5 + \"5\");",
            "options": [
                "10",
                "55",
                "Compilation error",
                "Runtime exception"
            ],
            "correct": 1,
            "explanation": "The + operator performs string concatenation when one operand is a String."
        },
        {
            "question": "Which loop is guaranteed to execute at least once?",
            "options": [
                "for loop",
                "while loop",
                "do-while loop",
                "All of the above"
            ],
            "correct": 2,
            "explanation": "do-while checks the condition after executing the loop body."
        },
        {
            "question": "What is the default value of a boolean variable in Java?",
            "options": [
                "true",
                "false",
                "null",
                "0"
            ],
            "correct": 1,
            "explanation": "The default value for boolean is false."
        },
        {
            "question": "Which keyword is used to create an instance of a class?",
            "options": [
                "this",
                "super",
                "new",
                "instanceof"
            ],
            "correct": 2,
            "explanation": "The 'new' keyword allocates memory for a new object."
        },
        {
            "question": "What is the correct way to declare an array in Java?",
            "options": [
                "int arr[] = new int[5];",
                "int[] arr = new int[5];",
                "int arr = new int[5];",
                "Both A and B"
            ],
            "correct": 3,
            "explanation": "Both syntaxes are valid for array declaration in Java."
        },
        {
            "question": "Which method must be implemented when using the Runnable interface?",
            "options": [
                "start()",
                "run()",
                "execute()",
                "main()"
            ],
            "correct": 1,
            "explanation": "The Runnable interface requires implementing the run() method."
        },
        {
            "question": "What is the size of an int in Java?",
            "options": [
                "8 bits",
                "16 bits",
                "32 bits",
                "64 bits"
            ],
            "correct": 2,
            "explanation": "An int is always 32 bits in Java, regardless of platform."
        },
        {
            "question": "Which of these is NOT a valid Java identifier?",
            "options": [
                "_variable",
                "$variable",
                "2variable",
                "variable2"
            ],
            "correct": 2,
            "explanation": "Identifiers cannot start with a number in Java."
        },
        {
            "question": "What is the output of: System.out.println(10 % 3);",
            "options": [
                "0",
                "1",
                "3",
                "3.333"
            ],
            "correct": 1,
            "explanation": "The % operator returns the remainder of division (10 ÷ 3 = 3 with remainder 1)."
        },
        {
            "question": "Which keyword is used to exit a loop prematurely?",
            "options": [
                "exit",
                "break",
                "continue",
                "return"
            ],
            "correct": 1,
            "explanation": "The break statement terminates the loop immediately."
        },
        {
            "question": "What is the parent class of all Java classes?",
            "options": [
                "Object",
                "Class",
                "Main",
                "Super"
            ],
            "correct": 0,
            "explanation": "The Object class is at the top of the class hierarchy."
        },
        {
            "question": "Which of these is NOT a Java keyword?",
            "options": [
                "goto",
                "const",
                "null",
                "All of these are keywords"
            ],
            "correct": 3,
            "explanation": "goto and const are reserved but unused keywords. null is a literal."
        },
        {
            "question": "What is autoboxing in Java?",
            "options": [
                "Automatic conversion between primitives and wrapper classes",
                "A special type of exception handling",
                "Memory management technique",
                "A design pattern"
            ],
            "correct": 0,
            "explanation": "Autoboxing converts primitives to wrapper objects and vice versa automatically."
        },
        {
            "question": "Which collection implements a FIFO (first-in-first-out) behavior?",
            "options": [
                "ArrayList",
                "LinkedList",
                "Stack",
                "Queue"
            ],
            "correct": 3,
            "explanation": "Queue interface implementations follow FIFO, though LinkedList can implement it."
        },
        {
            "question": "What is the default value of an object reference?",
            "options": [
                "null",
                "0",
                "undefined",
                "Depends on the type"
            ],
            "correct": 0,
            "explanation": "Object references are initialized to null by default."
        },
        {
            "question": "Which exception is thrown when dividing by zero?",
            "options": [
                "NullPointerException",
                "ArithmeticException",
                "DivideByZeroException",
                "NumberFormatException"
            ],
            "correct": 1,
            "explanation": "ArithmeticException is thrown for divide by zero operations."
        },
        {
            "question": "What is the scope of a variable declared in a for loop?",
            "options": [
                "The entire method",
                "Only within the loop block",
                "The entire class",
                "The entire package"
            ],
            "correct": 1,
            "explanation": "Loop variables are only accessible within the loop block."
        },
        {
            "question": "Which method is called when an object is garbage collected?",
            "options": [
                "finalize()",
                "delete()",
                "destroy()",
                "cleanup()"
            ],
            "correct": 0,
            "explanation": "The finalize() method is called before garbage collection (but unreliable)."
        },
        {
            "question": "What is the purpose of the 'this' keyword?",
            "options": [
                "Refers to the current class instance",
                "Refers to the parent class",
                "Creates a new object",
                "Imports a class"
            ],
            "correct": 0,
            "explanation": "'this' refers to the current object instance."
        },
        {
            "question": "Which of these is a checked exception?",
            "options": [
                "NullPointerException",
                "IOException",
                "ArrayIndexOutOfBoundsException",
                "ArithmeticException"
            ],
            "correct": 1,
            "explanation": "IOException must be declared or caught (checked exception)."
        },
        {
            "question": "What does the 'final' keyword mean when applied to a variable?",
            "options": [
                "The variable is constant",
                "The variable can't be inherited",
                "The variable is thread-safe",
                "The variable is static"
            ],
            "correct": 0,
            "explanation": "A final variable's value cannot be changed after initialization."
        },
        {
            "question": "Which package is automatically imported in every Java class?",
            "options": [
                "java.util",
                "java.io",
                "java.lang",
                "None - all must be explicitly imported"
            ],
            "correct": 2,
            "explanation": "java.lang (containing System, Object, String etc.) is automatically imported."
        },
        {
            "question": "What is the correct way to handle multiple exceptions?",
            "options": [
                "Multiple catch blocks",
                "Single catch with multiple exception types",
                "Both A and B",
                "Neither A nor B"
            ],
            "correct": 2,
            "explanation": "You can use either multiple catch blocks or a single catch with pipe (|) syntax."
        },
        {
            "question": "Which method is used to compare strings for equality?",
            "options": [
                "equals()",
                "==",
                "compare()",
                "same()"
            ],
            "correct": 0,
            "explanation": "equals() compares string content, while == compares references."
        },
        {
            "question": "What is the purpose of the 'static' keyword?",
            "options": [
                "Makes a variable constant",
                "Allows access without class instantiation",
                "Prevents inheritance",
                "Makes a variable thread-safe"
            ],
            "correct": 1,
            "explanation": "static members belong to the class rather than instances."
        },
        // Object-Oriented Programming (30 beginner questions)
        {
            "question": "What are the four main principles of OOP?",
            "options": [
                "Abstraction, Encapsulation, Inheritance, Polymorphism",
                "Classes, Objects, Methods, Variables",
                "Public, Private, Protected, Package",
                "Static, Final, Abstract, Interface"
            ],
            "correct": 0,
            "explanation": "The four pillars of OOP are Abstraction, Encapsulation, Inheritance, and Polymorphism."
        },
        {
            "question": "What is a class in Java?",
            "options": [
                "A primitive data type",
                "A blueprint for creating objects",
                "A method that returns a value",
                "A collection of static methods"
            ],
            "correct": 1,
            "explanation": "A class defines the properties and behaviors that objects of that class will have."
        },
        {
            "question": "What is an object?",
            "options": [
                "A static method",
                "An instance of a class",
                "A primitive variable",
                "A package"
            ],
            "correct": 1,
            "explanation": "An object is a runtime instance of a class with its own state and behavior."
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
            "explanation": "Encapsulation is bundling data with methods that operate on that data and restricting direct access."
        },
        {
            "question": "Which keyword is used to achieve inheritance?",
            "options": [
                "implements",
                "extends",
                "inherits",
                "super"
            ],
            "correct": 1,
            "explanation": "The 'extends' keyword is used to create a subclass that inherits from a superclass."
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
            "explanation": "Polymorphism allows objects of different classes to be treated as objects of a common superclass."
        },
        {
            "question": "What is method overloading?",
            "options": [
                "Redefining a method in a subclass",
                "Multiple methods with same name but different parameters",
                "Making a method available to all classes",
                "Creating an abstract method"
            ],
            "correct": 1,
            "explanation": "Overloading is having multiple methods with the same name but different parameter lists."
        },
        {
            "question": "What is method overriding?",
            "options": [
                "Providing a new implementation in a subclass",
                "Creating multiple methods with same name",
                "Making a method final",
                "Hiding a method implementation"
            ],
            "correct": 0,
            "explanation": "Overriding provides a specific implementation of a method already defined in a parent class."
        },
        {
            "question": "What is an abstract class?",
            "options": [
                "A class that cannot be instantiated",
                "A class with only static methods",
                "A class that implements an interface",
                "A final class"
            ],
            "correct": 0,
            "explanation": "An abstract class is a class that cannot be instantiated and may contain abstract methods."
        },
        {
            "question": "What is an interface?",
            "options": [
                "A class that can't be extended",
                "A reference type containing only constants and abstract methods",
                "A special kind of abstract class",
                "A collection of static methods"
            ],
            "correct": 1,
            "explanation": "An interface is a completely abstract class used to specify behavior that classes must implement."
        },
        {
            "question": "What is the 'super' keyword used for?",
            "options": [
                "To call superclass constructors and methods",
                "To create a superclass",
                "To make a class final",
                "To implement an interface"
            ],
            "correct": 0,
            "explanation": "'super' is used to access superclass members and call superclass constructors."
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
            "explanation": "A constructor is a special method called when an object is instantiated to initialize it."
        },
        {
            "question": "Can a constructor be inherited?",
            "options": [
                "Yes",
                "No",
                "Only if marked with @Inherit",
                "Only in abstract classes"
            ],
            "correct": 1,
            "explanation": "Constructors are not inherited in Java. Each class must define its own constructors."
        },
        {
            "question": "What is the difference between an interface and an abstract class?",
            "options": [
                "Interfaces can have implementations",
                "Abstract classes can have fields and method implementations",
                "There is no difference",
                "Interfaces can be instantiated"
            ],
            "correct": 1,
            "explanation": "Abstract classes can have fields and method implementations, while interfaces traditionally couldn't (until Java 8)."
        },
        {
            "question": "What is composition in OOP?",
            "options": [
                "Creating objects within a class",
                "Extending a base class",
                "Implementing multiple interfaces",
                "Overloading methods"
            ],
            "correct": 0,
            "explanation": "Composition is creating objects of other classes within a class (has-a relationship)."
        },
        {
            "question": "What is the 'instanceof' operator used for?",
            "options": [
                "To create a new instance",
                "To check if an object is of a specific type",
                "To compare two instances",
                "To call a static method"
            ],
            "correct": 1,
            "explanation": "The instanceof operator checks whether an object is an instance of a specific class or interface."
        },
        {
            "question": "What is a package in Java?",
            "options": [
                "A collection of related classes",
                "A single class file",
                "A method library",
                "A JAR file"
            ],
            "correct": 0,
            "explanation": "A package is a namespace that organizes related classes and interfaces."
        },
        {
            "question": "What is the purpose of access modifiers?",
            "options": [
                "To control visibility of classes, methods, and variables",
                "To modify method behavior",
                "To create abstract classes",
                "To implement interfaces"
            ],
            "correct": 0,
            "explanation": "Access modifiers (public, private, protected) control the visibility and accessibility of class members."
        },
        {
            "question": "Which access modifier provides the most restrictive access?",
            "options": [
                "public",
                "protected",
                "private",
                "package-private (no modifier)"
            ],
            "correct": 2,
            "explanation": "private members are only accessible within their own class."
        },
        {
            "question": "What is a static method?",
            "options": [
                "A method that can't be overridden",
                "A method that belongs to the class rather than instances",
                "A method that is always public",
                "A method that returns a constant"
            ],
            "correct": 1,
            "explanation": "Static methods belong to the class rather than any object instance and can be called without instantiation."
        },
        {
            "question": "What is a final class?",
            "options": [
                "A class that can't be extended",
                "A class that must be inherited",
                "A class that implements all methods",
                "A class that can't be instantiated"
            ],
            "correct": 0,
            "explanation": "A final class cannot be subclassed (extended)."
        },
        {
            "question": "What is method hiding?",
            "options": [
                "Making a method private",
                "Redefining a static method in a subclass",
                "Overriding an instance method",
                "Declaring an abstract method"
            ],
            "correct": 1,
            "explanation": "Method hiding occurs when a subclass defines a static method with same signature as in superclass."
        },
        {
            "question": "What is the diamond problem in multiple inheritance?",
            "options": [
                "When a class inherits from multiple classes with same method",
                "When a class has too many methods",
                "When a class is both abstract and final",
                "When an interface has default methods"
            ],
            "correct": 0,
            "explanation": "The diamond problem occurs when a class would inherit from multiple classes with the same method, causing ambiguity."
        },
        {
            "question": "Why doesn't Java support multiple inheritance of classes?",
            "options": [
                "To avoid the diamond problem",
                "Because it's object-oriented",
                "Because interfaces provide similar functionality",
                "To improve performance"
            ],
            "correct": 0,
            "explanation": "Java avoids multiple inheritance of classes to prevent the diamond problem and keep the language simpler."
        },
        {
            "question": "What is an inner class?",
            "options": [
                "A class declared inside another class",
                "A private class",
                "A static class",
                "An abstract class"
            ],
            "correct": 0,
            "explanation": "An inner class is a class defined within another class, with access to the enclosing class's members."
        },
        {
            "question": "What is a singleton class?",
            "options": [
                "A class with only static methods",
                "A class that can have only one instance",
                "A class that implements one interface",
                "A final class"
            ],
            "correct": 1,
            "explanation": "A singleton class ensures that only one instance of the class exists in the JVM."
        },
        {
            "question": "What is the purpose of the 'this' keyword in constructors?",
            "options": [
                "To call another constructor in the same class",
                "To create a new object",
                "To call a superclass constructor",
                "To make the constructor final"
            ],
            "correct": 0,
            "explanation": "this() is used to call another constructor in the same class (constructor chaining)."
        },
        {
            "question": "What is a marker interface?",
            "options": [
                "An interface with many methods",
                "An empty interface used to mark classes",
                "An interface that marks methods as final",
                "An interface that can't be implemented"
            ],
            "correct": 1,
            "explanation": "A marker interface is an empty interface used to indicate some capability or characteristic (e.g., Serializable)."
        },
        {
            "question": "What is method chaining?",
            "options": [
                "Calling multiple methods in sequence on the same object",
                "Overriding multiple methods",
                "Creating a chain of method calls across classes",
                "Implementing multiple interfaces"
            ],
            "correct": 0,
            "explanation": "Method chaining involves calling multiple methods on the same object in sequence (often returning 'this')."
        },
        {
            "question": "What is tight coupling in OOP?",
            "options": [
                "When classes are highly dependent on each other",
                "When methods are chained together",
                "When inheritance is used extensively",
                "When interfaces are implemented"
            ],
            "correct": 0,
            "explanation": "Tight coupling occurs when classes are highly dependent on each other's implementations, making changes difficult."
        },
        {
            "question": "What is the Liskov Substitution Principle?",
            "options": [
                "Subclasses should be substitutable for their base classes",
                "Classes should be open for extension but closed for modification",
                "Depend on abstractions not concretions",
                "A class should have only one reason to change"
            ],
            "correct": 0,
            "explanation": "The Liskov Substitution Principle states that objects of a superclass should be replaceable with objects of its subclasses without breaking the application."
        }
    
];
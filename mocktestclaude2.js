const questions = [
        {
        "question": "What is the maximum number of SOQL queries that can be executed in a single transaction?",
        "options": [
        "50",
        "100",
        "150",
        "200"
        ],
        "correct": 1,
        "explanation": "The governor limit for SOQL queries in a single transaction is 100. This limit helps prevent infinite loops and ensures platform performance."
        },
        {
        "question": "Which of the following are valid Apex data types? (Select 3)",
        "options": [
        "Decimal",
        "Double",
        "Currency",
        "DateTime",
        "Text"
        ],
        "correct": [0, 1, 3],
        "explanation": "Decimal, Double, and DateTime are valid Apex data types. Currency and Text are not valid primitive data types in Apex."
        },
        {
        "question": "What happens when a DML operation fails in a try-catch block?",
        "options": [
        "The transaction is automatically rolled back",
        "Only the failed record is rolled back",
        "The exception is caught and processing continues",
        "The entire batch is marked as failed"
        ],
        "correct": 2,
        "explanation": "When a DML operation fails in a try-catch block, the exception is caught and can be handled, allowing processing to continue with proper error handling."
        },
        {
        "question": "Which annotation is used to expose an Apex method as a REST web service?",
        "options": [
        "@AuraEnabled",
        "@RemoteAction",
        "@HttpGet",
        "@RestResource"
        ],
        "correct": 2,
        "explanation": "@HttpGet (along with @HttpPost, @HttpPut, @HttpDelete) is used to expose Apex methods as REST endpoints. @RestResource is used at the class level."
        },
        {
        "question": "What is the maximum number of records that can be returned by a single SOQL query?",
        "options": [
        "10,000",
        "50,000",
        "100,000",
        "No limit"
        ],
        "correct": 1,
        "explanation": "A single SOQL query can return a maximum of 50,000 records. This is a governor limit to ensure platform performance."
        },
        {
        "question": "Which of the following is NOT a valid Apex collection type?",
        "options": [
        "List",
        "Set",
        "Map",
        "Array"
        ],
        "correct": 3,
        "explanation": "Array is not a valid collection type in Apex. The valid collection types are List, Set, and Map."
        },
        {
        "question": "What is the correct syntax to create a new Account record using Apex?",
        "options": [
        "Account acc = new Account(Name='Test');",
        "Account acc = Account.create(Name='Test');",
        "Account acc = new Account.Name('Test');",
        "Account acc = Account.new(Name='Test');"
        ],
        "correct": 0,
        "explanation": "The correct syntax uses the 'new' keyword followed by the object constructor with field assignments in parentheses."
        },
        {
        "question": "Which methods can be used to execute DML operations in Apex? (Select 2)",
        "options": [
        "Database.save()",
        "insert",
        "Database.insert()",
        "save()"
        ],
        "correct": [1, 2],
        "explanation": "Both 'insert' (DML statement) and 'Database.insert()' (Database method) can be used to perform DML operations, with Database methods offering more control."
        },
        {
        "question": "What is the purpose of the @TestSetup annotation?",
        "options": [
        "To mark a method as a test method",
        "To create test data for all test methods in a class",
        "To enable or disable test execution",
        "To set test configurations"
        ],
        "correct": 1,
        "explanation": "@TestSetup creates test data once that can be used by all test methods in the class, improving test performance and maintainability."
        },
        {
        "question": "What is the maximum number of script statements allowed per Apex transaction?",
        "options": [
        "5,000",
        "10,000",
        "20,000",
        "50,000"
        ],
        "correct": 1,
        "explanation": "The governor limit for script statements in a single transaction is 10,000 to prevent infinite loops and ensure platform performance."
        },
        {
        "question": "What is the difference between System.debug() and System.assert()?",
        "options": [
        "debug() is for logging, assert() is for testing",
        "debug() stops execution, assert() continues",
        "debug() is deprecated, assert() is current",
        "No difference, they are synonymous"
        ],
        "correct": 0,
        "explanation": "System.debug() is used for logging information to debug logs, while System.assert() is used in testing to verify expected conditions."
        },
        {
        "question": "Which annotation makes an Apex method accessible to Lightning components?",
        "options": [
        "@AuraEnabled",
        "@RemoteAction",
        "@TestVisible",
        "@HttpPost"
        ],
        "correct": 0,
        "explanation": "@AuraEnabled annotation makes Apex methods accessible to Lightning components (both Aura and LWC)."
        },
        {
        "question": "What is the maximum number of characters allowed in an Apex class?",
        "options": [
        "1,000,000",
        "6,000,000",
        "10,000,000",
        "No limit"
        ],
        "correct": 1,
        "explanation": "An Apex class can contain a maximum of 6,000,000 characters, which is a platform limitation."
        },
        {
        "question": "Which automation tool should be used for complex business logic with multiple conditions and loops?",
        "options": [
        "Workflow Rules",
        "Process Builder",
        "Flow",
        "Apex Triggers"
        ],
        "correct": 2,
        "explanation": "Flow is the most powerful declarative automation tool that supports complex logic, loops, and decision-making without code."
        },
        {
        "question": "What is the correct order of execution for Salesforce automation?",
        "options": [
        "Triggers → Workflows → Process Builder → Flows",
        "Workflows → Triggers → Flows → Process Builder",
        "Validation Rules → Triggers → Workflows → Process Builder",
        "Process Builder → Triggers → Workflows → Flows"
        ],
        "correct": 2,
        "explanation": "The order of execution follows: Validation Rules → Before Triggers → After Triggers → Workflow Rules → Process Builder → Flows."
        },
        {
        "question": "In which trigger context can you perform DML operations on the same object?",
        "options": [
        "Before triggers only",
        "After triggers only",
        "Both before and after triggers",
        "Neither before nor after triggers"
        ],
        "correct": 1,
        "explanation": "DML operations on the same object that fired the trigger can only be performed in after triggers to avoid conflicts."
        },
        {
        "question": "What does Trigger.new contain in an Apex trigger?",
        "options": [
        "Creates new records",
        "Contains the new version of records being processed",
        "Stores trigger metadata",
        "Defines trigger logic"
        ],
        "correct": 1,
        "explanation": "Trigger.new contains a list of the new versions of the sObject records that caused the trigger to fire."
        },
        {
        "question": "Which Flow element is used to create new records?",
        "options": [
        "Assignment",
        "Create Records",
        "Update Records",
        "Get Records"
        ],
        "correct": 1,
        "explanation": "The Create Records element in Flow is specifically designed to create new records in Salesforce."
        },
        {
        "question": "What happens when a validation rule fails?",
        "options": [
        "The record is saved with warnings",
        "The record is not saved and an error is displayed",
        "Only the invalid field is not saved",
        "The record is saved but marked as invalid"
        ],
        "correct": 1,
        "explanation": "When a validation rule fails, the entire record save operation is prevented and an error message is displayed to the user."
        },
        {
        "question": "Which events can trigger a Process Builder? (Select 2)",
        "options": [
        "Record creation",
        "Record update",
        "Record deletion",
        "User login",
        "System maintenance"
        ],
        "correct": [0, 1],
        "explanation": "Process Builder can be triggered by record creation and record updates. It cannot be triggered by deletions, user events, or system events."
        },
        {
        "question": "What is the maximum number of active Process Builder processes allowed per object?",
        "options": [
        "5",
        "10",
        "50",
        "No limit"
        ],
        "correct": 3,
        "explanation": "There is no governor limit on the number of active Process Builder processes per object, but performance considerations apply."
        },
        {
        "question": "Which trigger event occurs before a record is deleted from the database?",
        "options": [
        "after delete",
        "before delete",
        "on delete",
        "pre delete"
        ],
        "correct": 1,
        "explanation": "The 'before delete' trigger event fires before records are deleted from the database, allowing for validation or related record updates."
        },
        {
        "question": "What is the primary purpose of the @future annotation in Apex?",
        "options": [
        "To schedule code execution for a future date",
        "To run code asynchronously",
        "To handle future date calculations",
        "To optimize query performance"
        ],
        "correct": 1,
        "explanation": "@future annotation allows methods to run asynchronously, which is useful for callouts and avoiding mixed DML operations."
        },
        {
        "question": "What is a potential issue with recursive triggers?",
        "options": [
        "They are automatically prevented by Salesforce",
        "They can cause infinite loops and governor limit exceptions",
        "They are only allowed in after triggers",
        "They improve performance by batching operations"
        ],
        "correct": 1,
        "explanation": "Recursive triggers can cause infinite loops if not properly controlled, leading to governor limit exceptions and system performance issues."
        },
        {
        "question": "What is the daily limit for email alerts sent from Salesforce?",
        "options": [
        "1,000",
        "5,000",
        "10,000",
        "15,000"
        ],
        "correct": 2,
        "explanation": "Salesforce allows up to 10,000 email alerts to be sent per day across the entire organization."
        },
        {
        "question": "Which tool is best for simple field updates when a record is created or updated?",
        "options": [
        "Apex Trigger",
        "Workflow Rule",
        "Process Builder",
        "Flow"
        ],
        "correct": 1,
        "explanation": "Workflow Rules are ideal for simple field updates and are the most lightweight automation option for basic scenarios."
        },
        {
        "question": "What is the purpose of the Database.Savepoint class?",
        "options": [
        "To permanently save database changes",
        "To create rollback points in transactions",
        "To optimize query performance",
        "To handle database exceptions"
        ],
        "correct": 1,
        "explanation": "Database.Savepoint allows you to create rollback points within a transaction, enabling partial rollbacks without losing all changes."
        },
        {
        "question": "Which operations can be performed in a before trigger? (Select 2)",
        "options": [
        "Modify the triggering record's fields",
        "Insert related records",
        "Validate data before save",
        "Send email notifications",
        "Delete unrelated records"
        ],
        "correct": [0, 2],
        "explanation": "Before triggers can modify the triggering record's fields and validate data. DML operations and email sending should be done in after triggers."
        },
        {
        "question": "What is the maximum execution time for a single Apex transaction?",
        "options": [
        "10 seconds",
        "60 seconds",
        "120 seconds",
        "300 seconds"
        ],
        "correct": 2,
        "explanation": "A single Apex transaction has a maximum execution time of 120 seconds (2 minutes) before it times out."
        },
        {
        "question": "Which Lightning component is used to display data in a tabular format?",
        "options": [
        "lightning:dataTable",
        "lightning:table",
        "aura:dataGrid",
        "lightning:grid"
        ],
        "correct": 0,
        "explanation": "lightning:dataTable (or lightning-datatable in LWC) is the standard component for displaying data in a tabular format with sorting and selection features."
        },
        {
        "question": "What does the @AuraEnabled annotation do for Apex methods?",
        "options": [
        "Enables Aura components framework",
        "Makes Apex methods accessible to Lightning components",
        "Enables debugging for the method",
        "Optimizes method performance"
        ],
        "correct": 1,
        "explanation": "@AuraEnabled makes Apex methods accessible to both Aura components and Lightning Web Components for server-side operations."
        },
        {
        "question": "Which event is commonly used for navigation between Lightning components?",
        "options": [
        "force:navigateToComponent",
        "force:navigateToSObject",
        "aura:navigate",
        "lightning:navigate"
        ],
        "correct": 1,
        "explanation": "force:navigateToSObject is commonly used to navigate to record pages, while force:navigateToComponent navigates between components."
        },
        {
        "question": "How are events typically handled in Lightning components?",
        "options": [
        "Using JavaScript event handlers only",
        "Using Aura event handlers only",
        "Using Apex controllers only",
        "Using a combination of JavaScript, Aura handlers, and Apex controllers"
        ],
        "correct": 3,
        "explanation": "Lightning components use a combination of JavaScript for client-side logic, Aura event handlers for component communication, and Apex controllers for server-side operations."
        },
        {
        "question": "Which file type is NOT part of a Lightning component bundle?",
        "options": [
        ".cmp",
        ".css",
        ".js",
        ".apex"
        ],
        "correct": 3,
        "explanation": "Lightning component bundles contain .cmp, .css, .js, .svg, .design, .auradoc, and .helper files, but not .apex files."
        },
        {
        "question": "What is the primary benefit of the lightning:recordForm component?",
        "options": [
        "Creates highly customized forms",
        "Displays and edits records without requiring Apex code",
        "Validates form data automatically",
        "Handles complex form submissions"
        ],
        "correct": 1,
        "explanation": "lightning:recordForm provides automatic form generation, field-level security, and record operations without requiring custom Apex code."
        },
        {
        "question": "Which attribute is used to pass data from parent to child Lightning components?",
        "options": [
        "aura:attribute",
        "aura:method",
        "aura:handler",
        "aura:dependency"
        ],
        "correct": 0,
        "explanation": "aura:attribute defines attributes that can be set by parent components to pass data to child components."
        },
        {
        "question": "What is the main difference between component events and application events?",
        "options": [
        "Component events are faster than application events",
        "Component events are for parent-child communication, application events are for broader communication",
        "Application events are deprecated in favor of component events",
        "There is no functional difference between them"
        ],
        "correct": 1,
        "explanation": "Component events follow the DOM structure for parent-child communication, while application events can be fired and handled by any component in the application."
        },
        {
        "question": "Which Lightning component is best for displaying a list of records with actions?",
        "options": [
        "lightning:recordList",
        "lightning:listView",
        "force:recordData",
        "lightning:dataTable"
        ],
        "correct": 3,
        "explanation": "lightning:dataTable provides comprehensive list display with built-in actions, sorting, and selection capabilities."
        },
        {
        "question": "What is the purpose of the $A.enqueueAction() method in Aura components?",
        "options": [
        "To queue server-side actions for execution",
        "To handle client-side events",
        "To validate component data",
        "To optimize component performance"
        ],
        "correct": 0,
        "explanation": "$A.enqueueAction() adds server-side controller actions to the queue for execution and handles the asynchronous communication with the server."
        },
        {
        "question": "Which statement is true about Lightning Web Components (LWC)?",
        "options": [
        "They use the Aura framework internally",
        "They are built on modern web standards",
        "They require Apex controllers for all operations",
        "They are slower than Aura components"
        ],
        "correct": 1,
        "explanation": "LWC is built on modern web standards like ES6, Web Components, and modern JavaScript, making them more performant and standards-compliant."
        },
        {
        "question": "What is the correct way to import an Apex method in Lightning Web Components?",
        "options": [
        "@wire(getAccountList)",
        "import getAccountList from '@salesforce/apex/AccountController.getAccountList'",
        "@AuraEnabled getAccountList",
        "@import getAccountList"
        ],
        "correct": 1,
        "explanation": "LWC uses ES6 import syntax to import Apex methods with the '@salesforce/apex/' prefix followed by the class and method name."
        },
        {
        "question": "Which decorator makes a property reactive in Lightning Web Components?",
        "options": [
        "@api",
        "@track",
        "@wire",
        "@reactive"
        ],
        "correct": 0,
        "explanation": "@api decorator makes properties public and reactive. @track is legacy and not needed in modern LWC, @wire is for data binding."
        },
        {
        "question": "What is the purpose of the connectedCallback() lifecycle method in LWC?",
        "options": [
        "To connect to external APIs",
        "To handle component initialization and DOM insertion",
        "To establish database connections",
        "To validate component data"
        ],
        "correct": 1,
        "explanation": "connectedCallback() is a lifecycle hook that fires when the component is inserted into the DOM, used for initialization logic."
        },
        {
        "question": "What is the minimum code coverage required for production deployment?",
        "options": [
        "65%",
        "70%",
        "75%",
        "80%"
        ],
        "correct": 2,
        "explanation": "Salesforce requires a minimum of 75% code coverage for production deployments, with all triggers requiring 1% coverage."
        },
        {
        "question": "Which annotation is used to mark a method as a test method in Apex?",
        "options": [
        "@Test",
        "@TestMethod",
        "@UnitTest",
        "@TestCase"
        ],
        "correct": 0,
        "explanation": "@Test is the standard annotation to mark methods as test methods. @TestMethod is deprecated."
        },
        {
        "question": "What is the purpose of Test.startTest() and Test.stopTest() in unit tests?",
        "options": [
        "To start and stop test execution timing",
        "To reset governor limits for the test",
        "To measure test performance metrics",
        "To create and destroy test data"
        ],
        "correct": 1,
        "explanation": "Test.startTest() and Test.stopTest() reset governor limits, giving you a fresh set of limits for the code being tested."
        },
        {
        "question": "Which method is used to load test data from static resources?",
        "options": [
        "@TestSetup",
        "Test.loadData()",
        "Database.insert()",
        "System.runAs()"
        ],
        "correct": 1,
        "explanation": "Test.loadData() loads test data from CSV files stored in static resources, providing a way to create bulk test data."
        },
        {
        "question": "What is the purpose of System.runAs() in test methods?",
        "options": [
        "To run tests as different users to test security",
        "To optimize test performance",
        "To handle test exceptions",
        "To create test data efficiently"
        ],
        "correct": 0,
        "explanation": "System.runAs() allows tests to execute as different users to verify sharing rules, field-level security, and user permissions."
        },
        {
        "question": "Which statement is true about test methods in Apex?",
        "options": [
        "They can access production data by default",
        "They must be declared as public or global",
        "They can perform callouts without mocking",
        "They require @AuraEnabled annotation"
        ],
        "correct": 1,
        "explanation": "Test methods must be public or global to be executed by the test framework. They cannot access production data or perform real callouts."
        },
        {
        "question": "What does the @isTest annotation do when applied at the class level?",
        "options": [
        "Marks individual test methods",
        "Excludes the class from code coverage calculations",
        "Indicates the entire class is for testing purposes",
        "Enables advanced test debugging"
        ],
        "correct": 2,
        "explanation": "@isTest at the class level indicates that the entire class is for testing and excludes it from the organization's code size limit."
        },
        {
        "question": "Which tools can be used to monitor Apex execution and debug issues? (Select 3)",
        "options": [
        "Debug Logs",
        "System Log Console",
        "Developer Console",
        "Apex Profiler",
        "Query Plan Tool"
        ],
        "correct": [0, 2, 3],
        "explanation": "Debug Logs, Developer Console, and Apex Profiler are primary tools for monitoring and debugging Apex code execution and performance."
        },
        {
        "question": "What is a best practice for test data creation in Apex tests?",
        "options": [
        "Use @TestSetup for data shared across multiple tests",
        "Create data individually in each test method",
        "Use production data for realistic testing",
        "Hardcode record IDs from sandbox"
        ],
        "correct": 0,
        "explanation": "@TestSetup methods create test data once that can be shared across all test methods in the class, improving performance and maintainability."
        },
        {
        "question": "Which scenario requires creating a mock for proper testing?",
        "options": [
        "DML operations on test data",
        "SOQL queries on test records",
        "HTTP callouts to external systems",
        "Mathematical calculations"
        ],
        "correct": 2,
        "explanation": "HTTP callouts require mocks because actual callouts cannot be made during test execution. Test.setMock() is used to simulate responses."
        },
        {
        "question": "What is the maximum number of records that can be processed in a single DML statement?",
        "options": [
        "100",
        "200",
        "500",
        "10,000"
        ],
        "correct": 1,
        "explanation": "A single DML statement can process up to 200 records. This applies to insert, update, delete, and upsert operations.",
        "category": "Developer Fundamentals"
        },
        {
        "question": "Which statement about SOQL queries is correct?",
        "options": [
        "SOQL keywords are case-sensitive",
        "SOQL can query any Salesforce object with proper permissions",
        "SELECT * is supported to query all fields",
        "SOQL queries have no record limits"
        ],
        "correct": 1,
        "explanation": "SOQL can query any accessible Salesforce object. Keywords are case-insensitive, SELECT * is not supported, and there are record limits.",
        "category": "Developer Fundamentals"
        },
        {
        "question": "What is the purpose of the LIMIT clause in SOQL queries?",
        "options": [
        "To limit query execution time",
        "To restrict the number of returned records",
        "To optimize query performance automatically",
        "To handle large dataset pagination"
        ],
        "correct": 1,
        "explanation": "The LIMIT clause restricts the maximum number of records returned by a SOQL query, helping manage governor limits and performance.",
        "category": "Developer Fundamentals"
        },
        {
        "question": "Which approach is recommended for bulk DML operations in triggers?",
        "options": [
        "Use individual insert statements in a loop",
        "Use Database.insert() with a list of records",
        "Use insert statement with a list of records",
        "Both B and C are correct"
        ],
        "correct": 3,
        "explanation": "Both Database.insert() and insert statement with lists are valid for bulk operations. Database methods provide more control with partial success options.",
        "category": "Process Automation and Logic"
        },
        {
        "question": "What is the key difference between Database.insert() and the insert statement?",
        "options": [
        "Database.insert() is faster",
        "Database.insert() allows partial success with allOrNone parameter",
        "insert statement is deprecated",
        "No functional difference exists"
        ],
        "correct": 1,
        "explanation": "Database.insert() offers the allOrNone parameter (default true) that allows partial success, while insert statement follows all-or-none behavior.",
        "category": "Developer Fundamentals"
        },
        {
        "question": "Which SOQL queries are valid? (Select 2)",
        "options": [
        "SELECT Name FROM Account WHERE Name LIKE '%test%'",
        "SELECT * FROM Account",
        "SELECT Name FROM Account ORDER BY Name LIMIT 10",
        "SELECT COUNT() FROM Account GROUP BY Type"
        ],
        "correct": [0, 2],
        "explanation": "Options A and C use valid SOQL syntax. SELECT * is not supported, and aggregate queries require proper field selection or aliases.",
        "category": "Developer Fundamentals"
        },
        {
        "question": "What happens when you exceed the SOQL query governor limit?",
        "options": [
        "The query returns partial results with a warning",
        "A LimitException is thrown halting execution",
        "The query is automatically optimized and retried",
        "The transaction continues with empty results"
        ],
        "correct": 1,
        "explanation": "Exceeding SOQL query limits throws a LimitException that stops transaction execution, requiring proper exception handling or query optimization.",
        "category": "Developer Fundamentals"
        }
]

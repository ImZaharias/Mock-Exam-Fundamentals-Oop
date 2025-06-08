var questions = [
    // Developer Fundamentals - Intermediate 19 questions
    {
        "question": "What happens when you use 'inherited sharing' in an Apex class?",
        "options": [
            "It always enforces sharing rules",
            "It inherits sharing from the calling class",
            "It disables all sharing rules",
            "It throws a compilation error"
        ],
        "correct": 1,
        "explanation": "Inherited sharing means the class adopts the sharing behavior of the class that calls it."
    },
    {
        "question": "Which governor limit applies to the total heap size per transaction?",
        "options": [
            "4 MB synchronous, 8 MB asynchronous",
            "6 MB synchronous, 12 MB asynchronous",
            "8 MB synchronous, 16 MB asynchronous",
            "10 MB synchronous, 20 MB asynchronous"
        ],
        "correct": 1,
        "explanation": "Heap size limit is 6 MB for synchronous and 12 MB for asynchronous transactions."
    },
    {
        "question": "What is the purpose of the @TestVisible annotation?",
        "options": [
            "Makes test methods visible to other classes",
            "Makes private members accessible in test classes",
            "Makes test classes run faster",
            "Makes tests visible in the UI"
        ],
        "correct": 1,
        "explanation": "@TestVisible allows test classes to access private members of the class being tested."
    },
    {
        "question": "Which interface must be implemented for a class to be scheduled?",
        "options": [
            "Schedulable",
            "Batchable",
            "Queueable",
            "Callable"
        ],
        "correct": 0,
        "explanation": "The Schedulable interface must be implemented to schedule Apex classes."
    },
    {
        "question": "What is the maximum number of concurrent Apex jobs per organization?",
        "options": [
            "5",
            "10",
            "25",
            "100"
        ],
        "correct": 0,
        "explanation": "A maximum of 5 queued or active batch jobs are allowed per organization."
    },
    {
        "question": "Which security model is enforced by default in Lightning Platform?",
        "options": [
            "Object-level security only",
            "Field-level security only",
            "Both object and field-level security",
            "No security enforcement"
        ],
        "correct": 2,
        "explanation": "Lightning Platform enforces both object-level and field-level security by default."
    },
    {
        "question": "What does the 'final' keyword do in Apex?",
        "options": [
            "Makes variables immutable after initialization",
            "Prevents class inheritance",
            "Both A and B",
            "Makes methods static"
        ],
        "correct": 2,
        "explanation": "The 'final' keyword prevents inheritance for classes and makes variables immutable."
    },
    {
        "question": "Which collection type maintains insertion order in Apex?",
        "options": [
            "Set only",
            "Map only",
            "List only",
            "Both List and Map"
        ],
        "correct": 3,
        "explanation": "Both List and Map maintain insertion order in Apex."
    },
    {
        "question": "What is the difference between System.debug() levels?",
        "options": [
            "Only formatting differences",
            "Different visibility in logs based on log level settings",
            "Different performance impact",
            "No difference"
        ],
        "correct": 1,
        "explanation": "Debug levels control which debug statements appear in logs based on log level configuration."
    },
    {
        "question": "When should you use Database.Savepoint?",
        "options": [
            "To improve performance",
            "To handle partial rollbacks in transactions",
            "To bypass governor limits",
            "To enable bulk operations"
        ],
        "correct": 1,
        "explanation": "Savepoints allow you to rollback to a specific point within a transaction."
    },
    {
        "question": "Which annotation is used to expose Apex methods to Lightning components?",
        "options": [
            "@RemoteAction",
            "@AuraEnabled",
            "@HttpGet",
            "@WebService"
        ],
        "correct": 1,
        "explanation": "@AuraEnabled makes Apex methods accessible to Lightning components."
    },
    {
        "question": "What is the purpose of the 'virtual' keyword in Apex?",
        "options": [
            "Creates abstract methods",
            "Allows method overriding in subclasses",
            "Makes classes serializable",
            "Enables polymorphism"
        ],
        "correct": 1,
        "explanation": "Virtual methods can be overridden by subclasses in Apex."
    },
    {
        "question": "Which exception type should you catch for DML operations?",
        "options": [
            "System.Exception",
            "DmlException",
            "QueryException",
            "NullPointerException"
        ],
        "correct": 1,
        "explanation": "DmlException is specifically thrown by DML operations when they fail."
    },
    {
        "question": "What happens when you exceed the SOQL query limit?",
        "options": [
            "Queries are queued",
            "LimitException is thrown",
            "Oldest queries are terminated",
            "System automatically optimizes"
        ],
        "correct": 1,
        "explanation": "Exceeding SOQL limits throws a LimitException."
    },
    {
        "question": "Which method signature is correct for a trigger handler pattern?",
        "options": [
            "public static void handle()",
            "public void handle(List<SObject> records)",
            "private static void execute()",
            "Both A and B are valid patterns"
        ],
        "correct": 3,
        "explanation": "Both static and instance methods are valid in trigger handler patterns."
    },
    {
        "question": "What is the scope of static variables in Apex?",
        "options": [
            "Per user session",
            "Per transaction",
            "Per class instance",
            "Global across all transactions"
        ],
        "correct": 1,
        "explanation": "Static variables maintain their value only within the current transaction context."
    },
    {
        "question": "Which is the correct way to handle bulk operations in triggers?",
        "options": [
            "Use for loops for each record",
            "Process all records in a single operation",
            "Use separate transactions for each record",
            "Limit processing to first 10 records"
        ],
        "correct": 1,
        "explanation": "Bulk operations should process all records together to avoid governor limits."
    },
    {
        "question": "What does the @future(callout=true) annotation enable?",
        "options": [
            "Synchronous callouts",
            "Asynchronous callouts from triggers",
            "Callouts without authentication",
            "Parallel callout processing"
        ],
        "correct": 1,
        "explanation": "@future(callout=true) allows asynchronous methods to make HTTP callouts."
    },
    {
        "question": "Which design pattern is recommended for trigger development?",
        "options": [
            "One trigger per object with handler classes",
            "Multiple triggers per object",
            "Inline business logic in triggers",
            "Recursive trigger patterns"
        ],
        "correct": 0,
        "explanation": "One trigger per object with separate handler classes is the recommended pattern."
    },

    // Process Automation & Logic - Intermediate 17 questions
    {
        "question": "What is the execution order when multiple automation tools are triggered?",
        "options": [
            "Workflow, Process Builder, Flow",
            "Process Builder, Workflow, Flow",
            "Workflow, Flow, Process Builder",
            "The order is not guaranteed"
        ],
        "correct": 0,
        "explanation": "Workflow rules execute first, then Process Builder, then Flows in the automation sequence."
    },
    {
        "question": "Which Flow element allows you to pause execution and wait for user input?",
        "options": [
            "Wait Element",
            "Pause Element",
            "Screen Element",
            "Decision Element"
        ],
        "correct": 2,
        "explanation": "Screen Elements pause Flow execution and present UI for user interaction."
    },
    {
        "question": "What is the maximum number of active Process Builder processes per object?",
        "options": [
            "No limit",
            "5 per object",
            "10 per object",
            "Only one is recommended per object"
        ],
        "correct": 3,
        "explanation": "While technically unlimited, only one Process Builder per object is recommended for performance."
    },
    {
        "question": "Which automation tool can create child records?",
        "options": [
            "Workflow Rules only",
            "Process Builder only",
            "Both Workflow and Process Builder",
            "Neither can create records"
        ],
        "correct": 1,
        "explanation": "Only Process Builder can create child records; Workflow Rules cannot."
    },
    {
        "question": "What happens when a Flow interview encounters an unhandled fault?",
        "options": [
            "Flow continues with default values",
            "Flow pauses and waits for admin intervention",
            "Flow terminates and shows error to user",
            "Flow automatically restarts"
        ],
        "correct": 2,
        "explanation": "Unhandled faults cause Flow interviews to terminate and display errors to users."
    },
    {
        "question": "Which variable type in Flow can store multiple records?",
        "options": [
            "sObject Variable",
            "Record Variable",
            "sObject Collection Variable",
            "Text Collection Variable"
        ],
        "correct": 2,
        "explanation": "sObject Collection Variables can store multiple records of the same type."
    },
    {
        "question": "What is the difference between 'Fast Field Updates' and regular field updates?",
        "options": [
            "Fast updates bypass validation rules",
            "Fast updates don't trigger other automation",
            "Fast updates are processed before the record is saved",
            "All of the above"
        ],
        "correct": 3,
        "explanation": "Fast Field Updates execute before save, bypass most automation, and skip some validation."
    },
    {
        "question": "Which Process Builder action can be time-based?",
        "options": [
            "Field Updates only",
            "Email Alerts only",
            "All immediate actions",
            "Specific scheduled actions"
        ],
        "correct": 3,
        "explanation": "Only certain Process Builder actions can be scheduled for later execution."
    },
    {
        "question": "What is the recommended approach for complex business logic?",
        "options": [
            "Nested Process Builder processes",
            "Multiple Workflow Rules",
            "Custom Apex with proper bulkification",
            "Multiple validation rules"
        ],
        "correct": 2,
        "explanation": "Complex business logic should be handled in properly bulkified Apex code."
    },
    {
        "question": "Which Flow type runs without user interaction?",
        "options": [
            "Screen Flow",
            "Auto-launched Flow",
            "Lightning Flow",
            "Record-triggered Flow"
        ],
        "correct": 1,
        "explanation": "Auto-launched Flows run in the background without user interaction."
    },
    {
        "question": "What determines the execution context of a Flow?",
        "options": [
            "The running user's permissions",
            "System administrator permissions",
            "The Flow's sharing settings",
            "The record owner's permissions"
        ],
        "correct": 0,
        "explanation": "Flows run in the context of the user who triggered them."
    },
    {
        "question": "Which is true about Process Builder evaluation criteria?",
        "options": [
            "All criteria must be true",
            "Any criteria can be true",
            "You can define AND/OR logic",
            "Criteria are optional"
        ],
        "correct": 2,
        "explanation": "Process Builder allows you to define complex AND/OR logic for criteria."
    },
    {
        "question": "What happens when a scheduled Process Builder action fails?",
        "options": [
            "It retries automatically",
            "It's logged but not retried",
            "It cancels all pending actions",
            "It sends an email to the admin"
        ],
        "correct": 1,
        "explanation": "Failed scheduled actions are logged but don't automatically retry."
    },
    {
        "question": "Which Flow element is best for complex data manipulation?",
        "options": [
            "Assignment Element",
            "Formula Element",
            "Transform Element",
            "Apex Action"
        ],
        "correct": 3,
        "explanation": "Apex Actions provide the most flexibility for complex data manipulation in Flows."
    },
    {
        "question": "What is the limit for Flow interviews per transaction?",
        "options": [
            "10",
            "50",
            "100",
            "2000"
        ],
        "correct": 3,
        "explanation": "Up to 2000 Flow interviews can execute per transaction."
    },
    {
        "question": "Which automation tool supports cross-object field updates?",
        "options": [
            "Workflow Rules",
            "Process Builder",
            "Both Workflow and Process Builder",
            "Neither supports cross-object updates"
        ],
        "correct": 2,
        "explanation": "Both Workflow Rules and Process Builder support cross-object field updates."
    },
    {
        "question": "What is the recommended way to handle recursive automation?",
        "options": [
            "Disable all automation",
            "Use static variables to control execution",
            "Let it run until governor limits",
            "Use Process Builder only"
        ],
        "correct": 1,
        "explanation": "Static variables in trigger handlers are the standard way to prevent recursive execution."
    },

    // User Interface - Intermediate 14 questions
    {
        "question": "Which lifecycle hook is called when a Lightning Web Component is inserted into the DOM?",
        "options": [
            "constructor()",
            "connectedCallback()",
            "renderedCallback()",
            "disconnectedCallback()"
        ],
        "correct": 1,
        "explanation": "connectedCallback() is invoked when the component is inserted into the DOM."
    },
    {
        "question": "How do you communicate between child and parent Lightning Web Components?",
        "options": [
            "Using events only",
            "Using public properties only",
            "Using both events and public properties",
            "Using global variables"
        ],
        "correct": 2,
        "explanation": "Child to parent uses events, parent to child uses public properties."
    },
    {
        "question": "Which decorator is used to make a property reactive in LWC?",
        "options": [
            "@api",
            "@track",
            "@wire",
            "@reactive"
        ],
        "correct": 0,
        "explanation": "@api makes properties reactive and public in Lightning Web Components."
    },
    {
        "question": "What is the correct way to import a custom Apex method in LWC?",
        "options": [
            "import { methodName } from 'c/className'",
            "import methodName from '@salesforce/apex/ClassName.methodName'",
            "import methodName from 'apex/ClassName'",
            "import { methodName } from '@apex/ClassName'"
        ],
        "correct": 1,
        "explanation": "Apex methods are imported using @salesforce/apex namespace with full class and method names."
    },
    {
        "question": "Which event phase allows you to stop event propagation in LWC?",
        "options": [
            "Capture phase only",
            "Bubble phase only",
            "Both capture and bubble phases",
            "Neither phase allows stopping"
        ],
        "correct": 2,
        "explanation": "You can stop event propagation in both capture and bubble phases using stopPropagation()."
    },
    {
        "question": "How do you access the current record ID in a Lightning Web Component on a record page?",
        "options": [
            "this.recordId",
            "@wire(getRecord)",
            "import { CurrentPageReference } from '@salesforce/lightning/navigation'",
            "@api recordId"
        ],
        "correct": 3,
        "explanation": "@api recordId automatically provides the current record ID on record pages."
    },
    {
        "question": "Which is the correct way to conditionally render elements in LWC?",
        "options": [
            "if:true and if:false",
            "lwc:if and lwc:else",
            "template:if and template:else",
            "Both A and C are correct"
        ],
        "correct": 0,
        "explanation": "if:true and if:false are the correct directives for conditional rendering in LWC."
    },
    {
        "question": "What happens when you use @track decorator on a primitive property?",
        "options": [
            "It makes the property reactive",
            "It has no effect on primitives",
            "It causes a compilation error",
            "It makes the property public"
        ],
        "correct": 1,
        "explanation": "@track has no effect on primitive properties as they are reactive by default."
    },
    {
        "question": "Which Lightning Data Service wire adapter fetches a single record?",
        "options": [
            "@wire(getRecords)",
            "@wire(getRecord)",
            "@wire(getFieldValue)",
            "@wire(getObjectInfo)"
        ],
        "correct": 1,
        "explanation": "@wire(getRecord) is used to fetch a single record using Lightning Data Service."
    },
    {
        "question": "How do you handle errors in Lightning Web Components?",
        "options": [
            "try-catch blocks only",
            "errorCallback() lifecycle hook only",
            "Both try-catch and errorCallback()",
            "Error handling is automatic"
        ],
        "correct": 2,
        "explanation": "Use try-catch for imperative code and errorCallback() for component-level error handling."
    },
    {
        "question": "Which CSS feature is supported in Lightning Web Component stylesheets?",
        "options": [
            "Global CSS selectors",
            "Host element styling with :host",
            "Cross-component styling",
            "Dynamic CSS imports"
        ],
        "correct": 1,
        "explanation": ":host selector allows styling the component's host element in LWC."
    },
    {
        "question": "What is the purpose of the renderedCallback() lifecycle hook?",
        "options": [
            "Called once when component is created",
            "Called every time component re-renders",
            "Called when component is destroyed",
            "Called only on first render"
        ],
        "correct": 1,
        "explanation": "renderedCallback() is invoked after every render of the component."
    },
    {
        "question": "How do you navigate programmatically in Lightning Web Components?",
        "options": [
            "window.location.href",
            "NavigationMixin",
            "force:navigateToSObject",
            "apex:outputLink"
        ],
        "correct": 1,
        "explanation": "NavigationMixin provides programmatic navigation capabilities in LWC."
    },
    {
        "question": "Which is true about Lightning Web Component slots?",
        "options": [
            "Only unnamed slots are supported",
            "Only named slots are supported",
            "Both named and unnamed slots are supported",
            "Slots are not supported in LWC"
        ],
        "correct": 2,
        "explanation": "LWC supports both named and unnamed slots for content projection."
    },

    // Testing & Deployment - Intermediate 10 questions
    {
        "question": "Which testing approach provides the highest code coverage?",
        "options": [
            "Positive testing only",
            "Negative testing only",
            "Combination of positive, negative, and bulk testing",
            "Integration testing only"
        ],
        "correct": 2,
        "explanation": "Comprehensive testing including positive, negative, and bulk scenarios provides highest coverage."
    },
    {
        "question": "What is the purpose of Test.startTest() and Test.stopTest()?",
        "options": [
            "To measure test execution time",
            "To reset governor limits for the test context",
            "To isolate test data from production",
            "To enable debug logging"
        ],
        "correct": 1,
        "explanation": "Test.startTest() and Test.stopTest() provide a fresh set of governor limits for testing."
    },
    {
        "question": "Which annotation creates test data that persists across all test methods in a class?",
        "options": [
            "@TestSetup",
            "@isTest(SeeAllData=true)",
            "@TestData",
            "@BeforeTest"
        ],
        "correct": 0,
        "explanation": "@TestSetup creates data once that's available to all test methods in the class."
    },
    {
        "question": "What is the best practice for testing callouts?",
        "options": [
            "Make actual HTTP requests",
            "Use Test.setMock() with HttpCalloutMock",
            "Skip callout testing",
            "Use @isTest(SeeAllData=true)"
        ],
        "correct": 1,
        "explanation": "Test.setMock() with HttpCalloutMock interface is the standard approach for testing callouts."
    },
    {
        "question": "Which deployment tool is best for continuous integration?",
        "options": [
            "Change Sets",
            "IDE deployment",
            "SFDX CLI with source format",
            "Unmanaged packages"
        ],
        "correct": 2,
        "explanation": "SFDX CLI with source format provides the best CI/CD capabilities."
    },
    {
        "question": "What happens if a single test method fails during deployment?",
        "options": [
            "Only that test is skipped",
            "Entire deployment fails",
            "Deployment succeeds with warnings",
            "Other tests continue running"
        ],
        "correct": 1,
        "explanation": "Any test failure during deployment causes the entire deployment to fail."
    },
    {
        "question": "Which tool provides the most comprehensive deployment validation?",
        "options": [
            "Quick Deploy",
            "Check Only deployment",
            "Deploy Recent Validations",
            "Destructive Changes"
        ],
        "correct": 1,
        "explanation": "Check Only deployment runs all validations without actually deploying changes."
    },
    {
        "question": "What is the difference between @isTest and @isTest(SeeAllData=true)?",
        "options": [
            "No difference in functionality",
            "SeeAllData=true allows access to production data",
            "SeeAllData=true runs faster",
            "SeeAllData=true skips validation rules"
        ],
        "correct": 1,
        "explanation": "@isTest(SeeAllData=true) allows test methods to access existing organization data."
    },
    {
        "question": "Which assertion method should you use to test exception handling?",
        "options": [
            "System.assert()",
            "System.assertEquals()",
            "System.assertNotEquals()",
            "Try-catch with System.assert()"
        ],
        "correct": 3,
        "explanation": "Exception testing requires try-catch blocks with assertions to verify expected exceptions."
    },
    {
        "question": "What is the recommended approach for testing triggers?",
        "options": [
            "Test trigger directly",
            "Test trigger handler class methods",
            "Use @isTest(SeeAllData=true)",
            "Skip trigger testing"
        ],
        "correct": 1,
        "explanation": "Testing trigger handler class methods provides better coverage and maintainability."
    }
];
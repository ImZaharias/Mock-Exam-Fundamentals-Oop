const questions = [
    // Developer Fundamentals (14 questions - 23%)
    {
        question: "A developer is creating a trigger that needs to query related records based on dynamic criteria. The SOQL query string is built at runtime. Which approach prevents SOQL injection vulnerabilities?",
        options: [
            "Use bind variables with String.escapeSingleQuotes()",
            "Validate input using Pattern.matches() before query execution",
            "Use Database.query() with parameterized queries",
            "Escape special characters using String.valueOf()"
        ],
        correct: 0,
        explanation: "String.escapeSingleQuotes() combined with bind variables is the recommended approach to prevent SOQL injection by properly escaping user input."
    },
    {
        question: "When implementing a custom iterator for Batch Apex, which interface must be implemented and what method signature is required?",
        options: [
            "Iterator<sObject> and hasNext(), next() methods",
            "Iterable<sObject> and iterator() method returning Iterator<sObject>",
            "Database.Batchable<sObject> and start(), execute(), finish() methods",
            "Both A and B are required"
        ],
        correct: 3,
        explanation: "Custom iterators require implementing both Iterable<sObject> (with iterator() method) and Iterator<sObject> (with hasNext() and next() methods)."
    },
    {
        question: "A developer needs to bulkify a trigger that updates parent records based on child record changes. What is the most governor limit-efficient pattern?",
        options: [
            "Query parents in a for loop, update individually",
            "Use Map<Id, SObject> to collect parent updates, then bulk DML",
            "Use @future methods for each parent update",
            "Create separate triggers for each parent object"
        ],
        correct: 1,
        explanation: "Using Map<Id, SObject> to aggregate changes and perform bulk DML operations minimizes SOQL queries and DML statements, respecting governor limits."
    },
    {
        question: "In a Master-Detail relationship, which scenario will cause a 'REQUIRED_FIELD_MISSING' error?",
        options: [
            "Deleting a parent record with existing children",
            "Creating a child record without populating the Master-Detail field",
            "Changing ownership of the parent record",
            "Updating the Master-Detail field to point to a different parent"
        ],
        correct: 1,
        explanation: "Master-Detail fields are always required, so attempting to create a child without a parent reference will throw REQUIRED_FIELD_MISSING."
    },
    {
        question: "A developer uses Schema.describeSObjects() to get metadata for multiple objects. What is the maximum number of SObjectType tokens that can be passed in a single call?",
        options: [
            "50",
            "100",
            "200",
            "500"
        ],
        correct: 1,
        explanation: "Schema.describeSObjects() accepts a maximum of 100 SObjectType tokens per call to prevent performance issues."
    },
    {
        question: "When querying with FOR UPDATE, which statement about record locking is TRUE?",
        options: [
            "Records are locked until the transaction commits or rolls back",
            "Records are locked for 10 seconds regardless of transaction status",
            "Only the current user's subsequent queries are blocked",
            "Locking applies only to the specific fields being updated"
        ],
        correct: 0,
        explanation: "FOR UPDATE creates a pessimistic lock that persists until the transaction is committed or rolled back, preventing other transactions from modifying the records."
    },
    {
        question: "A custom setting has Hierarchy type and contains org-level, profile-level, and user-level data. When accessed via Apex, which value takes precedence?",
        options: [
            "Organization-level (most specific)",
            "Profile-level (middle precedence)",
            "User-level (highest precedence)",
            "The most recently modified entry"
        ],
        correct: 2,
        explanation: "In Hierarchy custom settings, user-level values override profile-level, which override organization-level values, following specificity precedence."
    },
    {
        question: "Which scenario requires using Database.SaveResult instead of a try-catch block for DML error handling?",
        options: [
            "When performing DML on records from different objects",
            "When using Database.insert(records, false) with partial success allowed",
            "When DML operations might exceed governor limits",
            "When working with Master-Detail relationships"
        ],
        correct: 1,
        explanation: "Database.insert(records, false) allows partial success and returns SaveResult objects that must be checked for individual record failures."
    },
    {
        question: "A developer creates a List<Account> with 1000 records. After adding all records, they execute accounts.size(). What is the heap size impact?",
        options: [
            "Minimal - size() is a lightweight operation",
            "Significant - size() iterates through all elements",
            "None - size() is cached by the List implementation",
            "Depends on the complexity of Account records"
        ],
        correct: 0,
        explanation: "List.size() is O(1) operation that returns a cached value, not affecting heap size regardless of list contents."
    },
    {
        question: "When using Database.getQueryLocator() in Batch Apex, what is the maximum number of records that can be returned?",
        options: [
            "10,000",
            "50,000",
            "50 million",
            "No limit"
        ],
        correct: 2,
        explanation: "Database.getQueryLocator() can return up to 50 million records, making it suitable for processing large datasets in Batch Apex."
    },
    {
        question: "A developer needs to prevent infinite recursion in triggers. Which pattern is most effective?",
        options: [
            "Use static Boolean flags in the trigger",
            "Implement a utility class with static Set<Id> to track processed records",
            "Use @future methods to break the execution chain",
            "Check Trigger.isExecuting in conditional logic"
        ],
        correct: 1,
        explanation: "Using a utility class with static Set<Id> to track processed record IDs prevents reprocessing the same records and avoids infinite recursion."
    },
    {
        question: "What happens when an Apex class references a custom field that is later deleted from the org?",
        options: [
            "The class continues to work but returns null for the field",
            "A compilation error occurs when the class is next executed",
            "The class is automatically deactivated",
            "An exception is thrown at runtime when accessing the field"
        ],
        correct: 1,
        explanation: "Apex classes that reference deleted custom fields will fail compilation when next executed, preventing deployment or execution."
    },
    {
        question: "In a SOQL query with multiple child relationships, what is the maximum number of records that can be returned across all child relationships?",
        options: [
            "1,000 per relationship",
            "10,000 total across all relationships",
            "50,000 per parent record",
            "No specific limit on child records"
        ],
        correct: 1,
        explanation: "SOQL queries can return a maximum of 10,000 records total across all parent and child relationships combined."
    },
    {
        question: "A developer implements the Comparable interface for a custom Apex class. Which method must be implemented and what should it return?",
        options: [
            "compareTo(Object) returning Integer (-1, 0, 1)",
            "compare(Object, Object) returning Boolean",
            "equals(Object) returning Boolean with custom logic",
            "sort() returning the sorted object instance"
        ],
        correct: 0,
        explanation: "The Comparable interface requires implementing compareTo(Object) method that returns -1, 0, or 1 for less than, equal to, or greater than comparisons."
    },

    // Process Automation and Logic (18 questions - 30%)
    {
        question: "A trigger needs to update parent Account records when child Opportunity records are modified. The trigger must handle bulk operations efficiently. Which pattern should be implemented?",
        options: [
            "Query parent accounts in a for loop for each opportunity",
            "Use Map<Id, Account> to collect unique parents, then bulk update",
            "Create a @future method for each parent account update",
            "Use workflow field updates instead of trigger logic"
        ],
        correct: 1,
        explanation: "Using Map<Id, Account> ensures each parent is updated only once, regardless of how many children changed, optimizing for bulk operations."
    },
    {
        question: "In Process Builder, when should you use 'Formula evaluates to true' vs 'Only when a record is created'?",
        options: [
            "Formula for complex conditions, Created for simple record creation",
            "Formula for updates and creates, Created only for new records",
            "Formula for scheduled actions, Created for immediate actions",
            "No functional difference, just UI preference"
        ],
        correct: 1,
        explanation: "'Formula evaluates to true' fires on create/update when condition is met, while 'Only when a record is created' only fires once on record creation."
    },
    {
        question: "A before insert trigger calls a utility method that performs a SOQL query. The trigger processes 200 records. How many SOQL queries are executed if the utility method is called for each record?",
        options: [
            "1 query if the utility method is properly bulkified",
            "200 queries - one for each record processed",
            "It depends on the query selectivity and indexes",
            "The number of queries depends on the batch size"
        ],
        correct: 1,
        explanation: "If the utility method is called individually for each record without bulkification, it will execute 200 separate SOQL queries, hitting governor limits."
    },
    {
        question: "When using Database.Savepoint in a trigger, which statement is TRUE about rollback behavior?",
        options: [
            "Rollback affects only DML operations, not SOQL queries",
            "Rollback restores all state including static variables",
            "Rollback cannot be used in before triggers",
            "Rollback affects DML and non-transactional changes like email sends"
        ],
        correct: 0,
        explanation: "Database.rollback() only affects DML operations and database state changes; it doesn't restore static variables or prevent non-transactional operations."
    },
    {
        question: "A Process Builder calls an @InvocableMethod that needs to perform DML operations. What consideration is most important?",
        options: [
            "The method must be marked as @future",
            "The method should handle bulk collections, not single records",
            "The method cannot perform SOQL queries",
            "The method must return a Boolean success indicator"
        ],
        correct: 1,
        explanation: "@InvocableMethod should handle List inputs to support bulk processing when Process Builder processes multiple records simultaneously."
    },
    {
        question: "In a complex trigger scenario with multiple objects and relationships, what is the correct order of operations to prevent issues?",
        options: [
            "Insert children first, then update parents",
            "Update parents first, then handle children",
            "Process all records in a single DML operation",
            "Use separate transactions for each object type"
        ],
        correct: 1,
        explanation: "Parent records should be processed first to ensure they exist and have correct values before child records reference them."
    },
    {
        question: "A trigger on Opportunity needs to update the parent Account when the Opportunity Stage changes to 'Closed Won'. What is the most efficient bulkification strategy?",
        options: [
            "Query and update each Account individually",
            "Collect unique Account IDs, query once, update in bulk",
            "Use Map<Id, List<Opportunity>> to group by Account",
            "Process records in separate @future methods"
        ],
        correct: 2,
        explanation: "Map<Id, List<Opportunity>> groups opportunities by Account ID, allowing you to process all opportunities per account together and minimize DML operations."
    },
    {
        question: "Which trigger context combination allows access to both old and new field values for comparison?",
        options: [
            "before insert and after insert",
            "before update and after update",
            "before delete and after delete",
            "Only after update provides both old and new values"
        ],
        correct: 1,
        explanation: "Both before update and after update contexts provide access to Trigger.old and Trigger.new, allowing field value comparisons."
    },
    {
        question: "A @future method is called from a trigger that processes 100 records. How many @future method calls are queued?",
        options: [
            "1 call processing all 100 records",
            "100 individual @future calls - one per record",
            "It depends on the batch size configuration",
            "The system automatically batches them into optimal groups"
        ],
        correct: 1,
        explanation: "Each @future method call is queued individually, so calling it 100 times creates 100 separate asynchronous jobs."
    },
    {
        question: "In Flow, what happens when a Record-Triggered Flow encounters an error during execution?",
        options: [
            "The flow stops but the record operation continues",
            "The entire transaction is rolled back",
            "Only the flow execution is rolled back",
            "An error email is sent but processing continues"
        ],
        correct: 1,
        explanation: "Record-Triggered Flows run in the same transaction as the DML operation, so flow errors cause the entire transaction to roll back."
    },
    {
        question: "A trigger handler class uses the Singleton pattern with a static instance. What is the primary benefit in a trigger context?",
        options: [
            "Improves performance by reusing the same instance",
            "Prevents multiple instances from conflicting",
            "Allows sharing state across multiple trigger executions",
            "Reduces memory consumption in bulk operations"
        ],
        correct: 2,
        explanation: "The Singleton pattern in triggers allows sharing state (like processed record tracking) across multiple trigger executions within the same transaction."
    },
    {
        question: "When debugging a trigger that seems to execute multiple times, which Trigger context variable helps identify the execution sequence?",
        options: [
            "Trigger.size",
            "Trigger.isExecuting",
            "Trigger.operationType",
            "There's no built-in way to track execution sequence"
        ],
        correct: 2,
        explanation: "Trigger.operationType (BEFORE_INSERT, AFTER_UPDATE, etc.) combined with debug logs helps identify the sequence and cause of multiple executions."
    },
    {
        question: "A Process Builder process updates a field that triggers another Process Builder process on the same object. What happens?",
        options: [
            "Only the first process executes",
            "Both processes execute in sequence",
            "The system prevents recursive execution",
            "An infinite loop occurs until governor limits are hit"
        ],
        correct: 1,
        explanation: "Process Builder processes can trigger each other sequentially, but they don't automatically prevent recursion - you must design to avoid infinite loops."
    },
    {
        question: "In Apex, which approach correctly implements bulkified exception handling for DML operations?",
        options: [
            "Wrap each record DML in individual try-catch blocks",
            "Use Database.insert(records, false) and check SaveResults",
            "Use a single try-catch around the bulk DML operation",
            "Validate all records before performing any DML"
        ],
        correct: 1,
        explanation: "Database.insert(records, false) allows partial success and provides SaveResult objects to handle individual record failures in bulk operations."
    },
    {
        question: "A workflow field update modifies a field that has a trigger on the same object. In what order do these automation tools execute?",
        options: [
            "Workflow executes first, then trigger fires",
            "Trigger executes first, then workflow",
            "They execute simultaneously",
            "The order depends on the modification type"
        ],
        correct: 0,
        explanation: "Workflow field updates execute first and can cause triggers to fire again, following Salesforce's order of execution for automation tools."
    },
    {
        question: "When implementing a trigger handler pattern, what is the best practice for preventing recursion while allowing legitimate re-entry?",
        options: [
            "Use a static Boolean flag that's never reset",
            "Use a static Set<Id> to track processed records by ID",
            "Use a static Integer counter to limit execution depth",
            "Use the System.isBatch() method to control execution"
        ],
        correct: 1,
        explanation: "Using Set<Id> to track processed records allows legitimate re-entry for different records while preventing infinite loops on the same records."
    },
    {
        question: "A trigger needs to perform a callout to an external system. Which pattern should be implemented?",
        options: [
            "Make the callout directly in the trigger",
            "Use @future(callout=true) methods",
            "Use Queueable Apex with callout capability",
            "Both B and C are valid approaches"
        ],
        correct: 3,
        explanation: "Both @future(callout=true) and Queueable Apex can handle callouts asynchronously from triggers, with Queueable offering more flexibility."
    },
    {
        question: "In a before update trigger, you modify Trigger.new values. What happens to these changes?",
        options: [
            "Changes are ignored - before triggers can't modify records",
            "Changes are saved to the database automatically",
            "Changes affect the record being saved without additional DML",
            "Changes require explicit DML to be persisted"
        ],
        correct: 2,
        explanation: "In before triggers, modifications to Trigger.new records are automatically included in the save operation without requiring additional DML."
    },

    // User Interface (15 questions - 25%)
    {
        question: "A Lightning component needs to communicate with its parent component when a user action occurs. Which approach provides the most flexible and maintainable solution?",
        options: [
            "Use aura:method to call parent methods directly",
            "Fire a component event that the parent can handle",
            "Use component.find() to access parent elements",
            "Store shared data in a client-side static resource"
        ],
        correct: 1,
        explanation: "Component events provide loose coupling between child and parent components, making the architecture more maintainable and flexible."
    },
    {
        question: "In Visualforce, when does the view state become too large and cause performance issues?",
        options: [
            "When it exceeds 64KB",
            "When it exceeds 135KB",
            "When it contains more than 1000 components",
            "When page load time exceeds 5 seconds"
        ],
        correct: 1,
        explanation: "Visualforce view state has a hard limit of 135KB. Pages exceeding this limit will throw a 'Maximum view state size limit exceeded' error."
    },
    {
        question: "A Lightning component uses force:recordData to load record information. Which event should be handled to know when the record data is fully loaded?",
        options: [
            "onRecordLoad",
            "recordUpdated",
            "force:recordDataChanged",
            "Both A and B"
        ],
        correct: 3,
        explanation: "force:recordData fires both 'onRecordLoad' (initial load) and 'recordUpdated' (subsequent changes) events to notify when data is available."
    },
    {
        question: "In a Visualforce page with a large data table, which technique most effectively reduces view state size?",
        options: [
            "Use the readonly attribute on input fields",
            "Mark controller properties as transient",
            "Implement pagination with StandardSetController",
            "Use JavaScript remoting instead of action functions"
        ],
        correct: 2,
        explanation: "StandardSetController with pagination loads only a subset of records at a time, significantly reducing the view state size for large datasets."
    },
    {
        question: "A Lightning component needs to call an Apex method that returns sensitive data. What security consideration is most important?",
        options: [
            "Mark the Apex method as @AuraEnabled(cacheable=true)",
            "Implement proper @AuraEnabled method security with field-level checks",
            "Use @RemoteAction instead of @AuraEnabled",
            "Encrypt the data before returning it to the component"
        ],
        correct: 1,
        explanation: "@AuraEnabled methods should implement proper security checks including object and field-level permissions, as they bypass some default Salesforce security."
    },
    {
        question: "When building a custom Lightning component for the App Builder, which interface enables drag-and-drop functionality?",
        options: [
            "force:appHostable",
            "flexipage:availableForAllPageTypes",
            "lightning:isUrlAddressable",
            "force:lightningQuickAction"
        ],
        correct: 1,
        explanation: "flexipage:availableForAllPageTypes interface makes Lightning components available in the App Builder for drag-and-drop page construction."
    },
    {
        question: "In Visualforce, what is the difference between immediate='true' and immediate='false' on a command component?",
        options: [
            "immediate='true' skips validation, immediate='false' enforces validation",
            "immediate='true' processes faster, immediate='false' is more secure",
            "immediate='true' works with AJAX, immediate='false' requires full page refresh",
            "No functional difference - it's just a performance hint"
        ],
        correct: 0,
        explanation: "immediate='true' bypasses validation and skips the 'Process Validations' and 'Update Model Values' phases of the page lifecycle."
    },
    {
        question: "A Lightning component displays a list of records and needs to refresh when records are updated elsewhere in the application. Which approach is most efficient?",
        options: [
            "Use setInterval() to periodically refresh the data",
            "Implement lightning:empApi to listen for platform events",
            "Use force:refreshView application event",
            "Reload the component every few seconds"
        ],
        correct: 1,
        explanation: "lightning:empApi provides real-time updates through platform events, eliminating unnecessary polling and providing immediate data refresh."
    },
    {
        question: "In a Visualforce page, which scenario requires using the action attribute instead of actionFunction?",
        options: [
            "When you need to pass parameters to the controller method",
            "When the action should execute immediately when the page loads",
            "When you need to perform client-side validation first",
            "When working with JavaScript remoting"
        ],
        correct: 1,
        explanation: "The action attribute executes immediately when the page loads, while actionFunction requires explicit JavaScript invocation."
    },
    {
        question: "A Lightning component uses lightning:datatable to display records. How can you enable inline editing with proper validation?",
        options: [
            "Set editable='true' on the datatable and handle onsave event",
            "Use lightning:recordEditForm for each row",
            "Implement custom cell editing with lightning:input components",
            "Inline editing is not supported in lightning:datatable"
        ],
        correct: 0,
        explanation: "lightning:datatable supports inline editing when editable='true' is set, and the onsave event handler processes the changes with validation."
    },
    {
        question: "When using @wire in a Lightning Web Component, which scenario requires using the refreshApex() function?",
        options: [
            "When the component first loads",
            "When @wire parameters change",
            "When you need to refresh cached data after a DML operation",
            "When handling user input events"
        ],
        correct: 2,
        explanation: "refreshApex() is needed to refresh @wire cached data after performing DML operations that might have changed the underlying data."
    },
    {
        question: "In Visualforce, what happens when you use both reRender and oncomplete attributes on the same component?",
        options: [
            "oncomplete executes before reRender",
            "reRender executes before oncomplete",
            "They execute simultaneously",
            "Only one of them will execute"
        ],
        correct: 1,
        explanation: "reRender updates the specified components first, then oncomplete JavaScript executes after the partial page refresh is complete."
    },
    {
        question: "A Lightning component needs to display different content based on the current user's profile. Which approach is most secure?",
        options: [
            "Use $User global value provider in the component markup",
            "Check user permissions in the Apex controller with @AuraEnabled methods",
            "Use JavaScript to call UserInfo methods",
            "Store user information in component attributes"
        ],
        correct: 1,
        explanation: "Server-side permission checks in Apex controllers are most secure, as client-side checks can be bypassed or manipulated."
    },
    {
        question: "When implementing a custom lookup component in Lightning, which base lightning component provides the best foundation?",
        options: [
            "lightning:input with type='search'",
            "lightning:combobox",
            "lightning:dualListbox",
            "Build completely custom with HTML and JavaScript"
        ],
        correct: 1,
        explanation: "lightning:combobox provides built-in search functionality, dropdown behavior, and accessibility features ideal for custom lookup implementations."
    },
    {
        question: "In a Visualforce page using standardController, which technique allows you to add custom business logic without losing standard functionality?",
        options: [
            "Replace standardController with a custom controller",
            "Use extensions attribute to add a controller extension",
            "Override standard methods with custom implementations",
            "Use JavaScript remoting for all custom logic"
        ],
        correct: 1,
        explanation: "Controller extensions allow you to add custom methods and properties while maintaining all standard controller functionality."
    },

    // Testing, Debugging, and Deployment (13 questions - 22%)
    {
        question: "A test class needs to verify that a trigger correctly handles bulk operations with 200 records. Which approach ensures the test is realistic and effective?",
        options: [
            "Create 200 individual records in separate test methods",
            "Use Test.loadData() to insert 200 records from a static resource",
            "Create a List<SObject> with 200 records and insert in bulk",
            "Use @TestSetup to create 200 records once for all test methods"
        ],
        correct: 2,
        explanation: "Creating a List with 200 records and bulk inserting tests the actual bulk scenario the trigger will face in production."
    },
    {
        question: "When testing a class that makes HTTP callouts, which approach provides the most comprehensive test coverage?",
        options: [
            "Use @isTest(SeeAllData=true) to access real external systems",
            "Implement HttpCalloutMock to simulate different response scenarios",
            "Skip testing callout methods since they depend on external systems",
            "Use @TestSetup to configure callout endpoints"
        ],
        correct: 1,
        explanation: "HttpCalloutMock allows testing various response scenarios (success, failure, timeouts) without depending on external systems."
    },
    {
        question: "A test method needs to verify that a user without certain permissions cannot perform an operation. What is the correct approach?",
        options: [
            "Create a test user with limited permissions and use System.runAs()",
            "Use @isTest(SeeAllData=true) and test with existing users",
            "Modify the current user's permissions during the test",
            "Use Test.setCurrentUser() to switch user context"
        ],
        correct: 0,
        explanation: "System.runAs() with a properly configured test user is the correct way to test permission-based scenarios in unit tests."
    },
    {
        question: "When deploying to production, which metadata types require running tests even if overall code coverage is above 75%?",
        options: [
            "Only Apex classes and triggers",
            "Apex classes, triggers, and flows",
            "All custom metadata types",
            "Only the components being deployed"
        ],
        correct: 0,
        explanation: "Apex classes and triggers must have individual test coverage above 75%, and all tests must run successfully regardless of overall org coverage."
    },
    {
        question: "A developer uses System.debug() statements for troubleshooting. Which debug log level captures these statements with the least amount of other log noise?",
        options: [
            "ERROR",
            "WARN", 
            "INFO",
            "DEBUG"
        ],
        correct: 3,
        explanation: "DEBUG level captures System.debug() statements while filtering out more verbose FINE and FINEST level system messages."
    },
    {
        question: "What is the primary limitation when using @TestSetup methods in test classes?",
        options: [
            "Data created is not visible to test methods",
            "Cannot create records with required fields",
            "Data modifications in test methods don't affect @TestSetup data",
            "Limited to creating 100 records per @TestSetup method"
        ],
        correct: 2,
        explanation: "@TestSetup data is rolled back after each test method, so modifications within test methods don't persist to other test methods."
    },
    {
        question: "When debugging a complex trigger issue, which combination of debug log settings provides the most useful information?",
        options: [
            "All categories set to FINEST level",
            "Apex Code: DEBUG, Database: INFO, Workflow: INFO",
            "Database: FINEST, all others: ERROR",
            "Apex Code: FINEST, Database: FINEST, Validation: DEBUG"
        ],
        correct: 3,
        explanation: "Apex Code and Database at FINEST show detailed execution flow, while Validation at DEBUG captures validation rule processing without excessive noise."
    },
    {
        question: "A test class for a batch job needs to verify that all records are processed correctly. Which pattern ensures complete testing?",
        options: [
            "Test the execute method directly with a small batch",
            "Use Test.startTest() and Test.stopTest() to execute the batch synchronously",
            "Test each batch separately with different data sets",
            "Use @future methods to test asynchronous processing"
        ],
        correct: 1,
        explanation: "Test.startTest() and Test.stopTest() force batch jobs to execute synchronously during testing, allowing verification of complete processing."
    },
    {
        question: "When using change sets for deployment, which component dependency must be manually included?",
        options: [
            "Custom fields referenced in Apex code",
            "Standard objects used in custom objects",
            "Permission sets that grant access to custom objects",
            "All dependencies are automatically included"
        ],
        correct: 0,
        explanation: "Change sets don't automatically detect custom field dependencies in Apex code; these must be manually added to the change set."
    },
    {
        question: "A test method intermittently fails due to timing issues with asynchronous processing. Which approach provides the most reliable solution?",
        options: [
            "Add Thread.sleep() to wait for processing completion",
            "Use Test.startTest() and Test.stopTest() to control async execution",
            "Increase the test timeout setting",
            "Run the test multiple times until it passes"
        ],
        correct: 1,
        explanation: "Test.startTest() and Test.stopTest() ensure that asynchronous operations complete before the test method ends, eliminating timing issues."
    },
    {
        question: "When testing a trigger that calls @future methods, what is the correct approach to verify the @future method execution?",
        options: [
            "Use System.assertEquals() immediately after the DML operation",
            "Wait for the @future method to complete using Thread.sleep()",
            "Use Test.startTest() and Test.stopTest() then verify the results",
            "@future methods cannot be reliably tested"
        ],
        correct: 2,
        explanation: "Test.startTest() and Test.stopTest() force @future methods to execute synchronously during testing, allowing verification of their effects."
    },
    {
        question: "Which deployment approach allows for the most granular rollback capability in case of issues?",
        options: [
            "Change sets with comprehensive component selection",
            "Salesforce CLI with source tracking",
            "ANT Migration Tool with version control",
            "Manual configuration changes"
        ],
        correct: 1,
        explanation: "Salesforce CLI with source tracking provides granular deployment and rollback capabilities, allowing you to revert specific changes easily."
    },
    {
        question: "A test class achieves 100% code coverage but still fails to catch a production bug. What is the most likely cause?",
        options: [
            "The test doesn't assert the expected behavior, only executes the code",
            "Production data is different from test data",
            "The bug only occurs with specific user permissions",
            "All of the above are possible causes"
        ],
        correct: 3,
        explanation: "High code coverage doesn't guarantee bug detection. Tests must verify correct behavior, use realistic data, and test various scenarios including permissions."
    } 
];
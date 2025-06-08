const questions = [
    {
        question: "A developer is building custom search functionality that uses SOSL to search account and contact records that match search terms provided by the end user. The feature is exposed through a Lightning web component, and the end user is able to provide a list of terms to search. What is the maximum number of search terms the end user can provide to successfully execute the search without exceeding a governor limit?",
        options: ["20", "150", "200", "2,000"],
        correct: 3,
        explanation: "The governor limit for SOSL allows up to 2,000 search terms per query."
    },
    {
        question: "A custom object Trainer__c has a lookup field to another custom object Gym__c. Which SOQL query will get the record for the Viridian City Gym and all its trainers?",
        options: [
            "SELECT Id, (SELECT Id FROM Trainer__c) FROM Gym__c WHERE Name = 'Viridian City Gym'",
            "SELECT ID FROM Trainer__c WHERE Gym__r.Name = 'Viridian City Gym'",
            "SELECT Id, (SELECT Id FROM Trainers__r) FROM Gym__c WHERE Name = 'Viridian City Gym'",
            "SELECT Id, (SELECT Id FROM Trainers__r) FROM Gym__c WHERE Name = 'Viridian City Gym'"
        ],
        correct: 3,
        explanation: "Subqueries using child relationships (Trainers__r) from parent objects like Gym__c is the correct syntax."
    },
    {
        question: "Which three operations affect the number of times a trigger can fire?",
        options: [
            "Criteria-based Sharing calculations",
            "Email messages",
            "Lightning Flows",
            "Workflow Rules",
            "Roll-Up Summary fields"
        ],
        correct: [2, 3, 4],
        explanation: "Trigger execution can be influenced by record updates from Flows, Workflow Rules, and Roll-Up Summary calculations."
    },
    {
        question: "A developer has the following requirements:\n- Calculate the total amount on an Order.\n- Calculate the line amount for each Line Item based on quantity selected and price.\n- Move Line Items to a different Order if a Line Item is not in stock.\nWhich relationship implementation supports these requirements on its own?",
        options: [
            "Line Item has a re-parentable master-detail field to Order.",
            "Order has a re-parentable master-detail field to Line Item.",
            "Line Item has a re-parentable lookup field to Order.",
            "Order has a re-parentable lookup field to Line Item."
        ],
        correct: 0,
        explanation: "A master-detail from Line Item to Order allows automatic calculations and re-parenting when needed."
    },
    {
        question: "A Lightning component has a wired property, searchResults, that stores a list of Opportunities. Which definition of the Apex method, to which the searchResults property is wired, should be used?",
        options: [
            "@AuraEnabled(cacheable=false)\npublic static List<Opportunity> search(String term) { /*implementation*/ }",
            "@AuraEnabled(cacheable=false)\npublic List<Opportunity> search(String term) { /*implementation*/ }",
            "@AuraEnabled(cacheable=true)\npublic static List<Opportunity> search(String term) { /*implementation*/ }",
            "@AuraEnabled(cacheable=true)\npublic List<Opportunity> search(String term) { /*implementation*/ }"
        ],
        correct: 2,
        explanation: "Wired properties require the method to be static and cacheable=true."
    },
    {
        question: "A developer is asked to prevent anyone other than a user with Sales Manager profile from changing the Opportunity Status to Closed Lost if the lost reason is blank. Which automation allows the developer to satisfy this requirement in the most efficient manner?",
        options: [
            "A record trigger flow on the Opportunity object",
            "An Apex trigger on the Opportunity object",
            "An approval process on the Opportunity object",
            "An error condition formula on a validation rule on Opportunity"
        ],
        correct: 3,
        explanation: "Validation rules are the most efficient way to enforce field-level conditions without code."
    },
    {
        question: "Universal Containers uses a Master-Detail relationship and stores the availability date on each Line Item of an Order and Orders are only shipped when all of the Line Items are available. Which method should be used to calculate the estimated ship date for an Order?",
        options: [
            "Use a DAYS formula on each of the availability date fields and a COUNT Roll-Up Summary field on the Order.",
            "Use a LATEST formula on each of the latest availability date fields.",
            "Use a MAX Roll-Up Summary field on the latest availability date fields.",
            "Use a CEILING formula on each of the latest availability date fields."
        ],
        correct: 2,
        explanation: "The MAX Roll-Up Summary on the Line Items will reflect the latest date available, which determines when all items are ready."
    },
    {
        question: "Since Aura application events follow the traditional publish-subscribe model, which method is used to fire an event?",
        options: [
            "emit()",
            "FireEvent()",
            "registerEvent()",
            "fire()"
        ],
        correct: 3,
        explanation: "The correct method to fire an Aura event is fire()."
    },
    {
        question: "A developer must create a Lightning component that allows users to input Contact record information to create a Contact record, including a Salary__c custom field. What should the developer use, along with a lightning-record-edit-form, so that Salary__c field functions as a currency input and is only viewable and editable by users that have the correct field level permissions on Salary__c?",
        options: [
            "<lightning-input-field field-name=\"Salary__c\"></lightning-input-field>",
            "<lightning-formatted-number value=\"Salary__c\" format-style=\"currency\"></lightning-formatted-number>",
            "<lightning-input type=\"number\" value=\"Salary__c\" formatter=\"currency\"></lightning-input>",
            "<lightning-input-currency value=\"Salary__c\"></lightning-input-currency>"
        ],
        correct: 0,
        explanation: "Using <lightning-input-field> within a record-edit-form respects field-level security and automatically handles formatting."
    },
    {
        question: "What can be used to override the Account's standard Edit button for Lightning Experience?",
        options: [
            "Lightning action",
            "Lightning component",
            "Lightning page",
            "Lightning flow"
        ],
        correct: 1,
        explanation: "To override standard buttons in Lightning, you must use a Lightning component with appropriate interface."
    }
    {
        question: "A developer needs to join data received from an integration with an external system with parent records in Salesforce. The data set does not contain the Salesforce IDs of the parent records, but it does have a foreign key attribute that can be used to identify the parent. Which action will allow the developer to relate records in the data model without knowing the Salesforce ID?",
        options: [
            "Create a custom field on the child object of type Lookup.",
            "Create and populate a custom field on the parent object marked as an External ID.",
            "Create and populate a custom field on the parent object marked as Unique.",
            "Create a custom field on the child object of type External Relationship."
        ],
        correct: 3,
        explanation: "External Relationships are used to relate objects using external IDs without needing Salesforce record IDs."
    },
    {
        question: "A team of developers is working on a source-driven project that allows them to work independently, with many different org configurations. Which type of Salesforce orgs should they use for their development?",
        options: [
            "Developer sandboxes",
            "Scratch orgs",
            "Full Copy sandboxes",
            "Developer orgs"
        ],
        correct: 1,
        explanation: "Scratch orgs are temporary, source-driven and fully configurable orgs ideal for agile and CI/CD workflows."
    },
    {
        question: "Recruiters want to check if the Contact's Mailing State matches a value in a multi-select picklist field Preferred_Locations__c on a Job_Application__c object (child of Contact). What is the recommended tool a developer should use to meet the business requirement?",
        options: [
            "Record-triggered flow",
            "Process Builder",
            "Formula field",
            "Apex trigger"
        ],
        correct: 2,
        explanation: "Formula fields are ideal for real-time field comparisons between parent-child related records, if cross-object references are supported."
    },
    {
        question: "A developer must modify the following code snippet to prevent the number of SOQL queries issued from exceeding platform governor limits. What technique should be implemented?\n\npublic static List<OpportunityLineItem> getOpportunityProducts(Set<Id> opportunityIds) {\n  List<OpportunityLineItem> oppLineItems = new List<OpportunityLineItem>();\n  for (Id thisOppId : opportunityIds){\n    oppLineItems.addAll([SELECT Id FROM OpportunityLineItem WHERE OpportunityId = :thisOppId]);\n  }\n  return oppLineItems;\n}",
        options: [
            "Refactor the code above to perform only one SOQL query, filtering by the set of opportunityIds.",
            "Use the System.Limits.getLimitQueries() method to ensure the number of queries is less than 100.",
            "Use the System.Limits.getQueries() method to ensure the number of queries is less than 100.",
            "Refactor the code above to perform the SOQL query only if the set of opportunityIds contains less than 100 IDs."
        ],
        correct: 0,
        explanation: "Bulkify the query by using WHERE OpportunityId IN :opportunityIds instead of looping and querying individually."
    },
    {
        question: "Which two settings must be defined in order to update a record of a junction object?",
        options: [
            "Read/Write access on the primary relationship",
            "Read/Write access on the junction object",
            "Read/Write access on the secondary relationship",
            "Read access on the primary relationship"
        ],
        correct: [0, 1],
        explanation: "You must have read/write access on the junction object itself and on the primary relationship to update the junction record."
    },
    {
        question: "In which two ways can the try/catch be enclosed to enforce object and field-level permissions and prevent the DML statement from being executed if the current logged-in user does not have the appropriate level of access?\n\nCustom controller using updateContact(Contact thisContact)",
        options: [
            "Use if(Schema.sObjectType.Contact.isAccessible())",
            "Use if(thisContact.OwnerId == UserInfo.getUserId())",
            "Use if(Schema.sObjectType.Contact.fields.Is_Active__c.isUpdateable())",
            "Use if(Schema.sObjectType.Contact.isUpdateable())"
        ],
        correct: [2, 3],
        explanation: "Always check both object-level and field-level permissions using isUpdateable() and fields.fieldName.isUpdateable() before DML."
    },
    {
        question: "A developer created a trigger on the Account object and wants to test if the trigger is properly bulkified. What two things should be done to create the test data within the unit test with the least amount of code?",
        options: [
            "Use the @isTest(seeAllData=true) annotation in the test class.",
            "Create a static resource containing test data.",
            "Use Test.loadData to populate data in your test methods.",
            "Use the @isTest(isParallel=true) annotation in the test class."
        ],
        correct: [1, 2],
        explanation: "Using a static resource or Test.loadData() allows loading many records with minimal code, useful for bulk testing."
    },
    {
        question: "What are three ways for a developer to execute tests in an org?",
        options: [
            "SalesforceDX",
            "Bulk API",
            "Metadata API",
            "Setup Menu",
            "Tooling API"
        ],
        correct: [0, 3, 4],
        explanation: "Developers can use Salesforce DX CLI, the Setup UI, or Tooling API to run Apex tests."
    },
    {
        question: "Refer to the following Apex code:\nInteger x = 0;\ndo {\n x += 1;\n x++;\n} while (x < 1);\nSystem.debug(x);\n\nWhat is the value of x when it is written to the debug log?",
        options: [
            "0",
            "1",
            "2",
            "3"
        ],
        correct: 2,
        explanation: "Inside the loop, x increases twice (x += 1 and x++) before the condition x < 1 becomes false. So x = 2."
    },
    {
        question: "Universal Containers has implemented an order management application. Each Order can have one or more Order Line Items. The Order Line object is related to the Order via a master-detail relationship. For each Order Line item, the total price is calculated by multiplying the Order Line item price with the quantity ordered. What is the best practice to get the sum of all Order Line item totals on the Order record?",
        options: [
            "Roll-up summary field",
            "Quick action",
            "Apex trigger",
            "Formula field"
        ],
        correct: 0,
        explanation: "Since Order Line Items are in a master-detail relationship with Order, a Roll-Up Summary is the most efficient solution."
    }
];

var questions = [
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
        "question": "Which SOQL queries are valid? (Select 2)",
        "options": [
            "SELECT Name FROM Account WHERE Name LIKE '%test%'",
            "SELECT * FROM Account",
            "SELECT Name FROM Account ORDER BY Name LIMIT 10",
            "SELECT COUNT() FROM Account GROUP BY Type"
        ],
        "correct": [
            0,
            2
        ],
        "explanation": "Options A and C use valid SOQL syntax. SELECT * is not supported, and aggregate queries require proper field selection or aliases.",
        "category": "Developer Fundamentals"
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
    }
];
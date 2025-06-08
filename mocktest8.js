var questions = [
    // Developer Fundamentals - Advanced 19 questions
    {
        "question": "What is the implication of using 'without sharing' in a class called from a 'with sharing' context?",
        "options": [
            "The called class will inherit sharing from caller",
            "The called class will run without sharing rules",
            "A compilation error will occur",
            "Sharing rules will be applied based on current user"
        ],
        "correct": 1,
        "explanation": "'Without sharing' always runs without enforcing sharing rules regardless of calling context."
    },
    {
        "question": "Which approach is most efficient for processing large datasets in Apex?",
        "options": [
            "Database.Batchable with optimal batch size",
            "Queueable Apex with chaining",
            "@future methods with collections",
            "Synchronous processing with bulk operations"
        ],
        "correct": 0,
        "explanation": "Database.Batchable is designed specifically for processing large datasets efficiently."
    },
    {
        "question": "What happens when a custom exception is thrown but not caught in a transaction?",
        "options": [
            "Transaction continues with default values",
            "Only the current operation is rolled back",
            "Entire transaction is rolled back",
            "Exception is automatically handled by system"
        ],
        "correct": 2,
        "explanation": "Uncaught exceptions cause the entire transaction to be rolled back."
    },
    {
        "question": "Which design pattern best handles complex business logic with multiple conditional paths?",
        "options": [
            "Factory Pattern",
            "Strategy Pattern",
            "Observer Pattern",
            "Singleton Pattern"
        ],
        "correct": 1,
        "explanation": "Strategy Pattern allows encapsulating different algorithms/business rules and making them interchangeable."
    },
    {
        "question": "What is the most efficient way to handle recursive relationships in SOQL?",
        "options": [
            "Multiple separate queries",
            "Nested SOQL with subqueries",
            "Parent-to-child subquery with LIMIT",
            "Batch processing approach"
        ],
        "correct": 2,
        "explanation": "Parent-to-child subqueries with appropriate LIMIT clauses are most efficient for hierarchical data."
    },
    {
        "question": "Which caching strategy is most appropriate for frequently accessed, rarely changed data?",
        "options": [
            "Platform Cache (Session)",
            "Platform Cache (Org)",
            "Static variables",
            "Custom Settings"
        ],
        "correct": 1,
        "explanation": "Org cache persists across user sessions and is ideal for stable, frequently accessed data."
    },
    {
        "question": "What is the primary difference between Database.insert() and INSERT DML?",
        "options": [
            "Performance characteristics",
            "Error handling capabilities",
            "Governor limit consumption",
            "Transaction behavior"
        ],
        "correct": 1,
        "explanation": "Database methods provide partial success options and detailed error information."
    },
    {
        "question": "Which approach provides the best performance for complex data transformations?",
        "options": [
            "Multiple SOQL queries with loops",
            "Single complex SOQL with aggregate functions",
            "Apex collections with algorithmic processing",
            "Platform Events with async processing"
        ],
        "correct": 2,
        "explanation": "Apex collections with efficient algorithms often outperform complex SOQL for transformations."
    },
    {
        "question": "What is the impact of field-level security in dynamic SOQL queries?",
        "options": [
            "FLS is automatically enforced",
            "FLS must be manually checked",
            "FLS is ignored in dynamic queries",
            "FLS depends on sharing settings"
        ],
        "correct": 1,
        "explanation": "Dynamic SOQL requires manual field-level security checks using Schema methods."
    },
    {
        "question": "Which scenario requires implementing the Database.AllowsCallouts interface?",
        "options": [
            "Batch Apex making HTTP callouts",
            "Future methods with callouts",
            "Queueable Apex with callouts",
            "Scheduled Apex with callouts"
        ],
        "correct": 0,
        "explanation": "Batch Apex requires Database.AllowsCallouts interface to make HTTP callouts."
    },
    {
        "question": "What is the optimal approach for handling large result sets that exceed heap limits?",
        "options": [
            "Increase heap size allocation",
            "Use lazy loading with iterators",
            "Process in smaller chunks with multiple transactions",
            "Use streaming API for data processing"
        ],
        "correct": 2,
        "explanation": "Processing in smaller chunks across multiple transactions prevents heap limit issues."
    },
    {
        "question": "Which metadata deployment approach provides the most granular control?",
        "options": [
            "Metadata API with XML manifests",
            "SFDX source format deployment",
            "Unlocked packages",
            "Change sets with dependencies"
        ],
        "correct": 0,
        "explanation": "Metadata API with XML manifests provides the finest granular control over deployments."
    },
    {
        "question": "What is the recommended pattern for handling mixed DML operations?",
        "options": [
            "Process all DML in single transaction",
            "Use separate transactions for setup and user objects",
            "Use Database.Savepoint for rollback control",
            "Avoid mixed DML entirely"
        ],
        "correct": 1,
        "explanation": "Setup and non-setup objects must be processed in separate transactions."
    },
    {
        "question": "Which approach best handles cross-org data integration?",
        "options": [
            "REST API with OAuth authentication",
            "SOAP API with session management",
            "Platform Events across orgs",
            "Bulk API for large datasets"
        ],
        "correct": 0,
        "explanation": "REST API with OAuth provides the most flexible and secure cross-org integration."
    },
    {
        "question": "What is the impact of using @ReadOnly annotation in Visualforce pages?",
        "options": [
            "Increases SOQL query limits",
            "Enables longer page execution time",
            "Both A and B",
            "Only improves page performance"
        ],
        "correct": 2,
        "explanation": "@ReadOnly increases query limits and extends execution time for report-style pages."
    },
    {
        "question": "Which security consideration is most critical when implementing custom REST services?",
        "options": [
            "Input validation and sanitization",
            "Authentication mechanism",
            "Rate limiting implementation",
            "All of the above"
        ],
        "correct": 3,
        "explanation": "All security aspects are critical for custom REST services implementation."
    },
    {
        "question": "What is the most efficient way to handle bulk record processing with related data?",
        "options": [
            "Nested loops with individual queries",
            "Maps for relationship lookups with bulk queries",
            "Separate batch jobs for each object type",
            "Platform Events for async processing"
        ],
        "correct": 1,
        "explanation": "Using Maps for relationship lookups with bulk queries minimizes SOQL usage."
    },
    {
        "question": "Which approach provides the best error handling for integration scenarios?",
        "options": [
            "Try-catch blocks with generic exceptions",
            "Custom exception classes with detailed logging",
            "Platform Events for error notifications",
            "Dead letter queue pattern implementation"
        ],
        "correct": 1,
        "explanation": "Custom exception classes with detailed logging provide the most comprehensive error handling."
    },
    {
        "question": "What is the primary consideration when implementing governor limit optimization?",
        "options": [
            "Minimize SOQL queries through bulk operations",
            "Balance between CPU time and heap usage",
            "Optimize DML operations for batch processing",
            "All optimization strategies should be considered together"
        ],
        "correct": 3,
        "explanation": "Effective optimization requires considering all governor limits holistically."
    },

    // Process Automation & Logic - Advanced 17 questions
    {
        "question": "What is the recommended approach for handling complex approval processes with dynamic routing?",
        "options": [
            "Multiple approval processes with entry criteria",
            "Single approval process with complex formulas",
            "Custom Apex approval logic with Process.Plugin",
            "Flow with dynamic approval assignments"
        ],
        "correct": 2,
        "explanation": "Custom Apex with Process.Plugin interface provides maximum flexibility for complex approval routing."
    },
    {
        "question": "Which Flow design pattern best handles error recovery and retry logic?",
        "options": [
            "Nested decision elements",
            "Fault paths with loop elements",
            "Subflows for error handling",
            "Platform Events for async retry"
        ],
        "correct": 1,
        "explanation": "Fault paths combined with loop elements provide robust error recovery mechanisms."
    },
    {
        "question": "What is the most efficient way to process large datasets in Flow?",
        "options": [
            "Get Records element with large limits",
            "Loop through records individually",
            "Batch processing with Apex Actions",
            "Multiple Flow interviews"
        ],
        "correct": 2,
        "explanation": "Apex Actions provide the most efficient processing for large datasets in Flows."
    },
    {
        "question": "Which automation tool provides the best performance for high-volume record processing?",
        "options": [
            "Process Builder with optimized criteria",
            "Flow with bulk operations",
            "Custom Apex triggers with handler pattern",
            "Workflow rules with field updates"
        ],
        "correct": 2,
        "explanation": "Custom Apex triggers with proper bulkification provide the best performance for high-volume processing."
    },
    {
        "question": "What is the impact of cross-object formula fields on automation performance?",
        "options": [
            "No significant impact",
            "Slight performance degradation",
            "Can cause significant slowdowns with complex relationships",
            "Only impacts reporting performance"
        ],
        "correct": 2,
        "explanation": "Cross-object formulas can significantly impact automation performance, especially with complex relationships."
    },
    {
        "question": "Which approach is best for implementing complex business rules with multiple conditions?",
        "options": [
            "Nested IF statements in Process Builder",
            "Multiple validation rules",
            "Custom Apex with rule engine pattern",
            "Complex Flow decision logic"
        ],
        "correct": 2,
        "explanation": "Custom Apex with rule engine pattern provides the most maintainable solution for complex business rules."
    },
    {
        "question": "What is the recommended pattern for handling recursive automation triggers?",
        "options": [
            "Static variables with recursion counters",
            "Custom settings to control execution",
            "Both static variables and execution flags",
            "Disable automation temporarily"
        ],
        "correct": 2,
        "explanation": "Combining static variables with execution control flags provides comprehensive recursion handling."
    },
    {
        "question": "Which Flow variable scope is most appropriate for sharing data between interviews?",
        "options": [
            "Local variables",
            "Global constants",
            "Platform Events",
            "Static resources"
        ],
        "correct": 2,
        "explanation": "Platform Events provide the best mechanism for sharing data between Flow interviews."
    },
    {
        "question": "What is the primary limitation of time-based workflows compared to scheduled flows?",
        "options": [
            "Less flexible scheduling options",
            "Cannot handle bulk operations efficiently",
            "Limited error handling capabilities",
            "All of the above"
        ],
        "correct": 3,
        "explanation": "Time-based workflows have multiple limitations compared to scheduled flows."
    },
    {
        "question": "Which approach provides the best auditability for automation processes?",
        "options": [
            "Debug logs only",
            "Custom logging with platform events",
            "Setup audit trail",
            "Process automation settings"
        ],
        "correct": 1,
        "explanation": "Custom logging with platform events provides comprehensive and queryable audit trails."
    },
    {
        "question": "What is the recommended pattern for handling external system integration in automation?",
        "options": [
            "Direct callouts from Process Builder",
            "Asynchronous processing with proper error handling",
            "Synchronous integration with timeout handling",
            "Platform Events for all integrations"
        ],
        "correct": 1,
        "explanation": "Asynchronous processing with comprehensive error handling is the most robust integration pattern."
    },
    {
        "question": "Which automation tool provides the best debugging capabilities?",
        "options": [
            "Process Builder with debug mode",
            "Flow with debug runs",
            "Apex triggers with debug statements",
            "All provide equivalent debugging"
        ],
        "correct": 1,
        "explanation": "Flow debug runs provide the most comprehensive debugging experience with variable inspection."
    },
    {
        "question": "What is the impact of automation on data skew scenarios?",
        "options": [
            "No impact on data skew",
            "Can exacerbate lock contention issues",
            "Helps resolve data skew problems",
            "Only impacts reporting queries"
        ],
        "correct": 1,
        "explanation": "Automation can worsen data skew issues by increasing lock contention on popular records."
    },
    {
        "question": "Which approach is most effective for testing complex automation scenarios?",
        "options": [
            "Unit tests for individual components",
            "Integration tests covering end-to-end scenarios",
            "Both unit and integration testing",
            "Manual testing with diverse datasets"
        ],
        "correct": 2,
        "explanation": "Comprehensive testing requires both unit tests and integration tests for automation."
    },
    {
        "question": "What is the recommended approach for migrating complex Process Builder processes to Flow?",
        "options": [
            "Direct conversion using migration tools",
            "Rebuild from scratch with Flow best practices",
            "Gradual migration with parallel testing",
            "Keep existing Process Builder indefinitely"
        ],
        "correct": 2,
        "explanation": "Gradual migration with parallel testing ensures functionality is preserved during transition."
    },
    {
        "question": "Which design pattern best handles conditional automation execution based on user context?",
        "options": [
            "Permission set checks in automation",
            "Custom permission validation",
            "User role-based automation routing",
            "All approaches combined for comprehensive control"
        ],
        "correct": 3,
        "explanation": "Comprehensive user context validation requires multiple approaches for robust control."
    },
    {
        "question": "What is the most efficient way to handle bulk automation with cross-object dependencies?",
        "options": [
            "Sequential processing of related objects",
            "Parallel processing with dependency management",
            "Batch processing with proper ordering",
            "Platform Events for decoupled processing"
        ],
        "correct": 2,
        "explanation": "Batch processing with proper dependency ordering provides the most efficient bulk automation."
    },

    // User Interface - Advanced 14 questions
    {
        "question": "Which caching strategy provides the best performance for Lightning Web Components with dynamic data?",
        "options": [
            "Browser cache with TTL",
            "@wire with refresh capabilities",
            "Platform cache with invalidation logic",
            "Client-side state management"
        ],
        "correct": 2,
        "explanation": "Platform cache with proper invalidation provides optimal performance for dynamic data scenarios."
    },
    {
        "question": "What is the most efficient way to handle large datasets in Lightning Web Components?",
        "options": [
            "Load all data at once",
            "Implement virtual scrolling with lazy loading",
            "Use pagination with server-side filtering",
            "Both B and C are effective approaches"
        ],
        "correct": 3,
        "explanation": "Both virtual scrolling and pagination are effective for large datasets depending on use case."
    },
    {
        "question": "Which approach provides the best user experience for complex form validations?",
        "options": [
            "Server-side validation only",
            "Client-side validation only",
            "Progressive validation with real-time feedback",
            "Batch validation on form submission"
        ],
        "correct": 2,
        "explanation": "Progressive validation with real-time feedback provides the best user experience."
    },
    {
        "question": "What is the recommended pattern for state management in complex Lightning applications?",
        "options": [
            "Component-level state only",
            "Lightning Message Service for communication",
            "Application event bus pattern",
            "Combination of local state and message service"
        ],
        "correct": 3,
        "explanation": "Combining local state management with Lightning Message Service provides optimal state management."
    },
    {
        "question": "Which security consideration is most critical for Lightning Web Components?",
        "options": [
            "CSRF protection",
            "Input sanitization and validation",
            "Lightning Locker enforcement",
            "All security measures are equally important"
        ],
        "correct": 3,
        "explanation": "Comprehensive security requires attention to all aspects in Lightning Web Components."
    },
    {
        "question": "What is the most effective way to optimize Lightning Web Component performance?",
        "options": [
            "Minimize DOM manipulations",
            "Optimize @wire service calls",
            "Implement efficient event handling",
            "All optimization techniques should be applied"
        ],
        "correct": 3,
        "explanation": "Comprehensive performance optimization requires multiple techniques."
    },
    {
        "question": "Which approach provides the best accessibility in Lightning Web Components?",
        "options": [
            "Semantic HTML structure",
            "ARIA attributes implementation",
            "Keyboard navigation support",
            "All accessibility practices combined"
        ],
        "correct": 3,
        "explanation": "Complete accessibility requires semantic HTML, ARIA attributes, and keyboard support."
    },
    {
        "question": "What is the recommended pattern for error handling in complex Lightning applications?",
        "options": [
            "Component-level error boundaries",
            "Global error handling service",
            "User-friendly error messaging system",
            "Comprehensive error handling strategy"
        ],
        "correct": 3,
        "explanation": "Effective error handling requires component boundaries, global handling, and user-friendly messaging."
    },
    {
        "question": "Which approach is most effective for testing Lightning Web Components?",
        "options": [
            "Unit tests with Jest",
            "Integration tests with test utilities",
            "End-to-end testing with automation",
            "Comprehensive testing at all levels"
        ],
        "correct": 3,
        "explanation": "Thorough testing requires unit, integration, and end-to-end testing approaches."
    },
    {
        "question": "What is the impact of Lightning Locker on third-party library integration?",
        "options": [
            "No impact on library functionality",
            "Some libraries may require modifications",
            "All libraries work without changes",
            "Lightning Locker blocks all third-party libraries"
        ],
        "correct": 1,
        "explanation": "Lightning Locker may require modifications to third-party libraries for compatibility."
    },
    {
        "question": "Which design pattern best handles complex component composition?",
        "options": [
            "Container-presenter pattern",
            "Composite component pattern",
            "Higher-order component pattern",
            "All patterns have their specific use cases"
        ],
        "correct": 3,
        "explanation": "Different composition patterns are appropriate for different complexity scenarios."
    },
    {
        "question": "What is the most efficient way to handle real-time data updates in Lightning Web Components?",
        "options": [
            "Polling with setInterval",
            "Platform Events with streaming",
            "Change Data Capture events",
            "Server-sent events implementation"
        ],
        "correct": 1,
        "explanation": "Platform Events provide the most efficient real-time data update mechanism."
    },
    {
        "question": "Which approach provides the best mobile responsiveness in Lightning applications?",
        "options": [
            "CSS media queries only",
            "Lightning Design System utilities",
            "Progressive enhancement approach",
            "Comprehensive responsive design strategy"
        ],
        "correct": 3,
        "explanation": "Effective mobile responsiveness requires CSS, SLDS utilities, and progressive enhancement."
    },
    {
        "question": "What is the recommended approach for handling complex business logic in Lightning Web Components?",
        "options": [
            "Implement all logic in component JavaScript",
            "Delegate complex logic to Apex methods",
            "Use Flow for business process orchestration",
            "Balanced approach using appropriate tools for each scenario"
        ],
        "correct": 3,
        "explanation": "Complex business logic should be distributed appropriately between client, server, and automation tools."
    },

    // Testing & Deployment - Advanced 10 questions
    {
        "question": "Which testing strategy provides the most comprehensive coverage for enterprise applications?",
        "options": [
            "Unit testing with high code coverage",
            "Integration testing across system boundaries",
            "User acceptance testing with business scenarios",
            "Multi-layered testing strategy covering all levels"
        ],
        "correct": 3,
        "explanation": "Enterprise applications require comprehensive testing at unit, integration, and acceptance levels."
    },
    {
        "question": "What is the most effective approach for managing test data in complex scenarios?",
        "options": [
            "Test data factory classes with builder pattern",
            "@TestSetup methods for shared data",
            "Mock objects for external dependencies",
            "Comprehensive test data strategy using all approaches"
        ],
        "correct": 3,
        "explanation": "Complex scenarios require factory classes, setup methods, and mocking for comprehensive coverage."
    },
    {
        "question": "Which deployment strategy minimizes risk for large-scale enterprise deployments?",
        "options": [
            "Blue-green deployment approach",
            "Canary releases with gradual rollout",
            "Feature toggles with controlled activation",
            "Multi-phase deployment with risk mitigation strategies"
        ],
        "correct": 3,
        "explanation": "Large-scale deployments require multiple risk mitigation strategies combined."
    },
    {
        "question": "What is the recommended approach for testing asynchronous processes?",
        "options": [
            "Test.startTest() and Test.stopTest() for context isolation",
            "Mock implementations for async dependencies",
            "Integration tests with proper timing controls",
            "Comprehensive async testing strategy"
        ],
        "correct": 3,
        "explanation": "Async testing requires test context isolation, mocking, and integration testing."
    },
    {
        "question": "Which continuous integration practice provides the most value for Salesforce development?",
        "options": [
            "Automated unit test execution",
            "Static code analysis and quality gates",
            "Automated deployment validation",
            "Complete CI/CD pipeline with quality assurance"
        ],
        "correct": 3,
        "explanation": "Maximum CI value comes from comprehensive pipeline including tests, analysis, and validation."
    },
    {
        "question": "What is the most effective way to handle environment-specific configurations in deployments?",
        "options": [
            "Custom metadata types for configuration",
            "Custom settings for environment variables",
            "Named credentials for external systems",
            "Comprehensive configuration management strategy"
        ],
        "correct": 3,
        "explanation": "Environment management requires custom metadata, settings, and credentials appropriately used."
    },
    {
        "question": "Which approach provides the best rollback capabilities for failed deployments?",
        "options": [
            "Version control with tagged releases",
            "Deployment packages with rollback scripts",
            "Feature toggles for quick disabling",
            "Multi-layered rollback strategy"
        ],
        "correct": 3,
        "explanation": "Effective rollback requires version control, deployment packages, and feature toggles."
    },
    {
        "question": "What is the recommended approach for testing governor limit scenarios?",
        "options": [
            "Synthetic test data at limit boundaries",
            "Load testing with realistic data volumes",
            "Performance testing with monitoring",
            "Comprehensive limit testing across all scenarios"
        ],
        "correct": 3,
        "explanation": "Governor limit testing requires boundary testing, load testing, and performance monitoring."
    },
    {
        "question": "Which deployment monitoring approach provides the best visibility?",
        "options": [
            "Real-time deployment status tracking",
            "Automated post-deployment validation",
            "Performance monitoring and alerting",
            "Comprehensive deployment observability"
        ],
        "correct": 3,
        "explanation": "Complete deployment visibility requires status tracking, validation, and performance monitoring."
    },
    {
        "question": "What is the most effective strategy for managing technical debt in Salesforce applications?",
        "options": [
            "Regular code reviews and refactoring",
            "Automated code quality analysis",
            "Technical debt tracking and prioritization",
            "Comprehensive technical debt management program"
        ],
        "correct": 3,
        "explanation": "Technical debt management requires reviews, automated analysis, and systematic tracking."
    }
];
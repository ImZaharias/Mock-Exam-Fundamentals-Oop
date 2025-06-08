var questions = [
    // Developer Fundamentals - Advanced (19 questions)
    {
        "question": "When implementing a multi-tenant architecture with shared codebase but separate data isolation, which pattern is most effective?",
        "options": [
            "Strategy Pattern with custom metadata configuration",
            "Facade Pattern with tenant-specific facades",
            "Virtual Schema Pattern with dynamic SOQL injection",
            "Decorator Pattern with runtime tenant context"
        ],
        "correct": 2,
        "explanation": "Virtual Schema Pattern allows dynamic query rewriting for strict data isolation while maintaining single codebase."
    },
    {
        "question": "What is the most secure way to implement field-level encryption for PCI compliance when the data needs to be processed in Apex?",
        "options": [
            "Standard Shield Platform Encryption",
            "Custom encryption with transient key storage",
            "External HSM with callouts for crypto operations",
            "Client-side encryption before data reaches Salesforce"
        ],
        "correct": 2,
        "explanation": "HSM with callouts provides the highest security by keeping encryption keys completely outside Salesforce."
    },
    {
        "question": "Which performance optimization technique is most effective for complex hierarchical data structures requiring frequent traversals?",
        "options": [
            "Materialized path pattern with indexed text fields",
            "Adjacency list with recursive CTE in SOQL",
            "Nested sets pattern with custom Apex implementation",
            "Graph database architecture with Heroku Connect"
        ],
        "correct": 2,
        "explanation": "Nested sets provide O(1) complexity for hierarchical queries but require complex Apex maintenance logic."
    },
    {
        "question": "When designing an event-driven microservices architecture on Salesforce, which approach provides the best scalability?",
        "options": [
            "Platform Events with Change Data Capture",
            "Kafka on Heroku with MuleSoft integration",
            "Custom Pub/Sub implementation using Big Objects",
            "Composite GraphQL API with Apollo Federation"
        ],
        "correct": 1,
        "explanation": "Kafka on Heroku provides the highest scalability for event-driven architectures beyond Salesforce limits."
    },
    {
        "question": "What is the most resilient pattern for handling governor limits in complex batch processing scenarios?",
        "options": [
            "Incremental checkpointing with stateful batch classes",
            "Queueable chaining with dynamic job splitting",
            "Circuit breaker pattern with fallback mechanisms",
            "All of the above combined strategically"
        ],
        "correct": 3,
        "explanation": "Comprehensive resilience requires checkpointing, job splitting, and circuit breakers working together."
    },
    {
        "question": "Which approach provides the best real-time analytics on large datasets without impacting transaction limits?",
        "options": [
            "Transactional Analytics with Event Monitoring",
            "External data warehouse with Einstein Analytics",
            "Change Data Capture to Snowflake with reverse ETL",
            "Custom index structures using Big Objects"
        ],
        "correct": 2,
        "explanation": "CDC to Snowflake provides real-time analytics without consuming Salesforce query resources."
    },
    {
        "question": "When implementing a custom ORM layer in Apex, which design pattern is most maintainable?",
        "options": [
            "Active Record with tight coupling to SObjects",
            "Data Mapper with complete separation of domain and persistence",
            "Repository pattern with generic DAO implementation",
            "Unit of Work with atomic transaction management"
        ],
        "correct": 3,
        "explanation": "Unit of Work pattern provides the cleanest transaction management for complex object graphs."
    },
    {
        "question": "What is the most effective way to implement soft deletion with full referential integrity?",
        "options": [
            "IsDeleted flag with validation rules",
            "Architecture using Archived__c flag with trigger-based enforcement",
            "Shadow tables with foreign key constraints",
            "Change Data Capture with deleted record preservation"
        ],
        "correct": 2,
        "explanation": "Shadow tables maintain true referential integrity while allowing soft delete functionality."
    },
    {
        "question": "Which approach provides the best performance for full-text search across multiple related objects?",
        "options": [
            "Salesforce SOSL with snippet generation",
            "Elasticsearch integration with real-time sync",
            "Custom indexing engine using Platform Cache",
            "Big Object implementation with full-text indexes"
        ],
        "correct": 1,
        "explanation": "Elasticsearch provides superior full-text search capabilities beyond native Salesforce options."
    },
    {
        "question": "What is the most secure implementation pattern for handling sensitive data in mobile applications?",
        "options": [
            "LWC with encrypted offline storage",
            "Mobile SDK with biometric authentication",
            "Progressive Web App with service worker caching",
            "Zero-trust architecture with JWT and short TTL"
        ],
        "correct": 3,
        "explanation": "Zero-trust with JWT provides the highest security for mobile access to sensitive data."
    },
    {
        "question": "Which technique provides the most significant CPU time reduction for complex Apex calculations?",
        "options": [
            "Memoization with static variable caching",
            "Algorithmic optimization using Big-O analysis",
            "Bulkified stream processing with lazy evaluation",
            "JIT compilation using Apex anonymous blocks"
        ],
        "correct": 1,
        "explanation": "Algorithmic optimization (reducing O(n²) to O(n log n)) provides order-of-magnitude improvements."
    },
    {
        "question": "What is the most effective way to reduce heap usage when processing 50,000+ records?",
        "options": [
            "Iterable Batch with chunked processing",
            "Streaming API with paginated queries",
            "Custom iterator implementing checkpointing",
            "Database cursor pattern with state preservation"
        ],
        "correct": 2,
        "explanation": "Streaming API with pagination maintains constant heap usage regardless of dataset size."
    },
    {
        "question": "Which approach provides the lowest latency for real-time aggregation across 1M+ records?",
        "options": [
            "Pre-aggregated rollup summaries with triggers",
            "Custom index table with incremental updates",
            "External database with materialized views",
            "Platform Cache with invalidation triggers"
        ],
        "correct": 1,
        "explanation": "Custom index tables updated incrementally provide O(1) lookup for real-time aggregations."
    },
    {
        "question": "What is the most efficient way to implement a high-cardinality rate limiter in Apex?",
        "options": [
            "Custom Settings with hierarchical storage",
            "Platform Cache with atomic counters",
            "Transaction Finalizer with governor limit tracking",
            "Redis integration with atomic operations"
        ],
        "correct": 3,
        "explanation": "Redis provides atomic operations and sufficient throughput for high-cardinality rate limiting."
    },
    {
        "question": "Which pattern is most effective for implementing versioned APIs in Apex?",
        "options": [
            "URI versioning with route factories",
            "Header-based versioning with strategy pattern",
            "Content negotiation with media type versions",
            "Parallel API classes with deprecation markers"
        ],
        "correct": 1,
        "explanation": "Header-based versioning provides clean URIs while allowing runtime version selection."
    },
    {
        "question": "What is the most secure way to implement row-level security for complex multi-dimensional hierarchies?",
        "options": [
            "Sharing rules with criteria-based groups",
            "Dynamic SOQL injection with permission sets",
            "Attribute-Based Access Control (ABAC) pattern",
            "Encrypted predicates in WHERE clauses"
        ],
        "correct": 2,
        "explanation": "ABAC provides fine-grained control over complex access policies beyond standard sharing."
    },
    {
        "question": "Which approach provides the best performance for complex many-to-many relationship queries?",
        "options": [
            "Junction objects with indexed foreign keys",
            "Denormalized relationship tables",
            "GraphQL resolvers with batched queries",
            "External graph database with real-time sync"
        ],
        "correct": 3,
        "explanation": "Graph databases provide optimal performance for complex many-to-many traversals."
    },
    {
        "question": "What is the most resilient pattern for handling external system failures in synchronous integrations?",
        "options": [
            "Circuit breaker with exponential backoff",
            "Bulk API with automatic retries",
            "Two-phase commit protocol",
            "Saga pattern with compensating transactions"
        ],
        "correct": 3,
        "explanation": "Saga pattern maintains data consistency across distributed systems during failures."
    },
    {
        "question": "Which approach provides the most maintainable solution for complex business rule engines?",
        "options": [
            "Custom metadata-driven rule evaluation",
            "Decision tables with formula fields",
            "Drools rules engine integration",
            "State machine pattern with workflow"
        ],
        "correct": 0,
        "explanation": "Metadata-driven rules provide flexibility without code changes for business rule updates."
    },

    // Process Automation & Logic - Advanced (17 questions)
    {
        "question": "What is the most resilient pattern for implementing complex approval processes with dynamic escalations?",
        "options": [
            "Nested approval processes with entry criteria",
            "Custom Apex approval framework with Process.Plugin",
            "Flow with scheduled path reevaluation",
            "Platform Events for state change notifications"
        ],
        "correct": 1,
        "explanation": "Custom Apex approval framework provides maximum flexibility for dynamic routing and escalations."
    },
    {
        "question": "Which approach provides the best error recovery for complex multi-object transactions in Flow?",
        "options": [
            "Transaction control with savepoints",
            "Compensating actions pattern",
            "Asynchronous error handling subflows",
            "Custom rollback framework with logging"
        ],
        "correct": 1,
        "explanation": "Compensating actions provide reliable recovery when true rollback isn't possible."
    },
    {
        "question": "What is the most efficient way to process hierarchical data transformations in Flow?",
        "options": [
            "Nested loops with collection filters",
            "Apex invocable methods with optimized algorithms",
            "Batch Flow with parallel execution",
            "Platform Events for distributed processing"
        ],
        "correct": 1,
        "explanation": "Apex invocable methods provide algorithmic efficiency beyond Flow's declarative capabilities."
    },
    {
        "question": "Which pattern provides the best performance for high-volume record-triggered automation?",
        "options": [
            "Trigger framework with parallel future methods",
            "Bulkified Flow with optimized queries",
            "Composite API with all-or-nothing processing",
            "Change Data Capture with async handlers"
        ],
        "correct": 0,
        "explanation": "Trigger framework with parallel futures maximizes throughput for high-volume processing."
    },
    {
        "question": "What is the most effective way to implement complex cross-object field validations?",
        "options": [
            "Validation rules with cross-object formulas",
            "Flow with pre-validation logic",
            "Apex trigger with predicate builders",
            "Custom metadata-driven validation engine"
        ],
        "correct": 3,
        "explanation": "Metadata-driven validation provides maintainability for complex cross-object rules."
    },
    {
        "question": "Which approach provides the best recursion control in complex automation chains?",
        "options": [
            "Static recursion counters",
            "Hierarchical custom settings flags",
            "Platform Event-based state management",
            "Composite pattern combining multiple techniques"
        ],
        "correct": 3,
        "explanation": "Composite pattern provides defense-in-depth against different recursion scenarios."
    },
    {
        "question": "What is the most scalable way to implement complex business process orchestration?",
        "options": [
            "Flow with subflow composition",
            "Custom state machine framework",
            "MuleSoft Composer with Salesforce triggers",
            "Platform Events with saga pattern"
        ],
        "correct": 1,
        "explanation": "Custom state machine framework provides optimal scalability for complex processes."
    },
    {
        "question": "Which approach provides the best audit trail for complex automation processes?",
        "options": [
            "Custom transaction logging object",
            "Platform Events with audit fields",
            "Big Object logging with retention policies",
            "External SIEM integration"
        ],
        "correct": 2,
        "explanation": "Big Objects provide scalable, long-term audit trails with automatic retention."
    },
    {
        "question": "What is the most resilient pattern for external system integrations in automation?",
        "options": [
            "Queueable with exponential backoff",
            "Platform Events with dead-letter queue",
            "Change Data Capture with reconciliation",
            "All of the above in combination"
        ],
        "correct": 3,
        "explanation": "Comprehensive resilience requires multiple integration failure strategies."
    },
    {
        "question": "Which debugging technique is most effective for complex automation chains?",
        "options": [
            "Transaction debug logs with correlation IDs",
            "Custom debug framework with severity levels",
            "Event monitoring with process visualization",
            "Time-travel debugging with state snapshots"
        ],
        "correct": 0,
        "explanation": "Correlation IDs enable tracing execution across multiple automation components."
    },
    {
        "question": "What is the most efficient way to handle data skew in automation processes?",
        "options": [
            "Record locking avoidance patterns",
            "Batch splitting by record ownership",
            "Queueable fan-out pattern",
            "All of the above combined"
        ],
        "correct": 3,
        "explanation": "Data skew mitigation requires multiple complementary techniques."
    },
    {
        "question": "Which testing strategy is most effective for complex automation scenarios?",
        "options": [
            "Unit tests for individual components",
            "Integration tests with mock services",
            "Property-based testing for edge cases",
            "Comprehensive multi-layered strategy"
        ],
        "correct": 3,
        "explanation": "Complex automation requires testing at all levels with different methodologies."
    },
    {
        "question": "What is the most maintainable approach for migrating complex Process Builder to Flow?",
        "options": [
            "Automated conversion tools",
            "Complete redesign with Flow best practices",
            "Incremental migration with parallel execution",
            "Hybrid approach with critical path prioritization"
        ],
        "correct": 3,
        "explanation": "Hybrid approach balances business continuity with architectural improvements."
    },
    {
        "question": "Which pattern best handles conditional automation based on complex user context?",
        "options": [
            "Permission set hierarchy evaluation",
            "Custom metadata-driven access policies",
            "ABAC with attribute collection",
            "All of the above in combination"
        ],
        "correct": 3,
        "explanation": "Comprehensive user context requires multiple evaluation mechanisms."
    },
    {
        "question": "What is the most efficient way to handle bulk automation with cross-object triggers?",
        "options": [
            "Trigger orchestration framework",
            "Platform Event-based decoupling",
            "Scheduled batch reconciliation",
            "Composite Graph API operations"
        ],
        "correct": 0,
        "explanation": "Trigger orchestration maintains transaction integrity while optimizing bulk processing."
    },
    {
        "question": "Which approach provides the best performance for complex calculated rollups?",
        "options": [
            "Declarative Lookup Rollup Summaries",
            "Custom incremental rollup framework",
            "Batch Apex with query optimization",
            "External calculation engine"
        ],
        "correct": 1,
        "explanation": "Custom incremental rollups provide O(1) update complexity for large datasets."
    },
    {
        "question": "What is the most resilient pattern for handling mixed DML in complex automation?",
        "options": [
            "Synchronous future method chaining",
            "Queueable with proper ordering",
            "Platform Event-based sequencing",
            "Two-phase commit protocol"
        ],
        "correct": 1,
        "explanation": "Queueable provides proper ordering and governor limit resilience for mixed DML."

    // User Interface - Advanced (14 questions)
    },
    {
        "question": "Which caching strategy provides the best performance for LWC with frequently changing enterprise data?",
        "options": [
            "Stale-while-revalidate with background sync",
            "Optimistic UI with rollback capability",
            "Multi-level cache invalidation strategy",
            "All of the above combined appropriately"
        ],
        "correct": 3,
        "explanation": "Enterprise UIs require sophisticated caching strategies working in concert."
    },
    {
        "question": "What is the most efficient way to display 10,000+ records in LWC without pagination?",
        "options": [
            "Infinite scrolling with windowing",
            "Server-side aggregation with summary views",
            "Web Workers for background processing",
            "All of the above with progressive enhancement"
        ],
        "correct": 0,
        "explanation": "Windowing renders only visible rows while maintaining scroll position."
    },
    {
        "question": "Which approach provides the best UX for complex multi-step forms with conditional logic?",
        "options": [
            "Wizard pattern with state preservation",
            "Single-page form with dynamic sections",
            "Micro-interactions with real-time validation",
            "All UX patterns combined strategically"
        ],
        "correct": 3,
        "explanation": "Complex forms require multiple UX patterns tailored to different sections."
    },
    {
        "question": "What is the most maintainable state management solution for large LWC applications?",
        "options": [
            "Lightning Message Service with custom wrappers",
            "Redux pattern with observable stores",
            "Custom event bus with state snapshots",
            "All of the above with clear boundaries"
        ],
        "correct": 3,
        "explanation": "Large apps need structured state management with clear responsibilities."
    },
    {
        "question": "Which security pattern is most critical for LWC handling PII data?",
        "options": [
            "Field-level security enforcement",
            "View-state encryption",
            "CSRF tokens with strict CORS",
            "Defense-in-depth with all security layers"
        ],
        "correct": 3,
        "explanation": "PII requires comprehensive security at all application layers."
    },
    {
        "question": "What is the most effective way to optimize LWC rendering performance?",
        "options": [
            "Memoized computed properties",
            "Virtual DOM diffing optimization",
            "Lazy loading with code splitting",
            "All performance techniques combined"
        ],
        "correct": 3,
        "explanation": "Maximum performance requires addressing all potential bottlenecks."
    },
    {
        "question": "Which accessibility approach is most comprehensive for enterprise LWCs?",
        "options": [
            "WCAG 2.1 AA compliance testing",
            "Automated a11y auditing in CI/CD",
            "Screen reader compatibility testing",
            "All a11y practices with manual verification"
        ],
        "correct": 3,
        "explanation": "True accessibility requires automated and manual verification."
    },
    {
        "question": "What is the most resilient error handling pattern for complex LWC applications?",
        "options": [
            "Component-level error boundaries",
            "Global error handler with analytics",
            "Graceful degradation patterns",
            "Comprehensive error handling strategy"
        ],
        "correct": 3,
        "explanation": "Resilient apps need error handling at multiple levels."
    },
    {
        "question": "Which testing strategy is most effective for LWC applications?",
        "options": [
            "Jest unit tests with high coverage",
            "Integration tests with mock data",
            "End-to-end testing with real data",
            "Full testing pyramid implementation"
        ],
        "correct": 3,
        "explanation": "Effective testing requires the full pyramid approach."
    },
    {
        "question": "What is the best approach for third-party library integration in LWC?",
        "options": [
            "ES6 module imports where possible",
            "Lightning Container components",
            "Custom LWC wrappers with sanitization",
            "All approaches with security review"
        ],
        "correct": 3,
        "explanation": "Third-party code requires multiple integration options with security controls."
    },
    {
        "question": "Which pattern is most maintainable for complex LWC composition?",
        "options": [
            "Container/presenter separation",
            "Higher-order components",
            "Renderless component pattern",
            "All patterns applied appropriately"
        ],
        "correct": 3,
        "explanation": "Maintainable composition uses patterns suited to specific needs."
    },
    {
        "question": "What is the most efficient real-time data strategy for LWC?",
        "options": [
            "Platform Events with CometD",
            "Change Data Capture with throttling",
            "GraphQL subscriptions",
            "All real-time methods combined"
        ],
        "correct": 3,
        "explanation": "Different real-time scenarios require different technologies."
    },
    {
        "question": "Which mobile optimization strategy is most comprehensive?",
        "options": [
            "Responsive SLDS components",
            "Progressive Web App capabilities",
            "Network-aware lazy loading",
            "All mobile optimizations combined"
        ],
        "correct": 3,
        "explanation": "Mobile experience requires addressing all aspects of performance."
    },
    {
        "question": "What is the best approach for complex business logic in LWC?",
        "options": [
            "Client-side processing where possible",
            "Apex controllers for complex logic",
            "Microservices with API composition",
            "Balanced approach based on requirements"
        ],
        "correct": 3,
        "explanation": "Business logic should be placed where most appropriate."

    // Testing & Deployment - Advanced (10 questions)
    },
    {
        "question": "Which testing strategy provides the most confidence for mission-critical deployments?",
        "options": [
            "100% unit test coverage",
            "Integration tests with production-like data",
            "Canary releases with feature flags",
            "Comprehensive quality gates at all levels"
        ],
        "correct": 3,
        "explanation": "Mission-critical systems need defense-in-depth quality assurance."
    },
    {
        "question": "What is the most effective test data management strategy?",
        "options": [
            "Test data factories with builders",
            "Anonymous production data snapshots",
            "Synthetic data generation",
            "All approaches combined strategically"
        ],
        "correct": 3,
        "explanation": "Effective testing requires multiple data generation techniques."
    },
    {
        "question": "Which deployment strategy minimizes risk for enterprise systems?",
        "options": [
            "Blue-green deployment",
            "Feature toggle rollout",
            "Dark launching with shadow traffic",
            "All deployment risk mitigation techniques"
        ],
        "correct": 3,
        "explanation": "Enterprise systems need multiple risk mitigation approaches."
    },
    {
        "question": "What is the most comprehensive approach for testing async processes?",
        "options": [
            "Test.startTest()/stopTest() isolation",
            "Mocking async dependencies",
            "Integration tests with timeouts",
            "Full spectrum of async testing"
        ],
        "correct": 3,
        "explanation": "Async testing requires multiple verification techniques."
    },
    {
        "question": "Which CI/CD practice provides the most value?",
        "options": [
            "Automated testing gates",
            "Static code analysis",
            "Infrastructure as code",
            "Full pipeline automation"
        ],
        "correct": 3,
        "explanation": "Maximum value comes from complete pipeline implementation."
    },
    {
        "question": "What is the most maintainable environment management strategy?",
        "options": [
            "Custom metadata configuration",
            "Environment-specific CI/CD variables",
            "Infrastructure as code",
            "Comprehensive configuration management"
        ],
        "correct": 3,
        "explanation": "Environment management requires multiple coordinated techniques."
    },
    {
        "question": "Which rollback strategy is most reliable?",
        "options": [
            "Versioned deployments",
            "Database backup/restore",
            "Feature flag disablement",
            "Multi-faceted rollback plan"
        ],
        "correct": 3,
        "explanation": "Reliable rollback requires multiple complementary approaches."
    },
    {
        "question": "What is the most effective way to test governor limit scenarios?",
        "options": [
            "Boundary value testing",
            "Load testing with production volumes",
            "Performance profiling",
            "Comprehensive limit testing strategy"
        ],
        "correct": 3,
        "explanation": "Governor limit testing needs multiple verification methods."
    },
    {
        "question": "Which deployment monitoring approach is most comprehensive?",
        "options": [
            "Real-time health checks",
            "Automated smoke tests",
            "Performance benchmarking",
            "Full observability stack"
        ],
        "correct": 3,
        "explanation": "Comprehensive monitoring requires multiple observability tools."
    },
    {
        "question": "What is the most sustainable technical debt management approach?",
        "options": [
            "Regular refactoring sprints",
            "Automated code quality gates",
            "Debt tracking with prioritization",
            "Institutionalized quality culture"
        ],
        "correct": 3,
        "explanation": "Sustainable debt management requires cultural adoption."
    }
];
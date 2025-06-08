var questions = [
    // Developer Fundamentals - Advanced (19 questions)
    {
        "question": "When implementing a sharing recalculation engine for hierarchical data, which algorithm provides optimal performance with minimal SOQL queries?",
        "options": [
            "Breadth-first search with memoization",
            "Floyd-Warshall algorithm with path compression",
            "Dijkstra's algorithm with priority queue",
            "Tarjan's strongly connected components"
        ],
        "correct": 1,
        "explanation": "Floyd-Warshall with path compression efficiently calculates transitive sharing relationships in O(n³) time complexity with a single SOQL query."
    },
    {
        "question": "What is the most secure implementation for field-level encryption when integrating with external payment systems?",
        "options": [
            "Platform encryption with tenant-specific keys",
            "AES-256 with HSM-managed keys",
            "Custom Crypto class implementation",
            "Tokenization with PCI-compliant vault"
        ],
        "correct": 3,
        "explanation": "Tokenization completely removes sensitive payment data from your system while maintaining referential integrity through tokens."
    },
    {
        "question": "Which pattern ensures atomicity for complex multi-object transactions spanning multiple async operations?",
        "options": [
            "Saga pattern with compensating transactions",
            "Two-phase commit protocol",
            "Transactional outbox pattern",
            "Event sourcing with CQRS"
        ],
        "correct": 0,
        "explanation": "The Saga pattern maintains data consistency across distributed transactions by implementing compensating actions for rollback scenarios."
    },
    {
        "question": "What is the optimal approach for implementing real-time, multi-org data aggregation with conflict resolution?",
        "options": [
            "Change Data Capture with centralized processor",
            "CRDTs (Conflict-Free Replicated Data Types)",
            "Operational transformation with version vectors",
            "Centralized materialized view with ETL"
        ],
        "correct": 1,
        "explanation": "CRDTs provide mathematically proven conflict resolution for distributed data without coordination overhead."
    },
    {
        "question": "Which caching strategy minimizes platform cache usage while maintaining sub-second response times for complex calculations?",
        "options": [
            "Layered caching with partial result invalidation",
            "Memoization with LRU eviction",
            "Write-through cache with batch invalidation",
            "On-demand computation with lazy loading"
        ],
        "correct": 1,
        "explanation": "Memoization caches only specific computation results, optimizing both performance and cache consumption."
    },
    {
        "question": "What is the most efficient way to implement a graph traversal algorithm in Apex with minimal heap usage?",
        "options": [
            "Iterative DFS with custom stack implementation",
            "Recursive DFS with tail-call optimization",
            "BFS with queue and visited set optimization",
            "Adjacency list with lazy loading"
        ],
        "correct": 0,
        "explanation": "Iterative DFS avoids recursion depth limits and allows precise control over heap usage through manual stack management."
    },
    {
        "question": "Which architecture pattern best addresses governor limits when processing complex financial transactions?",
        "options": [
            "Event-driven architecture with Platform Events",
            "Saga pattern with compensating transactions",
            "CQRS with separate read/write models",
            "Transaction outbox pattern"
        ],
        "correct": 1,
        "explanation": "The Saga pattern breaks complex transactions into manageable steps while maintaining data consistency through compensation."
    },
    {
        "question": "What is the optimal strategy for implementing a real-time, multi-object transaction rollback mechanism?",
        "options": [
            "Composite API with allOrNone flag",
            "Database.Savepoint with nested transaction control",
            "Custom transaction log with compensating actions",
            "Platform Events with transaction state tracking"
        ],
        "correct": 2,
        "explanation": "A custom transaction log provides the most robust rollback capability across complex multi-object transactions."
    },
    {
        "question": "Which approach provides the most scalable solution for implementing complex business rules across multiple orgs?",
        "options": [
            "Custom metadata types with packaged rule definitions",
            "External rules engine with API integration",
            "Platform cache with rule versioning",
            "Hierarchical custom settings with override capability"
        ],
        "correct": 1,
        "explanation": "An external rules engine centralizes complex logic while allowing org-specific variations through API configurations."
    },
    {
        "question": "What is the most secure pattern for implementing row-level security in a multi-org hub-and-spoke model?",
        "options": [
            "Centralized security service with org-specific policies",
            "Shared permission sets with dynamic group assignment",
            "Data virtualization layer with security predicates",
            "Hierarchical sharing with inherited access rules"
        ],
        "correct": 2,
        "explanation": "A virtualization layer with security predicates provides consistent access control across distributed data sources."
    },
    {
        "question": "Which compliance strategy best addresses GDPR right-to-be-forgotten requirements in complex data landscapes?",
        "options": [
            "Automated data erasure procedures with dependency mapping",
            "Pseudonymization with reversible encryption",
            "Data retention policies with automated expiration",
            "Isolated storage with cryptographic shredding"
        ],
        "correct": 0,
        "explanation": "Automated erasure with dependency mapping ensures complete compliance by handling related records across objects."
    },
    {
        "question": "What is the most secure approach for implementing MFA in legacy authentication scenarios?",
        "options": [
            "Custom authentication provider with step-up verification",
            "Proxy service with header-based MFA injection",
            "Session upgrade with reauthentication challenge",
            "Perimeter security with conditional access policies"
        ],
        "correct": 1,
        "explanation": "A proxy service can enforce MFA without modifying legacy systems by injecting verification headers."
    },
    {
        "question": "Which pattern provides the most reliable event-driven integration with external ERP systems?",
        "options": [
            "Change Data Capture with middleware transformation",
            "Idempotent receiver with transactional outbox",
            "Enterprise service bus with canonical data model",
            "Event-carried state transfer with durable subscriptions"
        ],
        "correct": 1,
        "explanation": "Idempotent receiver pattern ensures exactly-once processing despite network or system failures."
    },
    {
        "question": "What is the optimal architecture for real-time bi-directional sync with external databases?",
        "options": [
            "Change Data Capture with conflict resolution",
            "Dual-write pattern with compensating transactions",
            "Event sourcing with materialized views",
            "Transaction log tailing with change application"
        ],
        "correct": 0,
        "explanation": "CDC provides low-impact, high-performance replication with built-in conflict handling."
    },
    {
        "question": "Which approach minimizes latency in global API integrations while maintaining data consistency?",
        "options": [
            "Edge caching with TTL-based invalidation",
            "Read replicas with eventual consistency",
            "Global load balancing with sticky sessions",
            "CRDTs with conflict-free replicated data types"
        ],
        "correct": 3,
        "explanation": "CRDTs mathematically guarantee consistency while allowing low-latency global operations."
    },
    {
        "question": "What is the most resilient pattern for handling third-party API rate limits?",
        "options": [
            "Exponential backoff with jitter",
            "Request coalescing with memoization",
            "Token bucket rate limiting",
            "Circuit breaker with fallback cache"
        ],
        "correct": 2,
        "explanation": "Token bucket algorithm precisely controls request rates while maximizing throughput."
    },
    {
        "question": "Which architecture best supports zero-downtime migrations for complex integration landscapes?",
        "options": [
            "Blue-green deployment with traffic mirroring",
            "Canary releases with feature flags",
            "Strangler pattern with incremental cutover",
            "Parallel run with differential reconciliation"
        ],
        "correct": 3,
        "explanation": "Parallel running with reconciliation provides the safest migration path for critical integrations."
    },
    {
        "question": "What is the most efficient way to implement a concurrent processing queue in Apex?",
        "options": [
            "Queueable chaining with state persistence",
            "Batch Apex with scope size 1",
            "Platform Events with ordered delivery",
            "Custom priority queue with transaction control"
        ],
        "correct": 0,
        "explanation": "Queueable chaining provides the most governor-friendly approach for concurrent processing."
    },
    {
        "question": "Which pattern provides the best separation of concerns for complex trigger architectures?",
        "options": [
            "Command pattern with invoker/dispatcher",
            "Domain-driven design with aggregate roots",
            "Event-carried state transfer",
            "Hexagonal architecture with ports/adapters"
        ],
        "correct": 1,
        "explanation": "Domain-driven design aligns trigger logic with business domain boundaries for optimal maintainability."
    },
    
    // Process Automation & Logic - Advanced (17 questions)
    {
        "question": "What is the most scalable approach for implementing a complex approval process with dynamic parallel approvers?",
        "options": [
            "Multiple approval processes with entry criteria",
            "Single process with complex approval chains",
            "Custom Apex approval processor",
            "Flow with dynamic subprocesses"
        ],
        "correct": 2,
        "explanation": "Custom Apex provides the flexibility needed for dynamic parallel approval routing at scale."
    },
    {
        "question": "Which Flow design pattern best handles complex error recovery with transaction isolation?",
        "options": [
            "Fault paths with compensation actions",
            "Subflows with error boundary components",
            "Platform Events for error propagation",
            "Custom error handling Apex actions"
        ],
        "correct": 0,
        "explanation": "Fault paths with compensation actions provide atomic error recovery while maintaining data consistency."
    },
    {
        "question": "What is the most efficient way to process 100K+ records in an automation sequence?",
        "options": [
            "Flow with bulkified operations",
            "Batch Apex with chained Queueables",
            "Platform Events with async subscribers",
            "Change Data Capture with triggers"
        ],
        "correct": 1,
        "explanation": "Batch Apex with Queueable chaining provides optimal governor limit usage for large datasets."
    },
    {
        "question": "Which automation tool provides the best performance for complex multi-object transactions?",
        "options": [
            "Process Builder with bulkified actions",
            "Flow with transaction control",
            "Apex triggers with state management",
            "Workflow rules with field updates"
        ],
        "correct": 2,
        "explanation": "Apex triggers offer the most control over complex transaction boundaries and state management."
    },
    {
        "question": "What is the impact of complex cross-object formulas on automation performance?",
        "options": [
            "Linear performance degradation",
            "Exponential performance impact",
            "No impact if properly indexed",
            "Only affects report generation"
        ],
        "correct": 1,
        "explanation": "Cross-object formulas can cause exponential performance degradation in automation processes."
    },
    {
        "question": "Which approach is best for implementing complex business rules with external system dependencies?",
        "options": [
            "Process Builder with callout actions",
            "Flow with external service components",
            "Apex with circuit breaker pattern",
            "Platform Events with async processing"
        ],
        "correct": 2,
        "explanation": "Circuit breaker pattern in Apex provides robust handling of external system failures."
    },
    {
        "question": "What is the recommended pattern for preventing recursive automation in complex workflows?",
        "options": [
            "Static recursion counters",
            "Hierarchical custom settings",
            "Transaction isolation flags",
            "Combination of static flags and transaction context"
        ],
        "correct": 3,
        "explanation": "A multi-layered approach provides comprehensive protection against recursion."
    },
    {
        "question": "Which Flow variable scope is most appropriate for sharing data across async boundaries?",
        "options": [
            "Local variables with serialization",
            "Platform Events with durable storage",
            "Custom metadata types",
            "Static resources"
        ],
        "correct": 1,
        "explanation": "Platform Events persist across async boundaries and provide durable messaging."
    },
    {
        "question": "What is the primary limitation of scheduled flows compared to Batch Apex?",
        "options": [
            "Lack of error handling capabilities",
            "No transaction control",
            "Cannot process large datasets",
            "All of the above"
        ],
        "correct": 2,
        "explanation": "Scheduled flows lack the chunking capabilities needed for large dataset processing."
    },
    {
        "question": "Which approach provides the best audit trail for complex automation processes?",
        "options": [
            "Debug logs with filtering",
            "Custom transaction logging objects",
            "Platform Events with audit subscribers",
            "Combination of B and C"
        ],
        "correct": 3,
        "explanation": "Comprehensive auditing requires both persistent storage and real-time monitoring."
    },
    {
        "question": "What is the recommended pattern for handling external system integration in automation?",
        "options": [
            "Direct callouts from Process Builder",
            "Async processing with retry logic",
            "Synchronous integration with timeouts",
            "Platform Events for all integrations"
        ],
        "explanation": "Async processing with retry logic provides the most resilient integration pattern.",
        "correct": 1
    },
    {
        "question": "Which automation tool provides the best debugging capabilities for complex logic?",
        "options": [
            "Process Builder debug logs",
            "Flow debug with variable inspection",
            "Apex debug statements",
            "Transaction log analysis"
        ],
        "correct": 1,
        "explanation": "Flow debug provides the most comprehensive visualization of complex automation logic."
    },
    {
        "question": "What is the impact of automation on record locking in high-concurrency scenarios?",
        "options": [
            "No impact on locking behavior",
            "Can cause deadlocks in complex processes",
            "Improves locking efficiency",
            "Only affects reports"
        ],
        "correct": 1,
        "explanation": "Complex automation can exacerbate locking issues in high-concurrency environments."
    },
    {
        "question": "Which approach is most effective for testing complex automation scenarios?",
        "options": [
            "Unit tests for individual components",
            "Integration tests covering end-to-end flows",
            "Both unit and integration testing",
            "Manual testing with production data"
        ],
        "correct": 2,
        "explanation": "Comprehensive testing requires both component-level and end-to-end validation."
    },
    {
        "question": "What is the recommended approach for migrating complex Process Builder to Flow?",
        "options": [
            "Direct conversion using tools",
            "Complete redesign with Flow best practices",
            "Gradual migration with parallel testing",
            "Maintain existing Process Builder"
        ],
        "correct": 2,
        "explanation": "Gradual migration reduces risk while allowing optimization opportunities."
    },
    {
        "question": "In a complex approval process involving multiple levels and dynamic approvers, what is the most scalable and maintainable Flow strategy?",
        "options": [
            "Use multiple record-triggered Flows with hardcoded approver IDs",
            "Implement a single autolaunched Flow with invocable Apex for logic",
            "Create a dynamic approval matrix using custom metadata and decision elements",
            "Use multiple Flows for each approval step with static assignments"
        ],
        "correct": 2,
        "explanation": "Custom metadata allows for dynamic, configurable logic without modifying the Flow, improving scalability and maintainability."
    },
    {
        "question": "How can you ensure fault-tolerant error handling in a Flow that performs DML operations on related objects?",
        "options": [
            "Wrap each DML in a separate Flow",
            "Use Apex invocable methods to manage errors centrally",
            "Use Fault paths on each DML element and assign errors to variables",
            "Add a single fault path at the end of the Flow to catch all exceptions"
        ],
        "correct": 2,
        "explanation": "Using Fault paths with variables allows handling errors locally and providing meaningful user feedback or automated fallback logic."
    },
    // User Interface - Advanced (14 questions)
    {
        "question": "Which caching strategy provides the best performance for LWC with real-time data requirements?",
        "options": [
            "Browser cache with TTL",
            "@wire with refreshApex",
            "Platform cache with invalidation policy",
            "Client-side storage with observables"
        ],
        "correct": 2,
        "explanation": "Platform cache with proper invalidation balances performance and data freshness."
    },
    {
        "question": "What is the most efficient way to display 10K+ records in a Lightning component?",
        "options": [
            "Virtual scrolling with windowing",
            "Pagination with server-side filtering",
            "Infinite scroll with lazy loading",
            "Combination of A and B"
        ],
        "correct": 3,
        "explanation": "Virtual scrolling and pagination together provide optimal performance for large datasets."
    },
    {
        "question": "Which approach provides the best UX for complex multi-step forms?",
        "options": [
            "Single-page form with sections",
            "Wizard pattern with progress tracking",
            "Modal dialog sequence",
            "Conditional rendering based on inputs"
        ],
        "correct": 1,
        "explanation": "Wizard pattern reduces cognitive load for complex form completion."
    },
    {
        "question": "What is the recommended pattern for state management in enterprise LWCs?",
        "options": [
            "Component-level state only",
            "Lightning Message Service",
            "Redux pattern with store",
            "Hybrid approach combining local and shared state"
        ],
        "correct": 3,
        "explanation": "A balanced approach provides optimal flexibility and performance."
    },
    {
        "question": "Which security consideration is most critical for LWC input handling?",
        "options": [
            "XSS prevention with output encoding",
            "CSRF token validation",
            "Content Security Policy",
            "All of the above"
        ],
        "correct": 3,
        "explanation": "Comprehensive security requires multiple defensive layers."
    },
    {
        "question": "What is the most effective way to optimize LWC rendering performance?",
        "options": [
            "Minimize DOM updates with reactive properties",
            "Use static getters for template variables",
            "Implement shouldUpdate lifecycle hook",
            "All optimization techniques combined"
        ],
        "correct": 3,
        "explanation": "Optimal rendering requires multiple complementary techniques."
    },
    {
        "question": "Which approach provides the best accessibility in complex LWCs?",
        "options": [
            "Semantic HTML with ARIA",
            "Keyboard navigation support",
            "Screen reader testing",
            "Comprehensive accessibility audit"
        ],
        "correct": 3,
        "explanation": "True accessibility requires validation through rigorous testing."
    },
    {
        "question": "What is the recommended pattern for error handling in distributed LWCs?",
        "options": [
            "Component-level error boundaries",
            "Centralized error service",
            "Toast messages for all errors",
            "Layered error handling strategy"
        ],
        "correct": 3,
        "explanation": "Different error types require different handling approaches."
    },
    {
        "question": "Which testing approach is most effective for LWCs?",
        "options": [
            "Unit tests with Jest",
            "Integration tests with wire mocks",
            "End-to-end UI testing",
            "Comprehensive test pyramid"
        ],
        "correct": 3,
        "explanation": "Quality assurance requires testing at all levels."
    },
    {
        "question": "What is the impact of Lightning Locker on third-party library integration?",
        "options": [
            "No impact on compatible libraries",
            "Requires CSP-compliant libraries",
            "Blocks DOM-accessing libraries",
            "All of the above"
        ],
        "correct": 3,
        "explanation": "Locker Service imposes multiple security constraints."
    },
    {
        "question": "Which pattern best handles complex component composition?",
        "options": [
            "Container-presenter pattern",
            "Renderless component pattern",
            "Higher-order components",
            "Context API with providers"
        ],
        "correct": 1,
        "explanation": "Renderless components maximize logic reuse."
    },
    {
        "question": "What is the most efficient way to handle real-time updates in LWCs?",
        "options": [
            "Polling with setTimeout",
            "Platform Events with CometD",
            "Change Data Capture",
            "UI API with refreshView"
        ],
        "correct": 1,
        "explanation": "Platform Events provide true real-time push notifications."
    },
    {
        "question": "Which approach provides the best mobile responsiveness?",
        "options": [
            "SLDS responsive utilities",
            "CSS media queries",
            "Conditional rendering",
            "Comprehensive responsive design"
        ],
        "correct": 3,
        "explanation": "Mobile optimization requires multiple techniques."
    },
    {
        "question": "What is the recommended approach for complex LWC business logic?",
        "options": [
            "Client-side JavaScript",
            "Apex controllers",
            "Lightning Flows",
            "Right-tool-for-the-job approach"
        ],
        "correct": 3,
        "explanation": "Logic should be distributed appropriately."
    },
    
    // Testing & Deployment - Advanced (10 questions)
    {
        "question": "Which testing strategy provides the most coverage for enterprise applications?",
        "options": [
            "Unit tests with high coverage",
            "Integration tests with real data",
            "User acceptance testing",
            "Comprehensive test pyramid"
        ],
        "correct": 3,
        "explanation": "Enterprise quality requires testing at all levels."
    },
    {
        "question": "What is the most effective test data strategy?",
        "options": [
            "Test data factories",
            "@TestSetup methods",
            "Mock responses",
            "Combined approach"
        ],
        "correct": 3,
        "explanation": "Different test types require different data strategies."
    },
    {
        "question": "Which deployment strategy minimizes risk?",
        "options": [
            "Blue-green deployment",
            "Canary releases",
            "Feature flags",
            "Combined risk mitigation"
        ],
        "correct": 3,
        "explanation": "Risk reduction requires multiple safeguards."
    },
    {
        "question": "What is the best approach for testing async processes?",
        "options": [
            "Test.startTest/stopTest",
            "Mock Queueable chains",
            "Integration tests",
            "Comprehensive async testing"
        ],
        "correct": 3,
        "explanation": "Async testing requires multiple techniques."
    },
    {
        "question": "Which CI/CD practice provides most value?",
        "options": [
            "Automated testing",
            "Static analysis",
            "Deployment validation",
            "Full pipeline automation"
        ],
        "correct": 3,
        "explanation": "CI/CD value comes from complete automation."
    },
    {
        "question": "What is the best way to handle environment configs?",
        "options": [
            "Custom metadata",
            "Named credentials",
            "Hierarchical settings",
            "Comprehensive config management"
        ],
        "correct": 3,
        "explanation": "Configuration requires a systematic approach."
    },
    {
        "question": "Which approach provides best rollback capability?",
        "options": [
            "Version control tags",
            "Deployment packages",
            "Feature toggles",
            "Multi-layered rollback"
        ],
        "correct": 3,
        "explanation": "Effective rollback requires multiple strategies."
    },
    {
        "question": "What is the best way to test governor limits?",
        "options": [
            "Boundary value tests",
            "Load testing",
            "Performance monitoring",
            "Comprehensive limit testing"
        ],
        "correct": 3,
        "explanation": "Limit testing requires multiple approaches."
    },
    {
        "question": "Which deployment monitoring is most effective?",
        "options": [
            "Real-time status",
            "Post-deploy validation",
            "Performance monitoring",
            "Full observability"
        ],
        "correct": 3,
        "explanation": "Effective monitoring requires complete visibility."
    },
    {
        "question": "What is the best technical debt strategy?",
        "options": [
            "Regular refactoring",
            "Automated code analysis",
            "Debt tracking",
            "Comprehensive management"
        ],
        "correct": 3,
        "explanation": "Debt management requires systematic approach."
    }
];
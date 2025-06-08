var questions = [
    // Developer Fundamentals - Expert 19 questions
    {
        "question": "In a multi-tenant architecture, what is the primary challenge when implementing custom indexing strategies?",
        "options": [
            "Index fragmentation across tenants",
            "Selective query optimization with tenant isolation",
            "Custom index maintenance overhead",
            "Cross-tenant data leakage prevention"
        ],
        "correct": 1,
        "explanation": "Selective query optimization while maintaining tenant isolation is the primary challenge in multi-tenant indexing."
    },
    {
        "question": "Which approach provides optimal performance for complex hierarchical data processing with deep nesting?",
        "options": [
            "Recursive Common Table Expressions (CTE)",
            "Materialized path pattern with custom indexing",
            "Adjacency list with level-based processing",
            "Nested set model with interval arithmetic"
        ],
        "correct": 1,
        "explanation": "Materialized path pattern with custom indexing provides optimal performance for deep hierarchical structures."
    },
    {
        "question": "What is the most critical consideration when implementing custom metadata-driven architecture?",
        "options": [
            "Metadata versioning and migration strategies",
            "Runtime performance impact of dynamic logic",
            "Security implications of configurable behavior",
            "All considerations require careful architectural planning"
        ],
        "correct": 3,
        "explanation": "Metadata-driven architecture requires comprehensive planning for versioning, performance, and security."
    },
    {
        "question": "Which design pattern best addresses the challenge of maintaining transaction integrity across multiple external systems?",
        "options": [
            "Two-phase commit protocol",
            "Saga pattern with compensating transactions",
            "Event sourcing with eventual consistency",
            "Distributed transaction coordinator"
        ],
        "correct": 1,
        "explanation": "Saga pattern with compensating transactions is most practical for distributed transaction management."
    },
    {
        "question": "What is the optimal strategy for handling platform event ordering guarantees in high-volume scenarios?",
        "options": [
            "Single partition with sequential processing",
            "Multiple partitions with correlation IDs",
            "Event sourcing with sequence numbers",
            "Hybrid approach with partition strategy and sequence validation"
        ],
        "correct": 3,
        "explanation": "Hybrid approach combining partition strategy with sequence validation provides optimal ordering guarantees."
    },
    {
        "question": "Which approach provides the most robust solution for handling intermittent external service failures?",
        "options": [
            "Exponential backoff with jitter",
            "Circuit breaker pattern with fallback",
            "Retry with dead letter queue",
            "Comprehensive resilience strategy combining all patterns"
        ],
        "correct": 3,
        "explanation": "Robust external service integration requires exponential backoff, circuit breakers, and dead letter queues."
    },
    {
        "question": "What is the primary architectural consideration for implementing event-driven microservices on Salesforce?",
        "options": [
            "Event schema evolution and compatibility",
            "Service boundary definition and coupling",
            "Distributed data consistency management",
            "Comprehensive event-driven architecture strategy"
        ],
        "correct": 3,
        "explanation": "Event-driven microservices require careful consideration of schemas, boundaries, and data consistency."
    },
    {
        "question": "Which caching strategy provides optimal performance for frequently changing, user-specific data?",
        "options": [
            "User session-based caching with TTL",
            "Invalidation-based caching with change tracking",
            "Predictive caching with machine learning",
            "Multi-tier caching with intelligent invalidation"
        ],
        "correct": 3,
        "explanation": "Multi-tier caching with intelligent invalidation provides optimal performance for dynamic user data."
    },
    {
        "question": "What is the most effective approach for implementing complex business rule engines with high performance requirements?",
        "options": [
            "Compiled rule expressions with caching",
            "Decision trees with optimized traversal",
            "Rule-based inference engines",
            "Hybrid architecture combining multiple rule evaluation strategies"
        ],
        "correct": 3,
        "explanation": "High-performance rule engines require hybrid architectures combining multiple evaluation strategies."
    },
    {
        "question": "Which approach provides the best balance between flexibility and performance for dynamic query generation?",
        "options": [
            "Query builder pattern with caching",
            "Template-based queries with parameterization",
            "Dynamic SOQL with security enforcement",
            "Adaptive query strategy based on usage patterns"
        ],
        "correct": 3,
        "explanation": "Adaptive query strategies that adjust based on usage patterns provide optimal flexibility and performance."
    },
    {
        "question": "What is the primary challenge when implementing distributed locks in a multi-org environment?",
        "options": [
            "Lock timeout and deadlock prevention",
            "Cross-org communication latency",
            "Consistency guarantees across network partitions",
            "Comprehensive distributed synchronization strategy"
        ],
        "correct": 3,
        "explanation": "Distributed locks require addressing timeouts, latency, and consistency in a comprehensive strategy."
    },
    {
        "question": "Which approach provides the most efficient solution for processing large-scale data transformations with complex business logic?",
        "options": [
            "Parallel processing with work partitioning",
            "Pipeline architecture with streaming",
            "MapReduce pattern with aggregation",
            "Hybrid processing architecture optimized for specific data patterns"
        ],
        "correct": 3,
        "explanation": "Optimal data transformation requires hybrid architectures adapted to specific data and logic patterns."
    },
    {
        "question": "What is the most critical consideration for implementing custom encryption in Salesforce applications?",
        "options": [
            "Key management and rotation strategies",
            "Performance impact of encryption operations",
            "Compliance with data protection regulations",
            "Holistic security architecture including all encryption aspects"
        ],
        "correct": 3,
        "explanation": "Custom encryption requires comprehensive security architecture addressing keys, performance, and compliance."
    },
    {
        "question": "Which design pattern best addresses the challenge of maintaining data consistency in eventually consistent systems?",
        "options": [
            "CQRS with event sourcing",
            "Saga pattern with compensation",
            "Two-phase commit with rollback",
            "Multi-pattern approach based on consistency requirements"
        ],
        "correct": 3,
        "explanation": "Data consistency in distributed systems requires selecting appropriate patterns based on specific requirements."
    },
    {
        "question": "What is the optimal approach for implementing real-time analytics on high-volume transactional data?",
        "options": [
            "Stream processing with micro-batching",
            "Lambda architecture with batch and stream layers",
            "Kappa architecture with unified streaming",
            "Adaptive architecture based on data velocity and latency requirements"
        ],
        "correct": 3,
        "explanation": "Real-time analytics requires adaptive architectures that respond to specific velocity and latency needs."
    },
    {
        "question": "Which approach provides the most robust solution for handling schema evolution in event-driven architectures?",
        "options": [
            "Schema registry with compatibility rules",
            "Versioned event contracts with migration",
            "Flexible schema with backward compatibility",
            "Comprehensive schema governance strategy"
        ],
        "correct": 3,
        "explanation": "Schema evolution requires comprehensive governance including registries, versioning, and compatibility strategies."
    },
    {
        "question": "What is the primary architectural consideration for implementing multi-region disaster recovery?",
        "options": [
            "Data replication strategies and consistency",
            "Failover mechanisms and recovery time objectives",
            "Network partitioning and split-brain scenarios",
            "Comprehensive disaster recovery architecture"
        ],
        "correct": 3,
        "explanation": "Multi-region disaster recovery requires comprehensive architecture addressing replication, failover, and partitioning."
    },
    {
        "question": "Which approach provides optimal performance for complex graph traversal operations on large datasets?",
        "options": [
            "Adjacency list with recursive queries",
            "Graph database with specialized algorithms",
            "Materialized graph views with caching",
            "Hybrid graph processing optimized for specific traversal patterns"
        ],
        "correct": 3,
        "explanation": "Optimal graph traversal requires hybrid approaches optimized for specific graph structures and access patterns."
    },
    {
        "question": "What is the most effective strategy for implementing zero-downtime deployments in complex enterprise environments?",
        "options": [
            "Blue-green deployment with database migration",
            "Rolling deployment with feature toggles",
            "Canary deployment with automated rollback",
            "Comprehensive deployment strategy combining multiple approaches"
        ],
        "correct": 3,
        "explanation": "Zero-downtime deployments in complex environments require combining multiple deployment strategies."
    },

    // Process Automation & Logic - Expert 17 questions
    {
        "question": "What is the optimal approach for implementing complex state machines with multiple parallel workflows?",
        "options": [
            "Nested state management with synchronization points",
            "Actor model with message passing",
            "Workflow orchestration with compensation logic",
            "Comprehensive state management architecture"
        ],
        "correct": 3,
        "explanation": "Complex state machines require comprehensive architecture addressing nested states, parallelism, and synchronization."
    },
    {
        "question": "Which pattern provides the most robust solution for handling long-running business processes with human intervention?",
        "options": [
            "Saga pattern with human task management",
            "Workflow orchestration with pause/resume",
            "Event-driven process management",
            "Hybrid process architecture with multiple interaction patterns"
        ],
        "correct": 3,
        "explanation": "Long-running processes with human intervention require hybrid architectures combining multiple patterns."
    },
    {
        "question": "What is the primary challenge when implementing real-time business rule evaluation at scale?",
        "options": [
            "Rule compilation and optimization",
            "Concurrent rule execution with consistency",
            "Rule versioning and hot deployment",
            "Comprehensive rule engine architecture"
        ],
        "correct": 3,
        "explanation": "Scalable rule evaluation requires addressing compilation, concurrency, versioning, and deployment challenges."
    },
    {
        "question": "Which approach provides optimal performance for complex approval workflows with dynamic routing?",
        "options": [
            "Rule-based routing with caching",
            "Graph-based workflow with optimization",
            "Machine learning-driven routing decisions",
            "Adaptive routing architecture with multiple strategies"
        ],
        "correct": 3,
        "explanation": "Complex approval workflows require adaptive architectures combining rule-based, graph-based, and ML approaches."
    },
    {
        "question": "What is the most effective strategy for implementing distributed workflow coordination?",
        "options": [
            "Centralized orchestration with distributed execution",
            "Peer-to-peer coordination with consensus algorithms",
            "Event-driven choreography with eventual consistency",
            "Hybrid coordination strategy based on workflow characteristics"
        ],
        "correct": 3,
        "explanation": "Distributed workflow coordination requires hybrid strategies adapted to specific workflow characteristics."
    },
    {
        "question": "Which design pattern best addresses the challenge of maintaining workflow state consistency across system failures?",
        "options": [
            "Write-ahead logging with checkpointing",
            "Event sourcing with snapshot management",
            "Distributed transaction with compensation",
            "Comprehensive fault tolerance architecture"
        ],
        "correct": 3,
        "explanation": "Workflow state consistency requires comprehensive fault tolerance combining logging, events, and transactions."
    },
    {
        "question": "What is the optimal approach for implementing complex business process optimization?",
        "options": [
            "Static process analysis with predetermined optimization",
            "Dynamic process adaptation based on performance metrics",
            "Machine learning-driven process improvement",
            "Comprehensive process optimization framework"
        ],
        "correct": 3,
        "explanation": "Business process optimization requires comprehensive frameworks combining static analysis, dynamic adaptation, and ML."
    },
    {
        "question": "Which approach provides the most robust solution for handling process exceptions and error recovery?",
        "options": [
            "Exception handling with retry logic",
            "Compensation patterns with rollback",
            "Dead letter processing with manual intervention",
            "Comprehensive error handling architecture"
        ],
        "correct": 3,
        "explanation": "Robust error handling requires comprehensive architecture combining exceptions, compensation, and dead letter processing."
    },
    {
        "question": "What is the primary consideration for implementing cross-system process integration?",
        "options": [
            "Data format transformation and validation",
            "System availability and failure handling",
            "Security and authentication across boundaries",
            "Comprehensive integration architecture"
        ],
        "correct": 3,
        "explanation": "Cross-system integration requires comprehensive architecture addressing data, availability, and security concerns."
    },
    {
        "question": "Which pattern provides optimal performance for high-volume process automation?",
        "options": [
            "Batch processing with parallel execution",
            "Stream processing with micro-batching",
            "Event-driven processing with load balancing",
            "Adaptive processing architecture based on volume patterns"
        ],
        "correct": 3,
        "explanation": "High-volume automation requires adaptive architectures that respond to specific volume and latency patterns."
    },
    {
        "question": "What is the most effective approach for implementing process analytics and monitoring?",
        "options": [
            "Real-time metrics collection with dashboards",
            "Historical analysis with predictive modeling",
            "Anomaly detection with automated alerting",
            "Comprehensive process intelligence platform"
        ],
        "correct": 3,
        "explanation": "Process analytics requires comprehensive platforms combining real-time metrics, historical analysis, and anomaly detection."
    },
    {
        "question": "Which approach provides the best solution for implementing complex process versioning?",
        "options": [
            "Version control with backward compatibility",
            "Parallel execution of multiple versions",
            "Dynamic migration with state preservation",
            "Comprehensive versioning strategy"
        ],
        "correct": 3,
        "explanation": "Process versioning requires comprehensive strategies addressing compatibility, parallel execution, and migration."
    },
    {
        "question": "What is the optimal strategy for implementing process security in multi-tenant environments?",
        "options": [
            "Role-based access control with fine-grained permissions",
            "Tenant isolation with
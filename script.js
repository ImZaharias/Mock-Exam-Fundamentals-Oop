let currentQuestion = 0;
let answers = {};
let timeLeft = 105 * 60; // 105 minutes in seconds
let timerInterval;

// Category definitions with question ranges
const categories = {
    'Developer Fundamentals': { 
        range: [0, 18], // 19 questions (0-18)
        total: 19,
        color: '#FF6B6B'
    },
    'Process Automation and Logic': { 
        range: [19, 35], // 17 questions (19-35)
        total: 17,
        color: '#4ECDC4'
    },
    'User Interface': { 
        range: [36, 49], // 14 questions (36-49)
        total: 14,
        color: '#45B7D1'
    },
    'Testing, Debugging, and Deployment': { 
        range: [50, 60], // 10 questions (50-60)
        total: 10,
        color: '#96CEB4'
    }
};

function initializeExam() {
    startTimer();
    showQuestion(0);
    updateProgress();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 300) { // 5 minutes warning
            document.getElementById('timer').classList.add('timer-warning');
        }
        
        if (timeLeft <= 0) {
            submitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function getCategoryForQuestion(questionIndex) {
    for (const [categoryName, categoryInfo] of Object.entries(categories)) {
        if (questionIndex >= categoryInfo.range[0] && questionIndex <= categoryInfo.range[1]) {
            return categoryName;
        }
    }
    return 'Unknown';
}

function showQuestion(index) {
    const examBody = document.getElementById('examBody');
    const question = questions[index];
    const category = getCategoryForQuestion(index);
    
    examBody.innerHTML = `
        <div class="question-container active">
            <div class="question-header">
                <div class="question-number">Question ${index + 1} of ${questions.length}</div>
                <div class="category-badge" style="background-color: ${categories[category]?.color || '#ccc'}">
                    ${category}
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${((index + 1) / questions.length) * 100}%"></div>
                </div>
                <div>${Object.keys(answers).length} Answered</div>
            </div>
            
            <div class="question-text">${question.question}</div>
            
            <ul class="options">
                ${question.options.map((option, i) => `
                    <li class="option ${answers[index] === i ? 'selected' : ''}" 
                        onclick="selectAnswer(${index}, ${i})">
                        ${String.fromCharCode(65 + i)}. ${option}
                    </li>
                `).join('')}
            </ul>
            
            <div class="navigation">
                <button class="nav-btn prev-btn" onclick="previousQuestion()" 
                        ${index === 0 ? 'disabled' : ''}>
                    Previous
                </button>
                
                <div>
                    ${index < questions.length - 1 ? 
                        `<button class="nav-btn next-btn" onclick="nextQuestion()">Next</button>` :
                        `<button class="nav-btn submit-btn" onclick="submitExam()">Submit Exam</button>`
                    }
                </div>
            </div>
        </div>
    `;
}

function selectAnswer(questionIndex, answerIndex) {
    answers[questionIndex] = answerIndex;
    
    // Update the visual selection
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelectorAll('.option')[answerIndex].classList.add('selected');
    
    // Update answered count
    document.querySelector('.question-header div:last-child').textContent = 
        `${Object.keys(answers).length} Answered`;
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.querySelector('.progress-bar').style.width = progress + '%';
}

function calculateCategoryResults() {
    const categoryResults = {};
    
    // Initialize category results
    Object.keys(categories).forEach(categoryName => {
        categoryResults[categoryName] = {
            correct: 0,
            total: categories[categoryName].total,
            percentage: 0,
            color: categories[categoryName].color
        };
    });
    
    // Calculate results for each category
    questions.forEach((question, index) => {
        const category = getCategoryForQuestion(index);
        const userAnswer = answers[index];
        const isCorrect = userAnswer === question.correct;
        
        if (isCorrect) {
            categoryResults[category].correct++;
        }
    });
    
    // Calculate percentages
    Object.keys(categoryResults).forEach(categoryName => {
        const result = categoryResults[categoryName];
        result.percentage = Math.round((result.correct / result.total) * 100);
    });
    
    return categoryResults;
}

function generateCategoryChart(categoryResults) {
    let chartHTML = '<div class="category-results">';
    chartHTML += '<h3>Performance by Category</h3>';
    
    Object.entries(categoryResults).forEach(([categoryName, result]) => {
        const isGood = result.percentage >= 68;
        chartHTML += `
            <div class="category-item">
                <div class="category-header">
                    <span class="category-name" style="color: ${result.color}">
                        ${categoryName}
                    </span>
                    <span class="category-score ${isGood ? 'good' : 'needs-work'}">
                        ${result.correct}/${result.total} (${result.percentage}%)
                    </span>
                </div>
                <div class="category-bar">
                    <div class="category-progress" style="width: ${result.percentage}%; background-color: ${result.color}"></div>
                </div>
            </div>
        `;
    });
    
    chartHTML += '</div>';
    return chartHTML;
}

function submitExam() {
    clearInterval(timerInterval);
    
    let correctAnswers = 0;
    let reviewHTML = '';
    
    questions.forEach((question, index) => {
        const userAnswer = answers[index];
        const isCorrect = userAnswer === question.correct;
        const category = getCategoryForQuestion(index);
        
        if (isCorrect) correctAnswers++;
        
        reviewHTML += `
            <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="review-header">
                    <strong>Q${index + 1}:</strong> 
                    <span class="category-tag" style="background-color: ${categories[category]?.color}">
                        ${category}
                    </span>
                    <span class="result-indicator">
                        ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                        ${userAnswer === undefined ? ' (Not answered)' : ''}
                    </span>
                </div>
                <div class="question-preview">${question.question}</div>
                <div class="question-preview">${question.explanation}</div>
                ${!isCorrect ? `<div class="correct-answer">Correct answer: ${String.fromCharCode(65 + question.correct)}</div>` : ''}
            </div>
        `;
    });
    
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    const passed = percentage >= 68; // Changed to 68%
    const categoryResults = calculateCategoryResults();
    
    document.getElementById('examBody').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    
    const scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.textContent = `${percentage}%`;
    scoreDisplay.className = `score ${
        percentage >= 80 ? 'excellent' : 
        percentage >= 68 ? 'good' : 'needs-work'
    }`;
    
    // Enhanced score message
    let performanceMessage = '';
    if (percentage >= 90) {
        performanceMessage = 'Outstanding! You have excellent knowledge across all areas.';
    } else if (percentage >= 80) {
        performanceMessage = 'Great job! You have strong understanding of the material.';
    } else if (percentage >= 68) {
        performanceMessage = 'Good work! You passed, but consider reviewing weaker areas.';
    } else {
        performanceMessage = 'Keep studying! Focus on the areas highlighted below.';
    }
    
    document.getElementById('scoreMessage').innerHTML = `
        <h2>${passed ? 'Congratulations! You Passed!' : 'Keep Studying!'}</h2>
        <p>You answered <strong>${correctAnswers} out of ${questions.length}</strong> questions correctly.</p>
        <p class="performance-message">${performanceMessage}</p>
        <p class="pass-requirement">
            ${passed ? 
                'You exceeded the 68% requirement for Platform Developer I certification!' : 
                'You need 68% to pass. Review the categories below and try again.'
            }
        </p>
        
        ${generateCategoryChart(categoryResults)}
    `;
    
    document.getElementById('questionReview').innerHTML = `
        <h3>Detailed Question Review</h3>
        ${reviewHTML}
    `;
}

// Initialize the exam when the page loads
window.onload = initializeExam;
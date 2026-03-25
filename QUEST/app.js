// Aplicación principal del test MF0954_2
class TestApplication {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.markedQuestions = [];
        this.testMode = 'test'; // 'test' o 'practice'
        this.testStarted = false;
        this.testCompleted = false;

        this.initializeElements();
        this.bindEvents();
        this.loadInitialState();
    }

    initializeElements() {
        // Botones principales
        this.startTestBtn = document.getElementById('startTest');
        this.reducedModeBtn = document.getElementById('reducedMode');
        this.practiceModeBtn = document.getElementById('practiceMode');
        this.customModeBtn = document.getElementById('customMode');

        // Interfaces
        this.testInterface = document.getElementById('testInterface');
        this.resultsInterface = document.getElementById('resultsInterface');
        this.reviewInterface = document.getElementById('reviewInterface');

        // Elementos del test
        this.currentQuestionSpan = document.getElementById('currentQuestion');
        this.totalQuestionsSpan = document.getElementById('totalQuestions');
        this.progressBar = document.getElementById('progressBar');
        this.questionText = document.getElementById('questionText');
        this.optionsContainer = document.getElementById('optionsContainer');

        // Botones de navegación
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.markBtn = document.getElementById('markBtn');

        // Elementos de resultados
        this.correctAnswersSpan = document.getElementById('correctAnswers');
        this.incorrectAnswersSpan = document.getElementById('incorrectAnswers');
        this.finalScoreSpan = document.getElementById('finalScore');

        // Botones de resultados
        this.reviewAnswersBtn = document.getElementById('reviewAnswers');
        this.restartTestBtn = document.getElementById('restartTest');
        this.backToResultsBtn = document.getElementById('backToResults');

        // Contenedores de revisión
        this.reviewContainer = document.getElementById('reviewContainer');
    }

    bindEvents() {
        this.startTestBtn.addEventListener('click', () => this.startTest('test'));
        this.reducedModeBtn.addEventListener('click', () => this.startTest('reduced'));
        this.practiceModeBtn.addEventListener('click', () => this.startTest('practice'));
        this.customModeBtn.addEventListener('click', () => this.showCustomModeModal());
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.markBtn.addEventListener('click', () => this.toggleMarkQuestion());
        this.reviewAnswersBtn.addEventListener('click', () => this.showReview());
        this.restartTestBtn.addEventListener('click', () => this.resetTest());
        this.backToResultsBtn.addEventListener('click', () => this.showResults());
    }

    loadInitialState() {
        // Cargar estado guardado si existe
        const savedState = localStorage.getItem('testState');
        if (savedState) {
            try {
                const state = JSON.parse(savedState);
                if (state.testStarted && !state.testCompleted) {
                    this.resumeTest(state);
                }
            } catch (e) {
                console.warn('Error al cargar el estado guardado:', e);
            }
        }
    }

    startTest(mode = 'test', customQuestions = null) {
        this.testMode = mode;
        this.testStarted = true;
        this.testCompleted = false;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.markedQuestions = [];

        // Cargar preguntas según el modo
        if (mode === 'test') {
            // Modo test completo: todas las preguntas
            this.questions = generateRandomTest(questionsDatabase.length);
        } else if (mode === 'reduced') {
            // Modo reducido: 100 preguntas aleatorias
            this.questions = generateRandomTest(100);
        } else if (mode === 'custom') {
            // Modo personalizado: número de preguntas definido por el usuario
            const numQuestions = customQuestions || 50;
            this.questions = generateRandomTest(Math.min(numQuestions, questionsDatabase.length));
        } else {
            // Modo práctica: 20 preguntas aleatorias
            this.questions = generateRandomTest(20);
        }

        // Inicializar respuestas del usuario
        this.userAnswers = new Array(this.questions.length).fill(null);

        // Mostrar interfaz del test
        this.showTestInterface();
        this.loadQuestion();
        this.saveState();

        // Animación de inicio
        anime({
            targets: this.testInterface,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 500,
            easing: 'easeOutQuad'
        });
    }

    showTestInterface() {
        this.testInterface.classList.remove('hidden');
        this.resultsInterface.classList.add('hidden');
        this.reviewInterface.classList.add('hidden');

        this.totalQuestionsSpan.textContent = this.questions.length;
        this.updateProgress();
    }

    loadQuestion() {
        const question = this.questions[this.currentQuestionIndex];

        // Ocultar el feedback de la pregunta anterior (modo práctica)
        this.hidePracticeFeedback();

        // Actualizar información de progreso
        this.currentQuestionSpan.textContent = this.currentQuestionIndex + 1;

        // Actualizar categoría de la pregunta
        const categoryDiv = document.getElementById('questionCategory');
        if (categoryDiv) {
            categoryDiv.textContent = question.category;
        }

        this.updateProgress();

        // Cargar texto de la pregunta
        this.questionText.textContent = question.question;

        // Limpiar opciones anteriores
        this.optionsContainer.innerHTML = '';

        // Crear opciones
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-button w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-indigo-500 transition-all duration-200';
            button.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
            button.addEventListener('click', () => this.selectOption(index));

            // Marcar opción seleccionada previamente
            if (this.userAnswers[this.currentQuestionIndex] === index) {
                button.classList.add('selected');
            }

            this.optionsContainer.appendChild(button);
        });

        // Actualizar botones de navegación
        this.updateNavigationButtons();

        // Actualizar botón de marcar
        this.updateMarkButton();

        // Animación de carga de pregunta
        anime({
            targets: this.questionText,
            opacity: [0, 1],
            translateX: [20, 0],
            duration: 300,
            easing: 'easeOutQuad'
        });

        anime({
            targets: '.option-button',
            opacity: [0, 1],
            translateY: [10, 0],
            duration: 300,
            delay: anime.stagger(50),
            easing: 'easeOutQuad'
        });
    }

    selectOption(optionIndex) {
        this.userAnswers[this.currentQuestionIndex] = optionIndex;

        // Actualizar visualización de opciones
        const buttons = this.optionsContainer.querySelectorAll('.option-button');
        buttons.forEach((button, index) => {
            button.classList.remove('selected');
            if (index === optionIndex) {
                button.classList.add('selected');
            }
        });

        // Guardar estado
        this.saveState();

        // En modo práctica, mostrar retroalimentación inmediata
        if (this.testMode === 'practice') {
            this.showPracticeFeedback();
        }
    }

    showPracticeFeedback() {
        const question = this.questions[this.currentQuestionIndex];
        const selectedAnswer = this.userAnswers[this.currentQuestionIndex];
        const isCorrect = selectedAnswer === question.correct;

        // Mostrar retroalimentación visual
        const buttons = this.optionsContainer.querySelectorAll('.option-button');
        buttons.forEach((button, index) => {
            if (index === question.correct) {
                button.classList.add('correct');
            } else if (index === selectedAnswer && !isCorrect) {
                button.classList.add('incorrect');
            }
        });

        // Mostrar explicación
        this.showExplanation(question, isCorrect);
    }

    showExplanation(question, isCorrect) {
        // Crear o actualizar el contenedor de explicación
        let explanationDiv = document.getElementById('explanation');
        if (!explanationDiv) {
            explanationDiv = document.createElement('div');
            explanationDiv.id = 'explanation';
            explanationDiv.className = 'mt-6 p-4 rounded-lg bg-blue-50 border border-blue-200';
            this.questionText.parentNode.appendChild(explanationDiv);
        }

        explanationDiv.innerHTML = `
            <div class="flex items-start space-x-3">
                <div class="flex-shrink-0">
                    <i class="fas ${isCorrect ? 'fa-check-circle text-green-500' : 'fa-times-circle text-red-500'} text-xl"></i>
                </div>
                <div class="flex-1">
                    <h4 class="font-semibold text-gray-900 mb-2">
                        ${isCorrect ? '¡Correcto!' : 'Respuesta incorrecta'}
                    </h4>
                    <p class="text-gray-700 mb-2">${question.explanation}</p>
                    <p class="text-sm text-gray-600">
                        <strong>Fuente:</strong> 
                        <a href="${question.source}" target="_blank" class="text-blue-600 hover:underline">
                            ${question.source}
                        </a>
                    </p>
                </div>
            </div>
        `;

        // Hacer visible el contenedor
        explanationDiv.style.display = 'block';

        // Animación de aparición
        anime({
            targets: explanationDiv,
            opacity: [0, 1],
            translateY: [10, 0],
            duration: 300,
            easing: 'easeOutQuad'
        });
    }

    hidePracticeFeedback() {
        // Ocultar el contenedor de explicación si existe
        const explanationDiv = document.getElementById('explanation');
        if (explanationDiv) {
            explanationDiv.style.display = 'none';
        }

        // Eliminar las clases de feedback visual de las opciones
        const buttons = this.optionsContainer.querySelectorAll('.option-button');
        buttons.forEach(button => {
            button.classList.remove('correct', 'incorrect');
        });
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.loadQuestion();
            this.saveState();
        } else {
            this.completeTest();
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.loadQuestion();
            this.saveState();
        }
    }

    toggleMarkQuestion() {
        const questionId = this.currentQuestionIndex;
        const markIndex = this.markedQuestions.indexOf(questionId);

        if (markIndex > -1) {
            this.markedQuestions.splice(markIndex, 1);
        } else {
            this.markedQuestions.push(questionId);
        }

        this.updateMarkButton();
        this.saveState();
    }

    updateMarkButton() {
        const isMarked = this.markedQuestions.includes(this.currentQuestionIndex);
        this.markBtn.innerHTML = `<i class="fas fa-flag mr-2"></i>${isMarked ? 'Desmarcar' : 'Marcar'}`;
        this.markBtn.className = isMarked ?
            'bg-yellow-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-yellow-700 transition-colors' :
            'bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors';
    }

    updateNavigationButtons() {
        this.prevBtn.disabled = this.currentQuestionIndex === 0;

        const isLastQuestion = this.currentQuestionIndex === this.questions.length - 1;
        this.nextBtn.innerHTML = isLastQuestion ?
            'Finalizar<i class="fas fa-check ml-2"></i>' :
            'Siguiente<i class="fas fa-arrow-right ml-2"></i>';
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressBar.style.width = `${progress}%`;
    }

    completeTest() {
        this.testCompleted = true;
        this.testStarted = false;
        this.calculateResults();
        this.calculateCategoryPerformance(); // <-- Añadir esta línea
        this.updateGlobalStats(); // <-- Añadir esta línea
        this.showResults();
        this.clearState();
    }

    calculateResults() {
        let correctCount = 0;

        this.questions.forEach((question, index) => {
            if (this.userAnswers[index] === question.correct) {
                correctCount++;
            }
        });

        const totalQuestions = this.questions.length;
        const incorrectCount = totalQuestions - correctCount;
        const score = Math.round((correctCount / totalQuestions) * 100);

        this.results = {
            correct: correctCount,
            incorrect: incorrectCount,
            total: totalQuestions,
            score: score
        };
    }

    // --- NUEVO MÉTODO: Calcular rendimiento por categoría para este test ---
    calculateCategoryPerformance() {
        // Inicializar objeto para almacenar el rendimiento de este test específico
        this.categoryPerformanceForTest = {};

        // Iterar sobre las preguntas del test actual
        this.questions.forEach((question, index) => {
            const category = question.category; // <-- Asegurarse que la categoría aquí coincide con questions.js
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.correct;

            // Inicializar la categoría si no existe
            if (!this.categoryPerformanceForTest[category]) {
                this.categoryPerformanceForTest[category] = { correct: 0, total: 0 };
            }

            // Aumentar el contador total para la categoría
            this.categoryPerformanceForTest[category].total++;

            // Aumentar el contador de correctas si la respuesta fue correcta
            if (isCorrect) {
                this.categoryPerformanceForTest[category].correct++;
            }
        });
    }
    // --- FIN NUEVO MÉTODO ---


    // --- NUEVO MÉTODO: Actualizar las estadísticas globales ---
    updateGlobalStats() {
        // Calcular tiempo estimado (puedes ajustarlo)
        // Por ahora, usaremos 0 o un valor simulado, ya que no hay timer global activo
        const timeSpent = 0;

        // Intentar llamar a la función de estadisticas.js si está disponible
        if (window.statsManager && typeof window.statsManager.updateAfterTest === 'function') {
            // console.log("Llamando a statsManager.updateAfterTest con:", this.results.score, timeSpent, this.categoryPerformanceForTest);
            window.statsManager.updateAfterTest(this.results.score, timeSpent, this.categoryPerformanceForTest);
        } else {
            // console.warn("statsManager no está disponible o updateAfterTest no es una función.");
            // Opcional: Actualizar localStorage directamente aquí si statsManager no está disponible
            // o manejar la situación de otra manera.
            // --- OPCIÓN A: Actualizar localStorage directamente ---
            const savedStats = localStorage.getItem('testStats');
            let stats = savedStats ? JSON.parse(savedStats) : {
                bestScore: 0,
                testsCompleted: 0,
                totalTime: 0,
                currentStreak: 0,
                categoryPerformance: {},
                testHistory: [],
                lastTestDate: null
            };

            // Actualizar métricas generales
            stats.testsCompleted++;
            stats.totalTime += timeSpent;
            stats.lastTestDate = new Date().toISOString();
            if (this.results.score > stats.bestScore) {
                stats.bestScore = this.results.score;
            }
            // Actualizar streak (simplificado)
            if (this.results.score > 0) {
                stats.currentStreak++;
            } else {
                stats.currentStreak = 0;
            }

            // Acumular categoryPerformance para este test
            if (this.categoryPerformanceForTest) {
                Object.entries(this.categoryPerformanceForTest).forEach(([category, data]) => {
                    if (!stats.categoryPerformance[category]) {
                        stats.categoryPerformance[category] = { correct: 0, total: 0 };
                    }
                    stats.categoryPerformance[category].correct += data.correct;
                    stats.categoryPerformance[category].total += data.total;
                });
            }

            // Añadir al historial (opcional)
            stats.testHistory.push({
                score: this.results.score,
                time: timeSpent,
                date: stats.lastTestDate,
                // Puedes incluir categoryPerformance aquí también si es necesario
            });

            // Guardar estadísticas actualizadas en localStorage
            localStorage.setItem('testStats', JSON.stringify(stats));
            // console.log("Estadísticas actualizadas en localStorage:", stats);
            // --- FIN OPCIÓN A ---
        }
    }
    // --- FIN NUEVO MÉTODO ---


    showResults() {
        this.testInterface.classList.add('hidden');
        this.reviewInterface.classList.add('hidden');
        this.resultsInterface.classList.remove('hidden');

        // Actualizar estadísticas
        this.correctAnswersSpan.textContent = this.results.correct;
        this.incorrectAnswersSpan.textContent = this.results.incorrect;
        this.finalScoreSpan.textContent = `${this.results.score}%`;

        // Determinar color del score
        if (this.results.score >= 80) {
            this.finalScoreSpan.className = 'text-3xl font-bold text-green-600';
        } else if (this.results.score >= 60) {
            this.finalScoreSpan.className = 'text-3xl font-bold text-yellow-600';
        } else {
            this.finalScoreSpan.className = 'text-3xl font-bold text-red-600';
        }

        // Animación de resultados
        anime({
            targets: this.resultsInterface,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 500,
            easing: 'easeOutQuad'
        });

        anime({
            targets: '.text-3xl',
            scale: [0.8, 1],
            duration: 600,
            delay: anime.stagger(100),
            easing: 'easeOutBack'
        });
    }

    showReview() {
        this.resultsInterface.classList.add('hidden');
        this.reviewInterface.classList.remove('hidden');

        // Generar contenido de revisión
        this.reviewContainer.innerHTML = '';

        this.questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.correct;

            const reviewCard = document.createElement('div');
            reviewCard.className = 'mb-6 p-6 bg-gray-50 rounded-lg border-l-4 ' +
                (isCorrect ? 'border-green-500' : 'border-red-500');

            reviewCard.innerHTML = `
                <div class="mb-4">
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">
                        Pregunta ${index + 1}: ${question.question}
                    </h3>
                    <div class="mb-3">
                        <p class="text-sm text-gray-600 mb-1">Tu respuesta:</p>
                        <p class="font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}">
                            ${userAnswer !== null ? question.options[userAnswer] : 'No respondida'}
                        </p>
                    </div>
                    ${!isCorrect ? `
                        <div class="mb-3">
                            <p class="text-sm text-gray-600 mb-1">Respuesta correcta:</p>
                            <p class="font-medium text-green-700">${question.options[question.correct]}</p>
                        </div>
                    ` : ''}
                    <div class="mb-3">
                        <p class="text-sm text-gray-600 mb-2">Explicación:</p>
                        <p class="text-gray-700 text-sm">${question.explanation}</p>
                    </div>
                    <div class="text-xs text-gray-500">
                        <strong>Fuente:</strong> 
                        <a href="${question.source}" target="_blank" class="text-blue-600 hover:underline">
                            ${question.source}
                        </a>
                    </div>
                </div>
            `;

            this.reviewContainer.appendChild(reviewCard);
        });

        // Animación de revisión
        anime({
            targets: this.reviewInterface,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 500,
            easing: 'easeOutQuad'
        });

        anime({
            targets: this.reviewContainer.children,
            opacity: [0, 1],
            translateX: [-20, 0],
            duration: 400,
            delay: anime.stagger(100),
            easing: 'easeOutQuad'
        });
    }

    resetTest() {
        this.testStarted = false;
        this.testCompleted = false;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.markedQuestions = [];
        this.questions = [];

        // Ocultar todas las interfaces
        this.testInterface.classList.add('hidden');
        this.resultsInterface.classList.add('hidden');
        this.reviewInterface.classList.add('hidden');

        // Limpiar estado guardado
        this.clearState();

        // Mostrar pantalla inicial
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    saveState() {
        const state = {
            testStarted: this.testStarted,
            testCompleted: this.testCompleted,
            testMode: this.testMode,
            currentQuestionIndex: this.currentQuestionIndex,
            userAnswers: this.userAnswers,
            markedQuestions: this.markedQuestions,
            questions: this.questions,
            timestamp: Date.now()
        };

        localStorage.setItem('testState', JSON.stringify(state));
    }

    resumeTest(state) {
        if (confirm('Tienes un test en progreso. ¿Deseas continuar?')) {
            this.testStarted = state.testStarted;
            this.testMode = state.testMode;
            this.currentQuestionIndex = state.currentQuestionIndex;
            this.userAnswers = state.userAnswers;
            this.markedQuestions = state.markedQuestions;
            this.questions = state.questions;

            this.showTestInterface();
            this.loadQuestion();
        } else {
            this.clearState();
        }
    }

    clearState() {
        localStorage.removeItem('testState');
    }

    showCustomModeModal() {
        // Crear modal para seleccionar el número de preguntas
        const modal = document.createElement('div');
        modal.id = 'customModeModal';
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50';

        const maxQuestions = questionsDatabase.length;

        modal.innerHTML = `
            <div class="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold text-gray-900">
                        <i class="fas fa-sliders-h mr-2 text-pink-600"></i>
                        Modo Personalizado
                    </h2>
                    <button onclick="closeCustomModal()" class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>
                
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Número de preguntas (1 - ${maxQuestions})
                    </label>
                    <input 
                        type="number" 
                        id="customQuestionsInput" 
                        min="1" 
                        max="${maxQuestions}" 
                        value="50" 
                        class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-lg font-semibold text-center"
                    >
                    <div class="mt-3">
                        <input 
                            type="range" 
                            id="customQuestionsRange" 
                            min="1" 
                            max="${maxQuestions}" 
                            value="50" 
                            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-600"
                        >
                    </div>
                    <div class="flex justify-between text-xs text-gray-500 mt-2">
                        <span>1</span>
                        <span>${maxQuestions}</span>
                    </div>
                </div>
                
                <div class="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-4 mb-6">
                    <div class="flex items-center space-x-2 mb-2">
                        <i class="fas fa-info-circle text-pink-600"></i>
                        <span class="font-semibold text-gray-900">Recomendaciones:</span>
                    </div>
                    <ul class="text-sm text-gray-600 space-y-1 ml-6">
                        <li>• 20-30 preguntas: Práctica rápida</li>
                        <li>• 50-70 preguntas: Sesión media</li>
                        <li>• 100+ preguntas: Examen completo</li>
                    </ul>
                </div>
                
                <div class="flex space-x-4">
                    <button 
                        onclick="startCustomTest()" 
                        class="flex-1 bg-gradient-to-r from-pink-500 to-rose-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-600 hover:to-rose-700 transition-all transform hover:scale-105 shadow-lg"
                    >
                        <i class="fas fa-play mr-2"></i>Comenzar Test
                    </button>
                    <button 
                        onclick="closeCustomModal()" 
                        class="flex-1 bg-gray-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                    >
                        <i class="fas fa-times mr-2"></i>Cancelar
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Sincronizar input numérico con slider
        const input = document.getElementById('customQuestionsInput');
        const range = document.getElementById('customQuestionsRange');

        input.addEventListener('input', (e) => {
            const value = Math.min(Math.max(parseInt(e.target.value) || 1, 1), maxQuestions);
            e.target.value = value;
            range.value = value;
        });

        range.addEventListener('input', (e) => {
            input.value = e.target.value;
        });

        // Animación de entrada
        anime({
            targets: modal.querySelector('.bg-white'),
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 300,
            easing: 'easeOutQuad'
        });
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.testApp = new TestApplication();

    // Actualizar el total de preguntas dinámicamente
    const totalQuestions = questionsDatabase.length;
    const totalQuestionsText = document.getElementById('totalQuestionsText');
    const totalQuestionsCard = document.getElementById('totalQuestionsCard');

    if (totalQuestionsText) {
        totalQuestionsText.textContent = totalQuestions;
    }
    if (totalQuestionsCard) {
        totalQuestionsCard.textContent = totalQuestions;
    }

    // Animaciones iniciales
    anime({
        targets: '.card-hover',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: anime.stagger(100),
        easing: 'easeOutQuad'
    });

    anime({
        targets: '.gradient-text',
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 800,
        easing: 'easeOutQuad'
    });
});

// Función para descargar resultados como PDF
function downloadResultsPDF() {
    // Esta función requeriría una librería como jsPDF
    // Por ahora, mostramos una alerta
    alert('Función de descarga de PDF no implementada en esta versión.');
}

// Función para compartir resultados
function shareResults() {
    if (navigator.share && window.testApp && window.testApp.results) {
        navigator.share({
            title: 'Resultados del Test MF0954_2',
            text: `He completado el test de Montaje de Equipos Microinformáticos con una puntuación del ${window.testApp.results.score}%`,
            url: window.location.href
        });
    } else {
        // Fallback: copiar al portapapeles
        const text = `He completado el test de Montaje de Equipos Microinformáticos (MF0954_2) con una puntuación del ${window.testApp.results.score}%`;
        navigator.clipboard.writeText(text).then(() => {
            alert('Resultados copiados al portapapeles');
        });
    }
}

// Función para iniciar el test personalizado
function startCustomTest() {
    const input = document.getElementById('customQuestionsInput');
    const numQuestions = parseInt(input.value) || 50;

    // Validar el número de preguntas
    if (numQuestions < 1 || numQuestions > questionsDatabase.length) {
        alert(`Por favor, ingresa un número entre 1 y ${questionsDatabase.length}`);
        return;
    }

    // Cerrar modal
    closeCustomModal();

    // Iniciar test con el número personalizado
    if (window.testApp) {
        window.testApp.startTest('custom', numQuestions);
    }
}

// Función para cerrar el modal personalizado
function closeCustomModal() {
    const modal = document.getElementById('customModeModal');
    if (modal) {
        anime({
            targets: modal.querySelector('.bg-white'),
            opacity: [1, 0],
            scale: [1, 0.8],
            duration: 200,
            easing: 'easeInQuad',
            complete: () => {
                document.body.removeChild(modal);
            }
        });
    }
}

// Función auxiliar para generar un test aleatorio
function generateRandomTest(numQuestions) {
    // Si no hay preguntas disponibles, retornar array vacío
    if (typeof questionsDatabase === 'undefined' || !questionsDatabase) {
        console.error("questionsDatabase no está definido");
        return [];
    }

    // Crear una copia de la base de datos para no modificar el original
    const shuffled = [...questionsDatabase];

    // Algoritmo de Fisher-Yates para mezclar
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Retornar el número de preguntas solicitado
    return shuffled.slice(0, numQuestions);
}


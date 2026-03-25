// estadisticas.js
// Lógica para la página de estadísticas
class StatisticsManager {
    constructor() {
        // Asegurarse de que questionsDatabase esté disponible antes de inicializar
        if (typeof questionsDatabase === 'undefined') {
            console.error('questionsDatabase no está definido.');
            this.questionsDB = []; // Inicializar vacío si no está disponible
        } else {
            this.questionsDB = questionsDatabase;
        }

        this.stats = this.loadStats();
        this.initializeCategoryPerformance(); // Inicializar categorías dinámicamente
        this.updateStatsDisplay();
        this.initializeCharts();
        this.generateAnalysis();
    }

    loadStats() {
        const defaultStats = {
            bestScore: 0,
            testsCompleted: 0,
            totalTime: 0,
            currentStreak: 0,
            // Inicialmente vacío, se llenará dinámicamente
            categoryPerformance: {},
            testHistory: [],
            lastTestDate: null
        };
        const saved = localStorage.getItem('testStats');
        return saved ? JSON.parse(saved) : defaultStats;
    }

    // --- NUEVO MÉTODO: Inicializa o actualiza categoryPerformance con las categorías reales ---
    initializeCategoryPerformance() {
        const categoriesFromDB = [...new Set(this.questionsDB.map(q => q.category))];

        // 1. Añadir nuevas categorías que no existan
        categoriesFromDB.forEach(category => {
            if (!this.stats.categoryPerformance.hasOwnProperty(category)) {
                this.stats.categoryPerformance[category] = { correct: 0, total: 0 };
            }
        });

        // 2. Eliminar categorías que ya no existen en la base de datos
        Object.keys(this.stats.categoryPerformance).forEach(category => {
            if (!categoriesFromDB.includes(category)) {
                delete this.stats.categoryPerformance[category];
            }
        });

        this.saveStats(); // Guardar cambios para persistir la limpieza
    }
    // --- FIN NUEVO MÉTODO ---

    updateStatsDisplay() {
        // Actualizar métricas generales
        const bestScoreElement = document.getElementById('bestScore');
        const testsCompletedElement = document.getElementById('testsCompleted');
        const totalTimeElement = document.getElementById('totalTime');
        const currentStreakElement = document.getElementById('currentStreak');
        const lastTestDateElement = document.getElementById('lastTestDate');

        if (bestScoreElement) bestScoreElement.textContent = this.stats.bestScore;
        if (testsCompletedElement) testsCompletedElement.textContent = this.stats.testsCompleted;
        if (totalTimeElement) totalTimeElement.textContent = this.formatTime(this.stats.totalTime);
        if (currentStreakElement) currentStreakElement.textContent = this.stats.currentStreak;
        if (lastTestDateElement) lastTestDateElement.textContent = this.stats.lastTestDate ? new Date(this.stats.lastTestDate).toLocaleDateString() : 'Nunca';

        // --- ACTUALIZAR TABLA DE RENDIMIENTO POR CATEGORÍA ---
        this.updateCategoryTable();
    }

    // --- NUEVO MÉTODO: Actualiza la tabla de categorías en el HTML ---
    updateCategoryTable() {
        const tableBody = document.querySelector('#categoryPerformanceTable tbody');
        if (!tableBody) {
            console.warn('No se encontró el tbody de la tabla de rendimiento por categoría.');
            return;
        }

        // Limpiar el contenido actual de la tabla
        tableBody.innerHTML = '';

        // Iterar sobre las categorías reales y su rendimiento
        Object.entries(this.stats.categoryPerformance).forEach(([category, data]) => {
            const percentage = data.total > 0 ? (data.correct / data.total) * 100 : 0;
            const row = document.createElement('tr');

            row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${category}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${data.correct}/${data.total}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${percentage.toFixed(2)}%</td>
            `;
            tableBody.appendChild(row);
        });
    }
    // --- FIN NUEVO MÉTODO ---


    // --- MÉTODO EXISTENTE (posiblemente ajustado): Actualizar estadísticas después de un test ---
    updateAfterTest(score, timeSpent, categoryPerformance) {
        this.stats.testsCompleted++;
        this.stats.totalTime += timeSpent;
        this.stats.lastTestDate = new Date().toISOString();

        if (score > this.stats.bestScore) {
            this.stats.bestScore = score;
        }

        // Acumular el rendimiento por categoría del test actual
        // categoryPerformance proviene del test completado
        if (categoryPerformance) {
            Object.entries(categoryPerformance).forEach(([category, data]) => {
                if (this.stats.categoryPerformance[category]) {
                    // Acumular correctas y totales
                    this.stats.categoryPerformance[category].correct += data.correct;
                    this.stats.categoryPerformance[category].total += data.total;
                } else {
                    // En caso de que la categoría del test no esté en stats (improbable si se inicializó bien)
                    this.stats.categoryPerformance[category] = { correct: data.correct, total: data.total };
                }
            });
        }

        // Actualizar racha (streak) - simplificado
        if (score > 0) {
            this.stats.currentStreak++;
        } else {
            this.stats.currentStreak = 0;
        }

        // Añadir al historial de tests
        this.stats.testHistory.push({
            score: score,
            time: timeSpent,
            date: this.stats.lastTestDate,
            // Opcional: incluir detalles por categoría aquí también
        });

        this.saveStats();
        this.updateStatsDisplay(); // Reflejar cambios
        this.initializeCharts(); // Actualizar gráficos si es necesario
        this.generateAnalysis(); // Actualizar análisis
    }
    // --- FIN MÉTODO ---

    // Otros métodos existentes...
    saveStats() {
        localStorage.setItem('testStats', JSON.stringify(this.stats));
    }

    formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    initializeCharts() {
        // Lógica para inicializar gráficos con Plotly.js
        // Debe adaptarse para usar las categorías dinámicas
        // Similar a updateCategoryTable, iterar sobre this.stats.categoryPerformance
        // y crear el gráfico correspondiente
        // Por ejemplo:
        const chartContainer = document.getElementById('categoryChart');
        if (chartContainer && Object.keys(this.stats.categoryPerformance).length > 0) {
            const categories = Object.keys(this.stats.categoryPerformance);
            const correctValues = categories.map(cat => this.stats.categoryPerformance[cat].correct);
            const totalValues = categories.map(cat => this.stats.categoryPerformance[cat].total);

            const data = [{
                x: categories,
                y: correctValues.map((val, i) => (totalValues[i] > 0 ? (val / totalValues[i]) * 100 : 0)), // Porcentaje
                type: 'bar',
                name: 'Aciertos (%)',
                marker: { color: '#4f46e5' } // Color Tailwind Indigo
            }];

            const layout = {
                title: 'Rendimiento por Categoría (%)',
                xaxis: { title: 'Categoría' },
                yaxis: { title: 'Porcentaje de Aciertos (%)', range: [0, 100] }
            };

            Plotly.newPlot(chartContainer, data, layout);
        }
    }

    generateAnalysis() {
        // Lógica para generar análisis
        // Puedes adaptarla para usar las categorías dinámicas
    }

    exportStats() {
        // Lógica existente
        const dataStr = JSON.stringify(this.stats, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'estadisticas_mf0953_2.json';
        link.click();
        URL.revokeObjectURL(url);
    }

    importStats(file) {
        // Lógica existente
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedStats = JSON.parse(e.target.result);
                // Usar el operador de propagación para fusionar, manteniendo nuevas categorías
                this.stats = { ...this.initialStatsTemplate(), ...this.stats, ...importedStats };
                this.initializeCategoryPerformance(); // Re-inicializar categorías tras importar
                this.saveStats();
                this.updateStatsDisplay();
                this.initializeCharts();
                this.generateAnalysis();
                alert('Estadísticas importadas correctamente');
            } catch (error) {
                console.error("Error al importar:", error);
                alert('Error al importar las estadísticas');
            }
        };
        reader.readAsText(file);
    }

    resetStats() {
        if (confirm('¿Estás seguro de que quieres resetear todas las estadísticas?')) {
            this.stats = this.initialStatsTemplate();
            this.initializeCategoryPerformance(); // Re-inicializar categorías tras reset
            this.saveStats();
            this.updateStatsDisplay();
            this.initializeCharts();
            this.generateAnalysis();
        }
    }

    // --- MÉTODO AYUDANTE: Plantilla de estadísticas iniciales ---
    initialStatsTemplate() {
        return {
            bestScore: 0,
            testsCompleted: 0,
            totalTime: 0,
            currentStreak: 0,
            categoryPerformance: {}, // Se inicializará dinámicamente
            testHistory: [],
            lastTestDate: null
        };
    }
    // --- FIN MÉTODO ---

    // Otros métodos existentes...
}

// Inicializar el gestor de estadísticas
document.addEventListener('DOMContentLoaded', () => {
    // Asegurarse de que questions.js se haya cargado antes
    if (typeof questionsDatabase !== 'undefined') {
        window.statsManager = new StatisticsManager();
    } else {
        console.error('questionsDatabase no está disponible al inicializar StatisticsManager.');
    }

    // Animaciones iniciales
    // ... (código existente para animaciones)
});

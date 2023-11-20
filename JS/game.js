// Criar a const das perguntas

const quizData = [
    {
        question: "Para que serve o sistema de terefas?",
        options: ["Organização", "Guardar ideias", "Passar o tempo"],
        correctAnswer: "Organização"
    },
    {
        question: "Quais campos são obrigatórios no sistema?",
        options: ["Nome/Descrição", "Prioridade/Horarios", "Nome/Prioridade"],
        correctAnswer: "Nome/Prioridade"
    },
    {
        question: "Qual a cor dos campo que fica o nome quando se não registra uma informação?",
        options: ["Vermelho", "Verde", "Amarelo"],
        correctAnswer: "Vermelho"
    }
];

//definir as somas

let currentQuestion = 0;
let score = 0;

function startGame() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const resultContainer = document.getElementById("result");

    if (currentQuestion < quizData.length) {
        questionContainer.innerText = quizData[currentQuestion].question;
        optionsContainer.innerHTML = "";

        quizData[currentQuestion].options.forEach((option, index) => {
            const button = document.createElement("button");
            button.innerText = option;
            button.addEventListener("click", () => checkAnswer(option));
            optionsContainer.appendChild(button);
        });

        resultContainer.innerText = "Pontuação: " + score + "/" + quizData.length;
    } else {
        questionContainer.innerText = "Fim do Jogo!";
        optionsContainer.innerHTML = "";
        resultContainer.innerText = "Sua pontuação final é: " + score + "/" + quizData.length;
    }
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestion].correctAnswer;

    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestion++;
    showQuestion();
}

function nextQuestion() {
    showQuestion();
}

function reloadPage() {
    location.reload();
}

startGame();
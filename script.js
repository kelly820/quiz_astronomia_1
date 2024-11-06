// Lista de perguntas e respostas do quiz
const questions = [
    {
        question: "Quantos anéis possui Saturno?",
        choices: ["3", "5", "7", "Inúmeros"],
        correctAnswer: "Inúmeros"
    },
    {
        question: "Qual é o nome da galáxia em que vivemos?",
        choices: ["Via Láctea", "Andrômeda", "Triângulo", "Cata-Vento"],
        correctAnswer: "Via Láctea"
    },
    {
        question: "Qual é o planeta mais próximo do Sol?",
        choices: ["Vênus", "Marte", "Mercúrio", "Terra"],
        correctAnswer: "Mercúrio"
    },
    {
        question: "Qual planeta é conhecido como o Planeta Vermelho?",
        choices: ["Terra", "Marte", "Júpiter", "Vênus"],
        correctAnswer: "Marte"
    },
    {
        question: "Qual é a estrela mais próxima da Terra, depois do Sol?",
        choices: ["Proxima Centauri", "Betelgeuse", "Sirius", "Alpha Centauri"],
        correctAnswer: "Proxima Centauri"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        choices: ["Terra", "Saturno", "Netuno", "Júpiter"],
        correctAnswer: "Júpiter"
    },
    {
        question: "Quantos planetas compõem o sistema solar?",
        choices: ["7", "8", "9", "10"],
        correctAnswer: "8"
    },
    {
        question: "Qual planeta é conhecido como o Planeta Vermelho?",
        choices: ["Mercúrio", "Marte", "Saturno", "Vênus"],
        correctAnswer: "Marte"
    },
    {
        question: "O que são as auroras boreais?",
        choices: ["Meteoros", "Explosões solares", "Partículas solares interagindo com a atmosfera", "Ondas de calor"],
        correctAnswer: "Partículas solares interagindo com a atmosfera"
    },
    {
        question: "Qual planeta é famoso por ter um grande sistema de anéis?",
        choices: ["Júpiter", "Urano", "Saturno", "Netuno"],
        correctAnswer: "Saturno"
    },
    {
        question: "Qual é o planeta mais próximo do Sol?",
        choices: ["Vênus", "Terra", "Marte", "Mercúrio"],
        correctAnswer: "Mercúrio"
    },
    {
        question: "Qual é a unidade de medida da distância entre a Terra e outras estrelas?",
        choices: ["Anos-luz", "Milhas", "Quilômetros", "Segundos-luz"],
        correctAnswer: "Anos-luz"
    },
    {
        question: "O que é uma supernova?",
        choices: ["Um planeta gigante", "Uma explosão de uma estrela", "Um buraco negro", "Um tipo de cometa"],
        correctAnswer: "Uma explosão de uma estrela"
    },
    {
        question: "Quantos planetas anões existem atualmente reconhecidos no sistema solar?",
        choices: ["4", "5", "6", "7"],
        correctAnswer: "5"
    },
    {
        question: "O que são os asteroides?",
        choices: ["Fragmentos de planetas", "Pequenos corpos rochosos", "Estrelas mortas", "Partículas de poeira"],
        correctAnswer: "Pequenos corpos rochosos"
    },
    {
        question: "Qual planeta tem o dia mais longo do sistema solar?",
        choices: ["Marte", "Vênus", "Mercúrio", "Saturno"],
        correctAnswer: "Vênus"
    },
    {
        question: "Em que planeta é possível encontrar o Monte Olimpo, o maior vulcão do sistema solar?",
        choices: ["Marte", "Terra", "Júpiter", "Saturno"],
        correctAnswer: "Marte"
    },
    {
        question: "O que é o Cinturão de Kuiper?",
        choices: ["Uma constelação", "Um conjunto de anéis", "Um cinturão de asteroides além de Netuno", "Uma galáxia próxima"],
        correctAnswer: "Um cinturão de asteroides além de Netuno"
    },
    {
        question: "Qual é o menor planeta do sistema solar?",
        choices: ["Plutão", "Marte", "Mercúrio", "Vênus"],
        correctAnswer: "Mercúrio"
    },
    {
        question: "O que é um exoplaneta?",
        choices: ["Planeta fora do sistema solar", "Planeta com água", "Planeta próximo a Júpiter", "Planeta gigante gasoso"],
        correctAnswer: "Planeta fora do sistema solar"
    },
    {
        question: "Qual é o nome do telescópio lançado pela NASA para estudar o universo?",
        choices: ["Hubble", "Galileo", "Viking", "Mariner"],
        correctAnswer: "Hubble"
    },
    {
        question: "A que fenômeno chamamos de eclipse solar?",
        choices: ["A lua esconde a Terra", "A Terra cobre a Lua", "A Lua cobre o Sol", "O Sol cobre a Lua"],
        correctAnswer: "A Lua cobre o Sol"
    },
    {
        question: "Quais planetas são considerados gigantes gasosos?",
        choices: ["Júpiter e Saturno", "Terra e Marte", "Mercúrio e Vênus", "Urano e Netuno"],
        correctAnswer: "Júpiter e Saturno"
    },
    {
        question: "Qual planeta tem ventos mais rápidos do sistema solar?",
        choices: ["Terra", "Netuno", "Júpiter", "Vênus"],
        correctAnswer: "Netuno"
    },
    {
        question: "Qual planeta é chamado de 'Estrela D'Alva'?",
        choices: ["Mercúrio", "Terra", "Marte", "Vênus"],
        correctAnswer: "Vênus"
    },
    {
        question: "Em qual galáxia estamos localizados?",
        choices: ["Andrômeda", "Via Láctea", "Triângulo", "Cata-Vento"],
        correctAnswer: "Via Láctea"
    },
    {
        question: "Qual é a camada mais externa do Sol?",
        choices: ["Cromosfera", "Fotosfera", "Corona", "Manto"],
        correctAnswer: "Corona"
    },
    {
        question: "O que são as manchas solares?",
        choices: ["Áreas frias na superfície do Sol", "Crateras solares", "Explosões solares", "Satélites do Sol"],
        correctAnswer: "Áreas frias na superfície do Sol"
    },
    {
        question: "Qual planeta possui o maior campo magnético do sistema solar?",
        choices: ["Júpiter", "Saturno", "Terra", "Netuno"],
        correctAnswer: "Júpiter"
    },
    {
        question: "Qual é a cor de uma estrela mais quente?",
        choices: ["Vermelha", "Amarela", "Azul", "Branca"],
        correctAnswer: "Azul"
    },
    {
        question: "Qual desses planetas é conhecido por seu intenso sistema de tempestades?",
        choices: ["Netuno", "Saturno", "Marte", "Júpiter"],
        correctAnswer: "Júpiter"
    },
    {
        question: "Que estrela é conhecida como a estrela do norte?",
        choices: ["Vega", "Polaris", "Betelgeuse", "Sirius"],
        correctAnswer: "Polaris"
    },
    {
        question: "Qual planeta tem luas chamadas Fobos e Deimos?",
        choices: ["Terra", "Júpiter", "Saturno", "Marte"],
        correctAnswer: "Marte"
    },
    {
        question: "Qual é a maior lua do sistema solar?",
        choices: ["Europa", "Ganimedes", "Titã", "Calisto"],
        correctAnswer: "Ganimedes"
    },
    {
        question: "Qual desses planetas é o mais denso?",
        choices: ["Terra", "Saturno", "Marte", "Júpiter"],
        correctAnswer: "Terra"
    },
    {
        question: "Qual é a galáxia mais próxima da Via Láctea?",
        choices: ["Andrômeda", "Triângulo", "Órion", "Ursa Menor"],
        correctAnswer: "Andrômeda"
    },
    {
        question: "O que é um buraco negro?",
        choices: ["Uma estrela brilhante", "Uma nuvem de gás", "Um corpo com gravidade extrema", "Uma explosão estelar"],
        correctAnswer: "Um corpo com gravidade extrema"
    }
];

// Restante do código de interatividade do quiz...

    // Adicione mais perguntas conforme necessário


// Variáveis globais para controle do jogo
let currentQuestionIndex = 0; // Índice da pergunta atual
let score = 0; // Pontuação do usuário
let level = 1; // Nível inicial do usuário
let trophies = 0; // Quantidade de troféus ganhos
const questionsPerLevel = 10; // Número de acertos necessários para ganhar um troféu
let playerName = ""; // Nome do jogador

// Função para iniciar o quiz
function startQuiz() {
    playerName = document.getElementById("username").value; // Armazena o nome do jogador
    if (!playerName) {
        alert("Por favor, insira seu nome antes de iniciar o quiz!");
        return;
    }
    document.getElementById("playerName").innerText = `Bem-vindo, ${playerName}!`;
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    displayQuestion();
}

// Função para exibir a pergunta atual
function displayQuestion() {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionObj.question;
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    // Adiciona cada escolha como um botão interativo
    questionObj.choices.forEach(choice => {
        const choiceElement = document.createElement("div");
        choiceElement.classList.add("choice");
        choiceElement.innerText = choice;
        choiceElement.onclick = () => selectAnswer(choice);
        choicesContainer.appendChild(choiceElement);
    });
}

// Função para selecionar uma resposta e verificar se está correta
function selectAnswer(selectedChoice) {
    const questionObj = questions[currentQuestionIndex];
    if (selectedChoice === questionObj.correctAnswer) {
        score += 10; // Incrementa a pontuação ao acertar a resposta
        document.getElementById("score").innerText = `Pontuação: ${score}`;
        checkForLevelUp(); // Verifica se é necessário subir de nível e ganhar troféu
    }
    nextQuestion();
}

// Função para verificar se o usuário deve ganhar um troféu e subir de nível
function checkForLevelUp() {
    if (score / 10 >= level) {
        trophies++; // Ganha um troféu a cada 10 acertos
        level++; // Sobe de nível
        alert(`Parabéns! Você ganhou um troféu e subiu para o nível ${level}!`);
    }
}

// Função para avançar para a próxima pergunta
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

// Função para encerrar o quiz e exibir a pontuação final
function endQuiz() {
    document.getElementById("quizContainer").innerHTML = `
        <h2>Quiz Finalizado!</h2>
        <p>${playerName}, sua pontuação final é: ${score}</p>
        <p>Você conquistou ${trophies} troféu(s) e alcançou o nível ${level}!</p>
        <button onclick="restartQuiz()">Jogar Novamente</button>
    `;
}

// Função para reiniciar o quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    level = 1;
    trophies = 0;
    document.getElementById("score").innerText = `Pontuação: ${score}`;
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("welcomeScreen").style.display = "block";
}

// Inicializa o jogo ao carregar a primeira pergunta
displayQuestion();

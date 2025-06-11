let currentQuestion = 0;
let score = 0;
let userAnswers = [];

const questions = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "C", "Java", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "HTML stands for?",
    options: ["HighText Machine Language", "HyperText Markup Language", "HyperText Markdown Language", "None"],
    answer: "HyperText Markup Language"
  },
  {
    question: "CSS is used for?",
    options: ["Structuring", "Scripting", "Styling", "None"],
    answer: "Styling"
  },
  {
    question: "Which company developed Java?",
    options: ["Microsoft", "Sun Microsystems", "Apple", "Google"],
    answer: "Sun Microsystems"
  }
];

function login() {
  const username = document.getElementById("username").value;
  if (username.trim() === "") {
    alert("Please enter your name.");
  } else {
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("instruction-section").classList.remove("hidden");
  }
}

function startExam() {
  document.getElementById("instruction-section").classList.add("hidden");
  document.getElementById("exam-section").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = `Q${currentQuestion + 1}: ${q.question}`;

  const optionsList = document.getElementById("options");
  optionsList.innerHTML = "";

  q.options.forEach(opt => {
    const li = document.createElement("li");
    li.innerHTML = `<label><input type="radio" name="option" value="${opt}">${opt}</label>`;
    optionsList.appendChild(li);
  });
}

function nextQuestion() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an option.");
    return;
  }

  const answer = selected.value;
  if (answer === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("exam-section").classList.add("hidden");
    document.getElementById("result-section").classList.remove("hidden");
    document.getElementById("score").innerText = `You scored ${score} out of ${questions.length}`;
  }
}

function restartExam() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("result-section").classList.add("hidden");
  document.getElementById("login-section").classList.remove("hidden");
}

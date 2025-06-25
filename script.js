#This is a javascript file
const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Script Sheets",
      "Clean Style Sheets"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyperloop Machine Language",
      "None of the above"
    ],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which year was JavaScript launched?",
    options: ["1996", "1995", "1994", "none of the above"],
    answer: "1995"
  }
];

let currentQuestion = 0;
let score = 0;

const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score-text");

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionBox.textContent = current.question;
  optionsBox.innerHTML = "";

  current.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => selectOption(li, current.answer));
    optionsBox.appendChild(li);
  });
}

function selectOption(selectedLi, correctAnswer) {
  const options = document.querySelectorAll("#options li");
  options.forEach(li => li.classList.remove("selected", "wrong"));
  
  if (selectedLi.textContent === correctAnswer) {
    selectedLi.classList.add("selected");
    score++;
  } else {
    selectedLi.classList.add("wrong");
    [...options].find(li => li.textContent === correctAnswer).classList.add("selected");
  }

  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
    nextBtn.disabled = true;
  } else {
    document.getElementById("quiz-box").classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreText.textContent = `Your Score: ${score} / ${quizData.length}`;
  }
});

window.onload = () => {
  loadQuestion();
  nextBtn.disabled = true;
};


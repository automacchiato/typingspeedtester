const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing fast takes practice and focus.",
  "JavaScript is a fun language to learn.",
  "Stay consistent and keep building every day.",
];

let currentSentence = "";
let startTime, endTime;

function pickRandomSentence() {
  const index = Math.floor(Math.random() * sentences.length);
  return sentences[index];
}

function startTest() {
  currentSentence = pickRandomSentence();
  document.getElementById("sentence").textContent = currentSentence;
  document.getElementById("inputArea").value = "";
  document.getElementById("results").textContent = "";
  startTime = null;
}

function calculateResults() {
  endTime = new Date().getTime();
  const typedText = document.getElementById("inputArea").value;
  const timeTaken = (endTime - startTime) / 1000; // in seconds
  const wordCount = typedText.trim().split(/\s+/).length;
  const wpm = Math.round((wordCount / timeTaken) * 60);

  // Accuracy calculation
  let correct = 0;
  const original = currentSentence.split("");
  const typed = typedText.split("");

  for (let i = 0; i < original.length; i++) {
    if (typed[i] === original[i]) correct++;
  }

  const accuracy = Math.round((correct / original.length) * 100);

  document.getElementById("results").innerHTML =
    `⏱️ Time: ${timeTaken.toFixed(1)}s<br>` +
    `📈 Speed: ${wpm} WPM<br>` +
    `🎯 Accuracy: ${accuracy}%`;
}

document.getElementById("inputArea").addEventListener("input", () => {
  if (!startTime) startTime = new Date().getTime();

  const input = document.getElementById("inputArea").value;
  if (input.trim() === currentSentence) {
    calculateResults();
  }
});

function restartTest() {
  startTest();
}

startTest();

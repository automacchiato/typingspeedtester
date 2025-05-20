const sentences = [
    "The quick brown fox jumps over the lazy dog",
    "Typing fast takes practise and focus",
    "Javascript is a fun language to learn",
    "Stay consisten and keep building everyday"
];

let currentSentence = "";
let startTime, endTime;

function pickRandomSentence() {
    const index = Math.floor(Math.random() * sentences.length);
    return sentences[index];
}


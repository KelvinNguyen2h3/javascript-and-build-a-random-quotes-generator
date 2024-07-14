//datatype object
const quotes = {
    "-Franklin D. Roosevelt": "The only thing we have to fear is fear itself.",
    "-Ralph Waldo Emerson": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "-Robert Frost": "In three words I can sum up everything I've learned about life: it goes on.",
    "-Alan Kay": "The best way to predict the future is to invent it.",
    "-John Lennon": "Life is what happens when you're busy making other plans.",
    "-Lao Tzu": "The journey of a thousand miles begins with one step.",
    "-Wayne Gretzky": "You miss 100% of the shots you don't take.",
    "-Franklin D. Roosevelt2": "The only limit to our realization of tomorrow is our doubts of today.",
    "-Dalai Lama": "The purpose of our lives is to be happy.",
    "-Stephen King": "Get busy living or get busy dying."
}

// Function to generate
function generate(){
    const authors = Object.keys(quotes);
    const author = authors[Math.floor(Math.random() * (authors.length-1))];
    const quote = quotes[author];

    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
}

// Function to read
function readAloud(){
    const quote = document.querySelector("#quote").textContent;
    const author = document.querySelector("#author").textContent;
    const atterance = new SpeechSynthesisUtterance(`${quote} by ${author}`);
    speechSynthesis.speak(atterance);
}

// Events
document.querySelector("#generate").addEventListener("click", generate);
document.querySelector("#read-aloud").addEventListener("click", readAloud);
window.onload = function(){
    generate();
}
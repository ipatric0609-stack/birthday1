const screens = document.querySelectorAll(".screen");

function showScreen(screenId) {

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");
}


// START SURPRISE
function startSurprise() {

    showScreen("storyScreen");

}


// STORY
const storyParts = [

    {
        chapter: "CHAPTER 1",
        title: "The Birthday Legend of Axella 😎",
        text: "Once upon a time, on a very special day, a legend named Axella was born. The world was never the same again. 😂🎉"
    },

    {
        chapter: "CHAPTER 2",
        title: "The Main Character Has Arrived 👑",
        text: "Axella was not just born... Axella entered the world like the main character in a movie. Confidence? 100%. Personality? Unforgettable. 😎🔥"
    },

    {
        chapter: "CHAPTER 3",
        title: "Another Year Unlocked 🔓",
        text: "Today, Axella has officially unlocked another level of life. New memories, new adventures, new achievements... and hopefully more cake. 🎂😂"
    },

    {
        chapter: "FINAL CHAPTER",
        title: "The Birthday Mission 🎯",
        text: "Your mission today is simple: smile, have fun, enjoy your birthday, and make unforgettable memories. Birthday mode: ACTIVATED! 🎉🔥"
    }

];

let storyIndex = 0;

function nextStory() {

    storyIndex++;

    if (storyIndex >= storyParts.length) {

        showScreen("gameScreen");

        loadQuestion();

        return;

    }

    const story = storyParts[storyIndex];

    document.querySelector(".chapter").textContent = story.chapter;

    document.querySelector(".story-card h2").textContent = story.title;

    document.getElementById("storyText").textContent = story.text;

}


// GAME
const questions = [

    {
        question: "What should Axella do today? 🎂",

        answers: [
            "Eat cake 🎂",
            "Sleep all day 😴",
            "Become famous 😎",
            "All of the above 😂"
        ],

        result: "Correct answer: ALL OF THE ABOVE 😂🎉"
    },

    {
        question: "What makes today special? 🎉",

        answers: [
            "It's Axella's birthday 🥳",
            "The moon is shining 🌙",
            "Aliens arrived 👽",
            "A random Tuesday 😂"
        ],

        result: "Obviously... AXELLA'S BIRTHDAY! 🎂🔥"
    },

    {
        question: "What is Axella officially today? 👑",

        answers: [
            "A legend 😎",
            "A birthday superstar 🌟",
            "The main character 🔥",
            "All of these 😂"
        ],

        result: "Correct! Axella is officially ALL OF THESE! 👑🔥"
    }

];

let questionIndex = 0;

function loadQuestion() {

    const question = questions[questionIndex];

    document.getElementById("question").textContent =
        question.question;

    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";

    document.getElementById("gameResult").textContent = "";

    question.answers.forEach(answer => {

        const button = document.createElement("button");

        button.textContent = answer;

        button.className = "answer-button";

        button.onclick = () => chooseAnswer();

        answersContainer.appendChild(button);

    });

}


function chooseAnswer() {

    document.getElementById("gameResult").textContent =
        questions[questionIndex].result;

    questionIndex++;

    if (questionIndex < questions.length) {

        setTimeout(loadQuestion, 1500);

    } else {

        setTimeout(() => {

            showScreen("finalScreen");

            createConfetti();

        }, 1800);

    }

}


// CELEBRATION
function celebrate() {

    createConfetti();

    alert("🎉 HAPPY BIRTHDAY AXELLA! 🎂🥳🔥");

}


// CONFETTI
function createConfetti() {

    for (let i = 0; i < 100; i++) {

        const confetti =
            document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        confetti.style.background =
            `hsl(${Math.random() * 360}, 100%, 60%)`;

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}
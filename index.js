const quizQuestions = [
    {
        question: "What is the capital of Nigeria?",
        options: ["Ekiti", "Abuja", "Lagos", "Ibadan"],
        correctAnswer: "Abuja"
    },

    {
        question: "Nigeria gained independence in the year?",
        options: [ "1990", "1960", "1984", "2002" ],
        correctAnswer: "1960"
    },

    {
        question: "What are the colours of the Nigeria flag?",
        options: ["Green and White", "Red and Yellow", "White and Black", "Orange and grey"],
        correctAnswer: "Green and White"
    },

    {
        question: "Nigeria consist of how many states?",
        options: [ "99", "44", "30", "36" ],
        correctAnswer: "36"
    },

    {
        question: "The Nigeria President is from what political party?",
        options: [ "APC", "PDP", "CPC", "AD" ],
        correctAnswer: "APC"
    },

    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Rome", "Madrid"],
        correctAnswer: "Paris"
    },

    {
        question: "KodeCamp is what type of bootcamp?",
        options: ["online", "offline", "physical", "spiritual"],
        correctAnswer: "online"
    },
    {
        question: "Courses available on Kodecamp are the following except?",
        options: ["Frontend", "Backend", "Middleend", "Nodejs"],
        correctAnswer: "Middleend"
    },
    {
        question: "The frontend tutor is known as?",
        options: ["Blaze", "Femiblaze", "Scorpion", "Phemmyblaze"],
        correctAnswer: "Phemmyblaze"
    },
    {
        question: "Kodecamp is hosted on what application?",
        options: ["Discord", "Goggleclass", "Telegram", "Wechat"],
        correctAnswer: "Discord"
    },
    {
        question: "Frontend developers work on which part of the web?",
        options: ["Clientside", "Website", "Serverside", "Frontside"],
        correctAnswer: "Clientside"
    },
    {
        question: "What is used to structure a web page?",
        options: ["Javascript", "CSS", "HTML", "Github"],
        correctAnswer: "HTML"
    },
    {
        question: "What is used to style a web page?",
        options: ["Javascript", "CSS", "HTML", "Github"],
        correctAnswer: "CSS"
    },
    {
        question: "What is used to add functionality to web pages?",
        options: ["Javascript", "CSS", "HTML", "Github"],
        correctAnswer: "Javascript"
    },
    {
        question: "How many world cup stars does Nigeria has?",
        options: ["0", "2", "4", "6" ],
        correctAnswer: "0"
    },
    {
        question: "The best football club in the world?",
        options: ["Liverpool", "Mancity", "Barcelona", "Madrid"],
        correctAnswer: "Barcelona"
    },
    {
        question: "Messi has how many gloden boosts?",
        options: [ "10", "7", "8", "9" ],
        correctAnswer: "7"
    },
    {
        question: "Arrays are always enclosed in what type of bracket?",
        options: [ "Circular", "Square", "Curly", "Angular" ],
        correctAnswer: "Square"
    },
    {
        question: "Objects can hold different data types?",
        options: [ "False", "True", "", "" ],
        correctAnswer: "True"
    },
    {
        question: "Who is the best footballer in the world?",
        options: ["Ronaldo", "Messi", "Halland", "lewandoski"],
        correctAnswer: "Messi"
    }
];

let currentQuestion = 0;
let score = 0;

const questionDisplay = document.querySelector(".question_list");
const optionDisplay = document.querySelector(".options_list");
const commentDisplay = document.querySelector(".comment");
const nextButton = document.querySelector(".next-question")
const scoreDisplay = document.querySelector(".score");

function displayQuestion() {

    const quest = quizQuestions[currentQuestion];

    questionDisplay.innerHTML = "";

    questionDisplay.textContent = `${currentQuestion + 1}). ${quest.question}`;

    optionDisplay.innerHTML = "";

    quest.options.forEach((option, i) => {

        const optionItem = document.createElement("li");

        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "quiz-options";
        radioInput.value = option;
        radioInput.id = `option${i}`;
        const label = document.createElement("label");
        label.htmlFor = `option${i}`; 
        label.textContent = option;
        
        
        optionItem.appendChild(radioInput);
        optionItem.appendChild(label);
        
        
        optionDisplay.appendChild(optionItem);

        commentDisplay.innerHTML= "";
    
    });

    document.querySelectorAll('input[name="quiz-options"]').forEach((input) => {

        input.addEventListener('click', function () {

            // Disable all radio buttons
            document.querySelectorAll('input[name="quiz-options"]').forEach((btn) => {
                btn.disabled = true;
            });

            // Enable the selected radio button
            input.disabled = false;

            checkAnswer();
        });

    });

}

displayQuestion();

function checkAnswer() {

    const selectedOption = document.querySelector('input[name="quiz-options"]:checked');

    if (selectedOption) {

        const userAnswer = selectedOption.value;
        const correctAnswer = quizQuestions[currentQuestion].correctAnswer;

        if (userAnswer === correctAnswer) {

            score++;
            commentDisplay.textContent = "Correct!";
        

        } else {

            commentDisplay.textContent = `Incorrect! The correct answer is ${correctAnswer}`;
        }

    }

}

nextButton.onclick = function() {

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {

        displayQuestion(currentQuestion); 

        commentDisplay.innerHTML= "";
        
    } else {
        
        scoreDisplay.textContent =  `Your score: ${score}/${quizQuestions.length}`;
    }
};




const questions = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
];

let currentQuestion = 0
let userScore = 0


const displayQuestion = function (questionNum) {
    const initialScreenNode = document.getElementById('initialScreen')
    initialScreenNode.style.display = 'none'
    const questionScreen = document.getElementById('questionScreen')
    const questionContent = questions[currentQuestion].question
    const questionContainer = document.createElement('div')
    questionContainer.classList.add('question-container')
    questionContainer.innerText = questionContent
    questionScreen.appendChild(questionContainer)
    const answerContainer = document.createElement('div')
    answerContainer.classList.add('answers-container')
    questionScreen.appendChild(answerContainer)
    let arrayOfPossibleAnswers = []
    arrayOfPossibleAnswers.push(questions[currentQuestion].correct_answer)
    let incorrectAnswers = questions[currentQuestion].incorrect_answers
    for (answer of incorrectAnswers) {
        arrayOfPossibleAnswers.push(answer)
    }
    for (let i = 0; i < arrayOfPossibleAnswers.length; i++) {
        let possibleAnswerContent = arrayOfPossibleAnswers[i]
        let possibleAnswerContainer = document.createElement('label')
        possibleAnswerContainer.htmlFor = `a${ i }`
        possibleAnswerContainer.classList.add('possibleAnswer')
        possibleAnswerContainer.innerText = possibleAnswerContent
        possibleAnswerContainer.addEventListener('click', checkAnswer)
        answerContainer.appendChild(possibleAnswerContainer)
        let possibleAnswerInput = document.createElement('input')
        possibleAnswerInput.setAttribute('name', 'quizQuestion')
        possibleAnswerInput.setAttribute('type', 'radio')
        possibleAnswerInput.setAttribute('id', `a${ i }`)
        possibleAnswerInput.value = possibleAnswerContent
        possibleAnswerContainer.appendChild(possibleAnswerInput)
        // let possibleAnswerLabel = document.createElement('label')
        // possibleAnswerLabel.htmlFor = `a${ i }`
        // possibleAnswerLabel.innerText = possibleAnswerContent
        // possibleAnswerContainer.appendChild(possibleAnswerLabel)
        // possibleAnswerLabel.addEventListener('click', checkSelectedAnswer)
    }
    let round = document.createElement('div')
    round.classList.add('round')
    round.innerText = `Current round: ${ currentQuestion }`
    questionScreen.appendChild(round)
    let score = document.createElement('div')
    score.classList.add('score')
    score.innerText = `Current score: ${ userScore }`
    questionScreen.appendChild(score)
    let nextButton = document.createElement('button')
    nextButton.innerText = 'NEXT'
    nextButton.addEventListener('click', moveToNextQuestion)
    questionScreen.appendChild(nextButton)
    currentQuestion++
}

const checkAnswer = function () {
    // let selectedAnswer = e.target.value
    const possibleAnswers = document.getElementsByClassName('possibleAnswer')
    console.log(userScore)
    for (let i = 0; i < possibleAnswers.length; i++) {
        if (possibleAnswers[i].innerText === questions[currentQuestion - 1].correct_answer) {
            userScore++
            console.log(userScore)
            possibleAnswers[i].classList.add('correct-answer')
        } else {
            possibleAnswers[i].classList.add('wrong-answer')
        }
    }
}

const moveToNextQuestion = function () {
    let questionScreen = document.getElementById('questionScreen')
    questionScreen.innerHTML = ''
    if (currentQuestion < questions.length) {
        displayQuestion()
    } else {
        endGame()
    }
}

// const selectAnswer = function (eventData) {
//     let selectedAnswer = eventData.target.value
//     console.log(selectedAnswer)
//     // return selectedAnswer
//     // console.log(`Selected answer is ${ selectedAnswer }`)
// }

//option to display all questions at once

// const displayQuestions = function () {
//     const initialScreenNode = document.getElementById('initialScreen')
//     initialScreenNode.style.display = 'none'
//     const questionScreen = document.getElementById('questionScreen')
//     for (let i = 0; i < questions.length; i++) {

//         const firstQuestionContent = questions[i].question
//         const firstQuestionContainer = document.createElement('div')
//         firstQuestionContainer.classList.add('question')
//         firstQuestionContainer.innerText = firstQuestionContent
//         questionScreen.appendChild(firstQuestionContainer)
//         const answerContainer = document.createElement('div')
//         answerContainer.classList.add('answers')
//         questionScreen.appendChild(answerContainer)
//         let arrayOfPossibleAnswers = []
//         arrayOfPossibleAnswers.push(questions[i].correct_answer)
//         let incorrectAnswers = questions[i].incorrect_answers
//         for (answer of incorrectAnswers) {
//             arrayOfPossibleAnswers.push(answer)
//         }
//         for (let i = 0; i < arrayOfPossibleAnswers.length; i++) {
//             let possibleAnswerContent = arrayOfPossibleAnswers[i]
//             let possibleAnswerContainer = document.createElement('label')
//             possibleAnswerContainer.htmlFor = `a${ i }`
//             possibleAnswerContainer.classList.add('possibleAnswer')
//             possibleAnswerContainer.innerText = possibleAnswerContent
//             answerContainer.appendChild(possibleAnswerContainer)
//             let possibleAnswerInput = document.createElement('input')
//             possibleAnswerInput.setAttribute('name', `a${ i }`)
//             possibleAnswerInput.setAttribute('type', 'radio')
//             possibleAnswerInput.setAttribute('id', `a${ i }`)
//             possibleAnswerInput.value = possibleAnswerContent
//             possibleAnswerContainer.appendChild(possibleAnswerInput)
//             // let possibleAnswerLabel = document.createElement('label')
//             // possibleAnswerLabel.htmlFor = `a${ i }`
//             // possibleAnswerLabel.innerText = possibleAnswerContent
//             // possibleAnswerContainer.appendChild(possibleAnswerLabel)
//             // possibleAnswerLabel.addEventListener('click', checkSelectedAnswer)
//         }
//     }
//     let checkAnswersButton = document.createElement('button')
//     checkAnswersButton.innerText = 'Check Your Answers Now'
//     checkAnswersButton.addEventListener('click', checkSelectedAnswers)
//     questionScreen.appendChild(checkAnswersButton)
// }



// const checkSelectedAnswer = function () {
//     let selectedAnswer = selectAnswer()
//     if (selectedAnswer === questions[currentQuestion].correct_answer) {
//         userScore++
//         currentQuestion++
//         console.log(currentQuestion)
//     } else {
//         currentQuestion++
//     }
//     console.log(`user score is ${ userScore }`)
//     console.log(`the current question is ${ currentQuestion }`)
//     if (currentQuestion < questions.length) {
//         displayQuestion(currentQuestion)
//     }
// }

//all questions at once option

// const checkSelectedAnswers = function () {
//     let possibleAnswers = document.querySelectorAll('input[name="quizQuestion"]')
//     console.log(possibleAnswers)
//     let selectedAnswers = []
//     for (let i = 0; i < possibleAnswers.length; i++) {
//         if (possibleAnswers[i].checked) {
//             selectedAnswers = possibleAnswers[i].value
//         }
//     }
//     console.log(`Selected answer is ${ selectedAnswer }`)
//     if (selectedAnswer === questions[0].correct_answer) {
//         userScore++
//         currentQuestion++
//     } else {
//         currentQuestion++
//     }
//     console.log(`user score is ${ userScore }`)
//     console.log(`the current question is ${ currentQuestion }`)
//     if (currentQuestion < questions.length) {
//         displayQuestion(currentQuestion)
//     }
// }

const endGame = function () {
    let questionScreen = document.getElementById('questionScreen')
    questionScreen.innerHTML = ''
    const finalScreenNode = document.createElement('div')
    questionScreen.appendChild(finalScreenNode)
    const finalMessage = document.createElement('h1')
    finalMessage.innerText = `Well played: you scored ${ userScore } points!`
    finalScreenNode.appendChild(finalMessage)
}




window.onload = function () {
    // HINTS
    // IF YOU ARE DISPLAYING ALL THE QUESTIONS AT ONCE:
    // For each question, create a container for wrapping it; then create a radio button
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
    // with, as options, both the correct answer and the incorrect ones
    // (you'll probably need to google how to get the value from a radio button in JS to evaluate the final score)
    //
    // IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
    // Display the first question with the text and the radio buttons
    // when the user selects an answer, pick the next question from the array and replace the old one with it
    // saving the user's choice in a variable
};

      // How to calculate the result? You can do it in 2 ways:
      // If you are presenting all the questions together, just take all the radio buttons and check if the selected answer === correct_answer
      // If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer



//taking code quiz
//needs a start button (use event listener to make that in html)

//timer will start: need timer function (set interval?)
//question will appear at the same time as the timer starts.(prompt?)
//question will appear with mutliple choice answers  (ln 7,8,9,10,11)
//query selector (less 16)
// Adds listener for keydown event
// document.addEventListener("keydown", keydownAction);
// Adds listener for keyup event
// document.addEventListener("keyup", keyupAction);)
//when i get the right answer, i get to continue on to a new question. (articlesDiv.children[0].style.fontSize = '50px';
//(headerDiv.children[1].style.color = 'white';)

//when i answer wrong, it subtracts time fromt he time. (set timer function- timeout?)
//game over when all questions have been answered, or timer hits 0 ()
//when gave over, user be able to save intials and score (set event listener)

//arrays with questions and possible answers at the top

var quizArray = [
    {
        question: "What is....",
        possibleAnswers: ["a", "b", "c", "d"],
        correctAnswer: "b"


    },
    {
        question: "What is....",
        possibleAnswers: ["a", "b", "c", "d"],
        correctAnswer: "b"


    }
]
var questionNumber = 0; 
//game number


var startButton = document.querySelector("#Start");

// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");
var timerInterval;
var secondsLeft = 10;
//the clock, i can subtract time if needed
function setTime() {
    // Sets interval in variable
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            // sendMessage();
            //end game function-tells user that game is over add info to leaderboard(alert? see ln46)
        }

    }, 1000);
}

function displayQuestion() {
var display = document.querySelector("#display");
display.textContent = quizArray [questionNumber].question
//this is the driving directiosn for the array
var choices = document.querySelector ("#choices");
//for loop to loop through possible answers and create a button each one
//create element (method to do ln 73)
//add text content
//on click button javascript 
//attached to on click function to check answers
//append html

}

// Function to create and append colorsplosion image
// function sendMessage() {
//     timeEl.textContent = " ";
//     var imgEl = document.createElement("img");
//     imgEl.setAttribute("src", "images/image_1.jpg");
//     mainEl.appendChild(imgEl);

// }

//  Select increment and decrement button elements
// var incrementEl = document.querySelector("#increment");
// var decrementEl = document.querySelector("#decrement");
// var countEl = document.querySelector("#count");

// Updates count on page
// function setCounterText() {
//     countEl.textContent = count;
// }
// Attach event listener to increment button element
// incrementEl.addEventListener("click", function () {
//     count++;
//     setCounterText();
// });

// Attach event listener to decrement button element
// decrementEl.addEventListener("click", function () {
//     // Action will fire if count is greater than  0
//     if (count > 0) {
//         count--;
//         setCounterText();
//     }
// });
// function keydownAction(event) {
//     // The key property holds the value of the key press
//     var keyPress = event.key;
//     // The code property holds the key's code 
//     var keyCode = event.code;
//     // Updates content on page
//     document.querySelector("#key").textContent = keyPress;
//     document.querySelector("#code").textContent = keyCode;
//     document.querySelector("#status").textContent = "KEYDOWN Event";
// }

// function keyupAction() {
//     // Updates event to KEYUP Event when key is released
//     document.querySelector("#status").innerHTML = "KEYUP Event";
// }
//   Adds listener for keydown event
//   document.addEventListener("keydown", keydownAction);
//   Adds listener for keyup event
//   document.addEventListener("keyup", keyupAction);

// Clicking on next button displays next image in carousel
// next.addEventListener("click", function (event) {
//     // Stops event from bubbling up and new window opening
//     event.stopPropagation();

//     navigate(1);
// });

// signUpButton.addEventListener("click", function (event) {
//     event.preventDefault();

//     var email = document.querySelector("#email").value;
//     var password = document.querySelector("#password").value;

//     if (email === "") {
//         displayMessage("error", "Email cannot be blank");
//     } else if (password === "") {
//         displayMessage("error", "Password cannot be blank");
//     } else {
//         displayMessage("success", "Registered successfully");
//         //add email and password to the localstorage
//         localStorage.setItem("email", email);
//         localStorage.setItem("password", password);
//         renderLastRegistered();
//         // TODO: Save email and password to localStorage and render the last registered user
//     }
// });


startButton.addEventListener("click", function (event) {
    event.preventDefault();
    setTime();
    displayQuestion();
})



$(document).ready(function () {
  console.log("Hello world");

  var questionContainer = document.getElementById("question");
  var counter = 0;
  var startButton = document.getElementById("start");
  var startContainer = document.getElementById("startContainer");
  var quizContainer = document.getElementById("quiz");
  var buttonA = document.getElementById("answerA");
  var buttonB = document.getElementById("answerB");
  var buttonC = document.getElementById("answerC");
  var buttonD = document.getElementById("answerD");
  var buttons = document.querySelectorAll(".js-button");
  var questions = [
    {
      question: "1. Commonly used data types do no include",
      a: "strings",
      b: "booleans",
      c: "alerts",
      d: "numbers",
      answer: "c",
    },
    {
      question: "2. The condition in an if/else statement enclosed within",
      a: "quotes",
      b: "curly braces",
      c: "parenthesis",
      d: "square brackets",
      answer: "c",
    },
    {
      question: "3. Arrays in javascript can be used to store ",
      a: "numbers/strings",
      b: "other arrays",
      c: "booleans",
      d: "all the above",
      answer: "d",
    },
    {
      question:
        "4. String values must be enclosed within ____ when being assisned to variables",
      a: "commas",
      b: "curly brackets",
      c: "quotes",
      d: "paranthesis",
      answer: "c",
    },
    {
      question:
        "5. A very useful tool during developmemt and debugging for printing content to the debuggers",
      a: "javascript",
      b: "terminal/trash",
      c: "for loops",
      d: "console log",
      answer: "d",
    },
  ];

  buttons.forEach(function (button) {
      button.addEventListener("click", function (e) {
        counter++;
    
        if (counter < questions.length) {
          updateHtml(counter);
        }
    else {startContainer.innerText="Done"
      
    }
      });
    });
  


function updateHtml(questionIndex){
  questionContainer.textContent = questions[questionIndex].question;
  buttonA.textContent = questions[questionIndex].a;
  buttonB.textContent = questions[questionIndex].b;
  buttonC.textContent = questions[questionIndex].c;
  buttonD.textContent = questions[questionIndex].d;
}





  startButton.addEventListener("click", function (e) {
    var clickButton=e.target

    clickButton.classList.add("d-none")
     updateHtml(0);
  });
  
  
  // function generateQuiz(questions ,quizContainer, resultsContainer, submitButton){

  //     function showQuestions(questions , quizContainer){

  //     function showResults(questions,quizContainer, resultsContainer){

  //     showQuestions(questions, quizContainer);

  //     submitButton.onclick= function(){
  //         showResults(questions,quizContainer, resultsContainer);

  //     }
  //     }

  //     }

  // }
  // function get (x){
  //     return document.getElementById(x);
  // }

  //     var codeQuiz=$(".code-quiz");
  //     document.getElementById("namebtn").addEventListener("click",submitname);

  //     document.createElement("code-quiz");

  //     var resultsContainer= document.getElementById("reults");
  //     var SubmitButton = document.getElementById("submit");

  //     generateQuiz(myQuestions, quizContainer,resultsContainer,submitButton);
  //     ​

  //     var name = localStorage.getItem("name");

  //     submitButton.addEventListener("click", function(event){

  //     })

  // function answerquestion(){
  //     var timeLeft = 60;
  // }
});

var quizStart = document.querySelector("#quiz-start");
var startQuizBtn = document.querySelector("#start-quiz-btn");
var mainContainer = document.querySelector("#main-container");

startQuizBtn.addEventListener('click', function() {
    quizStart.remove();
    // var quizQuestionEl = document.createElement('p');
    // quizQuestionEl.textContent = 'testing';
    // quizStart.append(quizQuestionEl);

    addQuestion();
})

function addQuestion() {
    var sectionCreate = document.createElement('section');
    var question1 = document.createElement('p');
    question1.textContent = 'A very useful too used during development and debugging for printing content to the debugger is:';
    
    var orderedListEl = document.createElement('ol');
    var responseOne = document.createElement('li');
    responseOne.textContent = 'JavaScript';
    var responseTwo = document.createElement('li');
    responseTwo.textContent = 'terminal / bash';
    var responseThree = document.createElement('li');
    responseThree.textContent = 'for loops';
    var responseFour = document.createElement('li');
    responseFour.textContent = 'console log';

    mainContainer.append(sectionCreate);
    mainContainer.append(question1);
    mainContainer.append(orderedListEl);
    mainContainer.append(responseOne);
    mainContainer.append(responseTwo);
    mainContainer.append(responseThree);
    mainContainer.append(responseFour);
    mainContainer.append(orderedListEl);
    
}

// Set the timer desired time ahead of current time
var timerDate = new Date();
timerDate.setSeconds(timerDate.getSeconds() + 75)

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var timer = timerDate - now;
    
  // Time calculations for seconds
  var minutes = Math.ceil((timer % (1000 * 60 * 60)) / (1000));
    
  // Output the result in an element with id="timer" ---------------------------------------------------
  document.getElementById("timer").innerHTML = "Time: " + minutes ;
    
  // If the count down is over, write some text 
  if (timer < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
});
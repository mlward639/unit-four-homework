//scores
var highscores = document.querySelector('#highscores');
var storedTime=[];
var storedInitials=[];
//time
var timerElement = document.querySelector("#timer");
var timer;
var timeLeft;
var timeLeftDisplay = 'Time: ' + timeLeft
timerElement.textContent = timeLeftDisplay
//questions/pages
var blankPage = document.querySelector('#blank-page');
var blankH1 = document.querySelector('#blank-h1');
var blankH2 = document.querySelector('#blank-h2');
var blankP = document.querySelector('#blank-p');
var blankOL = document.querySelector('#blank-ol');
var blankP2 = document.querySelector('#blank-p2');
var blankP3 = document.querySelector('#blank-p3');
var blankP4 = document.querySelector('#blank-p4');
var blankForm = document.querySelector("#highscore-initials-form")
var blankOL2 = document.querySelector('#blank-ol2');
var blankInput = document.querySelector('#blank-input');
var blankButton = document.querySelector('#blank-button');
var blankButton2 = document.querySelector('#blank-button2')
var blankButton3 = document.querySelector('#blank-button3')
var blankButton4 = document.querySelector('#blank-button4')

var liA = '';
var liB = '';
var liC = '';
var liD = '';
var answerButtonA = '';
var answerButtonB = '';
var answerButtonC = '';
var answerButtonD = '';
var correctAnswerText = '';
var wrongAnswerText = '';
var initials = '';
var liHSA = document.querySelector('#liHSA');
var liHSB = '';

//click highscores -- > highscore page
highscores.addEventListener('click', highscoresPage);

//functions
function correctAnswer (){
    blankP3.textContent = "Correct answer";
    console.log("correct answer");
    blankButton2.disabled = false;
    return;
};

function wrongAnswer (){
    blankP3.textContent = "Wrong answer";
    console.log("wrong answer");
    blankButton2.disabled = false;
    loseTimePenalty()
    return;
};

function loseTimePenalty () {
    timeLeft -=10;
};

//initial page
function initialPage () {
    //text to display on webpage
    blankH1.textContent = "Coding Quiz Challenge";
    blankP.textContent = "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your score-time by ten seconds."
    blankP.style.textAlign = "center";
    //Multiple choice
    //create li's for the 4 multiple choice answers
    liA = document.createElement("li");
    //create blank buttons A-D to display answer choices 
    answerButtonA = document.createElement("button");
    answerButtonA.textContent = '';
    //format button
    answerButtonA.style.padding = '1px 5px';
    answerButtonA.style.backgroundColor = "rgb(75, 0, 75)";
    answerButtonA.style.color = "white"
    answerButtonA.style.borderRadius = "8px";
    //append each button to corresponding li
    liA.appendChild(answerButtonA);
    //append each li to ol
    blankOL.appendChild(liA);
    liB = document.createElement("li");
    answerButtonB = document.createElement("button");
    answerButtonB.textContent = '';
    answerButtonB.style.padding = '1px 5px';
    answerButtonB.style.backgroundColor = "rgb(75, 0, 75)";
    answerButtonB.style.color = "white"
    answerButtonB.style.borderRadius = "8px";
    liB.appendChild(answerButtonB);
    blankOL.appendChild(liB);
    liC = document.createElement("li");
    answerButtonC = document.createElement("button");
    answerButtonC.textContent = '';
    answerButtonC.style.padding = '1px 5px';
    answerButtonC.style.backgroundColor = "rgb(75, 0, 75)";
    answerButtonC.style.color = "white"
    answerButtonC.style.borderRadius = "8px";
    liC.appendChild(answerButtonC);
    blankOL.appendChild(liC);
    liD = document.createElement("li");
    answerButtonD = document.createElement("button");
    answerButtonD.textContent = '';
    answerButtonD.style.padding = '1px 5px';
    answerButtonD.style.backgroundColor = "rgb(75, 0, 75)";
    answerButtonD.style.color = "white"
    answerButtonD.style.borderRadius = "8px";
    liD.appendChild(answerButtonD);
    blankOL.appendChild(liD);
    blankOL.style.display = "none";
    line = document.createElement("hr");
    blankOL.appendChild(line);
    //button
    blankButton.textContent = "Start Quiz";
    blankButton.style.backgroundColor = "purple";
    blankButton.style.color = "white"
    blankButton.style.borderRadius = "8px";
    blankButton.style.padding = '1px 5px';
    //hide elements not to be seen yet
    blankButton2.style.display = "none";
    blankInput.style.display = "none";
    blankForm.style.display = "none";
    blankP4.style.display = "none";
    blankButton3.style.display = "none";
    blankOL2.style.display = "none";
    liHSA.style.display = "none";
    timerElement.style.display = "none"
    timeLeftDisplay = 'Time: ' + timeLeft
    //if click button, start game by starting timer and going to next page
    blankButton.addEventListener("click", function() {
        timeLeft = 61;
        timerElement.style.display = "block";
        startTimer();  
        secondPage();
    });
    return;
}

initialPage()

function secondPage () {
    //format/style
    blankH1.style.display = "none";
    blankP.style.display = "block";
    blankP.style.textAlign = "left";
    blankButton2.style.display = "block";
    blankButton2.style.backgroundColor = "purple";
    blankButton2.style.color = "white"
    blankButton2.style.borderRadius = "8px";
    blankButton2.style.padding = '1px 5px';
    blankButton.style.display = "none";
    blankInput.style.display = "none";
    //Question #
    blankH2.textContent = "Question 1";
    //Question
    blankP.textContent = "Commonly used data types DO NOT include:";
    //Multiple choice
    blankOL.style.display = "block";
    answerButtonA.textContent = "strings";
    answerButtonB.textContent = "booleans";
    answerButtonC.textContent = "alerts";
    answerButtonD.textContent = "numbers";
    //Answer
    answerButtonA.addEventListener("click", wrongAnswer);
    answerButtonB.addEventListener("click", wrongAnswer);
    answerButtonC.addEventListener("click", correctAnswer)
    answerButtonD.addEventListener("click", wrongAnswer);
    //Next button
    blankButton2.textContent = "Next"; 
    //can't click next button until answer is chosen
    blankButton2.disabled = true;
    blankButton2.addEventListener("click", function() {
        thirdPage();    
        //remove correct/wrong answer from last question
        blankP3.textContent = ''
        //allow to click next button
        blankButton2.disabled = true;
    });
    return; //question for grader... are all these returns needed?
}
//secondPage()  

function thirdPage () {
    //Question #
    blankH2.textContent = "Question 2";
    //Question
    blankP.textContent = "The condition in an if / else statement is enclosed within ____. ";
    //Multiple choice
    answerButtonA.textContent = "quotes";
    answerButtonB.textContent = "curly brackets";
    answerButtonC.textContent = "parenthesis";
    answerButtonD.textContent = "square brackets";
    //Answers
    answerButtonA.addEventListener("click", wrongAnswer);
    answerButtonB.addEventListener("click", wrongAnswer);
    answerButtonC.addEventListener("click", correctAnswer)
    answerButtonD.addEventListener("click", wrongAnswer);
    //click next button goes to next page
    blankButton2.addEventListener("click", function() {
        fourthPage();    
    });
    return;
}
//thirdPage()

function fourthPage() {
    //Question
    blankH2.textContent ="Question 3"
    blankP.textContent = "Arrays in JavaScript can be used to store ____."
    //Multiple choice
    answerButtonA.textContent = "numbers and strings";
    answerButtonB.textContent = "other arrays";
    answerButtonC.textContent = "booleans";
    answerButtonD.textContent = "all of the above";
    //Answer
    answerButtonA.addEventListener("click", wrongAnswer);
    answerButtonB.addEventListener("click", wrongAnswer);
    answerButtonC.addEventListener("click", wrongAnswer)
    answerButtonD.addEventListener("click", correctAnswer);
    //Next button
    blankButton2.addEventListener("click", function() {
        fifthPage();    
    });
    return;
}
//fourthPage()

function fifthPage () {
    //Question #
    blankH2.textContent = "Question 4";
    //Question
    blankP.textContent = "String values must be enclosed within _____ when being assigned to variables.";
    //Multiple choice
    answerButtonA.textContent = "commas";
    answerButtonB.textContent = "curly brackets";
    answerButtonC.textContent = "quotes";
    answerButtonD.textContent = "parenthesis";
    //Answer
    answerButtonA.addEventListener("click", wrongAnswer);
    answerButtonB.addEventListener("click", wrongAnswer);
    answerButtonC.addEventListener("click", correctAnswer)
    answerButtonD.addEventListener("click", wrongAnswer);
    //Next
    blankButton2.addEventListener("click", function() {
        sixthPage(); 
    });
    return;
}
//fifthPage()

function sixthPage(){
    //Question
    blankH2.textContent = "Question 5";
    blankP.textContent = "A very useful tool used during development and debugging for printing content to the debugger is: "
    blankP3.textContent = ''
    //Multiple choice
    answerButtonA.textContent = "javascript";
    answerButtonB.textContent = "terminal/bash";
    answerButtonC.textContent = "for loops";
    answerButtonD.textContent = "console.log";
    //Answer
    answerButtonA.addEventListener("click", wrongAnswer);
    answerButtonB.addEventListener("click", wrongAnswer);
    answerButtonC.addEventListener("click", wrongAnswer)
    answerButtonD.addEventListener("click", correctAnswer);
    //Next
    blankButton2.addEventListener("click", function() {
        gameComplete(); 
        clearInterval(timer);
        storeTime();
        timerElement.style.display = "none";
    });
    return;
}
//sixthPage()

function gameComplete() {
    //stop timer
    clearInterval(timer);
    //page text
    blankH2.textContent = "All done!";
    blankP.textContent = "Your final score is: " + timeLeft
    console.log("time left " + timeLeft)
    blankForm.style.display = "inline-block";
    blankOL.style.display = "none";
    blankP2.style.display = "inline-block";
    blankInput.style.display = "inline-block";
    blankButton.style.display = "inline-block";
    //submit
    blankButton3.textContent = "Submit";
    blankButton2.style.display = "none";
    blankButton.style.display = "none";
    blankP3.style.display = "none";
    blankButton3.style.display = "block";
    //restart button
    blankButton4.textContent = "Restart"
    blankButton3.style.backgroundColor = "purple";
    blankButton3.style.color = "white"
    blankButton3.style.borderRadius = "8px";
    blankButton3.style.padding = '1px 5px';
    blankButton3.style.marginLeft='203px'
    blankButton4.style.display = "block";
    blankButton4.style.backgroundColor = "purple";
    blankButton4.style.color = "white"
    blankButton4.style.borderRadius = "8px";
    blankButton4.style.padding = '1px 5px';
    blankButton4.style.marginLeft='203px'
    //click submit button to go to next page (highscores), store time & initials
    blankButton3.addEventListener("click", function() {
        storeInitials();
        highscoresPage()
    })
    //click restart button to go back to beginning of quiz
    blankButton4.addEventListener("click", initialPage);
    return;
}
//gameComplete()

//highscores page
function highscoresPage () {
    blankH2.style.display = "none";
    blankP.style.display = "none";
    blankP2.style.display = "none";
    blankForm.style.display = "none";
    blankButton3.style.display = "none";
    blankH1.style.display = "none";
    blankButton.style.display = "none";
    blankOL2.style.display = "block"; 
    liHSA.style.display = "block";
    blankP4.style.display = "block";
    liHSA.textContent = initials + " — " + timeLeft;
    console.log("stored time and stored initials: " + storedTime + storedInitials)

    if (storedTime.length > 0 && storedInitials.length > 0){
        liHSB = document.createElement("li");
        liHSB.textContent = storedTime + "-" + storedInitials; 
        blankOL2.appendChild(liHSA);
        liHSB.style.backgroundColor = "rgba(75, 0, 75, 0.226)";
    }
    //click restart button to go back to beginning of quiz
    blankButton4.addEventListener("click", reLoad());
    return;
}
//highscoresPage() */

//other functions
function storeTime(){
    localStorage.setItem("storedTime", JSON.stringify(timeLeft));
    console.log("storedTime post string: " + timeLeft);
}

function storeInitials(){
    initials = blankInput.value.trim();
    localStorage.setItem("storedInitials", JSON.stringify(initials));
    console.log("storedinitials post string: " + initials)
};

function getStoredTime(){
    storedTime = JSON.parse(localStorage.getItem("storedTime"));
    console.log("get Stored time: " + storedTime); 

} 
function getStoredInitials(){
    storedInitials = JSON.parse(localStorage.getItem("storedTime"));
    if (storedTime !== null){
        document.querySelector(".message").textContent = "No entries"
    }
}
 
//timer
function startTimer() {
    //set timer
    timer = setInterval(function() {
      timeLeft--;
      timerElement.textContent = timeLeft + "seconds";
      if (timeLeft <= 0) {
          gameComplete();
          blankP.textContent = "You did not finish in time. Try again."
      }
    }, 1000);
}
 

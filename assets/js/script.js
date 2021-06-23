//why does queryselector ('#') work but not getelementbyid ????
//scores
var highscores = document.querySelector('#highscores');
var storedTime = [];
var storedInitials = [];
var printInitials = '';
var printTime = '';
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
var liHS = '';
var liHSB = '';
var liHSC = '';
var liHSD = '';

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
    blankH1.textContent = "Coding Quiz Challenge";
    blankP.textContent = "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your score-time by ten seconds."
    blankP.style.textAlign = "center";
    //Multiple choice
    liA = document.createElement("li");
    answerButtonA = document.createElement("button");
    answerButtonA.textContent = '';
    answerButtonA.style.padding = '1px 5px';
    answerButtonA.style.backgroundColor = "rgb(75, 0, 75)";
    answerButtonA.style.color = "white"
    answerButtonA.style.borderRadius = "8px";
    liA.appendChild(answerButtonA);
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
    timerElement.style.display = "none"
    timeLeftDisplay = 'Time: ' + timeLeft
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
    blankButton2.disabled = true;
    blankButton2.addEventListener("click", function() {
        thirdPage();    
        //remove correct/wrong answer from last question
        blankP3.textContent = ''
        blankButton2.disabled = true;
    });
    return; //are these returns needed???
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
        storeTime();
        clearInterval(timer);
        timerElement.style.display = "none";
        //store timeLeft to local storage
    });
    return;
}
//sixthPage()

function gameComplete() {
    blankH2.textContent = "All done!";
    blankP.textContent = "Your final score is: " + timeLeft
    console.log("time left " + timeLeft)
    blankForm.style.display = "inline-block";
    blankOL.style.display = "none";
    blankP2.style.display = "inline-block";
    blankInput.style.display = "inline-block";
    blankButton.style.display = "inline-block";
    blankButton.textContent = "Submit";
    blankButton2.style.display = "none";
    blankButton.addEventListener("click", function() {
        highscoresPage(); 
        storeTime();
        storeInitials();
    })
    return;
}
//gameComplete()

//finish highscores
function highscoresPage () {
    blankH2.style.display = "none";
    blankP.style.display = "none";
    blankOL.style.display = "none";
    blankOL2.style.display = "block" //see if need to hide this in earlier sections
    blankP4.textContent
    //printHighscores()

    /* try if printfxn doesnt work
    if (storedTime.length > 0 && storedInitials.length > 0){
        liHSA = document.createElement("li");
        liHSA.innerHTML = storedTime[1] + "-" + storedInitials[1]; //not showing bc says they are undefined??? but they are showing up 
        console.log("stored time: " + storedTime + "stored intials: " + storedInitials)  
        blankOL2.appendChild(liHSA);
        liHSA.style.backgroundColor = "rgba(75, 0, 75, 0.226)";
        console.log("LIHSA content: " + liHSA);
    } if (storedTime.length > 1 && storedInitials.length > 1){
        liHSB = document.createElement("li");
        liHSB.innerHTML = storedTime[1] + "-" + storedInitials[1]; //not showing bc says they are undefined??? but they are showing up 
        blankOL2.appendChild(liHSB);
        liHSB.style.backgroundColor = "rgba(75, 0, 75, 0.226)";
    } if (storedTime.length > 2 && storedInitials.length > 2){
        liHSC and D, 
    }
    //try to figure out for loop here */

    //list of entered initials-score. will need to store to local source. also look at similar assignment (todos)
    //2 buttons: go back and clear highscores
    //why does timer restart here, even when i put     clearInterval(timer); again here......?????
    timerElement.style.display = "none" //remove if can get timer to stop restarting on this page
    blankButton.addEventListener("click", function() {
        initialPage(); 
    })
    return;
}
//highscoresPage()


var storeScore = {
    initials: initials.value,
    timeLeft: timeLeft.value,
}

function storeTimeInitials(){
    localStorage.setItem("storeScore", JSON.stringify(storeScore));
    console.log("storeScore: " + storeScore);

}

/* function storeInitials(){
    initials = blankInput.value.trim();
    storedInitials = [initials];
    localStorage.setItem("storedInitials", JSON.stringify(storedInitials));
    console.log("storedinitials post string: " + storedInitials)
};
function getAllTimes(){
    storedTime = JSON.parse(localStorage.getItem("storedTimeLeft"));
    console.log("get Stored time: " + storedTime); 

} */
function getTimeInitials(){
    var lastScore = JSON.parse(localStorage.getItem("storeScore"));
    if (lastScore !== null){
        document.querySelector(".message").textContent = lastScore
    }
    
}
    /* storedInitials = JSON.parse(localStorage.getItem("storedInitials"));
    console.log("get storedInitials: " + storedInitials);
}

function printHighscores (){
    for (i=0; i < storedInitials.length; i++){
        if (storedInitials.length >= 0){
        liHS = document.createElement("li");
        liHS.text(storedInitials[i] + "-" + storedTime[i]);
        blankOL2.appendChild(liHS);
        }
        else if (storedInitials.length = 0) {
            liHS = document.createElement("li");
            liHS.text("No highscores to display");
            blankOL2.appendChild(liHS);
        }
    }

}
*/
 
//timer
function startTimer() {
    //set timer
    timer = setInterval(function() {
      timeLeft--;
      timerElement.textContent = timeLeft + "seconds";
      }, 1000);
}
 
/* media queries --if needed???*/
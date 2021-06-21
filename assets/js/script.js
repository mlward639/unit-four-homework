//why does queryselector ('#') work but not getelementbyid ????
var highscores = document.querySelector('#highscores');

var timer = document.querySelector('#timer');

var blankPage = document.querySelector('#blank-page');
var blankH1 = document.querySelector('#blank-h1');
var blankH2 = document.querySelector('#blank-h2');
var blankP = document.querySelector('#blank-p');
var blankOL = document.querySelector('#blank-ol');
var blankP2 = document.querySelector('#blank-p2');
var blankInput = document.querySelector('#blank-input');
var blankButton = document.querySelector('#blank-button');
var blankButton2 = document.querySelector('#blank-button2')
var liA = '';
var liB = '';
var liC = '';
var liD = '';
var optA = '';
var optB = '';
var optC = '';
var optD = '';
var answerButtonA = ''
var answerButtonB = ''
var answerButtonC = ''
var answerButtonD = ''

//initial page
//add style and whatnot
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
    //button
    blankButton.textContent = "Start Quiz";
    blankButton.style.backgroundColor = "purple";
    blankButton.style.color = "white"
    blankButton.style.borderRadius = "8px";

    blankButton.style.padding = '1px 5px';
    //how to center the submit button;
    blankButton2.style.display = "none";
    blankInput.style.display = "none";
    blankButton.addEventListener("click", function() {
        secondPage();
    });
    return;
}
initialPage()

function secondPage () {
    blankH1.style.display = "none";
    blankP.style.display = "block";
    blankP.style.textAlign = "left";
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


    blankButton.textContent = "Next" 
    blankButton2.style.display = "none";
    blankInput.style.display = "none";
    //ADD click to display right or wrong answer
    blankButton.addEventListener("click", function() {
        thirdPage();
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
    //ADD click to display right or wrong answer
    blankButton.addEventListener("click", function() {
        fourthPage();    
    });
    return;
}
//thirdPage()

function fourthPage() {
    blankH2.textContent ="Question 3"
    blankP.textContent = "Arrays in JavaScript can be used to store ____."
    //Multiple choice
    answerButtonA.textContent = "numbers and strings";
    answerButtonB.textContent = "other arrays";
    answerButtonC.textContent = "booleans";
    answerButtonD.textContent = "all of the above";
    //ADD click to display right or wrong answer
    blankButton.addEventListener("click", function() {
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
    //ADD click to display right or wrong answer
    blankButton.addEventListener("click", function() {
        sixthPage(); 
    });
    return;
}
//fifthPage()

function sixthPage(){
    blankH2.textContent = "Question 5";
    blankP.textContent = "A very useful tool used during development and debugging for printing content to the debugger is: "
    //Multiple choice
    answerButtonA.textContent = "javascript";
    answerButtonB.textContent = "terminal/bash";
    answerButtonC.textContent = "for loops";
    answerButtonD.textContent = "console.log";
    //ADD click to display right or wrong answer
    blankButton.addEventListener("click", function() {
        gameComplete(); 
    });
    return;
}
//sixthPage()

function gameComplete() {
    blankH2.textContent = "All done!";
    blankP.textContent = "Your final score is: " // + variaable that equals the score
    blankOL.style.display = "none";
    blankP2.textContent = "Enter your initials here:    "
    blankP2.style.display = "inline-block";
    blankInput.style.display = "inline-block";
    blankButton.style.display = "inline-block";
    blankButton.textContent = "Submit"
    // change name of blanbk button from NEXT to SUBMIT -> also link to highscores page in the highscores part in the header
    blankButton.addEventListener("click", function() {
        highscores(); 
    })
    return;
}
//gameComplete()

function highscores () {
    //list of entered initials-score. will need to store to local source. also look at similar assignment (todos)
    //2 buttons: go back and clear highschores

}
//highscores()


//timer





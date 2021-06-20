//why does queryselector ('#') work but not getelementbyid ????
var highscores = document.querySelector('#highscores');

var timer = document.querySelector('#timer');

var blankPage = document.querySelector('#blank-page');
var blankH1 = document.querySelector('#blank-h1');
var blankH2 = document.querySelector('#blank-h2');
var blankP = document.querySelector('#blank-p');
var blankOL = document.querySelector('#blank-ol');
var blankInput = document.querySelector('#blank-input');
var blankButton = document.querySelector('#blank-button');
var blankButton2 = document.querySelector('#blank-button2')
var li =  


//initial page
//add style and whatnot
function initialPage () {
    blankH1.textContent = "Coding Quiz Challenge";
    blankP.textContent = "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your score-time by ten seconds."
    blankButton //add name "start quiz" and event listener with click leading to next page
}
//initialPage()

function secondPage () {
    //Question #
    blankH2.textContent = "Question 1";
    //Question
    blankP.textContent = "Commonly used data types DO NOT include:";
    //Multiple choice
    var liA = document.createElement("li");
    var optA = document.createTextNode("strings");
    liA.appendChild(optA);
    blankOL.appendChild(liA);
    var liB = document.createElement("li");
    var optB = document.createTextNode("booleans");
    liB.appendChild(optB);
    blankOL.appendChild(liB);
    var liC = document.createElement("li");
    var optC = document.createTextNode("alerts");
    liC.appendChild(optC);
    blankOL.appendChild(liC);
    var liD = document.createElement("li");
    var optD = document.createTextNode("numbers");
    liD.appendChild(optD);
    blankOL.appendChild(liD);
    blankButton // next question or maybe just do "click" -> correct answer/incorrect msg --> "click" --> next question
}
//secondPage()

function thirdPage () {
    //Question #
    blankH2.textContent = "Question 2";
    //Question
    blankP.textContent = "The condition in an if / else statement is enclosed within ____. ";
    //Multiple choice
    var liA = document.createElement("li");
    var optA = document.createTextNode("quotes");
    liA.appendChild(optA);
    blankOL.appendChild(liA);
    var liB = document.createElement("li");
    var optB = document.createTextNode("curly brackets");
    liB.appendChild(optB);
    blankOL.appendChild(liB);
    var liC = document.createElement("li");
    var optC = document.createTextNode("parenthesis");
    liC.appendChild(optC);
    blankOL.appendChild(liC);
    var liD = document.createElement("li");
    var optD = document.createTextNode("square brackets");
    liD.appendChild(optD);
    blankOL.appendChild(liD);
    blankButton // next question or maybe just do "click" -> correct answer/incorrect msg --> "click" --> next question
}
//thirdPage()

function fourthPage() {
    blankH2.textContent ="Question 3"
    blankP.textContent = "Arrays in JavaScript can be used to store ____."
    var liA = document.createElement("li");
    var optA = document.createTextNode("numbers and strings")
    liA.appendChild(optA);
    blankOL.appendChild(liA);
    var liB = document.createElement("li");
    var optB = document.createTextNode("other arrays");
    liB.appendChild(optB);
    blankOL.appendChild(liB);
    var liC = document.createElement("li");
    var optC = document.createTextNode("booleans");
    liC.appendChild(optC);
    blankOL.appendChild(liC);
    var liD = document.createElement("li");
    var optD = document.createTextNode("all of the above");
    liD.appendChild(optD);
    blankOL.appendChild(liD);
    //blankButton ???
}
//fourthPage()

function fifthPage () {
    //Question #
    blankH2.textContent = "Question 4";
    //Question
    blankP.textContent = "String values must be enclosed within _____ when being assigned to variables.";
    //Multiple choice
    var liA = document.createElement("li");
    var optA = document.createTextNode("commas");
    liA.appendChild(optA);
    blankOL.appendChild(liA);
    var liB = document.createElement("li");
    var optB = document.createTextNode("curly brackets");
    liB.appendChild(optB);
    blankOL.appendChild(liB);
    var liC = document.createElement("li");
    var optC = document.createTextNode("quotes");
    liC.appendChild(optC);
    blankOL.appendChild(liC);
    var liD = document.createElement("li");
    var optD = document.createTextNode("parenthesis");
    liD.appendChild(optD);
    blankOL.appendChild(liD);
    blankButton // next question or maybe just do "click" -> correct answer/incorrect msg --> "click" --> next question
}
//fifthPage()

function sixthPage(){
    blankH2.textContent = "Question 5";
    blankP.textContent = "A very useful tool used during development and debugging for printing content to the debugger is: "
    var liA = document.createElement("li");
    var optA = document.createTextNode("javascript");
    liA.appendChild(optA);
    blankOL.appendChild(liA);
    var liB = document.createElement("li");
    var optB = document.createTextNode("terminal/bash");
    liB.appendChild(optB);
    blankOL.appendChild(liB);
    var liC = document.createElement("li");
    var optC = document.createTextNode("for loops");
    liC.appendChild(optC);
    blankOL.appendChild(liC);
    var liD = document.createElement("li");
    var optD = document.createTextNode("console.log");
    liD.appendChild(optD);
    blankOL.appendChild(liD);
    //blankButton ???
}
//sixthPage()

function gameComplete() {
    blankH2.textContent = "All done!";
    blankP.textContent = "Your final score is: " //variaable that equals the score
    blankInput 
    blankButton //SUBMIT -> highscore page, also link this to the highscores part in the header
}

function highscores () {
    //list of entered initials-score. will need to store to local source. also look at similar assignment (todos)
    //2 buttons: go back and clear highschores

}






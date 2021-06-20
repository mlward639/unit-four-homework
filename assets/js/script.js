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


//initial page
//add style and whatnot
function initialPage () {
    blankH1.textContent = "Coding Quiz Challenge";
    blankP.textContent = "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your score-time by ten seconds."
    blankButton.textContent = "start quiz";
    blankButton2.style.display = "none";
    blankInput.style.display = "none";
    return;
}

//initialPage()

function secondPage () {
    //Question #
    blankH2.textContent = "Question 1";
    //Question
    blankP.textContent = "Commonly used data types DO NOT include:";
    //Multiple choice
    liA = document.createElement("li");
    optA = document.createTextNode("strings");
    liA.appendChild(optA);
    blankOL.appendChild(liA);
    liB = document.createElement("li");
    optB = document.createTextNode("booleans");
    liB.appendChild(optB);
    blankOL.appendChild(liB);
    liC = document.createElement("li");
    optC = document.createTextNode("alerts");
    liC.appendChild(optC);
    blankOL.appendChild(liC);
    liD = document.createElement("li");
    optD = document.createTextNode("numbers");
    liD.appendChild(optD);
    blankOL.appendChild(liD);
    blankButton.textContent = "Next" 
    blankButton2.style.display = "none";
    blankInput.style.display = "none";
    //ADD click to display right or wrong answer
    blankButton.addEventListener("click", function() {
        thirdPage();

    });
}
secondPage() //comment out once get initial page working and that will be the only function un-commented out


function thirdPage () {
    //Question #
    blankH2.textContent = "Question 2";
    //Question
    blankP.textContent = "The condition in an if / else statement is enclosed within ____. ";
    //Multiple choice
    liA.replaceChild(document.createTextNode("quotes"), liA.childNodes[0]);
    liB.replaceChild(document.createTextNode("curly brackets"), liB.childNodes[0]);
    liC.replaceChild(document.createTextNode("parenthesis"), liC.childNodes[0]);
    liD.replaceChild(document.createTextNode("square brackets"), liD.childNodes[0]);
    //ADD click to display right or wrong answer
    blankButton.addEventListener("click", function() {
        fourthPage();    
    });
}
//thirdPage()

function fourthPage() {
    blankH2.textContent ="Question 3"
    blankP.textContent = "Arrays in JavaScript can be used to store ____."
    //Multiple choice
    liA.replaceChild(document.createTextNode("numbers and strings"), liA.childNodes[0]);
    liB.replaceChild(document.createTextNode("other arrays"), liB.childNodes[0]);
    liC.replaceChild(document.createTextNode("booleans"), liC.childNodes[0]);
    liD.replaceChild(document.createTextNode("all of the above"), liD.childNodes[0]);
    //ADD click to display right or wrong answer
    blankButton.addEventListener("click", function() {
        fifthPage();    
    });
}
//fourthPage()

function fifthPage () {
    //Question #
    blankH2.textContent = "Question 4";
    //Question
    blankP.textContent = "String values must be enclosed within _____ when being assigned to variables.";
    //Multiple choice
    liA.replaceChild(document.createTextNode("commas"), liA.childNodes[0]);
    liB.replaceChild(document.createTextNode("curly brackets"), liB.childNodes[0]);
    liC.replaceChild(document.createTextNode("quotes"), liC.childNodes[0]);
    liD.replaceChild(document.createTextNode("parenthesis"), liD.childNodes[0]);
    //ADD click to display right or wrong answer
    blankButton.addEventListener("click", function() {
        sixthPage(); 
    });
}
//fifthPage()

function sixthPage(){
    blankH2.textContent = "Question 5";
    blankP.textContent = "A very useful tool used during development and debugging for printing content to the debugger is: "
    //Multiple choice
    liA.replaceChild(document.createTextNode("javascript"), liA.childNodes[0]);
    liB.replaceChild(document.createTextNode("terminal/bash"), liB.childNodes[0]);
    liC.replaceChild(document.createTextNode("for loops"), liC.childNodes[0]);
    liD.replaceChild(document.createTextNode("console.log"), liD.childNodes[0]);
    //ADD click to display right or wrong answer
    blankButton.addEventListener("click", function() {
        gameComplete(); 
    });
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
    // change name of blanbk button from NEXT to SUBMIT -> also link to highscores page in the highscores part in the header
    blankButton.addEventListener("click", function() {
        highscores(); 
    })
}
//gameComplete()

function highscores () {
    //list of entered initials-score. will need to store to local source. also look at similar assignment (todos)
    //2 buttons: go back and clear highschores

}
//highscores()








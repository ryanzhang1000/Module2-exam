// Mario or Link
"use strict"
//Event Listeners
document.getElementById('mariobtn').addEventListener('click', mariobutton);
document.getElementById('linkbtn').addEventListener('click', linkbutton);
document.getElementById('atackbtn').addEventListener('click', attackbutton);
document.getElementById('battlebtn').addEventListener('click', battlebutton);

//Event Functions
function mariobutton() {
    document.getElementById('image').src= "images/mario.png";
    document.getElementById('main').style.backgroundColor= "pink";
    document.getElementById('background').style.backgroundColor= "red";
    document.getElementById('hero').innerHTML = "The Mushroom Kingdom";
    document.getElementById('love').innerHTML = "Princess Peach";
    document.getElementById('nemesis').innerHTML = "King Bowser";
}

function linkbutton() {
    document.getElementById('image').src= "images/link.png";
    document.getElementById('main').style.backgroundColor= "lightgreen";
    document.getElementById('background').style.backgroundColor= "green";
    document.getElementById('hero').innerHTML = "Hyrule";
    document.getElementById('love').innerHTML = "Princess Zelda";
    document.getElementById('nemesis').innerHTML = "Ganon";
}

function attackbutton() {
    //Input
    let marios = document.getElementById('mario-s').value;
    let mariod = document.getElementById('mario-d').value;
    let links = document.getElementById('link-s').value;
    let linkd = document.getElementById('link-d').value;

    
    //Process
    let marioattack = 2*(marios) / linkd + 5;
    let linkattack = (links - -15) / mariod;
    
    marioattack *=1;
    marioattack = Math.floor(marioattack);
    marioattack /=1;
    
    linkattack *=1;
    linkattack = Math.floor(linkattack);
    linkattack /=1;

    //Output
    document.getElementById('marioatk').innerHTML = marioattack;
    document.getElementById('linkatk').innerHTML = linkattack;
}

function battlebutton() {
    //Input
    let word1 = document.getElementById('text1').value;
    let word2 = document.getElementById('text2').value;
    let word3 = document.getElementById('text3').value;

    //Message
    let message = '"There are too many ' + word1 + ' to get to the ' + word2 + '!"' + '"Holy ' + word3 + '!"'

    //Output
    document. getElementById('sentence').innerHTML = message;
}


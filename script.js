var player_score=0;
var computer_score=0;
function computerPlay(){
    var result=Math.floor(Math.random()*3);
    if (result==0){
        return "rock";
    }
    else if(result==1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection=playerSelection.toLowerCase();
    if(playerSelection==computerSelection){
        return "Draw";
    }
    else if(playerSelection=="rock"&&computerSelection=="paper"){
        return "Lose";
    }
    else if(playerSelection=="rock"&&computerSelection=="scissors"){
        return "Win";
    }
    else if(playerSelection=="paper"&&computerSelection=="scissors"){
        return "Lose";
    }
    else if(playerSelection=="paper"&&computerSelection=="rock"){
        return "Win";
    }
    else if(playerSelection=="scissors"&&computerSelection=="paper"){
        return "Win";
    }
    else if(playerSelection=="scissors"&&computerSelection=="rock"){
        return "Lose";
    }


}

function restartGame(){
    player_score=0;
    computer_score=0;
    document.getElementById("playerScore").innerHTML=0;
    document.getElementById("computerScore").innerHTML=0;
    document.getElementById("result").innerHTML="";
    clearChoices();
    document.getElementById("restartButton").remove();

    document.getElementById("rockbutton").disabled=false;
    document.getElementById("paperbutton").disabled=false;
    document.getElementById("scissorsbutton").disabled=false;
}

function restartButton(){


    document.getElementById("rockbutton").disabled=true;
    document.getElementById("paperbutton").disabled=true;
    document.getElementById("scissorsbutton").disabled=true;
    if(player_score<computer_score){
        document.getElementById("result").innerHTML="Lost the game";
    }
    else{
        document.getElementById("result").innerHTML="Won the game";
    }
    document.getElementById("rockbutton").onlick=null;
    document.getElementById("paperbutton").onlick=null;
    document.getElementById("scissorsbutton").onlick=null;
    var button=document.createElement("button");
    button.innerHTML="Restart Game";
    button.id="restartButton";
    button.addEventListener("click",()=>restartGame());
    document.getElementById("restart").appendChild(button);


}

function gameResult(){
    if(player_score<computer_score){
        document.getElementById("result").innerHTML="Lost the game";
    }
    else{
        document.getElementById("result").innerHTML="Won the game";
    }
}


function updateScoreboard(){
    document.getElementById("playerScore").innerHTML=player_score;
    document.getElementById("computerScore").innerHTML=computer_score;
    if(player_score==5){
        restartButton();
    }
}

function showPlayerChoice(playerSelection){
    var img=document.createElement("img");
    img.src="images/"+playerSelection+".png";
    img.width=150;
    img.height=150;
    document.getElementById("playerChoice").appendChild(img);
}
function showComputerChoice(computerSelection){
    var img=document.createElement("img");
    img.src="images/"+computerSelection+".png";
    img.width=150;
    img.height=150;
    document.getElementById("computerChoice").appendChild(img);
}

function clearChoices(){
    var img1=document.getElementById("playerChoice").firstChild;
    var img2=document.getElementById("computerChoice").firstChild;
    if(img1!=null){
        img1.remove();
    }
    if(img2!=null){
        img2.remove();
    }
}
function displayResult(result){
    document.getElementById("result").innerHTML=result;

}

function playerClick(playerSelection){

    var computerSelection=computerPlay();
    clearChoices();
    showPlayerChoice(playerSelection);
    showComputerChoice(computerSelection);
    var result=playRound(playerSelection,computerSelection); 
    if(result=="Win"){
        player_score+=1;
    }
    else if(result=="Lose"){
        computer_score+=1;
    }
    else{

    }
    displayResult(result);
    updateScoreboard();
    
}




document.getElementById("rockbutton").addEventListener("click",function(){playerClick("rock");});
document.getElementById("paperbutton").addEventListener("click",function(){playerClick("paper");});
document.getElementById("scissorsbutton").addEventListener("click",function(){playerClick("scissors");});

//game();

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

function game(){
    const numRounds=5;
    var player_score=0;
    var computer_score=0;
    for (var i=1;i<=numRounds;i++){
        var playerSelection=prompt("Rock,Paper,Scissors?");
        var computerSelection=computerPlay();
        var result=playRound(playerSelection,computerSelection);
        alert(result);
        if(result="Win"){
            player_score+=1;
        }
        else if(result="Draw"){
            player_score+=1;
            computer_score+=1;
        }
        else if(result="Lose"){
            computer_score+=1;
        }
    }
    if(player_score>computer_score){
        alert("You have won the game");
    }
    else if(player_score<computer_score){
        alert("You have lost the game");
    }
    else{
        alert("Draw");
    }

}

game();
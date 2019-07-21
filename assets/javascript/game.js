$(document).ready(function () {
    // Randomomizes Goal Score
    let randomGoalScore = Math.floor(Math.random() * 101 + 19);


    let playerTotal = 0;
    let wins = 0;
    let losses = 0;
    // Randomomizes buttons between 1-12
    let btn1 = Math.floor(Math.random() * 11 + 1);
    let btn2 = Math.floor(Math.random() * 11 + 1);
    let btn3 = Math.floor(Math.random() * 11 + 1);
    let btn4 = Math.floor(Math.random() * 11 + 1);
    // 

    // Assigns Goal score/Player's points/Wins/Losses
    $(".goalScore").text(randomGoalScore);
    $(".playerPoints").text(playerTotal);
    $("#wins").text(wins);
    $("#losses").text(losses);
    // 
    
    // If win or loss
    //adds win or loss 
    function chickenDinner() {
        wins++;
        $("#wins").text(wins);
    }

    function justALoser() {
        losses++;
        $("#losses").text(losses);
    }
    // 
    function reset (){
        randomGoalScore = Math.floor(Math.random() * 101 + 19);
        $(".goalScore").text(randomGoalScore);        
        btn1 = Math.floor(Math.random() * 11 + 1);
        btn2 = Math.floor(Math.random() * 11 + 1);
        btn3 = Math.floor(Math.random() * 11 + 1);
        btn4 = Math.floor(Math.random() * 11 + 1);
        playerTotal = 0;
        $(".playerPoints").text(playerTotal);
    }
    // Checks score
    function checkScore(){
        if (playerTotal === randomGoalScore){
            chickenDinner();
            reset ();
        } else if (playerTotal > randomGoalScore){
            justALoser();
            reset();
        }
    }
    // Functionality of button 1
    $("#btn1").on("click", function (){        
        let playerTotalNew = playerTotal += btn1;
        if (playerTotal === randomGoalScore){
            chickenDinner();
            reset();
        }else if(playerTotal > randomGoalScore){
            justALoser();
            reset();
        }else{
        $(".playerPoints").text(playerTotalNew);
        }
    })
    // Functionality of button 2
    $("#btn2").on("click", function (){        
        let playerTotalNew = playerTotal += btn2;
        if (playerTotal === randomGoalScore){
            chickenDinner();
            reset();
        }else if(playerTotal > randomGoalScore){
            justALoser();
            reset();
        }else{
        $(".playerPoints").text(playerTotalNew);
        }
    })
    // Functionality of button 3
    $("#btn3").on("click", function (){        
        let playerTotalNew = playerTotal += btn3;
        if (playerTotal === randomGoalScore){
            chickenDinner();
            reset();
        }else if(playerTotal > randomGoalScore){
            justALoser();
            reset();
        }else{
        $(".playerPoints").text(playerTotalNew);
        }
    })
    // Functionality of button 4
    $("#btn4").on("click", function (){        
        let playerTotalNew = playerTotal += btn4;
        if (playerTotal === randomGoalScore){
            chickenDinner();
            reset();
        }else if(playerTotal > randomGoalScore){
            justALoser();
            reset();
        }else{
        $(".playerPoints").text(playerTotalNew);
        }
    })


    // Reset game
    $(".reset").on("click", function () {
        randomGoalScore = Math.floor(Math.random() * 101 + 19);
        $(".goalScore").text(randomGoalScore);
        btn1 = Math.floor(Math.random() * 11 + 1);
        btn2 = Math.floor(Math.random() * 11 + 1);
        btn3 = Math.floor(Math.random() * 11 + 1);
        btn4 = Math.floor(Math.random() * 11 + 1);
        playerTotal = 0;
        $(".playerPoints").text(playerTotal);
        wins = 0;
        losses = 0;
        $("#wins").text(wins);
        $("#losses").text(losses);
    })
    // 









})
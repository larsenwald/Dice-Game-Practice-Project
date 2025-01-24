function rollTheBones(){
        //remove and then add the animation class to the dice
        for(var i=0;i<2;i++){
        document.querySelectorAll(".die")[i].classList.remove("animation");
        document.querySelectorAll(".die")[i].offsetHeight; /* Trigger a reflow (the browser's recalculation of the layout) for each die after the animation class gets removed so the browser's optimization techniques
        don't get in the way of it fully processing that the animation is removed and then re-added immediately. */
        }
        for(var i=0;i<document.querySelectorAll(".die").length;i++){
            document.querySelectorAll(".die")[i].classList.add("animation");
        }
        //make the dice's skull background images go away
        for(var i=0;i<document.querySelectorAll(".die").length;i++){
            document.querySelectorAll(".die")[i].style.backgroundImage="none";
        }

        var player1Roll = Math.floor(Math.random()*6+1);
        //clear the player1's die pips before rolling
        for(var i=0;i<document.querySelectorAll(".player1 .pip").length;i++){
            document.querySelectorAll(".pip")[i].classList.add("hidden");
        }
        if (player1Roll===1){
            document.querySelectorAll(".player1 .pip")[4].classList.remove("hidden");
        }else if(player1Roll===2){
            document.querySelectorAll(".player1 .pip")[3].classList.remove("hidden");
            document.querySelectorAll(".player1 .pip")[5].classList.remove("hidden");
        }else if(player1Roll===3){
            document.querySelectorAll(".player1 .pip")[0].classList.remove("hidden");
            document.querySelectorAll(".player1 .pip")[4].classList.remove("hidden");
            document.querySelectorAll(".player1 .pip")[8].classList.remove("hidden");
        }else if(player1Roll===4){
            document.querySelectorAll(".player1 .pip")[0].classList.remove("hidden");
            document.querySelectorAll(".player1 .pip")[2].classList.remove("hidden");
            document.querySelectorAll(".player1 .pip")[6].classList.remove("hidden");
            document.querySelectorAll(".player1 .pip")[8].classList.remove("hidden");
        }else if(player1Roll===5){
            document.querySelectorAll(".player1 .pip")[0].classList.remove("hidden");
            document.querySelectorAll(".player1 .pip")[2].classList.remove("hidden");
            document.querySelectorAll(".player1 .pip")[4].classList.remove("hidden");
            document.querySelectorAll(".player1 .pip")[6].classList.remove("hidden");
            document.querySelectorAll(".player1 .pip")[8].classList.remove("hidden");
        }else if(player1Roll===6){
            document.querySelectorAll(".player1 .pip")[0].classList.remove("hidden");
            document.querySelectorAll(".player1 .pip")[3].classList.remove("hidden");
            document.querySelectorAll(".player1 .pip")[6].classList.remove("hidden");
            document.querySelectorAll(".player1 .pip")[2].classList.remove("hidden");
            document.querySelectorAll(".player1 .pip")[5].classList.remove("hidden");
            document.querySelectorAll(".player1 .pip")[8].classList.remove("hidden");
        }

        var player2Roll = Math.floor(Math.random()*6+1);
        //clear the player2's die pips before rolling
        for(var i = 0; i<document.querySelectorAll(".player2 .pip").length;i++){
            document.querySelectorAll(".player2 .pip")[i].classList.add("hidden");
        }
        if (player2Roll===1){
            document.querySelectorAll(".player2 .pip")[4].classList.remove("hidden");
        }else if(player2Roll===2){
            document.querySelectorAll(".player2 .pip")[3].classList.remove("hidden");
            document.querySelectorAll(".player2 .pip")[5].classList.remove("hidden");
        }else if(player2Roll===3){
            document.querySelectorAll(".player2 .pip")[0].classList.remove("hidden");
            document.querySelectorAll(".player2 .pip")[4].classList.remove("hidden");
            document.querySelectorAll(".player2 .pip")[8].classList.remove("hidden");
        }else if(player2Roll===4){
            document.querySelectorAll(".player2 .pip")[0].classList.remove("hidden");
            document.querySelectorAll(".player2 .pip")[2].classList.remove("hidden");
            document.querySelectorAll(".player2 .pip")[6].classList.remove("hidden");
            document.querySelectorAll(".player2 .pip")[8].classList.remove("hidden");
        }else if(player2Roll===5){
            document.querySelectorAll(".player2 .pip")[0].classList.remove("hidden");
            document.querySelectorAll(".player2 .pip")[2].classList.remove("hidden");
            document.querySelectorAll(".player2 .pip")[4].classList.remove("hidden");
            document.querySelectorAll(".player2 .pip")[6].classList.remove("hidden");
            document.querySelectorAll(".player2 .pip")[8].classList.remove("hidden");
        }else if(player2Roll===6){
            document.querySelectorAll(".player2 .pip")[0].classList.remove("hidden");
            document.querySelectorAll(".player2 .pip")[3].classList.remove("hidden");
            document.querySelectorAll(".player2 .pip")[6].classList.remove("hidden");
            document.querySelectorAll(".player2 .pip")[2].classList.remove("hidden");
            document.querySelectorAll(".player2 .pip")[5].classList.remove("hidden");
            document.querySelectorAll(".player2 .pip")[8].classList.remove("hidden");
        }

        if(player1Roll>player2Roll){
            document.querySelector("main h1").innerHTML = "Player 1 <mark>Wins</mark>"
            document.querySelector(".player1 p:first-of-type").classList.remove("animation-crown")
            document.querySelector(".player1 p:first-of-type").offsetHeight; //trigger reflow
            document.querySelector(".player1 p:first-of-type").classList.add("animation-crown")
        }else if(player2Roll>player1Roll){
            document.querySelector("main h1").innerHTML = "Player 2 <mark>Wins</mark>"
            document.querySelector(".player2 p:first-of-type").classList.remove("animation-crown")
            document.querySelector(".player2 p:first-of-type").offsetHeight; //trigger reflow
            document.querySelector(".player2 p:first-of-type").classList.add("animation-crown")
        }else{
            document.querySelector("main h1").innerHTML = "<mark>Draw</mark>"
        }

        /*AUDIO SECTION*/
        var aNumberOneToNine = Math.floor(Math.random()*9+1);
        new Audio("sounds/dice-roll"+aNumberOneToNine+".mp3").play();
}

document.querySelector("#roll-em").addEventListener("click", rollTheBones);
let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const us = document.querySelector("#userscore");
const cs = document.querySelector("#compscore");

const gencom = () => {
    const opt = ["rock" , "paper" , "scissor"];
    const randindex = Math.floor(Math.random()*3);
    return opt[randindex];
};

const tie = () => {
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "#153243";
}

const playgame = (userchoice) => {
    const compchoice = gencom();
    if (compchoice === userchoice) {
        tie();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
        } else if(userchoice === "paper") {
            userWin = compchoice === "scissor" ? false : true;
        } else {
            userWin = compchoice === "rock" ? false : true;
        }       
        showWinner(userWin, userchoice, compchoice);
    }
}

const showWinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        msg.innerText = `You Win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userscore++;
        us.innerText = userscore;
    } else {
        msg.innerText = `You lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
        compscore++;
        cs.innerText = compscore;
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" ,() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})


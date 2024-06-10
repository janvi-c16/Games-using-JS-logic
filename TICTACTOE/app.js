let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".restart");
let newgame = document.querySelector(".mg");
let msgcont = document.querySelector(".msgc");
let msg = document.querySelector(".msg");
let XWinsElem = document.querySelector("#xwin");
let OWinElem = document.querySelector("#owin");

let turnX = true;
let playerXWins = 0;
let playerOWins = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,6],
    [6,7,8],
];

const resetg = () => {
    turnX = true;
    ebox();
    msgcont.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if(turnX) {
            box.innerText = "X";
            box.style.color = "black";
            turnX = false;
        } else {
            box.innerText = "O";
            box.style.color = "blue";
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const dbox = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const ebox = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcont.classList.remove("hide");
    dbox();

    if (winner === "X") {
        playerXWins++;
        XWinsElem.innerText = playerXWins;
    } else if(winner === "O") {
        playerOWins++; 
        OWinElem.innerText = playerOWins;
    }
};

const tie = () => {
    msg.innerText = "Game Tied";
    msgcont.classList.remove("hide");
    dbox();
}
 
const checkWinner = () => {
    let isWinner = false;
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText; 
        let pos2 = boxes[pattern[1]].innerText; 
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 !="") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner", pos1);
                showWinner(pos1);
                isWinner = true;
                break;
            }
        }
    }
    if(!isWinner) {
        let allFilled = true;
        for(let box of boxes) {
            if (box.innerText === "") {
                allFilled = false;
                break;
            }
        }
        if(allFilled) {
            console.log("tie");
            tie();
        }
    }
};

newgame.addEventListener("click", resetg);
reset.addEventListener("click", resetg);
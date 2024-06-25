let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let winMsg = document.querySelector(".win-msg");

let turnO  = true//playerX / playerO
let count = 0;

const winPatterns = [
    [0, 1, 2], 
    [0, 3, 6],
    [0,  4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]


const resetGame = () => {
    turnO  = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
         if(turnO) { //playerO
            box.innerText = "O";
            turnO = false;
        } else { // playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        
        count++;



        let isWinner = checkWinner();
        if(count === 9 && !isWinner) {
            gameDraw();
        }
        
    });
});

const disBoxes = () => {
    for(box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}



const showWinner = (winner) => {
   winMsg.innerText = `congratulation, Winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disBoxes();
}

const gameDraw = () => {
    winMsg.innerText = "Game Draw, Play agian";
    msgContainer.classList.remove("hide");
    disBoxes();
}

const checkWinner = (Winner) => {
    for(pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != '' && pos2val != "" && pos2val != "") {
            if(pos1val == pos2val && pos2val == pos3val) {
                console.log(`Winner ${pos1val}`);          
                showWinner(pos1val);
        } 
    }
    } 
}

newGame.addEventListener("click", resetGame);

resetBtn.addEventListener("click", resetGame);
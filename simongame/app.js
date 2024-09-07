// JS code linked

let gameSeq = [];
let playerSeq = [];
let btns = ["red","yellow","blue", "green"];
let highest = 0;

let started = false;
let level = 0;

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is on");
        started = true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}
function playerFlash(btn){
    btn.classList.add("playerFlash");
    setTimeout(function(){
        btn.classList.remove("playerFlash");
    },250);
}
function levelUp(){
    playerSeq = [];
    level++;
    let h2 = document.querySelector("h2");
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3+1);
    let randClr = btns[randIdx];
    let randbtn = document.querySelector(`.${randClr}`);
    gameSeq.push(randClr); 
    gameFlash(randbtn);
};
function checkSeq(idx){
    if(playerSeq[idx] == gameSeq[idx]){
        if(playerSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        let h2 = document.querySelector("h2");
        h2.innerText = `Game over... Your score was 
        ${(level-1)*10}... Press any key to start again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor = "white";
        },300);
        highestScr();
        reset();
    }
};
function btnPress(){
    let btn = this;
    playerFlash(btn);
    let playerClr = btn.getAttribute("id");
    playerSeq.push(playerClr);
    checkSeq(playerSeq.length-1);
};
let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started = false;
    playerSeq = [];
    gameSeq = [];
    level = 0;
};
function highestScr(){
    if((level-1)*10 > highest){
        highest = (level-1)*10;
        let h3 = document.querySelector("h3");
        h3.innerText = `Highest score - ${highest}`;
    }
};
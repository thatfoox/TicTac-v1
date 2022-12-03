let buttons =  document.querySelectorAll(".btn_option");
let board = ["","","","","","","","",""];
let message = document.getElementById("message");
let popup = document.getElementById("popup");
let gameOver = false;
let restart = document.getElementById("restart").addEventListener("click", restartFun);
let userCount1 = document.getElementById("userScore1");
let userCount2 = document.getElementById("userScore2");

let count1 = 0;
let count2 = 0;

let currentPlayer = "X";
for(let i=0;i<buttons.length;i++){
    let btn= buttons[i];
    btn.addEventListener("click",()=>{
        main(btn);
        console.log(board)

    })
}


function main(btn){
    // changePlayer();
    // checkIfFree(btn);
    if(btn.innerHTML === ""){
        btn.innerHTML = currentPlayer;
        board[btn.id-1]= currentPlayer;
        check();
        changePlayer();

    }
}

function changePlayer(){
    if(currentPlayer === "O"){
        currentPlayer = "X";
    }else{
        currentPlayer = "O";
    }
}

function check(){
    checkHorizontal();
    checkVertical();
    checkDiagonal();
    checkDraw();

}

function checkHorizontal(){
    if(allEqual([board[0],board[1],board[2],currentPlayer])){
        message.innerHTML = "Player "+currentPlayer+" Won!";
        popup.classList.remove("hide");
        countPoints();
        gameOver = true;


    }else if(allEqual([board[3],board[4],board[5],currentPlayer])){
        message.innerHTML = "Player "+currentPlayer+" Won!";
        popup.classList.remove("hide");
        countPoints();
        gameOver = true;

    }else if(allEqual([board[6],board[7],board[8],currentPlayer])){
        message.innerHTML = "Player "+currentPlayer+" Won!";
        popup.classList.remove("hide");
        countPoints();
        gameOver = true;

    }

}

function checkVertical(){
    if(allEqual([board[0],board[3],board[6],currentPlayer])){
        message.innerHTML = "Player "+currentPlayer+" Won!";
        popup.classList.remove("hide");
        countPoints();
        gameOver = true;


    }else if(allEqual([board[1],board[4],board[7],currentPlayer])){
        message.innerHTML = "Player "+currentPlayer+" Won!";
        popup.classList.remove("hide");
        countPoints();
        gameOver = true;

    }else if(allEqual([board[2],board[5],board[8],currentPlayer])){
        message.innerHTML ="Player "+ currentPlayer+" Won!";
        popup.classList.remove("hide");
        countPoints();
        gameOver = true;
    }
}

function checkDiagonal(){
    if(allEqual([board[0],board[4],board[8],currentPlayer])){
        message.innerHTML = "Player "+currentPlayer+" Won!";
        popup.classList.remove("hide");
        countPoints();
        gameOver = true;

    }else if(allEqual([board[2],board[4],board[6],currentPlayer])){
        message.innerHTML = "Player "+currentPlayer+" Won!";
        popup.classList.remove("hide");
        countPoints();
        gameOver = true;

    }

}

function checkDraw(){
    let checkExists = board.includes("");
    if(allEqual(board) == false && checkExists == false){
        if(gameOver != true){
            message.innerHTML = "Draw";
            popup.classList.remove("hide");
            gameOver = true;
        }
    }

}
function allEqual(arry){
    const result = arry.every((Element) => {
        if(Element === arry[0]){
            return true;
            
        }
    });
    return result;

}

function restartFun(){
    popup.classList.add("hide");
    for(let i=0; i< buttons.length;i++){
        buttons[i].innerHTML="";
        board[i] = "";
        currentPlayer="X";
    }
}

function countPoints(){
    if(currentPlayer== "O"){
        count1 +=1;
        userCount1.innerHTML = count1;
    }else{
        count2 +=1;
        userCount2.innerHTML = count2;
    }
}

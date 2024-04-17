let userscore = 0;
let compscore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    // console.log("game was draw");
    msg.innerText = "Game was Draw... Play Again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        // console.log("you win!");
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        // console.log("you loss");
        msg.innerText = `You Loss! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // console.log("user choice", userChoice);
    // to generate computer choice; --- one function perform only one activity is call modular
    const compChoice = genCompChoice();
    // console.log("comp choice", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //compchoice will be paper or scissor
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //compchoice will be rock and scissor
            userWin = compChoice === "scissor" ? false : true;
        } else {
            //now compchoice will be rock and paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});
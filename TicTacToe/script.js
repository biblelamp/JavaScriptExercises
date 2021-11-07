document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);

const statusDisplay = document.querySelector('.game--status');

let gameActive = true;
let currentPlayer = "X";
let aiPlayer = "O";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(clickedCellEvent) {
    currentPlayer = "X";
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
    handleResultValidation();

    handlePlayerAI();
    handleResultValidation();
}

function handlePlayerAI() {
    currentPlayer = aiPlayer;
    let cellIndex;
    do {
        cellIndex = getRandomIntInclusive(0, 8);
    } while (gameState[cellIndex] !== "");

    gameState[cellIndex] = aiPlayer;
    let cell = findCellByIndex(cellIndex);
    cell.innerHTML = aiPlayer;
}

function handleResultValidation() {
    console.log("handleResultValidation", gameState);

    let flagWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            flagWon = true;
            break;
        }
    }

    if (flagWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let flagDraw = !gameState.includes("");
    if (flagDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }
}

function findCellByIndex(cellIndex) {
    let findCell;
    document.querySelectorAll('.cell').forEach(cell => {
        let index = parseInt(cell.getAttribute('data-cell-index'));
        if (index === cellIndex) {
            findCell = cell;
        }
    });
    return findCell;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}
document.querySelectorAll('.cell').forEach(cell =>
    cell.addEventListener('click', clickCell));
document.querySelector('.game--restart').addEventListener('click', restartGame);

const statusDisplay = document.querySelector('.game--status');

const winMessage = (player) => `Player ${player} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = (player) => `It's ${player}'s turn`;

let humanPlayer = "X";
let aiPlayer = "O";
let gameTable;
let gameActive;

const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontals
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // verticals
    [0, 4, 8], [2, 4, 6] // diagonals
];

restartGame();

function restartGame() {
    gameActive = true;
    gameTable = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn(humanPlayer);
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

function clickCell(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameTable[clickedCellIndex] === "" && gameActive) {
        gameTable[clickedCellIndex] = humanPlayer;
        clickedCell.innerHTML = humanPlayer;
        isWinOrDraw();
    }

    if (gameActive) {
        turnPlayerAI();
        isWinOrDraw();
    }
}

function turnPlayerAI() {
    let cellIndex;
    do {
        cellIndex = getRandomIntInclusive(0, 8);
    } while (gameTable[cellIndex] !== "");

    gameTable[cellIndex] = aiPlayer;
    let cell = findCellByIndex(cellIndex);
    cell.innerHTML = aiPlayer;
}

function isWinOrDraw() {
    console.log("isWinOrDraw", gameTable);

    let signWon;
    let flagWon = false;
    for (let i = 0; i < winConditions.length; i++) {
        let a = gameTable[winConditions[i][0]];
        let b = gameTable[winConditions[i][1]];
        let c = gameTable[winConditions[i][2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            flagWon = true;
            signWon = a;
            break;
        }
    }

    if (flagWon) {
        statusDisplay.innerHTML = winMessage(signWon);
        gameActive = false;
        return;
    }

    let flagDraw = !gameTable.includes("");
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
document.querySelectorAll('.cell').forEach(cell =>
    cell.addEventListener('click', clickCell));
document.querySelector('.game--restart').addEventListener('click', restartGame);

const statusDisplay = document.querySelector('.game--status');

const winMessage = (player) => `Player ${player} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = (player) => `It's ${player}'s turn`;

const serverURL = "http://localhost:8080";
const humanPlayer = "X";
const aiPlayer = "O";
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
    sendGetRequestToBackend(serverURL + "/init");
}

function clickCell(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));


    if (gameTable[clickedCellIndex] === "" && gameActive) {
        sendGetRequestToBackend(serverURL + "/action/human?x=" + clickedCellIndex);

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

    sendGetRequestToBackend(serverURL + "/action/ai?o=" + cellIndex);

    gameTable[cellIndex] = aiPlayer;
    let cell = findCellByIndex(cellIndex);
    cell.innerHTML = aiPlayer;
}

function isWinOrDraw() {
    console.log("isWinOrDraw", gameTable);

    let signWon;
    let flagWon = false;
    for (let i = 0; i < winConditions.length; i++) {
        const winCondition = winConditions[i];
        let a = gameTable[winCondition[0]];
        let b = gameTable[winCondition[1]];
        let c = gameTable[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            flagWon = true;
            signWon = a;
            break;
        }
    }

    sendGetRequestToBackend(serverURL + "/status/win");

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

function sendGetRequestToBackend(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.responseText);
            return xhr.responseText
        }
    }
    xhr.open('GET', url, true);
    xhr.send(null);
}
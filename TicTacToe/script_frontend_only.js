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
let backendResponse;
let index;

restartGame();

function restartGame() {
    statusDisplay.innerHTML = currentPlayerTurn(humanPlayer);
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
    httpRequestToBackend(serverURL + "/init");
}

function clickCell(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    httpRequestToBackend(serverURL + "/action/human?X=" + clickedCellIndex);
    if (index !== -1) {
        clickedCell.innerHTML = humanPlayer;

        httpRequestToBackend(serverURL + "/status");
        if (backendResponse === "active") {
            httpRequestToBackend(serverURL + "/action/ai");
            if (index !== -1) {
                let cell = findCellByIndex(index);
                cell.innerHTML = aiPlayer;

                httpRequestToBackend(serverURL + "/status");
            }
        }

        if (backendResponse === "draw") {
            statusDisplay.innerHTML = drawMessage();
        }
        if (backendResponse === humanPlayer || backendResponse === aiPlayer) {
            statusDisplay.innerHTML = winMessage(backendResponse);
        }
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

function httpRequestToBackend(url) {
    // https://learn.javascript.ru/xmlhttprequest
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(url, xhr.responseText);
            backendResponse = xhr.responseText;
            index = parseInt(backendResponse);
        }
    }
    xhr.open('GET', url, false); // false = sync request
    xhr.send();
}
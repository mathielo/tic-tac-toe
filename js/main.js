const playerX = "X";
const playerO = "O";

let currentPlayer = playerX;

$(document).ready(function () {

    $("td", ".gaming").on("click", placeChar);

    showCurrentPlayer();
    
});

function placeChar() {
    const td = $(this);

    if (td.text() === "") {

        td.text(currentPlayer);
        changePlayer();
    }
}

function changePlayer() {
    if (currentPlayer === playerX) {
        currentPlayer = playerO;
    } else {
        currentPlayer = playerX;
    }
    showCurrentPlayer();


    // [ternary if]
    // currentPlayer = (currentPlayer === playerX) ? playerO : playerX
}

function showCurrentPlayer() {
    $("#currentPlayer").text(currentPlayer);
}


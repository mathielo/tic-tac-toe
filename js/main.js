const playerX = "X";
const playerO = "O";

let currentPlayer = playerX;

$(document).ready(function () {

    $("td", ".gaming").on("click", placeChar);

});

function placeChar() {
    $(this).text(currentPlayer);
    changePlayer();
}

function changePlayer() {
    if (currentPlayer === playerX) {
        currentPlayer = playerO;
    } else {
        currentPlayer = playerX;
    }
}
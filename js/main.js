const playerX = "X";
const playerO = "O";
let currentPlayer = playerX;

$(document).ready(function() {

    $("td", ".gaming").on("click", placeChar);

    showCurrentPlayer();

    $(".reset-btn").on("click", resetGame);

    $("td").on("click", checkWinner);

});

function placeChar() {
    const td = $(this);

    if (td.text() === "") {

        td.text(currentPlayer);
        changePlayer();
        // checkVictory();
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

function checkWinner() {
    let input = $("td");

    let inp0 = input.eq(0).text();
    let inp1 = input.eq(1).text();
    let inp2 = input.eq(2).text();
    let inp3 = input.eq(3).text();
    let inp4 = input.eq(4).text();
    let inp5 = input.eq(5).text();
    let inp6 = input.eq(6).text();
    let inp7 = input.eq(7).text();
    let inp8 = input.eq(8).text();

    let line1 = input.eq(1, 2, 3).text();
    let line2 = input.eq(3, 4, 5).text();
    let line3 = input.eq(6, 7, 8).text();

    let col1 = input.eq(0, 3, 6).text();
    let col2 = input.eq(1, 4, 7).text();
    let col3 = input.eq(2, 5, 8).text();

    let diag1 = input.eq(0, 4, 8).text();
    let diag2 = input.eq(2, 4, 6).text();

    if (inp0 === inp1 && inp1 === inp2 && line1 !== "") {
        alert("Winner: "+ this.innerText);
    } else if (inp3 === inp4 && inp4 === inp5 && line2 !== "") {
        alert("Winner: "+ this.innerText);
    } else if (inp6 === inp7 && inp7 === inp8 && line3 !== "") {
        alert("Winner: "+ this.innerText);
    } else if (inp0 === inp3 && inp3 === inp6 && col1 !== "") {
        alert("Winner: "+ this.innerText);
    } else if (inp1 === inp4 && inp4 === inp7 && col2 !== "") {
        alert("Winner: "+ this.innerText);
    } else if (inp2 === inp5 && inp5 === inp8 && col3 !== "") {
        alert("Winner: "+ this.innerText);
    } else if (inp0 === inp4 && inp4 === inp8 && diag1 !== "") {
        alert("Winner: " + this.innerText);
    } else if (inp2 === inp4 && inp4 === inp6 && diag2 !== "") {
        alert("Winner: "+ this.innerText);
    }
}

function resetGame() {
    $("td").text("");
    $("#currentPlayer").text(playerX);
}




// function checkVictory() {
//     const rows = $("tr", ".gaming");
//     let match = true;
//
//     rows.each(function () {
//         let previousChar;
//         const cols = $("td", this);
//
//         cols.each(function (i) {
//             console.log(i);
//
//
//
//         })
//
//     })
//
// }

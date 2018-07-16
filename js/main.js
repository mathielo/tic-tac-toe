const playerX = "X";
const playerO = "O";
let currentPlayer = playerX;

$(document).ready(function() {

    $("td", ".gaming").on("click", placeChar);

    showCurrentPlayer();

    $(".reset-btn").on("click", resetGame);

});

function placeChar() {
    const td = $(this);

    if (td.text() === "") {
        td.text(currentPlayer);
        // console.log('checkWinnerRows', checkWinnerRows());
        // console.log('checkWinnerCols', checkWinnerCols());
        // console.log('checkWinnerDiags', checkWinnerDiags());
        console.log(
            'Rows',
            checkWinnerRows(),
            'Cols',
            checkWinnerCols(),
            'Diags',
            checkWinnerDiags()
        );

        if (isGameWon()) {
            console.log('Game won by player ', currentPlayer);
        } else {
            changePlayer();
        }

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

function checkWinnerRows() {
    let isGameWon = false;
    const rows = 3;
    const cols = 3;

    // Verifying if any rows has a winner
    // r = row
    for(let r = 0; r < rows; r++) {
        // String Interpolation:
        // 'number '+ r +' here' === `number ${r} here`
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        const $cols = $('td', `tr:eq(${r})`);

        let previousChar = null;
        let isStreak = true;

        for(let c = 0; c < cols; c++) {
            const char = $cols.eq(c).text();

            if (char === "") {
                isStreak = false;
            }

            if (c > 0) {
                isStreak = isStreak && char === previousChar;
            }

            if (c === 0) {
                previousChar = char;
            }
        }

        if (isStreak) {
            isGameWon = true;
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break
            break;
        }
    }

    return isGameWon;
}

function checkWinnerCols() {
    let isGameWon = false;
    const rows = 3;
    const cols = 3;

    for(let c = 0; c < cols; c++) {
        const $cols = $(`td:eq(${c})`, '.gaming tr');

        let previousChar = null;
        let isStreak = true;

        for(let r = 0; r < rows; r++) {
            const char = $cols.eq(r).text();

            if (char === "") {
                isStreak = false;
            }

            if (r > 0) {
                isStreak = isStreak && char === previousChar;
            }

            if (r === 0) {
                previousChar = char;
            }
        }
    
        if (isStreak) {
            isGameWon = true;
            break;
        }
    }

    return isGameWon;
}

function checkWinnerDiags() {
    function checkMatchingByStep(start, step) {
        const $tds = $('td', '.gaming');

        let previousChar = null;
        let isStreak = true;

        for(let i = start; i <= start + step * 2; i += step) {
            const char = $tds.eq(i).text();

            if (char === "") {
                isStreak = false;
            }

            if (i > start) {
                isStreak = isStreak && char === previousChar;
            }

            if (i === start) {
                previousChar = char;
            }
        }

        return isStreak;
    }

    return checkMatchingByStep(0, 4) || checkMatchingByStep(2, 2);
}

function isGameWon() {
    return checkWinnerRows()
        || checkWinnerCols()
        || checkWinnerDiags();
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

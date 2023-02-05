var board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
var player = "X";

function addMove(row, col) {
    if (board[row][col] === "") {
        board[row][col] = player;
        document.getElementById(row + "-" + col).innerHTML = player;

        if (checkWin()) {
            alert(player + " wins!");
            reset();
        } else if (checkTie()) {
            alert("It's a tie!");
            reset();
        } else {
            player = (player === "X") ? "O" : "X";
        }
    }
}

function checkWin() {
    // Check rows
    for (var i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return true;
        }
    }

    // Check columns
    for (var i = 0; i < 3; i++) {
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
            return true;
        }
    }

    // Check diagonals
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return true;
    }

    return false;
}

function checkTie() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (board[i][j] === "") {
                return false;
            }
        }
    }

    return true;
}

function reset() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            board[i][j] = "";
            document.getElementById(i + "-" + j).innerHTML = "";
        }
    }

    player = "X";
}

function render() {
    var table = "<table>";

    for (var i = 0; i < 3; i++) {
        table += "<tr>";

        for (var j = 0; j < 3; j++) {
            table += "<td id='" + i + "-" + j + "' onclick='addMove(" + i + "," + j + ")'>" + board[i][j] + "</td>";
        }

        table += "</tr>";
    }

    table += "</table>";

    document.getElementById("game").innerHTML = table;
}

render();

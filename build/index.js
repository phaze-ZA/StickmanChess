"use strict";
class Pawn {
    constructor(color, square) {
        this.color = color;
        this.square = square;
    }
    move(boardMap) {
        if (this.color === "white" && this.square.rank === 8) {
            //change to queen
            console.log('Cannot move further - Queen, Knight, Rook or Bishop?');
        }
        else {
            this.square.setPiece({});
            this.square = boardMap[this.square.file][this.square.rank + 1];
            this.square.setPiece(this);
            console.log(this.square.rank);
        }
    }
}
// import { ChessPiece } from "./Pieces";
class Square {
    constructor(rank, file) {
        this.piece = "";
        this.rank = rank;
        this.file = file;
    }
    announce() {
        console.table(this);
    }
    setPiece(piece) {
        this.piece = piece;
    }
}
// import { Pawn } from './Pieces';
// type t_Color = "black" | "white";
// type t_Rank = 1|2|3|4|5|6|7|8;
// type t_File = "a"|"b"|"c"|"d"|"e"|"f"|"g"|"h";
class Board {
    constructor() {
        this.ranks = 8;
        this.files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this.squares = [];
        for (let f = 0; f < this.files.length; f++) {
            for (let r = 0; r < this.ranks; r++) {
                const square = new Square(r, this.files[f]);
                this.squares.push(square);
            }
        }
        this.boardMap = this.buildMap();
    }
    buildMap() {
        let boardMap = {};
        for (let s = 0; s < this.squares.length; s++) {
            const square = this.squares[s];
            if (!boardMap[square.file]) {
                boardMap[square.file] = [];
            }
            boardMap[square.file].push(square.piece || square);
        }
        return boardMap;
    }
    drawBoard() {
        console.log(this.boardMap);
    }
}
class Player {
    constructor(color, board) {
        this.pawns = [];
        this.color = "";
        this.color = color;
        this.board = board;
        this.generatePawns(8);
        this.placePawns();
    }
    generatePawns(numPawns) {
        for (let p = 0; p < numPawns; p++) {
            this.pawns.push(new Pawn(this.color, {}));
        }
    }
    placePawns() {
        if (this.color === "black") {
            for (let p = 0; p < this.pawns.length; p++) {
                const pawn = this.pawns[p];
                pawn.square = this.board.boardMap[this.board.files[p]][6];
                pawn.square.setPiece(pawn);
            }
        }
        if (this.color === "white") {
            for (let p = 0; p < this.pawns.length; p++) {
                const pawn = this.pawns[p];
                pawn.square = this.board.boardMap[this.board.files[p]][1];
                pawn.square.setPiece(pawn);
            }
        }
    }
}
function init() {
    var x = new Board();
    var w = new Player("white", x);
    var b = new Player("black", x);
    x.drawBoard();
    window.board = x;
    window.whitePlayer =  w;
    window.blackPlayer = b;
}
init();

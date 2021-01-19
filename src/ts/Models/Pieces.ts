type t_Color = "black" | "white";
type t_Rank = 1|2|3|4|5|6|7|8;
type t_File = "a"|"b"|"c"|"d"|"e"|"f"|"g"|"h";

// enum Files {
//     A='a',
//     B='b',
//     C='c',

// }

enum Piece{
    PAWN='Pawn',
    BISHOP='Bishop',
    KNIGHT='Knight',
    ROOK='Rook',
    QUEEN='Queen',
    KING='King',
}

interface ChessPiece {
    color:t_Color,
    move:Function,
    square:Square,
}

class Pawn implements ChessPiece {
    color:t_Color;
    square:Square;
    constructor(color:t_Color,square:Square) {
        this.color = color;
        this.square = square;
    }
    move(boardMap:boardObj) {
        if(this.color==="white" && this.square.rank===8 as t_Rank){
            //change to queen
            console.log('Cannot move further - Queen, Knight, Rook or Bishop?');
        }else{
            this.square.setPiece({} as ChessPiece);
            this.square = boardMap[this.square.file][this.square.rank + 1]
            this.square.setPiece(this);
            console.log(this.square.rank);
        }
    }
}
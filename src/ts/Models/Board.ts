interface boardObj {
    [key:string]:Array<any>
}

class Board{
    ranks = 8;
    files = ['a','b','c','d','e','f','g','h'];
    squares:Array<Square> = [];
    boardMap:boardObj;
    
    constructor(){
        for (let f = 0; f < this.files.length; f++) {
            for (let r = 0; r < this.ranks; r++) {
                const square = new Square(r,this.files[f]);
                this.squares.push(square);
            }
        }
        this.boardMap = this.buildMap();
    }

    buildMap():boardObj{
        let boardMap:boardObj= {};
        for (let s = 0; s < this.squares.length; s++) {
            const square = this.squares[s];
            if(!boardMap[square.file]){
                boardMap[square.file] = [];
            }
            boardMap[square.file].push(square.piece || square);
        }
        return boardMap;
    }

    drawBoard(){
        console.log(this.boardMap);
    }
}
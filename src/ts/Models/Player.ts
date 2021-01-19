class  Player{
    pawns:Array<Pawn>=[];
    color:t_Color="" as t_Color;
    board:Board;

    constructor(color:t_Color, board:Board) {
        this.color = color;
        this.board=board;
        this.generatePawns(8);
        this.placePawns();
    }

    generatePawns(numPawns:number){
        for(let p=0; p<numPawns;p++){
            this.pawns.push(new Pawn(this.color,{} as Square))
        }
    }

    placePawns(){
        if(this.color==="black"){
            for (let p = 0; p < this.pawns.length; p++) {
                const pawn = this.pawns[p];
                pawn.square = this.board.boardMap[this.board.files[p]][6];
                pawn.square.setPiece(pawn);
            }
        }
        if(this.color==="white"){
            for (let p = 0; p < this.pawns.length; p++) {
                const pawn = this.pawns[p];
                pawn.square = this.board.boardMap[this.board.files[p]][1];
                pawn.square.setPiece(pawn);
            }
        }
    }
}
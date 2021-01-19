class Square{
    rank:number;
    file:string;
    piece:any="";

    constructor(rank:number, file:string){
        this.rank = rank;
        this.file = file;
    }

    setPiece(piece:ChessPiece){
        this.piece=piece; 
    }
}
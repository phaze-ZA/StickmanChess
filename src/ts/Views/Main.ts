
function init(){
    var x = new Board();
    var w = new Player("white",x);
    var b = new Player("black",x);
    x.drawBoard();
}

init();
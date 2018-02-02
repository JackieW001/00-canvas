var c = document.getElementById("board");

var p = function(c){
    console.log(c);
    console.log("clicked!");
}

c.addEventListener("onclick", p);

var clear = document.getElementById("clear");
clear.addEventListener("onclick",p);

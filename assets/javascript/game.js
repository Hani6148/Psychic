var win=0;
var lose=0;
var left=9;
document.onkeyup=function(){
    var compGuess = "";

     var ran = Math.floor(Math.random() *  9);
     console.log(ran);
     if(ran==0){
         compGuess="a";

     }
     if(ran==1){
        compGuess="b";

    }
    if(ran==2){
        compGuess="c";
    }
    if(ran==3){
        compGuess="d";

    }
    if(ran==4){
        compGuess="e";

    }
    if(ran==5){
        compGuess="f";

    }
    if(ran==6){
        compGuess="g";

    }
    if(ran==7){
        compGuess="h";

    }
    if(ran==8){
        compGuess="i";

    }
    if(ran==9){
        compGuess="j";

    }
    console.log(compGuess);


     var guess = event.key;
     console.log(guess);

     if(guess==compGuess){
         alert("win");
         win++;
         left=9;
         
     }
     else{
         
         left--;
     }
     if(left==0)
     {
        alert("lose");
        lose++;
        left=9;
     }
     document.getElementById("win").innerHTML= "win "+win;
     document.getElementById("lose").innerHTML= "lose "+lose;
     document.getElementById("left").innerHTML= "guesses left  "+left;


}


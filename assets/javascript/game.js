// a win counter for the number of wins
// a lose counter for the number of losses
// a left counter for the number of tries left
// 
var win=0;
var lose=0;
// initializing counters:
var left=9;

var alf=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z"];
document.getElementById("win").innerHTML= "win "+win;
document.getElementById("lose").innerHTML= "lose "+lose;
document.getElementById("far").innerHTML="your guesses so far: ";


document.onkeyup=function(){
   
    var compGuess = "";

     var ran = Math.floor(Math.random() *  26);
     console.log(ran);
     compGuess=alf[ran];
     console.log(compGuess);


     var guess = event.key;
     console.log(guess);

     document.getElementById("far").innerHTML+=guess;
     left--;


     if(guess==compGuess){
        
         win++;
         
         alert("winyou won, you winning letter is "+guess);
         left=9;

         document.getElementById("far").innerHTML="your guesses so far: ";
        
         
     }
     
     if(left==0)
     {
        
        lose++;

        
        
        alert("you lost");
        left=9;
        document.getElementById("far").innerHTML="your guesses so far: ";
       
     }
     
     
     document.getElementById("win").innerHTML= "win "+win;
     document.getElementById("lose").innerHTML= "lose "+lose;
     document.getElementById("left").innerHTML= "guesses left  "+left;

     
     



}


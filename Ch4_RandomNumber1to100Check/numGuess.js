//Global Variables
var btnAgain;
var output;
var turn;
var correct;
var textGuess;
var response;



function init(){
        //1.Initailize component 
        btnAgain = document.getElementById('again');
        output = document.getElementById('output');
        txtGuess = document.getElementById('textGuess');


        //2.hide button id ="again"
        btnAgain.style.display = "none";

        //3.initialize counter
        turn = 0;

        //4.initialize output
        output.innerHTML = "I'm thinking of a number " +
                           "between 0 and 100 Guesser " + 
                           "my number, and you I'll " + 
                           "tell if you are too high " +
                           "too low, or correct.";
        

        //5. generate a random number of correct answer
        correct = parseInt(Math.random() * 100);
        console.log(correct);

        //6.make sure input text gets focus
        txtGuess.focus();




}



function checkGuess(){

    response = turn + ")";  

    
  
     if(txtGuess.value > correct){
        response += "too high";
        turn++;
     }else if(txtGuess.value < correct){
        response += "too low";  
        turn++;
     }else if(txtGuess.value == correct){
        response += "Correct!";
        btnAgain.style.display = "block";
     }else if(txtGuess.value === ""){
        alert("empty");
     
     }else{
        response += "Please enter number between 0 and 100";
     }   

     output.innerHTML = response;


}

function roll(){
    var spanRaw = document.getElementById("spanRaw");
    var span100 = document.getElementById("span100");
    var spanFinal = document.getElementById("spanFinal");

    var raw = Math.random(); // random number 0-1 
    spanRaw.innerHTML = raw; 
    var times100 = raw * 100; //times 100 for example, 0.875645 * 100 equal 87.5645
    span100.innerHTML = times100;
    spanFinal.innerHTML = parseInt(times100); //output Integer Result for for example, 87.5645 --> parseInt(87.5645) is equal 87
        





}
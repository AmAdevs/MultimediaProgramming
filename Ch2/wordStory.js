function wordStory(){
    var txtBoyName = document.getElementById('txtBoyName').value;
    var txtGirlName = document.getElementById('txtGirlName').value;
    var txtGeologicFormation = document.getElementById('txtGeologicFormation').value;
    var txtVerb = document.getElementById('txtVerb').value;
    var txtLiquid = document.getElementById('txtLiquid').value;
    var txtContainer = document.getElementById('txtContainer').value;
    var txtBodyPart = document.getElementById('txtBodyPart').value;
    var txtGerund = document.getElementById('txtGerund').value;
    
    var story = txtBoyName + " and " + txtGirlName + " went up the " + txtGeologicFormation + " to " + 
                txtVerb + " a " + txtContainer + " of " + txtLiquid + ". " + "<br>" + txtBoyName + " fell down and broke his " + 
                txtBodyPart + " and " + txtGirlName + " came " + txtGerund + " after.";

    var output = document.getElementById('output');           
    output.innerHTML = story;   






}
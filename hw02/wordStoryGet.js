function getEID(id) {
    return document.getElementById(id);
}
function wordStoryGet(){

    var txtDay = getEID('txtDay').value;
    var txtVehicle = getEID('txtVehicle').value;
    var txtKnocked = getEID('txtKnocked').value;
    var txtOneYourLoved = getEID('txtOneYourLoved').value;
    var txtTheAnswer = getEID('txtTheAnswer').value;
    var txtHabit = getEID('txtHabit').value;
    var txtWhoAmI = getEID('txtWhoAmI').value;
    var txtYourWantHer = getEID('txtYourWantHer').value;
    var txtAreYou = getEID('txtAreYou').value;
    var txtFeeling = getEID('txtFeeling').value;
    var txtCantOrCan = getEID('txtCantOrCan').value;
    var txtPose = getEID('txtPose').value;

    var story = "<p><mark>" + txtDay + "</mark> morning jumped out of bed<br>" +
                "And put on my best suit<br>" +
                "Got in my <mark>" + txtVehicle + "</mark> and raced like a jet<br>" +
                "All the war to you<br>" + 
                "Knocked on your <mark>" +  txtKnocked + "</mark> with heart in my hand<br>" + 
                "To ask you a question<br>" +
                "Cause I know that you're an old-fashioned man, yeah<br></p>" +
    
                "<p>Can I have your <mark>" + txtOneYourLoved + "</mark> for the rest of my life?<br>" +
                "Say <mark>" + txtTheAnswer + "</mark> ," + "say <mark>" + txtTheAnswer + "</mark>'cause I need to know<br>" +
                "You say I'II never get your blessing'til the day I die<br>" +
                "Tough luck, my friend, but the answer is <mark> '" + txtTheAnswer + "'</mark><br></p>" +
            
                "<p>Why you gotta be so <mark>" + txtHabit + "?</mark><br>" +
                "Don't you know I'm <mark>" + txtWhoAmI + "</mark> too?<br>" +
                "Why you gotta be so <mark>" + txtHabit + "</mark>?<br>" +
                "I'm gonna <mark>" + txtYourWantHer  + "</mark> her anyway<br></p>" +
                
                "<p><mark>" + txtYourWantHer + "</mark> that girl<br>" +
                "<mark>" + txtYourWantHer + "</mark> her anyway<br>" +
                "<mark>" + txtYourWantHer + "</mark> that girl<br>" +
                "Yeah, no matter what you say<br>" +
                "<mark>" + txtYourWantHer + "</mark> that girl<br>" + 
                "And we'll be a <mark>" + txtAreYou + "</mark><br>" +
                "Why you gotta be so<br>" + 
                "<mark>" + txtHabit + "</mark><br></p>" +
                
                "<p>I <mark>" + txtFeeling + "</mark> to do this, you leave no choice<br>" +
                "<mark>" + txtCantOrCan + "</mark> live without her<br>" +
                "Love me or <mark>" + txtFeeling + "</mark> me we will be boys<br>" +
                "<mark>" + txtPose + "</mark> at that altar<br>" +
                "Or we will run away<br>" +
                "To another galaxy, you know<br>" +
                "You know she's in love with me<br>" +
                "She will go anywhere I go<br></p>"  

             
            
                
                ;





    var output = getEID('output');
    output.innerHTML = story;



}
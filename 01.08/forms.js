// EVENT LISTENER ON BUTTON
$("#submit").click(function() {

//SAVE NAME AS A VARIABLE
    var name = $("#name").val();

// SET THE HTML OF THE PARAGRAPH ELEMENT
$("#buttonPusherInfo").html(name + " was the last person to push the button.");

// SET INPUT VALUE TO BE BLANK
$("#name").val("");

});
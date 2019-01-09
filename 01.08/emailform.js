// YOUR CODE HERE
// Event listener for form submission
$("#sendEmail").click(function() {


  // Save the first name as a variable
  var firstName = $("#firstName").val();


  // insert HTML into Modal
  $(".modal-body").html("Thank you, " + firstName + ". Your message has been sent!");


  // Clear all fields in form
  $(".form-control").val("");

});


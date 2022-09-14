//message box for contact form submission

//function takes user's details and put them into the message box for him to confirm
function AddResult(){
//variables
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var address = document.getElementById("address").value;
var postcode = document.getElementById("postcode").value;
var select = document.getElementById("area").value;
var message = document.getElementById("msg").value;

//when there are some required details missing message box won't appear
    if(!name || !postcode || !email || !address || !select || !message){
        console.log('not all required information inserted');
}
//message which appears when user submit form
    else{
        window.confirm("Hello " + name + ". We confirm that Your message '" + message + "' to us about " + select + " has been succesfully sent.");
    }}
 //allows user to submit the form with button click   
 document.getElementById('submitform').addEventListener("click", AddResult);


 
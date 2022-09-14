//Newsletter - saving details and showing name on home page instead of newsletter form after submission

//function which saves inserted user's details in local storage
function AddName(){
    //variables
    var name1 = document.getElementById("namenl").value;
    var email1 = document.getElementById("emailnl").value;
    
    //no details will be saved if there wil be some required details missing
        if(!name1 || !email1){
            console.log('not all required information inserted');
    }
    //save user's name which replaces the newsletter form after filling it
        else{
            document.getElementById("place").innerHTML = "Hello " + name1 + "!";
            document.getElementById("newsletter").style.display = "none";
            localStorage.setItem('fullname', name1);
            localStorage.setItem('email', email1);
        }}
     //works by clicking the button   
     document.getElementById('submitnl').addEventListener("click", AddName);


    
     


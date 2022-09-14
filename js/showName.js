//Newsletter - shows user's saved name on other pages

fName = localStorage.getItem("fullname")
//show nothing if there is no name saved in local storage
if (localStorage.getItem("fullname") === null){
    document.getElementById("greeting").style.display = "none"; 
    document.getElementById("displayname").innerHTML = "";   
}
//greeting for user with his/her saved name on the top of the page
else{
document.getElementById("displayname").innerHTML = "Hello " + fName + "!";
}

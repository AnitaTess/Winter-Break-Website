//Skiing equipment hire calculator
let rate= 0;
//function for calculating the price
function calculateCost(){
	
	let people = document.getElementById("people").value;
	let weeks = document.getElementById("weeks").value;
	let package = document.getElementById("package").value;
	let discount = 0;
	let price = rate * weeks;
	let total = price * people;
//adding 10% discount for gorups over 4 people
		if (people > 4){
			console.log("10%");
			discount = (total * .10);
		} else {
			discount = 0;
			console.log(discount);
		}
//statements for showing the calculations result to user	
		if (discount == 0){
		
			document.getElementById("details").innerHTML = package +" package for " + people + " people for that amount of time would be " + total +"£."
		} else {
			let discountedCost = total - discount
			document.getElementById("details").innerHTML = package +" package for " + people + " people for that amount of time would be " + discountedCost +"£."
		}
	document.getElementById("details").style.display = 'block';
}

//taking the rate from each package
function changeLevel(){
	
	let level = document.getElementById("package").value;
	
	
	switch(level)
	{
		case "Economy":
			rate = 90;
			break;
		case "Intermediate":
			rate = 120;
			break;
		case "Performance":
			rate = 145;
			break;
		default:
			rate = 0;
	}
	
}
//making both functions work when user press the button
document.getElementById('calculate').addEventListener("click", calculateCost);
document.getElementById('package').addEventListener("change", changeLevel);

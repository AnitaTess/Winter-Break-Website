//Snowboarding equipment hire calculator
let rate1= 0;
//function for calculating the price
function calculateCosts(){
	
	let people1 = document.getElementById("people1").value;
	let weeks1 = document.getElementById("weeks1").value;
	let package1 = document.getElementById("package1").value;
	let discount1 = 0;
	let price1 = rate1 * weeks1;
	let total1 = price1 * people1;
//adding 10% discount for gorups over 4 people
		if (people1 > 4){
			console.log("10%");
			discount1 = (total1 * .10);
		} else {
			discount1 = 0;
			console.log(discount1);
		}
//statements for showing the calculations result to user	
		if (discount1 == 0){
		
			document.getElementById("details2").innerHTML = package1 +" package for " + people1 + " people for that amount of time would be " + total1 +"£."
		} else {
			let discountedCost1 = total1 - discount1
			document.getElementById("details2").innerHTML = package1 +" package for " + people1 + " people for that amount of time would be " + discountedCost1 +"£."
		}	
	document.getElementById("details2").style.display = 'block';
}

//taking the rate from each package
function changeLevels(){
	
	let level1 = document.getElementById("package1").value;
	
	
	switch(level1)
	{
		case "Economy":
			rate1 = 119;
			break;
		case "Intermediate":
			rate1 = 145;
			break;
		case "Performance":
			rate1 = 170;
			break;
		default:
			rate1 = 0;
	}
	
}
//making both functions work when user press the button
document.getElementById('calculatesb').addEventListener("click", calculateCosts);
document.getElementById('package1').addEventListener("change", changeLevels);

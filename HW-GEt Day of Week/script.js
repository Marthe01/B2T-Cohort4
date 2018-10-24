let day = new Date().getDay()
	console.log(day);
	switch(day){
		case 0:
			document.getElementById("displayDayOfWeek").innerHTML = "Sunday";
			break;
		case 1:
			document.getElementById("displayDayOfWeek").innerHTML = "Monday";
			break;
		case 2:
			document.getElementById("displayDayOfWeek").innerHTML = "Tuesday";
			break;
		case 3:
			document.getElementById("displayDayOfWeek").innerHTML+= " Wednesday ";
			break;
		case 4:
			document.getElementById("displayDayOfWeek").innerHTML = "Thursday";
			break;
		case 5:
			document.getElementById("displayDayOfWeek").innerHTML = "Friday";
			break;
		case 6:
			document.getElementById("displayDayOfWeek").innerHTML = "Saturday";
			break;
	}
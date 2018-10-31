let color = ["Blue", "Green", "red", "Orange", "Violet", "Indigo", "Yellow"];
let order = ["th", "st", "nd", "rd"];

for(let i = 0; i < color.length; i++){

	if (i > 2){
				document.getElementById("colors").innerHTML +=  i +1  +order[0] +  " choice is "  + color[i] + "<br>";
	}


	else{
		document.getElementById("colors").innerHTML +=  i +1  +order[i+1] +  " choice is " + color[i] + "<br>";
	}
}
function greaterNumber(){
	
	let userNumber1 = parseInt(prompt("Put first number"));
	let userNumber2 = parseInt(prompt("Put second number"));
	let userNumber3 = parseInt(prompt("Put third number"));
	
	if(userNumber1 > userNumber2 && userNumber1 > userNumber3){
		console.log("userNumber1 is greater");
	}else if(userNumber2 > userNumber1 && userNumber2 > userNumber3){
		console.log("userNumber2 is greater");
	}else{
		console.log("userNumber3 is greater");
	}

}
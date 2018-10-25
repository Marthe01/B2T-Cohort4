let int = 1;
while(int  < 101){
	
	if(int % 3 === 0 && int % 5 === 0){
		console.log("FizzBizz");
	
	}else if(int % 3 === 0){
		console.log("Fizz")


	}else if(int % 5 === 0){
		console.log("Bizz")


	}else {
	
		console.log(int);
		}
	int++;
}
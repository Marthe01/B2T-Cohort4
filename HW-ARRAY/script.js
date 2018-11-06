function AddNewFruit(){
	let FruitsValue = prompt("Please enter new fruit").toLowerCase();
	


	Fruits.unshift(FruitsValue);
	Fruits.sort();
	console.log(Fruits);
	
	document.getElementById("FruitsH1").innerHTML = Fruits.join(" with ");
}

let Fruits = [" apples", " oranges ", " kiwi "];
document.getElementById("FruitsH1").innerHTML = Fruits.join(" with ");

function AddNewFruit2(){
	Fruits.push(document.getElementById("FruitsH1").value);
	document.getElementById("FruitsH1").innerHTML = Fruits.join(" with ");
	console.log(Fruits);
	

}


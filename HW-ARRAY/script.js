function AddNewFruit(){
	let FruitsValue = prompt("Please enter new fruit");


	Fruits.unshift(FruitsValue);
	Fruits.sort();
	console.log(Fruits);
	
	document.getElementById("FruitsH1").innerHTML = Fruits.join(" with ");
}

let Fruits = [" Apples", " Oranges ", " Kiwi "];
document.getElementById("FruitsH1").innerHTML = Fruits.join(" with ");

function AddNewFruit2(){
	Fruits.push(document.getElementById("FruitsH1").value);
	document.getElementById("FruitsH1").innerHTML = Fruits.join(" with ");
	console.log(Fruits);
	

}


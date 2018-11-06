
document.getElementById('myBox').addEventListener('mouseover', makeBoxGreen);

document.getElementById('myBox').addEventListener('mouseleave', makeBoxRed);

document.getElementById('toggleButton').addEventListener('click', changeToggleButton);

function changeToggleButton(){
	let toggleButton = document.getElementById('toggleButton');
	if( toggleButton.value === 'ON' ){
		toggleButton.value = 'OFF';
		document.getElementById('myBox').removeEventListener('mouseover', makeBoxGreen);
	}else{
		toggleButton.value = 'ON';
		document.getElementById('myBox').addEventListener('mouseover', makeBoxGreen);
	}
}

//-----------------------------------------------------------

function makeBoxGreen(){
	document.getElementById('myBox').style.backgroundColor = 'green';
}

function makeBoxRed(){
	document.getElementById('myBox').style.backgroundColor = 'red';
}

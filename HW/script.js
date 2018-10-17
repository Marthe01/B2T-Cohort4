function getFormValue(){
	let firstName = document.getElementById('fname').value;
	let lastName = document.getElementById('lname').value;
	document.getElementById('display').innerHTML = 'Hello ' + firstName + " " +lastName;
}
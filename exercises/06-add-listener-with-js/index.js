window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
	const greenButton = document.getElementById('theGreen');

	greenButton.addEventListener('click', () => {
		alert('whoohoo');
	});
};


//the listener function here

function getRandomColor(){
  //code from http://www.paulirish.com/2009/random-hex-color-code-snippets/
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

document.addEventListener("DOMContentLoaded", function(event) { 

	var container = document.getElementsByClassName("container");
	var counter = 0

	var flash = setInterval(flash, 5)

	function flash() {
		container[0].style.color = getRandomColor();
		document.body.style.backgroundColor = getRandomColor(); 
		console.log("flashing")
	}

	container[0].addEventListener("click", function(){
		container[0].style.color = getRandomColor();
		document.body.style.backgroundColor = getRandomColor(); 
	});

});
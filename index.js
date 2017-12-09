document.getElementById("demo").innerHTML = "Hello I'm Yvon";


function show() {
	var thisyear = new Date().getFullYear();
	var birthday = document.getElementById("birthday").value;
	var text;

	if (!isNaN(birthday) && birthday < 2017 && birthday > 1917) {
		text = "You're right! " + "Yvon is " + (thisyear - birthday) + " years old";
	}else {
		text = "No no!";
	}
    document.getElementById("age").innerHTML = text;

	
}
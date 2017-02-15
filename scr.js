function SayHello() {
	console.log(event);
	var name = document.getElementById('name').value;
	var message = "<h2>Hello " + name + "!</h2>";
	document.getElementById('content').innerHTML = message;

	if (name === "Princess Osaghaede") {
		message += " <h2>How u Doin' nah?!</h2>"
		document.getElementById('content').innerHTML = message;
		var title = document.querySelector('h1').innerHTML;
		title += " & Lovin' It";
		document.querySelector('h1').innerHTML = title;
	};

}
document.querySelector('button').addEventListener('click', SayHello);
document.querySelector('body').addEventListener('mousemove', function () {
	if (event.shiftKey === true) {
		console.log('x :' + event.clientX);
		console.log('y :' + event.clientY);
	}
});
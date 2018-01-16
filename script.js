var shake1 = 0;
var shake2 = 0;
var mousex = 0;
var mousey = 0;
var start;
function follow() {
	mousex = event.clientX;
	mousey = event.clientY;
	console.log(mousex)
}
function stop() {
	clearInterval(move())
}
function bounce() {
	var pointer = document.getElementById('pointer');
	var ball = document.getElementById('ball');
	var dif = pointer.getBoundingClientRect().left - ball.getBoundingClientRect().left;
	return (dif*1.6)
}
function start() {
	console.log(bounce());
}
function remove(cup, player) {
	document.getElementById(cup).classList.add("hide");
	if(player === 1) {
		shake1 = shake1 + 5;
	} else {
		shake2 = shake2 + 5;
	}
}
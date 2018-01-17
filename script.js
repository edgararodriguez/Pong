var shake1 = 10;
var shake2 = 0;
var mousex = 0;
var mousey = 0;
var start;
function follow() {
	mousex = event.clientX;
	mousey = event.clientY;
}
function stop() {
	clearInterval(move())
}
function bounce() {
	var ball = document.getElementById('ball');
	var bh = ball.getBoundingClientRect().top;
	console.log(bh);
	var pointer = document.getElementById('pointer');
	var dif = pointer.getBoundingClientRect().left - ball.getBoundingClientRect().left;
	ball.classList.add("pingpongballmove");
	ball.style.left = (pointer.getBoundingClientRect().left-ball.getBoundingClientRect().width/2)*1.6+'px';
	ball.style.top = (pointer.getBoundingClientRect().top+pointer.getBoundingClientRect().top-bh-ball.getBoundingClientRect().height)+'px';
}
function caleb() {
	bounce();
	clearInterval(start);
}
function remove(cup, player) {
	document.getElementById(cup).classList.add("hide");
	if(player === 1) {
		shake1 = shake1 + 5;
	} else {
		shake2 = shake2 + 5;
	}
}
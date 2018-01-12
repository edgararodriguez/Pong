var shake1 = 0;
var shake2 = 0;
function follow() {
	var pointer = document.getElementById('pointer');
	var x = event.clientX + (Math.random()*shake1);
    var y = event.clientY + (Math.random()*shake1);
    pointer.style.left = x +'px';
    pointer.style.top = y +'px';
    console.log(x)
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
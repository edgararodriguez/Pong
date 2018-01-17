var shake1 = 10;
var shake2 = 0;
var mousex = 0;
var mousey = 0;
var player = 1;
var start;
var list = ['cup1', 'cup2', 'cup3', 'cup4', 'cup5', 'cup6', 'cup7', 'cup8', 'cup9', 'cup10'];
var list1 = ['cup1', 'cup2', 'cup3', 'cup4', 'cup5', 'cup6', 'cup7', 'cup8', 'cup9', 'cup10'];
var list2 = ['cup1', 'cup2', 'cup3', 'cup4', 'cup5', 'cup6', 'cup7', 'cup8', 'cup9', 'cup10'];
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
	//wait(4000);
}
function caleb() {
	bounce();
	clearInterval(start);
}
function setup() {
	if (player === 1) {
		for (i=0; i<list1.length; i++) {
			if (list1[i] === "") {
				document.getElementById(list[i]).classList.add("hide");
			} else {
				document.getElementById(list[i]).classList.remove("hide");
			}
		}
	} else {
		for (i=0; i<list2.length; i++) {
			if (list2[i] === "") {
				document.getElementById(list[i]).classList.add("hide");
			} else {
				document.getElementById(list[i]).classList.remove("hide");
			}
		}
	}
}
function remove(cup, player) {
	document.getElementById(cup).classList.add("hide");
	if(player === 1) {
		shake1 = shake1 + 5;
	} else {
		shake2 = shake2 + 5;
	}
}

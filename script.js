var shake1 = 0;
var shake2 = 0;
var shake = shake1;
var mousex = 0;
var mousey = 0;
var player = 1;
var start;
var list = ['cup1', 'cup2', 'cup3', 'cup4', 'cup5', 'cup6', 'cup7', 'cup8', 'cup9', 'cup10'];
var list1 = ['cup1', 'cup2', 'cup3', 'cup4', 'cup5', 'cup6', 'cup7', 'cup8', 'cup9', 'cup10'];
var list2 = ['cup1', 'cup2', 'cup3', 'cup4', 'cup5', 'cup6', 'cup7', 'cup8', 'cup9', 'cup10'];
var bh;
alert('It is player'+player+"'s turn")
function follow() {
	mousex = event.clientX;
	mousey = event.clientY;
}
function stop() {
	clearInterval(move())
}
function hitzone(x, y) {
	var ball = document.getElementById('ball');
	var mid = ball.getBoundingClientRect().width/2;
	var boundL = x+10;
	var boundT = y+10;
	var boundR = boundL+50;
	var boundB = boundT+50;
	if (ball.getBoundingClientRect().left+mid > boundL && ball.getBoundingClientRect().left+mid < boundR && ball.getBoundingClientRect().top+mid > boundT && ball.getBoundingClientRect().top+mid < boundB) {
		return (true);
	} else {
		return (false);
	}
}
function bounce() {
	var ball = document.getElementById('ball');
	var pointer = document.getElementById('pointer');
	bh = ball.getBoundingClientRect().top;
	var dif = pointer.getBoundingClientRect().left - ball.getBoundingClientRect().left;
	ball.classList.add("pingpongballmove");
	ball.style.left = (pointer.getBoundingClientRect().left-ball.getBoundingClientRect().width/2)*1.6+'px';
	ball.style.top = (pointer.getBoundingClientRect().top+pointer.getBoundingClientRect().top-bh-ball.getBoundingClientRect().height)+'px';
	setTimeout (edgar,2000)
}
function edgar(){
	var spec = false;
	for (i = 0; i < list.length; i++) {
		if (hitzone(document.getElementById(list[i]).getBoundingClientRect().left, document.getElementById(list[i]).getBoundingClientRect().top) === true) {
			spec = true
			remove(list[i],(i));
			break;
		}
	}
	if (spec === false) {
		restart();
	}
}
function caleb() {
	bounce();
	clearInterval(start);
}
function endround() {
	document.getElementById('ball').style.top = bh+'px';
	document.getElementById('ball').style.left = 100+'px';
	document.getElementById('ball').classList.remove('pingpongballmove');
	if (player === 1) {
		player = 2;
		shake = shake2;
	} else {
		shake = shake1;
		player =1
	}
	alert('It is player'+player+"'s turn");
	setup();
}
function setup() {
	if (player === 1) {
		for (i=0; i<list1.length; i++) {
			if (list1[i] === '') {
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
function remove(cup, cupnumber) {
	document.getElementById(cup).classList.add("hide");
	if(player === 1) {
		shake2 = shake2 + 5;
		list1[cupnumber] = '';
	} else {
		shake1 = shake1 + 5;
		list2[cupnumber] = '';
	}
	setTimeout(endround, 1000);
}
function restart() {
	endround();
}

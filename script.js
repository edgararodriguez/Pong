var shake1 = 0;
var shake2 = 0;
var mousex = 0;
var mousey = 0;
var player = 1;
var start;
var list = ['cup1', 'cup2', 'cup3', 'cup4', 'cup5', 'cup6', 'cup7', 'cup8', 'cup9', 'cup10'];
var list1 = ['cup1', 'cup2', 'cup3', 'cup4', 'cup5', 'cup6', 'cup7', 'cup8', 'cup9', 'cup10'];
var list2 = ['cup1', 'cup2', 'cup3', 'cup4', 'cup5', 'cup6', 'cup7', 'cup8', 'cup9', 'cup10'];
var bh = ball.getBoundingClientRect().top;
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
	var boundR = x+60;
	var boundB = y+60;
	console.log(boundR);
	console.log(boundB);
	console.log(ball.getBoundingClientRect().left+mid);
	console.log(ball.getBoundingClientRect().top+mid);
	if (ball.getBoundingClientRect().left+mid > x && ball.getBoundingClientRect().left+mid < boundR && ball.getBoundingClientRect().top+mid > y && ball.getBoundingClientRect().top+mid < boundB) {
		return (true);
	} else {
		return (false);
	}
}
function bounce() {
	var ball = document.getElementById('ball');
	console.log(bh);
	var pointer = document.getElementById('pointer');
	var dif = pointer.getBoundingClientRect().left - ball.getBoundingClientRect().left;
	ball.classList.add("pingpongballmove");
	ball.style.left = (pointer.getBoundingClientRect().left-ball.getBoundingClientRect().width/2)*1.6+'px';
	ball.style.top = (pointer.getBoundingClientRect().top+pointer.getBoundingClientRect().top-bh-ball.getBoundingClientRect().height)+'px';
	setTimeout (edgar,5000)
}
function edgar(){
	for (i = 0; i < list.length; i++) {
		console.console.log(hitzone(document.getElementById(list[i]).getBoundingClientRect().left, document.getElementById(list[i]).getBoundingClientRect().top))
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
	} else {
		player =1
	}
	setup();
}
function setup() {
	console.log('start');
	if (player === 1) {
		for (i=0; i<list1.length; i++) {
			if (list1[i] === '') {
				console.log('remove');
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
		shake1 = shake1 + 5;
		list1[cupnumber] = '';
	} else {
		shake2 = shake2 + 5;
		list2[cupnumber] = ''
	}
}

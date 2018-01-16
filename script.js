var xspeed = 10;
var yspeed = 10;
function test() {
	console.log(document.getElementById("ball").getBoundingClientRect());
}
function start() {
	setInterval(function move() {
		var ball = document.getElementById("ball");
		var paddle = document.getElementById("paddle");
		var xpos = document.getElementById("ball").getBoundingClientRect().left;
		var ypos = document.getElementById("ball").getBoundingClientRect().top;
		ball.style.left = (xspeed+xpos)+'px';
		ball.style.top = (yspeed+ypos)+'px';
		if (ball.getBoundingClientRect().right <= 5 || ball.getBoundingClientRect().left > window.innerWidth-25) {
			xspeed = xspeed* -1;
			ball.style.left = (xspeed+xpos)+'px';
			ball.style.top = (yspeed+ypos)+'px';
		}
		if (ball.getBoundingClientRect().top <= 5) {
			var score = Number(document.getElementById("score").value) + 1;
			document.getElementById("score").value = score;
			yspeed = yspeed * -1;
			ball.style.left = (xspeed+xpos)+'px';
			ball.style.top = (yspeed+ypos)+'px';
		}
		if (ball.getBoundingClientRect().top > window.innerHeight-25) {
			location.reload();
		}
		if (ypos >= paddle.getBoundingClientRect().top - 35 && ypos < paddle.getBoundingClientRect().top -30 && xpos >= paddle.getBoundingClientRect().left - 35 && xpos < paddle.getBoundingClientRect().left + 123) {
			yspeed =yspeed * -1;
			ball.style.left = (xspeed+xpos)+'px';
			ball.style.top = (yspeed+ypos)+'px';
		}
	}, 30);
}
function shift() {
	var paddle = document.getElementById("paddle");
	if(document.getElementById('controls').value === 'd') {// && paddle.getBoundingClientRect().left < window.innerWidth - 55){
		paddle.style.left = (paddle.getBoundingClientRect().left+50)+'px';
		document.getElementById('controls').value = "";
	} else if (document.getElementById('controls').value === 'a') {// && paddle.getBoundingClientRect().left > window.innerWidth + 55){
		paddle.style.left = (paddle.getBoundingClientRect().left-50)+'px';
		document.getElementById('controls').value = "";
	} else {
		document.getElementById('controls').value = "";
	}
	document.getElementById('controls').value = "";
}
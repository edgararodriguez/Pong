function follow() {
	var pointer = document.getElementById('pointer');
	var x = event.clientX;
    var y = event.clientY;
    pointer.style.left = x;
    pointer.style.top = y;
}
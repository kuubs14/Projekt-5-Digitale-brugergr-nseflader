var bg = new Image();
bg.src = "../imgs/null.png";
function initCanvas(){
	var ctx = document.getElementById('my_canvas').getContext('2d');
	var cW = ctx.canvas.width, cH = ctx.canvas.height;
	var flakes = [];
    
	function addFlake(){
		var x = Math.floor(Math.random() * cW) + 1;
		var y = 0;
		var s = Math.floor(Math.random() * 3) + 1;
		flakes.push({"x":x,"y":y,"s":s});
	}
	function snow(){
		addFlake();
		addFlake();
		for(var i = 0; i < flakes.length; i++){
			ctx.fillStyle = "rgba(255,255,255,.75)";
			ctx.beginPath();
			ctx.arc(flakes[i].x, flakes[i].y+=flakes[i].s*.5, flakes[i].s*.5, 0, Math.PI*2, false);
			ctx.fill();
			if(flakes[i].y > cH){
				flakes.splice(i,1);
			}
			document.getElementById('status').innerHTML = "Snow Flake Count = "+flakes.length;
		}
    }
	function animate(){
		ctx.save();
		ctx.clearRect(0, 0, cW, cH);
		ctx.drawImage(bg,0,0);
		//ctx.rotate(0);
		snow();
		ctx.restore();
	}
	var animateInterval = setInterval(animate, 30);
}
window.addEventListener('load', function(event) {
	initCanvas();
});
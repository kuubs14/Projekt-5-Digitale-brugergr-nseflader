// THE COMPLETE RAIN.JS FILE

const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;
const defaultDropNum = 100;


function makeItRain (num) {

	let elements = document.getElementById("drops-section");

	while (elements.hasChildNodes()) {
		elements.removeChild(elements.lastChild);
	}


	for (let i = 0 ; i < num ; i ++) {
		let randomX = Math.floor(Math.random() * (pageWidth));
		let randomY = Math.floor(Math.random() * (pageHeight));
		let dropSpeed = Math.floor(Math.random() * (25 - 5)) + 5;
		let dropWidth = Math.floor(Math.random() * (dropSpeed/10 - 1)) + 1;
		let dropHeight = Math.floor(Math.random() * (dropSpeed*2 - 3)) + 3;
		let d = new Drop(randomX, randomY, dropSpeed, dropWidth, dropHeight);

		d.show();
		d.fall();

	}

}

function updateNumberInView (num) {
	let el = document.getElementById("dropsNum").firstChild;
	el.nodeValue = num;
}

function changeNumDrops (num) {
	updateNumberInView(num);
	makeItRain(num);
}

updateNumberInView(defaultDropNum);
makeItRain(defaultDropNum);
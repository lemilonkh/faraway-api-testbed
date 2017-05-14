var raphael = require('node-raphael');

raphael.fn.ball = function(x, y, r, hue) {
	hue = hue || 0;
	return this.set(
		this.ellipse(x, y + r - r / 5, r, r / 2).attr({fill: "rhsb(" + hue + ", 1, .25)-hsb(" + hue + ", 1, .25)", stroke: "none", opacity: 0}),
		this.ellipse(x, y, r, r).attr({fill: "r(.5,.9)hsb(" + hue + ", 1, .75)-hsb(" + hue + ", .5, .25)", stroke: "none"}),
		this.ellipse(x, y, r - r / 5, r - r / 20).attr({stroke: "none", fill: "r(.5,.1)#ccc-#ccc", opacity: 0})
	);
};

function draw(paper) {
	ball(paper, x, y, r, hue);
	R.ball(x, y, r, Math.random());
}

var svg = raphael.generate(width, height, draw);

console.log("SVG", svg);

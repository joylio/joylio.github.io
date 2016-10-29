var imgArr = {
	"LeafVR | Jiayu Liu": [
		"/images/leaf1.png",
		"/images/leaf2.png",
		"/images/leaf3.png",
		"/images/leaf4.png"
	],

	"Color Run | Jiayu Liu": [
		"/images/color1.png",
		"/images/color2.png",
		"/images/color3.png"
	],

	"Sound of Silence | Jiayu Liu": [
		"/images/soundofsilence1.png"
	],

	"Heat Man | Jiayu Liu": [
		"/images/heatman1.png",
		"/images/heatman2.png",
		"/images/heatman3.png",
		"/images/heatman4.png",
		"/images/heatman5.png",
		"/images/heatman6.png",
		"/images/heatman7.png",
		"/images/heatman8.png",
		"/images/heatman9.png",
		"/images/heatman10.png"
	],

	"Left Alive | Jiayu Liu": [
		"/images/leftalive1.png"
	]
}

var count = 0;
var image = imgArr[document.title];

function ToggleImage() {
	$(".gallery img").fadeOut(200, function() {
		count++;
		$(".gallery img").attr("src", image[count % image.length]).fadeIn(200);
	});
}

$(document).ready(function() {
	if (image.length > 1)
		setInterval('ToggleImage()', 3000);
});
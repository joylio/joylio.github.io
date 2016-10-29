var imgArr = {
	"LeafVR | Jiayu Liu": [
		"/images/leaf1.PNG",
		"/images/leaf2.PNG",
		"/images/leaf3.PNG",
		"/images/leaf4.PNG"
	],

	"Color Run | Jiayu Liu": [
		"/images/color1.PNG",
		"/images/color2.PNG",
		"/images/color3.PNG"
	],

	"Sound of Silence | Jiayu Liu": [
		"/images/soundofsilence1.PNG"
	],

	"Heat Man | Jiayu Liu": [
		"/images/heatman1.PNG",
		"/images/heatman2.PNG",
		"/images/heatman3.PNG",
		"/images/heatman4.PNG",
		"/images/heatman5.PNG",
		"/images/heatman6.PNG",
		"/images/heatman7.PNG",
		"/images/heatman8.PNG",
		"/images/heatman9.PNG",
		"/images/heatman10.PNG"
	],

	"Left Alive | Jiayu Liu": [
		"/images/leftalive1.PNG"
	]
}

var count = 0;
var title = imgArr[document.title];

function ToggleImage() {
	$(".gallery img").fadeOut(200, function() {
		count++;
		$(".gallery img").attr("src", title[count % title.length]).fadeIn(200);
	});
}

$(document).ready(function() {
	if (title.length > 1)
		setInterval('ToggleImage()', 3000);
});
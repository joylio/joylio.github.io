---
---

var imgArr = {
	"LeafVR | Jiayu Liu": [
		"{{site.baseurl}}/images/leaf1.png",
		"{{site.baseurl}}/images/leaf2.png",
		"{{site.baseurl}}/images/leaf3.png",
		"{{site.baseurl}}/images/leaf4.png"
	],

	"Color Run | Jiayu Liu": [
		"{{site.baseurl}}/images/color1.png",
		"{{site.baseurl}}/images/color2.png",
		"{{site.baseurl}}/images/color3.png"
	],

	"Sound of Silence | Jiayu Liu": [
		"{{site.baseurl}}/images/soundofsilence1.png"
	],

	"Heat Man | Jiayu Liu": [
		"{{site.baseurl}}/images/heatman1.png",
		"{{site.baseurl}}/images/heatman2.png",
		"{{site.baseurl}}/images/heatman3.png",
		"{{site.baseurl}}/images/heatman4.png",
		"{{site.baseurl}}/images/heatman5.png",
		"{{site.baseurl}}/images/heatman6.png",
		"{{site.baseurl}}/images/heatman7.png",
		"{{site.baseurl}}/images/heatman8.png",
		"{{site.baseurl}}/images/heatman9.png",
		"{{site.baseurl}}/images/heatman10.png"
	],

	"Left Alive | Jiayu Liu": [
		"{{site.baseurl}}/images/leftalive1.png"
	]
}

var count = 0;
var i = imgArr[document.title];

function ToggleImage() {
	$(".gallery img").fadeOut(200, function() {
		count++;
		$(".gallery img").attr("src", i[count % i.length]).fadeIn(200);
	});
}

$(document).ready(function() {
	if (i.length > 1)
		setInterval('ToggleImage()', 3000);
});
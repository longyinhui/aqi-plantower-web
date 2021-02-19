function getContrastYIQ(color) {
	var colors = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	var red = colors[1];
	var green = colors[2];
	var blue = colors[3];
	var brightness;
	brightness = (red * 299) + (green * 587) + (blue * 114);
	brightness = brightness / 255000;
	return brightness;
	/*if (brightness >= 0.5) {
		return "light";
	} else {
		return "dark";
	}
	*/
}

/*
var RgbValue = this.style.backgroundColor.replace("rgb(", "").replace(")", "");


var RgbValueArry = RgbValue.split(",");

var $grayLevel = RgbValueArry[0] * 0.299 + RgbValueArry[1] * 0.587 + RgbValueArry[2] * 0.114;

$this.addClass("color_curr");

if ($grayLevel >= 192) {
　　$this.html('<p class="fa fa-check color_black"></p>');
} else {
　　$this.html('<p class="fa fa-check color_withe"></p>');
}*/
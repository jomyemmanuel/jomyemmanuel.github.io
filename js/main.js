$(window).scroll(function() {

	var elem = document.querySelector('.affix');
	var prop = document.querySelector('.navbar-collapse.collapse');
	var logo = document.querySelector('#logo');
	if (elem!=null) {
		prop.style.padding = "0px";
		logo.style.height = "40px";
		logo.style.width = "40px";
		logo.style.top = "5px";
	}
	else {
		prop.style.padding = "15px 0px 0px";
		logo.style.height = "60px";
		logo.style.width = "60px";
		logo.style.top = "10px";
	}
	prop.style.transition = "all 0.3s linear";
	logo.style.transition = "all 0.3s linear";
});
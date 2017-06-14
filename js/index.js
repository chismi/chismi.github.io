$( document ).ready(function(){
	//fade in background and icons On Loading
	$('#background').fadeIn(400);
	$('.BLM-icon-idx').fadeIn(800);
	$('.Icon-title').slideDown(400);

});

//Change on selecting Content
function switchIcon(content) {

//Find the Nav Chose
switch (content) {
	 /* Work Icon */
	 case 'Work':
	 $('.BLM-icon-sm').css({"background":"url(\"img/Icon_idx.png\") no-repeat center center","background-size":"contain"})
	 break;
	 /* Development Icon */
	 case 'In-Development':
	 $('.BLM-icon-sm').css({"background":"url(\"img/Icon_dev.png\") no-repeat center center","background-size":"contain"})
	 break;
	 /* Contributors Icon */
	 case 'Contributors':
	 $('.BLM-icon-sm').css({"background":"url(\"img/Icon_wrk.png\") no-repeat center center","background-size":"contain"})
	 break;
	 /* Contact Icon */
	 case 'Contact':
	 $('.BLM-icon-sm').css({"background":"url(\"img/Icon_bw.png\") no-repeat center center","background-size":"contain"})
	 break;
}

}

//Change Nav Background Color based on type of Nav
function navColor(navElement) {

var navTitle = navElement.text()

//Find the Nav Chosen
switch (navTitle) {
	 /* Return Work Color */
	 case 'Work':
	 return "rgba(189,16,224,0.35)";
	 break;
	 /* Return Development Color */
	 case 'In-Development':
	 return "rgba(0,170,197,0.35)";
	 break;
	 /* Return Contributors Color */
	 case 'Contributors':
	 return "rgba(248,231,28,0.35)";
	 break;
	 /* Contact Icon */
	 case 'Contact':
	 return "rgba(126,211,33,0.35)";
	 break;
}

}


// Establish Nav Button Event Listeners */
var $navButton = $('li.nav');

// Onclick change Icon and Set Button Background Color
$navButton.click(function(){
	switchIcon($(this).text());
});

// On click change and hold background color
$navButton.click(function(){

	var switchColor = navColor($(this));
	//reset all nav bkg colors
	$('li').css("background-color", "rgba(255,255,255,0)");
	$(this).css("background-color", switchColor);
})

// Reverse Mouseover Changes when Mouse Leaves
/*$navButton.mouseleave(function(){
	$(this).css("background-color", "rgba(240,240,240,0)")
	document.body.style.cursor = 'default';
})*/


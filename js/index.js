$( document ).ready(function(){
	//fade in background and icons On Loading
	$('#background').fadeIn(800);
	$('BLM-icon-idx').fadeIn(1000);

});

//Change on selecting Content
function switchContent() {

//Toggle off Icon & Title
$('.BLM-icon-idx').toggle();
$('.title').toggle();

//Toggle On Small Icon & Title
$('.BLM-icon-sm-bw').slideToggle(400);
$('.Icon-title').slideToggle(400);
}

$('#content-btn').on('click', function() {
	switchContent()
});
// JavaScript Document

//Initial load of page
$(document).ready(sizeContent);

//Every resize of window
$(window).resize(sizeContent);

//Dynamically assign height
function sizeContent() {
	
	//determine sizes
	var pageWidth = $("body").width();
	var pageHeight = $("body").height();
	
	$("#pageContainer").css("width",pageWidth*2);
	
	$(".page").css("width",pageWidth/2);
}
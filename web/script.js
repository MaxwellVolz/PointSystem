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
	
	$(".page").css("width",pageWidth);
}

var playerCount = 0;
var scoreCount = 0;


$(document).ready(function() {
	
	
	
	$( "div#plus" ).mousedown(function(){
		$("div#startGame").css("opacity",1);
		
		++playerCount;
		$( "h1#players" ).html( playerCount );
	});
	
	$( "div#minus" ).mousedown(function(){
		if(playerCount > 0){
			--playerCount;
		}
		if(playerCount == 0){
			$("div#startGame").css("opacity",0);
		}
		
		$( "h1#players" ).html( playerCount );
	});
	
	$( "div#startGame" ).mousedown(function(){
		startIt();
		$( "div#scoreboard" ).css("top","-100%");
	});
	
});



function startIt(){
	var pageWidth = $("body").width();
	var pageHeight = $("body").height();
	var playerCountx = playerCount;
	
	while (playerCountx > 0) { 
		$("tr#mainRow td#mainD").append( 
		
			"<td><div class='testBox' id='scoreRow"+playerCountx+"'><h1 id='scoreTotal'>0</h1><div id='line'></div><div id='scoreSelect'><div id='playersSpacing'><h1 id='players'>0</h1></div><div id='minus'><h1>-</h1></div><div id='plus'><h1>+</h1></div></div></div></td>"	
			
			);
			
	var pageWidth = $("body").width();
	var pageHeight = $("body").height();

	--playerCountx;
	}
	
	$("td#mainD td").css("height",pageHeight);
	$("td#mainD td").css("width",pageWidth/playerCount);
}
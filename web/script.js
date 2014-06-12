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
	while (playerCount > 0) { 
		$("tr#mainRow td#mainD").append( 
		
			"<td><input type='text'/></td>"	
			
			);
		
		--playerCount;
	}
}
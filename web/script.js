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
		$( "div#scoreboard" ).css("z-index","20");
	});
	
	
	
});



function startIt(){
	var pageWidth = $("body").width();
	var pageHeight = $("body").height();
	var x = playerCount;
	
	while (x > 0) { 
		$("tr#mainRow td#mainD").append( 
		
			"<td><div class='testBox' id='scoreRow"+x+"'><h1 class='scoreTotal' id='scoreTotal"+x+"'>0</h1><div id='line'></div><div id='scoreSelect'><div id='"+x+"' class='minus'><h1>-</h1></div><div id='"+x+"' class='plus' value='"+x+"'><h1>+</h1></div><div id='playersSpacing'><h1 id='players"+x+"'>0</h1></div></div><div class='startGame' id='addScore"+x+"' value='"+x+"'><h1>ok</h1></div></div></td>"	
			
			);
			
	var pageWidth = $("body").width();
	var pageHeight = $("body").height();
	
	

	--x;
	}
	
	$("td#mainD td").css("height",pageHeight);
	$("td#mainD td").css("width",pageWidth/playerCount);
	
	
	//$( "div#scoreSelect div.plus" ).on('click',notify);
	$('div#scoreSelect div.minus').click(function(){
        subtractify(this.id);
    });
	
	$('div#scoreSelect div.plus').click(function(){
        addify(this.id);
    });
	
	$('div.startGame').click(function(){
		var v = this.id.slice(8,9);
		
        submitScore(v);
    });
	

}

 
function addify(y){
	var scoreToChange = 'h1#players'+y;
	var submitToShow = '#addScore'+y;
	
	var currentScore = $(scoreToChange).html();
	++currentScore;
	
	$(scoreToChange).html(currentScore);
	
	if(currentScore == 0){
			$(submitToShow).css("opacity",0);
	}
	if(currentScore != 0){
			$(submitToShow).css("opacity",1);
	}
	
}

function subtractify(z){
	var scoreToChange = 'h1#players'+z;
	var submitToShow = '#addScore'+z;
	
	var currentScore = $(scoreToChange).html();
	--currentScore;
	
	$(scoreToChange).html(currentScore);
	
	if(currentScore == 0){
			$(submitToShow).css("opacity",0);
	}
	if(currentScore != 0){
			$(submitToShow).css("opacity",1);
	}
}

function submitScore(f){
	var scoreToChange = 'h1#players'+f;
	var currentScore = $(scoreToChange).html();
	
	var totalScore = 'h1#scoreTotal'+f;
	var currentTotal = $(totalScore).html();
	
	
	var newTotal= parseInt(currentTotal)+parseInt(currentScore);
	
	$(totalScore).html(newTotal);
	$(scoreToChange).html("0");
	

	submitToShow = '#addScore'+f;
	$(submitToShow).css("opacity",0);

	
}
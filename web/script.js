// JavaScript Document

setTimeout(function () {   window.scrollTo(0, 1); }, 1000);

$(window).bind("load", function() {
   // code here
   //$("h1#title").fitText();
    
});

//Initial load of page
$(document).ready(sizeContent);

//Every resize of window
$(window).resize(sizeContent);


//Dynamically assign height
function sizeContent() {
	
	//resize plugin stuff
  	//setTimeout($("h1#title").fitText(),1000);
	
	
	//determine sizes
	var pageWidth = $("body").width();
	var pageHeight = $("body").height();
	
	$("#pageContainer").css("width",pageWidth*2);
	
	$(".page").css("width",pageWidth);
	
	
}

var playerCount = 0;
var scoreCount = 0;
var colorNumber = 0;



$(document).ready(function() {
	
	//$("h1#title").fitText();
	
	
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
		sizeIt();
	});
	
	
	
	
});



function startIt(){
	var pageWidth = $("body").width();
	var pageHeight = $("body").height();
	var x = playerCount;
	
	while (x > 0) { 
		$("tr#mainRow td#mainD").append( 
		
			"<td><div class='testBox' id='scoreRow"+x+"'><div class='scoreContainer' id='"+x+"'><h1 class='scoreTotal' id='scoreTotal"+x+"' >0</h1></div><div class='scoreLog' id='scoreLog"+x+"'><div id='scoreLogContainer'><table class='scoreTable' id='scoreTable"+x+"'><tbody></tbody></table></div><div class='startGame' id='addScore"+x+"' value='"+x+"'><div id='check'></div></div></div><div id='scoreSelectContainer'><div id='scoreSelect'><div id='"+x+"' class='minus'><h1>-</h1></div><div id='"+x+"' class='plus' value='"+x+"'><h1>+</h1></div><div id='playersSpacing'><h1 id='players"+x+"'>0</h1></div></div></div></div></td>"	
			
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
	
	$('div.scoreContainer').click(function(){
		var c= this.id;
		
		colorIt(c);
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

	
	var tableLog = 'table#scoreTable'+f+' tbody';
	//var tableLog2 = 'div#scoreLog';
	$(tableLog).after("<tr class='scoreEntry'><td><h3>"+currentScore+"</h3></td></tr>");
	//$(tableLog2).append("<div>ht</div>");
}

function colorIt(c){
	var colorCycle = ["Red", "Blue", "Purple", "Yellow", "Orange", "DarkGreen"];
	
	var currentColor = colorCycle[colorNumber];
	
	var colorToChange = 'div#scoreRow'+c;
	$(colorToChange).css("background-color",currentColor);
	
	++colorNumber;
	//alert(currentColor);
	if(colorNumber > 6){
		colorNumber = 0;
	}
	
	
}

function sizeIt(){
	$("div#scoreSelect > h1").fitText();
}

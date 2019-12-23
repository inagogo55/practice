// JavaScript Document



function door() {
	alert("문은 열리지 않는다.");
}

function whale() {
	$("#whale").show();
	setTimeout(function(){$("#whale").hide();},30000);
	$("#whaletrg").attr("onClick","");
	setTimeout(function(){$("#whaletrg").attr("onClick","whale()");},30000);	
}

function persdown() {
	$("#sky").addClass("persdown");
	$("#pers").attr("onClick","");
	setTimeout(function(){$("#pers").attr("onClick","persup()");},1750);	
}

function persup() {
	$("#sky").removeClass("persdown");
	$("#sky").addClass("persup");
	$("#pers").attr("onClick","");
	setTimeout(function(){$("#sky").removeClass("persup");},500);
	setTimeout(function(){$("#pers").attr("onClick","persdown()");},1000);
}

function rkman() {
	$("#rkman").show();
	setTimeout(function(){
		$("#rkman").hide();
	 },10000);
	$("#rktrg").attr("onClick","");
	setTimeout(function(){$("#rktrg").attr("onClick","rkman()");},10000);	
}

function arm() {
	$("#arm").show();
	setTimeout(function(){
		$("#arm").hide();
	 },15000);
	$("#armtrg").attr("onClick","");
	setTimeout(function(){$("#armtrg").attr("onClick","arm()");},15000);	
}

function sky1() {
	$("#sky").attr("src","img/sky.gif");
}

function sky2() {
	$("#sky").attr("src","img/sky2.gif");
}

function sky3() {
	$("#sky").attr("src","img/blackout.gif");
}

function light() {
	$("#light").toggle();
	$("#wall").toggle();
	$("#sky").toggle();
	$("#door").toggle();
	$("body").toggleClass("bg000");
}

function fillwater(){
	var swim = $("#swimming");
	var wav = $("#wave");
	
	swim.addClass("swimming2");
	setTimeout(function(){swim.removeClass("swimming2");},15000);
	wav.addClass("wave2");
	setTimeout(function(){wav.removeClass("wave2");},15000);
	$("#filltrg").attr("onClick","");
	setTimeout(function(){$("#filltrg").attr("onClick","fillwater()");},15000);	
}

function shake(){
	$("#wall").addClass("shake-crazy shake-constant");
	$("#sky").hide();
	$("#door").hide();
	setTimeout(function(){
		$("#wall").removeClass("shake-crazy shake-constant");
		$("#sky").show();
		$("#door").show();
	},3000);
	$('body').css("background-color","#ff0000");
	setTimeout(function(){$('body').css("background-color","#361519");},3000);
	$("#shktrg").attr("onClick","");
	setTimeout(function(){$("#shktrg").attr("onClick","shake()");},3000);	
}

function wild(){
	var wld = $("#wild");
	
	wld.show();
	setTimeout(function(){wld.hide();},10000);
	$("#wildtrg").attr("onClick","");
	setTimeout(function(){$("#wildtrg").attr("onClick","wild()");},10000);	
}

function scream(){
	var scr = $("#scream");
	
	scr.css("display","inline");
	setTimeout(function(){scr.css("display","none")},2750);
	$("#scrtrg").attr("onClick","");
	setTimeout(function(){$("#scrtrg").attr("onClick","scream()");},2750);	
}

function what(){
	$("#what").css("display","inline");
	setTimeout(function(){$("#what").css("display","none")},2600);	
	$("#whattrg").attr("onClick","");
	setTimeout(function(){$("#whattrg").attr("onClick","what()");},2600);		
}

function someone(){
	$("#someone").show();
	setTimeout(function(){
		$("#someone").hide();
	},5100);	
	$("#smontrg").attr("onClick","");
	setTimeout(function(){$("#smontrg").attr("onClick","someone()");},5100);		
}

function wall(){
	$("#wall").attr("src","img/rgb.gif");
	$("#door").hide();
	$("#sky").hide();
	$("body").css("background","#444");
	setTimeout(function(){
		$("#wall").attr("src","img/wall.gif");
		$("#door").show();
		$("#sky").show();
		$("body").css("background","#361519");}
  ,3000);		
	$("#walltrg").attr("onClick","");
	setTimeout(function(){$("#walltrg").attr("onClick","wall()");},3000);		
}

function backlight1(){
	$("#wall").attr("src","img/blackroom.gif");
	$("#door").hide();
	$("body").css("background","url(img/sticklight.png) repeat #000");
	$("#backlight").attr("onClick","backlight2()");
}

function backlight2(){
	$("#wall").attr("src","img/wall.gif");
	$("#door").show();
	$("body").css("background","#361519");
	$("#backlight").attr("onClick","backlight1()");
}

function desert(){
	$("body").css("background","url(img/desert.jpg)");
	$("body").css("background-size","cover");
	setTimeout(function(){$("body").css("background","#361519");},3000);
}

function doyou(){
	msg = "왜 내일이 오는지 그 이유를 아시나요?";
		if (confirm(msg)!=0) {
			msg = "그 이유에 만족하시나요?";
				if (confirm(msg)!=0) {
					msg = "내일을 기다리시나요?";
						if (confirm(msg)!=0) {
							alert("멋져요.");
						}
						else {
							alert("저도 그래요.");
						}
				}
				else {
					alert("저도 그래요.");
				}
		}
		else {
			alert("저도 그래요.");
		}
}


function goat(){
	var gt = $("#goat");
	var gtch = $("#goatchild");
	
	gt.css('display','inline');
	setTimeout(function(){gt.css('display','hidden')},4000);
	gtch.addClass("goatlo");
	setTimeout(function(){gtch.removeClass("goatlo")},4000);
	$("#goattrg").attr("onClick","");
	setTimeout(function(){$("#goattrg").attr("onClick","goat()");},4000);		
}


function angel(){
	var ang = $("#angel");
	
	ang.css('display','inline');
	setTimeout(function(){ang.css('display','none');},3500);
	ang.addClass("animated fadeInDown");
	setTimeout(function(){ang.removeClass("animated fadeInDown");},3500);
	setTimeout(function(){ang.addClass("animated fadeOutUp");},2600);
	setTimeout(function(){ang.removeClass("animated fadeOutUp");},3500);
	$("#angtrg").attr("onClick","");
	setTimeout(function(){$("#angtrg").attr("onClick","angel()");},3500);
}

function red(){
	$("#reds").toggle();		
}

function hello(){
	$("#hello").show();
	setTimeout(function(){$("#hello").hide();},4000);
	$("#hellotrg").attr("onClick","");
	setTimeout(function(){$("#hellotrg").attr("onClick","hello()");},4000);	
}

function reality(){
	$("#reality").show();
	setTimeout(function(){$("#reality").hide();},4000);
	$("#realitytrg").attr("onClick","");
	setTimeout(function(){$("#realitytrg").attr("onClick","reality()");},4000);	
}

function shiba(){
	var sb = $("#shiba");
	
	sb.addClass("shibaclass");
	setTimeout(function(){sb.removeClass("shibaclass");},20000);
	$("#shibatrg").attr("onClick","");
	setTimeout(function(){$("#shibatrg").attr("onClick","shiba()");},20000);	
}

function opendoor(){
	$("#door").attr("src","img/opendoor.gif");
	setTimeout(function(){$("#door").attr("src","img/door.gif");},4000);
	$("#opentrg").attr("onClick","");
	setTimeout(function(){$("#opentrg").attr("onClick","opendoor()");},4000);	
}

function launch(){
	$("body").css("background","#000");
	$("#rocket").show();
	$("#wall").addClass("launch");
	$("#sky").addClass("launch");
	$("#door").addClass("launch");
	$("#dummy").addClass("launch");
	setTimeout(function(){
		$("#wall").removeClass("launch");
		$("#sky").removeClass("launch");
		$("#door").removeClass("launch");
		$("#dummy").removeClass("launch");
		$("#wall").addClass("comeback");
		$("#sky").addClass("comeback");
		$("#door").addClass("comeback");
		$("#dummy").addClass("comeback");
	},14000);
	setTimeout(function(){
		$("body").css("background","#361519");
		$("#rocket").hide();
	},18000);
	$("#lnchtrg").attr("onClick","");
	setTimeout(function(){$("#lnchtrg").attr("onClick","launch()");},18000);	
}

function color(){
	$("#color").show();
	setTimeout(function(){$("#color").hide();},3000);
	$("#colortrg").attr("onClick","");
	setTimeout(function(){$("#colortrg").attr("onClick","color()");},18000);	
}
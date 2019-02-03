var curChoice = 0;
$(document).ready(function () {
    $("#wbd").click(function () {
        if ($("#wbd").hasClass("highlight")) {
            curChoice = 0;
        }
        else {
            curChoice = 1;
        }
        refine();
    })
    $("#dv").click(function () {
        if ($("#dv").hasClass("highlight")) {
            curChoice = 0;
        }
        else {
            curChoice = 2;            
        }
        refine();
    })
    $("#UI").click(function () {
        if ($("#UI").hasClass("highlight")) {
            curChoice = 0;
        }
        else {
            curChoice = 3;
        }
        refine();
    })
    $("#pd").click(function () {
        
        if ($("#pd").hasClass("highlight")) {
            curChoice = 0;
            
        }
        else {
            curChoice = 4;
            
        }
        refine();
    })
    var viewportHeight = $(window).height();
    var  explore = viewportHeight *2.2;
    var about = viewportHeight *3.2;
    
    
 $("#navL").click(function(){
    $("#work1").removeClass("active");
    $("#about1").removeClass("active");
        $("#explore1").removeClass("active");
    $("html, body").animate({ scrollTop: "0px" },700);
});
$("#work1").click(function(){
    $("#work1").addClass("active");
    $("#about1").removeClass("active");
    $("#explore1").removeClass("active");
    $("html, body").animate({ scrollTop: viewportHeight },700);
});
$("#down").click(function(){
    $("#work1").addClass("active");
    $("#about1").removeClass("active");
    $("#explore1").removeClass("active");
    $("html, body").animate({ scrollTop: viewportHeight },700);
});


$("#about1").click(function(){
    $("#about1").addClass("active");
    $("#work1").removeClass("active");
    $("#explore1").removeClass("active");
    $("html, body").animate({ scrollTop: $("#about").offset().top },700);
});
$("#explore1").click(function(){
    $("#explore1").addClass("active");
    $("#work1").removeClass("active");
    $("#about1").removeClass("active");
    $("html, body").animate({ scrollTop: $("#explore").offset().top },700);
});
});

function refine() {
    $("div#pieces div").removeClass("hide");
    $("div#pieces div").removeClass("hide2");
    if (curChoice == 0) {
        $("#wbd").removeClass("highlight");
        $("#dv").removeClass("highlight");
        $("#UI").removeClass("highlight");
        $("#pd").removeClass("highlight");
    }
    if (curChoice == 1) {
        $("#wbd").addClass("highlight");
        $("#dv").removeClass("highlight");
        $("#UI").removeClass("highlight");
        $("#pd").removeClass("highlight");
        $("div#pieces div:not(.webDes)").addClass("hide");
        setTimeout(function(){
            $("div#pieces div:not(.webDes)").addClass("hide2");
        },100);
        
    }
    if(curChoice == 2){
        $("#wbd").removeClass("highlight");
        $("#dv").addClass("highlight");
        $("#UI").removeClass("highlight");
        $("#pd").removeClass("highlight");
        $("div#pieces div:not(.dev)").addClass("hide");
        
    setTimeout(function(){
            $("div#pieces div:not(.dev)").addClass("hide2");
        },100);
    
    }
    if(curChoice ==3){
        $("#wbd").removeClass("highlight");
        $("#dv").removeClass("highlight");
        $("#UI").addClass("highlight");
        $("#pd").removeClass("highlight");
        $("div#pieces div:not(.ux)").addClass("hide");
        setTimeout(function(){
            $("div#pieces div:not(.ux)").addClass("hide2");
        },100);
        
    }
    if(curChoice ==4){
        $("#wbd").removeClass("highlight");
        $("#dv").removeClass("highlight");
        $("#UI").removeClass("highlight");
        $("#pd").addClass("highlight");
        $("div#pieces div:not(.prodDes)").addClass("hide");
        setTimeout(function(){
            $("div#pieces div:not(.prodDes)").addClass("hide2");
        },100);
        
    }
}
$(function() {
    	$('img').on('click', function() {
			$('.enlargeImageModalSource').attr('src', $(this).attr('src'));
			$('#enlargeImageModal').modal('show');
		});
});

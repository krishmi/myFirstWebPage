$(document).ready(function(){
    $(".dropbutton").click(function(){
       $(this).parent().find(".dropmenu").show();
    });
	$(".dropbutton").mouseenter(function(){
       $(this).parent().find(".dropmenu").toggle();
    });
	$(".dropdown").mouseleave(function(){
       $(this).find(".dropmenu").hide();
    });
	$(".dropbuttonC").mouseenter(function(){
		$(this).css("color","blue");
	});
	$(".dropbuttonC").mouseleave(function(){
		$(this).css("color","black");
	});
	$(".dropbuttonC").click(function(){
       $(this).parent().find(".dropmenu").show();
    });
	$(".dropbuttonC").mouseenter(function(){
       $(this).parent().find(".dropmenu").toggle();
    });
	$(".dropdownC").mouseleave(function(){
       $(this).find(".dropmenu").hide();
    });
});

slideNo=0;
timerId= setTimeout(change,3000);
slides=document.getElementsByClassName("slides");
function changeSlide(n)
{
    clearTimeout(timerId);
    slides[slideNo].style.display="none";
    slideNo+=n;
    if(slideNo==-1)
        slideNo=slides.length-1;
    else if(slideNo==slides.length)
        slideNo=0;
    slides[slideNo].style.display="block";
     timerId=setTimeout(change,3000);
}
function change()
{
    slides[slideNo].style.display="none";
    slideNo+=1;
    if(slideNo==-1)
        slideNo=slides.length-1;
    else if(slideNo==slides.length)
        slideNo=0;
    slides[slideNo].style.display="block";
    timerId=setTimeout(change,3000);
}
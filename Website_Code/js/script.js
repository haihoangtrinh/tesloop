
//SHORTENED TEXTS FOR TESIMONIALS SHORTENED TEXTS FOR TESIMONIALS SHORTENED TEXTS FOR TESIMONIALS SHORTENED TEXTS FOR TESIMONIALS SHORTENED TEXTS FOR TESIMONIALS SHORTENED TEXTS FOR //TESIMONIALS SHORTENED TEXTS FOR TESIMONIALS SHORTENED TEXTS FOR TESIMONIALS SHORTENED TEXTS FOR TESIMONIALS SHORTENED TEXTS FOR TESIMONIALS SHORTENED TEXTS FOR TESIMONIALS

var showChar = 200;
var ellipsestext = "...";
var moretext = "See More";
var lesstext = "See Less";
$('.comments-space').each(function () {
    var content = $(this).html();
    if (content.length > showChar) {
        var show_content = content.substr(0, showChar);
        var hide_content = content.substr(showChar, content.length - showChar);
        var html = show_content + '<span class="moreelipses">' + ellipsestext + '</span><span class="remaining-content"><span>' + hide_content + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
        $(this).html(html);
    }
});

$(".morelink").click(function () {
    if ($(this).hasClass("less")) {
        $(this).removeClass("less");
        $(this).html(moretext);
    } else {
        $(this).addClass("less");
        $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
});


//SWITCHING THE HAMBURGER ICON TO THE CLOSING POSITION SWITCHING THE HAMBURGER ICON TO THE CLOSING POSITION SWITCHING THE HAMBURGER ICON TO THE CLOSING POSITION

$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});


//CAROUSEL FOR HEROIMG CAROUSEL FOR HEROIMG CAROUSEL FOR HEROIMG CAROUSEL FOR HEROIMG CAROUSEL FOR HEROIMG CAROUSEL FOR HEROIMG CAROUSEL FOR HEROIMG CAROUSEL FOR HEROIMG
$('.carousel').carousel();


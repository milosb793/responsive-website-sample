$(window).scroll(function()
{
    if ($(document).scrollTop() > 800)
    {
        $('.logo img').addClass('logoSmanji ');
        $('.nav2').addClass('nav2Scroll');
    }
    else
    {
        $('.logo img').removeClass('logoSmanji ');
        $('.logo img').addClass('logo');
        $('.nav2').removeClass('nav2Scroll');
    }
});


function resp()
{
    var x = document.getElementById("meni2id");
    if (x.className === "meni2")
    {
        x.className += " responsive";
    }
    else {
        x.className = "meni2";
    }
}

$("#izdvajamoLink").click(function() {
        $('html, body').animate({
        scrollTop: $("#izdvajamoNaslov").offset().top
    }, 2000);

});

$("body").on('click',"img",function () {
    var url = $(this).attr('src');
    if(url.indexOf("logo") > -1 )
        window.location.href = "index.html";
    else
    window.open(url,"_target");
});
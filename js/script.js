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
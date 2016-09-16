$(window).scroll(function()
{
    if ($(document).scrollTop() > 700)
    {
        $('.logo img').addClass('logoSmanji');
        $('.nav2').addClass('nav2Scroll');
    }
    else
    {
        $('.logo img').removeClass('logoSmanji');
        $('.logo img').addClass('logo');
        $('.nav2').removeClass('nav2Scroll');
    }
});

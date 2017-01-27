
window.onload = function()
{
    var logoSlika = byClass("logo").getElementsByTagName("img")[0];
    var navigacija2 = byClass("nav2");


    /* Detektovanje skrul pozicije */
    document.addEventListener("scroll",function ()
    {
        if(window.scrollY > 800)
        {
            dodajKlasu(logoSlika,"logoSmanji");
            dodajKlasu(navigacija2,"nav2Scroll");
        }
        else
        {
            izbaciKlasu(logoSlika,"logoSmanji");
            dodajKlasu(logoSlika,"logo");
            izbaciKlasu(navigacija2,"nav2Scroll");
        }
        /* //// Detektovanje skrul pozicije */
    });


    /* Klik na sliku, otvaranje u novu karticu */
    var sveSlike = byTag("img");
    for(var i = 0; i < sveSlike.length; i++)
    {
        sveSlike[i].addEventListener("click",function ()
        {
            var url = this.getAttribute('src');
            if(url.indexOf("logo") > -1 )
                window.location.href = "index.html";
            else
            {
                if(this.className.indexOf("imageVideo") < -1)
                    window.open(url,"_blank");
                else console.log("jeste image video");
            }
        });
    }
    /* //// Klik na sliku, otvaranje u novu karticu */


    /* Skok do elementa - animacija */
    byId("izdvajamoLink").addEventListener("click",function () {
        // smoothScroll("izdvajamoNaslov");
        doScrolling("#izdvajamoNaslov",2000);
    });
    /* //// Skok do elementa - animacija */


    /* Ispisivanje svih artikala */

    ispisiSveArtikle();

    /* //// Ispisivanje svih artikala */




};
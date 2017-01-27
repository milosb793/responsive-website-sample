

    var brojac = 0;
    var br_slika = 4;
    var nizRecenicaPoSlici = [];
    var image = null;
    var natpis = null;

     image = byId("slajderDiv").style;
     natpis = byClass("natpis");
     nizRecenicaPoSlici = ucitajCitate();

    /*Automatski slajder*/
    window.setInterval(function slideAuto()
    {
        brojac++;

        if (brojac > br_slika) brojac = 1;

        if (brojac < 1) brojac = br_slika;

        if (!nizRecenicaPoSlici) console.log("Citati prazni!");

        image.backgroundImage = "url(img/sld/" + brojac + ".jpg)";
        natpis.innerHTML = nizRecenicaPoSlici[brojac];

    }, 10000);
    /* //// Prebacivanje slika */


    /* Manuelno prebacivanje slika */

      byId("leviSlajder").addEventListener( "click", function () { slide(-1); });
      byId("desniSlajder").addEventListener("click", function () { slide(+1); });

    /* //// Prebacivanje slika */


    function refreshPage() {
        window.location.reload();
    }

    function slide(x)
    {
        brojac = brojac + x;

        if (brojac > br_slika) brojac = 1;

        if (brojac < 1) brojac = br_slika;

        image.backgroundImage = "url(img/sld/" + brojac + ".jpg)";

        if (!nizRecenicaPoSlici) console.log("Citati prazni!");

        natpis.innerHTML = nizRecenicaPoSlici[brojac];
    }

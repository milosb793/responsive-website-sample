
var brojac=0;
var br_slika=5;

/*Automatski slajder*/
window.setInterval(function slideAuto()
{
    var image= document.getElementById("slajderDiv").style;
    brojac++;

    if(brojac > br_slika)
    {
        brojac=1;
    }

    if(brojac < 1)
    {
        brojac=br_slika;
    }
    image.backgroundImage="url(img/selo"+brojac+".jpg)";

},3000);

function refreshPage()
{
    window.location.reload();
}

function slide(x)
{
    var image= document.getElementById("slajderDiv").style;
    brojac=brojac+x;
    if(brojac>br_slika){brojac=1;}
    if(brojac<1){brojac=br_slika;}
    image.backgroundImage="url(img/selo"+brojac+".jpg)";
}
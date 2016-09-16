
var brojac=0;
var br_slika=4;
var nizRecenicaPoSlici = ["Странцу у Србији неће бити потребно много времена да се увери угостољубивост ,љубазност, отвореност и топлину њених житеља.",
    "Руковање, десном руком, при представљању и упознавању је обавезно, без обзира на пол. Пољупци нису обавезни при првом сусрету, али већ сваки следећи пут, ако сте драги оном кога срећете, следи љубљење у образ, и то типично српски – три пута. Наравно, нико не замера и ако се број пољубаца сведе на два или један, уз дуги срдачан загрљај.",
    "У Србији се најчешће наздравља уз домаћу ракију, веома често насталу у породичној мануфактури. Наздравља се уз куцање чашама, обавезно гледање у очи и гласно узвикивање „Живели!“. Здравице се углавном држе само у свечаним приликама, најчешће их говори домаћин, али то може да учини и гост.",
    "Срби уживају у обилној и зачињеној храни и обично имају три оброка дневно, а ручак је најобилнији."
];
var image= document.getElementById("slajderDiv").style;
var natpis = $(".natpis");

/*Automatski slajder*/
window.setInterval(function slideAuto()
{
    brojac++;

    if(brojac > br_slika)
    {
        brojac=1;
    }

    if(brojac < 1)
    {
        brojac=br_slika;
    }
    image.backgroundImage="url(img/sld/"+brojac+".jpg)";
    natpis.html(nizRecenicaPoSlici[brojac]);

},100000);

function refreshPage()
{
    window.location.reload();
}

function slide(x)
{
    brojac=brojac+x;
    if(brojac>br_slika){brojac=1;}
    if(brojac<1){brojac=br_slika;}
    image.backgroundImage="url(img/sld/"+brojac+".jpg)";
    natpis.html(nizRecenicaPoSlici[brojac]);
}



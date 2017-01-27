function byId(element)    { return document.getElementById(element);            }
function byClass(element) { return document.getElementsByClassName(element)[0]; }
function byTag(element)   { return document.getElementsByTagName(element);      }

function meni2Resp()
{
    var x = document.getElementById("meni2id");

    if (x.className === "meni2") x.className += " responsive";
    else x.className = "meni2";
}


/* Smooth scroll */
// based on
// http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
// use href="#anchorID" in your hyperlinks
// with smoothScroll('destinationAnchorID');return false; as the onclick event.
// <a href="#anchor-1" onclick="smoothScroll('anchor-1-id');">smooth scroll to Anchor 1<a/>
// function currentYPosition()
// {
//     // Firefox, Chrome, Opera, Safari
//     if (self.pageYOffset) return self.pageYOffset;
//
//     // Internet Explorer 6 - standards mode
//     if (document.documentElement && document.documentElement.scrollTop)
//         return document.documentElement.scrollTop;
//
//     // Internet Explorer 6, 7 and 8
//     if (document.body.scrollTop) return document.body.scrollTop;
//
//     return 0;
// }
//
// function elmYPosition(eID)
// {
//     var elm = document.getElementById(eID);
//     var y = elm.offsetTop;
//     var node = elm;
//     while (node.offsetParent && node.offsetParent != document.body)
//     {
//         node = node.offsetParent;
//         y += node.offsetTop;
//     } return y;
// }
//
// function smoothScroll(eID)
// {
//     var startY = currentYPosition();
//     var stopY = elmYPosition(eID);
//
//     var distance = stopY > startY ? stopY - startY : startY - stopY;
//     if (distance < 100) {
//         scrollTo(0, stopY); return;
//     }
//     var speed = Math.round(distance / 100);
//     if (speed >= 20) speed = 20;
//     var step = Math.round(distance / 25);
//     var leapY = stopY > startY ? startY + step : startY - step;
//     var timer = 0;
//     if (stopY > startY)
//     {
//         for ( var i=startY; i<stopY; i+=step )
//         {
//             setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
//             leapY += step;
//             if (leapY > stopY) leapY = stopY;
//             timer++;
//         }
//         return;
//     }
//
//     for ( var i=startY; i>stopY; i-=step )
//     {
//         setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
//         leapY -= step;
//         if (leapY < stopY) leapY = stopY;
//         timer++;
//     }
//     return false;
// }
/* //// Smooth scroll */

/* Skrolovanje do elementa API */
function getElementY(query) {
    return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
}

function doScrolling(element, duration)
{
    var startingY = window.pageYOffset;
    var elementY = getElementY(element);
    // If element is close to page's bottom then window will scroll only to some position above the element.
    var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
    var diff = targetY - startingY;
    // Easing function: easeInOutCubic
    // From: https://gist.github.com/gre/1650294
    var easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 };
    var start;

    if (!diff) return;

    // Bootstrap our animation - it will get called right before next frame shall be rendered.
    window.requestAnimationFrame(function step(timestamp)
    {
        if (!start) start = timestamp;
        // Elapsed miliseconds since start of scrolling.
        var time = timestamp - start;
        // Get percent of completion in range [0, 1].
        var percent = Math.min(time / duration, 1);
        // Apply the easing.
        // It can cause bad-looking slow frames in browser performance tool, so be careful.
        percent = easing(percent);

        window.scrollTo(0, startingY + diff * percent);

        // Proceed with animation as long as we wanted it to.
        if (time < duration) {
            window.requestAnimationFrame(step)
        }
    })
}

/* //// Skrolovanje do elementa API */


/* Izbaci klasu */
function izbaciKlasu(element,klasa)
{
    var klase = element.className.split(" ");
    var index = klase.indexOf(klasa);
    if (index > -1) klase.splice(index, 1);
    element.className = klase.join(" ");
}

/* Dodavanje klase */
function dodajKlasu(element,klasa)
{
    var klase = element.className.split(" ");
    var index = klase.indexOf(klasa);
    if(index > -1 ) return;
    klase.push(klasa);
    element.className = klase.join(" ");
}

/* Vraca citate iz data/citati.json */
function ucitajCitate()
{
    var citati = [];
    // iz nekog razloga mora GET
   dobaviPodatke("GET", "data/citati.json", true, function (podaci)
   {
       var citatiJSON = JSON.parse(podaci);
           for(var i = 0; i < citatiJSON.length; i++)
               citati.push(citatiJSON[i].sadrzaj);
   });
    return citati;
}

function ispisiSveArtikle()
{
    var artikliJson = null;

    // dobavljanje podataka
    dobaviPodatke("GET","data/artikli.json",true,function (podaci) {
       artikliJson = JSON.parse(podaci);
       for(var i = 0; i < artikliJson.length; i++)
           ispisiArtikal(artikliJson[i]);
    });
}

function ispisiArtikal(artikalJson)
{
    var semaArtiklaHTML = byId("artikal-sema").innerHTML;
    var kontejnerZaArtikle = byId("izdvajamoSadrzaj");
    var noviArtikal = document.createElement("div");

    /* Modalni prozor */
    var modal = byId("myModal");
    var zatvoriSpan = byClass("close");
    var ytKodVideo = "https://www.youtube.com/embed/";
    var ytKodSlika1 = "http://img.youtube.com/vi/";
    var ytKodSlika2 = "/0.jpg";

    noviArtikal.innerHTML = semaArtiklaHTML;

    var naslovArtikal = noviArtikal.getElementsByClassName("naslovArtikal")[0];
    var slikaArtikal  = noviArtikal.querySelector(".slikaArtikal>img");
    var tekstArtikal  = noviArtikal.getElementsByClassName("tekstArtikal")[0];
    var viseLink      = noviArtikal.getElementsByClassName("vise")[0];

    naslovArtikal.innerHTML += artikalJson.naslov;
    slikaArtikal.setAttribute("src", artikalJson.slika);
    tekstArtikal.innerHTML = artikalJson.kratkiOpis;

    viseLink.addEventListener("click",function ()
    {
        var iframeVideo = " <iframe width=\"420\" height=\"315\" class=\"videoModal\" src=\"srcToReplace\"> </iframe>";
        var slikaVideo  = modal.getElementsByClassName("imageVideo")[0];
        var slikaVideoCopy = document.createElement("img");
        var naslovModal = modal.getElementsByClassName("naslovModal")[0];
        var tekstModal  = modal.getElementsByClassName("tekstModal")[0];
        var slikaModal  = modal.getElementsByClassName("slikaModal")[0];
        var videoModal  = modal.getElementsByClassName("videoModal")[0];

        this.setAttribute("data-id",artikalJson.id);

        naslovModal.innerHTML = artikalJson.naslov;
        tekstModal.innerHTML = artikalJson.dugiOpis;
        slikaModal.setAttribute("src",artikalJson.vecaSlika);

        // popraviti
        // TODO: kada se drugi put klikne na neku od ponuda, nece da se otvori modal, ili nece da se promeni video
        slikaVideoCopy.setAttribute("src",ytKodSlika1 + artikalJson.video + ytKodSlika2);
        slikaVideoCopy.setAttribute("class","imageVideo");

        if(slikaVideo)
            slikaVideo.setAttribute("src",ytKodSlika1 + artikalJson.video + ytKodSlika2);
        else
        {
            slikaVideo = slikaVideoCopy;
        }
        // popraviti

        slikaVideo.addEventListener("click",function () {
            videoModal.innerHTML = iframeVideo.replace("srcToReplace",ytKodVideo + artikalJson.video);
        },false);

        modal.style.display = "block";

        zatvoriSpan.onclick = function() {
            modal.style.display = "none";
            videoModal.innerHTML = slikaVideoCopy.innerHTML;
        };

        // Kada korisnik likne bilo gde sa strane, modal ce se zatvoriti //
        window.onclick = function(event)
        {
            if (event.target == modal)
            {
                modal.style.display = "none";
                videoModal.innerHTML = slikaVideoCopy.innerHTML;
            }
        };
    });


    kontejnerZaArtikle.appendChild(noviArtikal);
}

/* AJAX funkcija */
function dobaviPodatke(tipPrenosa, url, asinhrono, funkcija)
{
    var xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open(tipPrenosa, url, asinhrono);
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
             funkcija(this.responseText);
    };
    xhttp.send(null);
}
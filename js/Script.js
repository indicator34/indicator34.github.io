function RobFunction() {
    document.getElementById("abouttext").innerHTML = "Rob Swire - Born Robert Swire-Thompson on the 5th November 1982 in Perth, Western Australia. Rob is the founder and vocalist of Pendulum, as well as DJ and co-founder of its sister group, Knife Party. Originally from Perth, he relocated to the United Kingdom in 2003.  He is usually seen performing with his unusual guitar like MIDI controller - A Starr Labs' Ztar Z6S-XPA. ";
	document.getElementById('aboutchange').src='assets/Rob.jpg';
}

function GarethFunction() {
    document.getElementById("abouttext").innerHTML = "Gareth McGrillen - Born 16th October 1981, Gareth is Pendulum's bassist, and one of the founders. He is also a co-founder of the EDM sister group, Knife Party. Gareth originated from Perth, Australia, moving to the UK with Rob Swire in 2003.";
document.getElementById('aboutchange').src='assets/Gareth.jpg';
}

function PeredurFunction() {
    document.getElementById("abouttext").innerHTML = "Peredur ap Gwynedd - Born 17th April 1975, Peredur is Pendulum's Guitarist, joining after helping with the song Girl in the fire. Peredur is from Pontypool in Wales, but now lives in London. He was also a judge on the Welsh talent show - Waw Ffactor.";
document.getElementById('aboutchange').src='assets/Peredur.jpg';
}

function KJFunction() {
    document.getElementById("abouttext").innerHTML = "KJ Sawka - Kevin Joseph Sawka, born on the 10th October 1977 in Seattle, USA. KJ is Pendulum's drummer, joining the band in 2010 and helping publish Immersion. ";
document.getElementById('aboutchange').src='assets/KJ.jpg';
}

function DJFunction() {
    document.getElementById("abouttext").innerHTML = "Paul Harding - Paul, also known by his stage name, El Hornet, is Pendulum's DJ. Paul is Australian, having moved over to the UK with Rob and Gareth.";
document.getElementById('aboutchange').src='assets/DJ.jpg';
}

function MB1PFunction() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcounta) {
            localStorage.clickcounta = Number(localStorage.clickcounta)+1;
        } else {
            localStorage.clickcounta = 1;
        }
        document.getElementById("MB1").innerHTML = localStorage.clickcounta ;
		document.getElementById("Bas1").innerHTML = localStorage.clickcounta + " Jumper @ £24 = £" + (localStorage.clickcounta * 24);
		document.getElementById("Bas4").innerHTML = "Total = £" + ((localStorage.clickcounta * 24) + (localStorage.clickcountb * 15) + (localStorage.clickcountc * 17)) ;
    } else {
        document.getElementById("MB1").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function MB1SFunction() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcounta) {
            localStorage.clickcounta = Number(localStorage.clickcounta)-1;
        } else {
            localStorage.clickcounta = 1;
        }
        document.getElementById("MB1").innerHTML = localStorage.clickcounta ;
		document.getElementById("Bas1").innerHTML = localStorage.clickcounta + " Jumper @ 24 = £" + (localStorage.clickcountb * 24);
		document.getElementById("Bas4").innerHTML = "Total = £" + ((localStorage.clickcounta * 24) + (localStorage.clickcountb * 15) + (localStorage.clickcountc * 17)) ;
    } else {
        document.getElementById("MB1").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function MB2PFunction() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcountb) {
            localStorage.clickcountb = Number(localStorage.clickcountb)+1;
        } else {
            localStorage.clickcountb = 1;
        }
        document.getElementById("MB2").innerHTML = localStorage.clickcountb ;
		document.getElementById("Bas2").innerHTML = localStorage.clickcountb + " T Shirt @ £15 = £" + (localStorage.clickcountb * 15);
		document.getElementById("Bas4").innerHTML = "Total = £" + ((localStorage.clickcounta * 24) + (localStorage.clickcountb * 15) + (localStorage.clickcountc * 17)) ;
    } else {
        document.getElementById("MB2").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function MB2SFunction() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcountb) {
            localStorage.clickcountb = Number(localStorage.clickcountb)-1;
        } else {
            localStorage.clickcountb = 1;
        }
        document.getElementById("MB2").innerHTML = localStorage.clickcountb ;
		document.getElementById("Bas2").innerHTML = localStorage.clickcountb + " T Shirt @ £15 = £" + (localStorage.clickcountb * 15);
		document.getElementById("Bas4").innerHTML = "Total = £" + ((localStorage.clickcounta * 24) + (localStorage.clickcountb * 15) + (localStorage.clickcountc * 17));
    } else {
        document.getElementById("MB2").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function MB3PFunction() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcountc) {
            localStorage.clickcountc = Number(localStorage.clickcountc)+1;
        } else {
            localStorage.clickcountc = 1;
        }
        document.getElementById("MB3").innerHTML = localStorage.clickcountc ;
		document.getElementById("Bas3").innerHTML = localStorage.clickcountc + " Flag @ £17 = £" + (localStorage.clickcountc * 17);
		document.getElementById("Bas4").innerHTML = "Total = £" + ((localStorage.clickcounta * 24) + (localStorage.clickcountb * 15) + (localStorage.clickcountc * 17));
    } else {
        document.getElementById("MB3").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function MB3SFunction() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcountc) {
            localStorage.clickcountc = Number(localStorage.clickcountc)-1;
        } else {
            localStorage.clickcountc = 1;
        }
        document.getElementById("MB3").innerHTML = localStorage.clickcountc ;
		document.getElementById("Bas3").innerHTML = localStorage.clickcountc + " Flag @ £17 = £" + (localStorage.clickcountc * 17);
		document.getElementById("Bas4").innerHTML = "Total = £" + ((localStorage.clickcounta * 24) + (localStorage.clickcountb * 15) + (localStorage.clickcountc * 17));
    } else {
        document.getElementById("MB3").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function RobFunction() {
    document.getElementById("abouttext").innerHTML = "Roberto";
	document.getElementById('aboutchange').src='assets/Rob.jpg';
}

function GarethFunction() {
    document.getElementById("abouttext").innerHTML = "Gareth";
document.getElementById('aboutchange').src='assets/Gareth.jpg';
}

function PeredurFunction() {
    document.getElementById("abouttext").innerHTML = "Peredur";
document.getElementById('aboutchange').src='assets/Peredur.jpg';
}

function KJFunction() {
    document.getElementById("abouttext").innerHTML = "KJ";
document.getElementById('aboutchange').src='assets/KJ.jpg';
}

function DJFunction() {
    document.getElementById("abouttext").innerHTML = "Hello World!";
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

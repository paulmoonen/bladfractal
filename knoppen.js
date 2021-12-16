//startknop
let startKnop = document.querySelector("#startknop");
startKnop.addEventListener("click", starten);
let aantalVeld = document.querySelector("#aantal");
let n = 1; //aantal stappen

let bgLengte = document.querySelector("#beginlengte");
let bgHoek = document.querySelector("#beginhoek");
let verkHoofdnerf = document.querySelector("#verkortingHoofdnerf");
let hfdnfHoek = document.querySelector("#hoofdnerfHoek");
let vrkLinks = document.querySelector("#verkortingLinksaf");
let hkLinksaf = document.querySelector("#hoekLinksaf");
let vrkRechts = document.querySelector("#verkortingRechtsaf");
let hkRechtsaf = document.querySelector("#hoekRechtsaf");

/*
de grenswaarden van de hoeken stellen we hier in 
omdat in HTML het getal pi lastig in te voeren is
*/
bgHoek.setAttribute("min", "0");
bgHoek.setAttribute("max",`${Math.PI}`);

hfdnfHoek.setAttribute("min", `${-0.5 * Math.PI}`);
hfdnfHoek.setAttribute("max",`${0.5 * Math.PI}`);

hkLinksaf.setAttribute("min", "0");
hkLinksaf.setAttribute("max",`${0.5 * Math.PI}`);

hkRechtsaf.setAttribute("min", "0");
hkRechtsaf.setAttribute("max",`${0.5 * Math.PI}`);
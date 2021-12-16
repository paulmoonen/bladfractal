//beginwaarden
let beginLengte = 200;
let beginRichting = Math.PI/2;
let verkortingHoofdnerf = 0.7;
let hoekHoofdnerf = (Math.PI/18);
let verkortingLinks = 0.3;
let hoekLinksaf = (Math.PI/6);
let verkortingRechts = 0.4;
let hoekRechtsaf = (Math.PI/6);

/*
code om de beginwaardes opnieuw in te lezen
*/
function waardesInlezen(){
    
    beginLengte = Number(bgLengte.value);
    beginRichting = Math.PI - Number(bgHoek.value); //spiegelbeeld
    verkortingHoofdnerf = Number(verkHoofdnerf.value);
    hoekHoofdnerf = Number(hfdnfHoek.value) * -1;//spiegelbeeld
    verkortingLinks = Number(vrkLinks.value);
    hoekLinksaf = Number(hkLinksaf.value);
    verkortingRechts = Number(vrkRechts.value);
    hoekRechtsaf = Number(hkRechtsaf.value);
         
}


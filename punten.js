/*
een lijn heeft een eindpunt. Dat eindpunt slaan we in een array 
op met de eigenschappen: lengte en richting.
vanaf ieder eindpunt kunnen we zo nieuwe lijnen ( eindpunten ) berekenen

voorbeeld:
eerste eindpunt( 0, 100) heeft eigenschappen:
    coördinaten: (0,100)
    lengte: 100
    richting t.o.v x-as:90 graden
    180 graden is pi radialen, dus 90 graden is 1/2 pi radialen 
*/


const punten=[
    //eertse element wordt ingevuld na druk op startknop
];

/*
voor iedere iterarie kijken hoe lang de array punten is
alle nieuwe punten achteraan toevoegen
lijnen tekenen
alle oude punten verwijderen
zo doen we niets dubbel
*/
function nieuwPunten(punt){
    
    let oudeX = punt[0];
    let oudeY = punt[1];
    let oudeLengte = punt[2];
    let oudeRichting = punt[3];
            
    //bocht naar punt linksom
    let nieuweLengte = oudeLengte * verkortingLinks;
    let nieuweRichting = oudeRichting + hoekLinksaf;
    nieuweRichting = nieuweRichting % (2* Math.PI);  //houd de hoeken zinvol
    let nieuweX = oudeX + (Math.cos(nieuweRichting)*nieuweLengte);
    let nieuweY = oudeY + (Math.sin(nieuweRichting)*nieuweLengte);
    c.moveTo(oudeX, oudeY);
    c.lineTo(nieuweX, nieuweY);
    c.stroke();
    //array bijwerken
    punten.push([nieuweX, nieuweY, nieuweLengte, nieuweRichting]);//punt dat linksom ging
    
    //knikje van de hoofdnerf
    nieuweLengte = oudeLengte * verkortingHoofdnerf;
    nieuweRichting = oudeRichting + hoekHoofdnerf;
    nieuweRichting = nieuweRichting % (2* Math.PI);  //houd de hoeken zinvol
    nieuweX = oudeX + (Math.cos(nieuweRichting)*nieuweLengte);
    nieuweY = oudeY + (Math.sin(nieuweRichting)*nieuweLengte);
    c.moveTo(oudeX, oudeY);
    c.lineTo(nieuweX, nieuweY);
    c.stroke();
    //array bijwerken
    punten.push([nieuweX, nieuweY, nieuweLengte, nieuweRichting]);//punt dat rechtsom ging

    //bocht naar punt rechtsom
    nieuweLengte = oudeLengte * verkortingRechts;
    nieuweRichting = oudeRichting - hoekRechtsaf;
    nieuweRichting = nieuweRichting % (2* Math.PI);  //houd de hoeken zinvol
    nieuweX = oudeX + (Math.cos(nieuweRichting)*nieuweLengte);
    nieuweY = oudeY + (Math.sin(nieuweRichting)*nieuweLengte);
    c.moveTo(oudeX, oudeY);
    c.lineTo(nieuweX, nieuweY);
    c.stroke();
    //array bijwerken
    punten.push([nieuweX, nieuweY, nieuweLengte, nieuweRichting]);//punt dat rechtsom ging    
}

/*
één iteratie van de tekencyclus bestaat uit:
hoe lang is de array punten? => variabele L
roep voor ieder element de functie nieuwePunt() aan
verwijder de eerste L elementen van de array punten
*/
function tekenCyclus(){
        
    let L = punten.length;
    //twee nieuwe lijnen tekenen
    punten.forEach(punt => nieuwPunten(punt));
    //methode shift() verwijdert maar één element per keer en accepteert geen parameters
    for(let i=0; i<L; i++){
        punten.shift();
    }
}

/*eerste punt berekenen*/
function eerstePunt(){
    let X0 = Math.cos(beginRichting)*beginLengte;
    let Y0 = Math.sin(beginRichting)*beginLengte;
    
    return [X0, Y0, beginLengte, beginRichting];    
}

//n maal de tekencyclus aanroepen
function aanroepReeks(n){
    //de eerste lijn tekenen
    c.moveTo(0,0);
    c.lineTo(punten[0][0], punten[0][1]);

    for(i=0; i<n ;i++){
        tekenCyclus();
    }
}




/*  
canvas voor varenbladfractals
*/
let onsCanvas = document.querySelector("#canvas");
onsCanvas.width = "600";
onsCanvas.height = "600";
let c = onsCanvas.getContext("2d");

let achtergrondkleur = "RGB(25,25,50)";

c.scale(1,-1); //ondersteboven, nu hebben we een normaal assenstelsel maar met de oorsprong linksboven
c.translate(300,-600);//oorsprong nu miden onder in beeld

//achtergrondkleur, alleen veranderingsrichting aangeven
let my_gradient = c.createLinearGradient(-300,0,-300,600); 
my_gradient.addColorStop(0, "rgb(0, 0, 26)");
my_gradient.addColorStop(1, "rgb(0, 0, 102)");
c.fillStyle = my_gradient;
c.fillRect(-300,0,600,600);

c.strokeStyle="RGB(20,200,20)"; //lijntekenkleur 


//aangeroepen door startknop
function starten(){     
    
    //vorig plaatje wissen
    c.clearRect(-300,000,600,600);
    /*
    methode beginPath() blijkt nodig te zijn om te voorkomen 
    dat we verder gaan met het oude plaatje 
    welke dan ook om mysterieuze redenen niet gedelete wordt
    */
    c.beginPath();
    //opnieuw achtergrond instellen
    c.fillStyle=my_gradient;
    c.fillRect(-300,0,600,600);

    //vorige array legen maar niet verwijderen
    let L = punten.length;
    for(let i=0; i<L; i++){
        punten.shift();
    }      
    console.log(punten);
    
    //nieuwe waardes inlezen
    waardesInlezen();
    
    
    punten.push(eerstePunt());//standaard beginwaarde    
    

    //n maal de nieuwe lijnen laten tekenen    
    n = aantalVeld.value;
    aanroepReeks(n); 
        
      
}














  




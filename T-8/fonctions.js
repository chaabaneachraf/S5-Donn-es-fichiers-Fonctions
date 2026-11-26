//renvoie la surface
function calculerSurface(longueur, largeur){
    return longueur * largeur ;
}


function estGrand(surface){
    if (surface >= 100)
        return true;
    else 
        return false;
}



let surface = calculerSurface(12 ,10);
console.log("la surface d’une pièce de 12 mètres sur 10 mètres est" ,surface,"m²");

if(estGrand(surface) == true)
    console.log("oui la surface est supérieure ou égale à 100");
else
    console.log("NO la surface n'est pes supérieure ou égale à 100");

//ancienne methode
function addition(a, b) {
    return a + b;
    
}
console.log("laddition des deux nombres est :" +addition(1,2));

//nouvelle methode 

const addition2 = (a, b) => a + b;
console.log("laddition des deux nombres est :" +addition(1,2));



//aficher bjrs fonctio flechées
const Bjrs = () => {console.log("bjrs");};
Bjrs();



//voir si le nombre est pair  avec les 2 methodes
const nombrepair = (a) => a % 2 === 0;
nombrepair(4);




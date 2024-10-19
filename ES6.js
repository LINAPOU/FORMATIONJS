// var est de scoop function (portée function)
function exampleVar() {
    var x = 5;
    if (true) {
        var x = 10;
        console.log("la variable  " + x);
    }

    console.log("la val de x en dehors del la condition  " + x);

} // on a réasigné la valeur de x à 10 pour de bon 
// var est de scoop function (portée function)
// var scoope fonction = var definit dns toute la fonction
// var bloc fonction  = var definit et reconnue juste dans des colomnes
exampleVar();





// let est de scoope bloc
function examplelet() {
    let y = 5;
    if (true) { // ici dns le bloc
        let y = 10;
        console.log("la variable  " + y);
    }
   //ici dnas le scoop
    console.log("la val de x en dehors del la condition  " + y);

} 
examplelet();



//le let et la var sont des valeurs qui changent par contre le const nn sa valeur ne channge pas on ne peut pas lui réasigner de valeur donc cet fonction donnera une errreur
function ExampleConst(){
    const z= 5;
    
     console.log("la variable  " + z);
    const z = 10;


}


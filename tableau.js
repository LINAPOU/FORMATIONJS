const MyArray = ["Banane", "Pomme", "Cerise", "Poire", 4];
console.log(MyArray," est mon tableau");
console.log(MyArray.join('//'));// ajouter un séparateur entre les élements du tableau
console.log(MyArray.length , "est la longeure de mon tableau");//renvoyer la longueur 
console.log(MyArray.toString() , "est  conversion des elements de mon tableau en chaine de caracteres");
let fruit = MyArray.push("fraise"); 
console.log(fruit);
console.log(MyArray);
console.log(MyArray[2]);
MyArray[0] = "papaye";
console.log(MyArray)


const Cars = new Array("BMW", "CITRON", "RENAULT");
console.log(Cars,"MES voitures");
let voiture = Cars.pop();//retirer le dernier element du tableau
console.log(voiture);//l'element supprimé
console.log(Cars);//afficher le tableau après la suppression

const boys = ["Nassim", "ahmed", "Massi"];

const girls = ["Lyna", "kenza", "manel"];
let mychildren = boys.concat(girls);
console.log(mychildren)




const girls2 = ["Lyna", "kenza", "manel"];

const Slicegirls2 = girls2.slice(1, 3);
console.log(Slicefruit);

//exercice afficHer de 1 à 6



 


const nombre2 = [1, 2, 3, 4, 5, 6];
console.log(nombre2.slice(2, 4));


//quand on a pas dde conflits on regle les erreurs puis on git add push puis merge
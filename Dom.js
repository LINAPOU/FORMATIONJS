const titre = document.getElementsByClassName("title");
console.log(titre,"récuperation de tout les élements comprenants la classe title" );

const h = document.getElementsByTagName("h2");
console.log(h,"récuperation de tout les élements selon le nom de la balise" );

const id = document.getElementsByTagName("démo");
console.log(id, "récuperation de tout les élements selon l'id demo ");

document.getElementById("démo").style.color = "blue";//modifier la couleur de l'élement dont l'id est démo


//document.getElementById("démo").innerText = "texte modifié avec le innertext";//innertext modifie seulement le texte
//document.getElementById("démo").innerHTML="<h2></h2>"//innerhtml modifie  toute la balise



function salutation() {
    if (id.innerHTML==="libre pour tout le monde") {
        id.innerHTML="bonjour tout le monde"
    } else {
        id.innerHTML="libre pour tout le monde"
    }

}
id.onclick = salutation;

const booklist = document.querySelector("#liste-livres li:nth-child(2) .name")
console.log("notre element est" ,booklist)

const booklist2 = document.querySelectorAll("#liste-livres li:nth-child(5) .name")
console.log("notre element est" ,booklist)



//variables globales
//elements memoire et ecran
const memoireElt = document.querySelector("#memoire");
const ecranElt = document.querySelector("#ecran")

//On stocke la valeur de l'ecran precedent
let precedent = 0;

//on stocke l'affichage
let affichage = "";

//on stock l opération
let operation = null;

//on initialise la memoire
let memoire;

//on va faire en sorte de clicker sur les touches virtuelles
gererTouches();

//window.onload : on fait en sorte que le le css soit charger au bon moment pr bien voir les touches
window.onload = () => {
    let touches = document.querySelectorAll("span");//on va chercher toutes le stouches qui sont en span
    for (let touche of touches) {
        touche.addEventListener("click",
            gererTouches);
    }
}
//reagit au clic sur les touches
/*Lorsque vous attachez un gestionnaire d'événements à un élément à l'aide de addEventListener, 
vous spécifiez la fonction qui sera exécutée lorsque l'événement se produit. Lorsque l'événement se produit, 
cette fonction est appelée, et this fait référence à l'élément sur lequel l'événement a été déclenché.*/
//this fait référence à l'élément sur lequel l'événement a été déclenché: le addEventListener qui est au dessus et donc l evenement est le click
function gererTouches() {
    console.debug(this); //innertexte recupère le texte existant dans un element HTML

}

//puis ensuite saisir au clavier

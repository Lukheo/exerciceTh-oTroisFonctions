//FONCTION 1 COMPARAISON DE TROIS NOMBRES

//définition de la fonction de comparaison
function comparaison(nbComp1, nbComp2, nbComp3) {
    //affichage des trois nombres
    console.log("nombre 1 = " + nbComp1 + ".")
    console.log("nombre 2 = " + nbComp2 + ".")
    console.log("nombre 3 = " + nbComp3 + ".")

    if (nbComp1 > nbComp2 && nbComp1 > nbComp3) {   //gestion du cas où le nombre 1 est le plus grand

        console.log(nbComp1 + " est le nombre le plus grand. C'est le nombre 1.")
        alert(nbComp1 + " est le plus grand des trois nombres.")

    } else if (nbComp2 > nbComp1 && nbComp2 > nbComp3) {   //gestion du cas où le nombre 2 est le plus grand

        console.log(nbComp2 + " est le nombre le plus grand. C'est le nombre 2.")
        alert(nbComp2 + " est le plus grand des trois nombres.")

    } else if (nbComp3 > nbComp1 && nbComp3 > nbComp2) {   //gestion du cas où le nombre 3 est le plus grand

        console.log(nbComp3 + " est le nombre le plus grand. C'est le nombre 3.")
        alert(nbComp3 + " est le plus grand des trois nombres.")

    } else {  //gestion de l'exception : nombres égaux

        console.log("Nombres égaux, revoir les entrées.")
        alert("Il y a des nombres égaux ! Revoyez vos entrées.")
    }
}




//FONCTION 2 NOMBRE ALEATOIRE COMPRIS ENTRE 2 VALEURS

//définition de la fonction
function nbRandomCompris(min, max) {

    let nombreRandom = Math.floor(Math.random() * 100)    //Appel d'un nombre random entre 0 et 100 (entier)

    if (min < nombreRandom && nombreRandom < max) {   //cas où le nombre random est dans la fourchette
        console.log("Le nombre " + nombreRandom + " est bien compris entre " + min + " et " + max)

    } else {  //Quand la fourchette choisie n'inclut pas le nombre random
        console.log("Le nombre " + nombreRandom + " ne se situe pas entre " + min + " et " + max)
    }
}



//FONCTION 3 DIVISION PAR UN NOMBRE RANDOM
function divisionRandom(nbDiv) {

    //Création du diviseur d'une valeur random entre 0 et 100
    let diviseur = Math.floor(Math.random() * 100)
    console.log("Le diviseur vaut " + diviseur)

    if (diviseur == 0) {    //expection où le diviseur vaut zéro
        console.log("Le diviseur aléatoire vaut zéro, impossibilité mathématique")
        alert("On ne divise pas par zéro !")

    } else {  //tous les autres cas

        //division du nombre par le diviseur
        let resultatDiv = nbDiv / diviseur
        console.log("La division de " + nbDiv + " par " + diviseur + " donne " + resultatDiv)
        alert(nbDiv + " divisé par " + diviseur + " vaut " + resultatDiv)
    }
}







//MENU DE SELECTION DE FONCTION


function choix() {
    console.log("choix de la fonction par l'utilisateur")
    let choix = prompt("Choisissez une fonction : comparaison de trois nombres -> entrer 1, fourchette comprenant un nombre random -> entrer 2, Division par un nombre aléatoire -> entrer 3")


    if (choix == 1) {    //choix de la fonction comparaison

        console.log("fonction comparaison choisie.")

        //demande des trois nombres à comparer
        let _nbComp1 = prompt("Programme de comparaison de trois nombres différents. Entrez le premier nombre :")
        let _nbComp2 = prompt("Entrez le deuxième nombre")
        let _nbComp3 = prompt("Entrez le dernier nombre")
        //appel de la fonction
        comparaison(_nbComp1, _nbComp2, _nbComp3)

    } else if (choix == 2) {  //Choix de la fonction random+fourchette

        console.log("fonction random dans fourchette choisie.")

        //demande des nombres min et max
        let _min = prompt("Entrez le nombre minimal de la fourchette")
        let _max = prompt("Entrez le nombre maximal de la fourchette")
        nbRandomCompris(_min, _max)

    } else if (choix == 3) {  //Choix de la fonction division par random

        console.log("choix de la fonction nombre/random.")

        //demande du nombre à diviser
        let _nbDiv = prompt("Entrez le nombre à diviser")
        divisionRandom(_nbDiv)
    }
}

//appel du menu
choix()
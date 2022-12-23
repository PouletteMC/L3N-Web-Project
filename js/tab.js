function ajouter() {
   let ligne = document.createElement("tr")
    let colonne1 = document.createElement("td")
    let colonne2 = document.createElement("td")
    let colonne3 = document.createElement("td")
    let colonne4 = document.createElement("td")

    colonne1.textContent = document.information.nom.value
    colonne2.textContent = document.information.prenom.value
    colonne3.textContent = document.information.contenu.value
    colonne4.textContent = new Date().toLocaleDateString()

    ligne.append(colonne1, colonne2, colonne3, colonne4)
    document.querySelector("table").append(ligne)
}

document.addEventListener("keypress", event => {
    if (event.key === "Enter") {
        ajouter()
    }
})
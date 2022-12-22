function ajouter() {
   let ligne = document.createElement("tr");
    let colonne1 = document.createElement("td");
    let colonne2 = document.createElement("td");
    let colonne3 = document.createElement("td");
    let colonne4 = document.createElement("td");

    var curday = function(sp){
        today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //As January is 0.
        var yyyy = today.getFullYear();
        
        if(dd<10) dd='0'+dd;
        if(mm<10) mm='0'+mm;
        return (mm+sp+dd+sp+yyyy);
        };
        

    colonne1.textContent = document.information.nom.value;
    colonne2.textContent = document.information.prenom.value;
    colonne3.textContent = document.information.contenu.value;
    colonne4.textContent = curday('/');

    ligne.append(colonne1, colonne2, colonne3, colonne4);

    document.querySelector("table").append(ligne);

}
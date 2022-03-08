let params = new URL(document.location).searchParams;
let ID = params.get("ID");
//console.log(ID);

function fetchkanap() {
  fetch(`http://localhost:3000/api/products/${ID}`)
    .then(convertJSON)
    .then(function (dataFromAPI) {
      // console.log(dataFromAPI);
      //const API
      const namekanap = dataFromAPI.name;
      const descriptionduKANAP = dataFromAPI.description;
      const descriptionALT = dataFromAPI.altTxt;
      const photo = dataFromAPI.imageUrl;
      const balisephoto = document.getElementById("ok");
      const selectioncolor = document.getElementById("colors");
      const prix = dataFromAPI.price;
      const numero = ID;
      //sellecteure d'element
      const ajoutpanier = document.getElementById("addToCart");
      const Idform = document.getElementById("quantity");
      const choiceColors = document.getElementById("colors");

      //choix des quantier

      //selection du bouton pour que cette valeur se dimette dans la bonnne variable
      let images = document.createElement("img");
      //atributs creation
      images.setAttribute("src", photo);
      images.setAttribute("alt", descriptionALT);

      let colorsK = dataFromAPI.colors;
      let tabscolors = [];
      tabscolors = colorsK;

      //boucle pour afficher les couleurs
      tabscolors.forEach((items) => {
        const evrycolors = items;
        //console.log(evrycolors);
        //console.log(selectioncolor);
        let option = document.createElement("option");
        document.getElementById("title");
        document.getElementById("description");
        document.getElementById("price");
        title.textContent = namekanap;
        description.textContent = descriptionduKANAP;
        option.textContent = evrycolors;
        price.textContent = prix;
        balisephoto.appendChild(images);
        selectioncolor.appendChild(option);
      });
       
      

      //Fonction qui va écouter le clic pour récupérer les différences informations sur la quantité
      //le nom du produit et la couleur.
      ajoutpanier.addEventListener("click", () => {
        // Création d'un objet avec les infos du canapé à ajouter dans le panier
        const optionProduit = {
          name: namekanap,
          identification: ID,
          colors: choiceColors.value,
          quantity: Idform.value,
          prix: prix,
          imageduKanap: photo,
          descrptionPhoto: descriptionALT,
        };
        // console.log(optionProduit);

        // On recup l'item "produit" depuis le local storage
        let produitEnregistrerDansLocalStorage = JSON.parse(
          localStorage.getItem("produit")
        );
        console.log(produitEnregistrerDansLocalStorage);

         
      

        
        // Si on a deja un/des produit(s) dans le panier/local storage
        if (produitEnregistrerDansLocalStorage) {
          //produitEnregistrerDansLocalStorage.push(optionProduit);
        
         
          /*
           

            Avant de rajouter le produit dans le panier (local storage),

            Il faut vérifier qu'il n'est pas déjà présent (: qu'on ait pas déjà une ligne avec un canapé du même id ET de la même couleur)

            Si c'est le cas :
              => On vient mettre à jour la quantité dans le panier (: modifier la quantité dans le local storage)

            Autrement :
              => On rajoute le produit dans le panier (: une nouvelle ligne dans le local storage)
            */

            // On parcours le tableau du local storage
            // Et on recup la première valeur qui correspond au critère de recherche
            const produitTrouve = produitEnregistrerDansLocalStorage.find(function(product) {
              return product.identification === ID && product.colors === choiceColors.value;
               //"LA COULEUR DU PRODUIT QU'OIN RAJOUTE DANS LE PANIER"; "L'ID DU PRODUIT QU'OIN RAJOUTE DANS LE PANIER" 
            });
            console.log(produitTrouve);
           
            // Si on a trouvé un canapé qui correspond 
          if (produitTrouve) {
            produitTrouve.quantity = produitTrouve.quantity +++1;
            // On rajoute le nouveau produit dans le tableau recup depuis le local storage
            //produitEnregistrerDansLocalStorage.push(produitTrouve)
            // On l'envoie dans le local storage
            localStorage.setItem(
              "produit",
              JSON.stringify(produitEnregistrerDansLocalStorage)
            );
           }
           else {
            produitEnregistrerDansLocalStorage.push(optionProduit);
            localStorage.setItem(
              "produit",
              JSON.stringify(produitEnregistrerDansLocalStorage)
            );
           }
      // console.log(produitEnregistrerDansLocalStorage);
      
        } else { 
          // Sinon, on a rien dans le local storage
          // On crée un tableau qui va contenir nos produits
          produitEnregistrerDansLocalStorage = [];
          // On y ajoute le produit 
          produitEnregistrerDansLocalStorage.push(optionProduit);
          // On envoi dans le local storage
          localStorage.setItem(
            "produit",
            JSON.stringify(produitEnregistrerDansLocalStorage)
          );
          
          //console.log(produitEnregistrerDansLocalStorage);
        }

        // Recup les valeurs qu'il faut
        // Les mettre dans un tableau
        // Et "sauvegarder" le tableau dans le local storage
      });
    });
}
//Fonction qui va écouter le clic pour récupérer les différences informations sur la quantité
//le nom du produit et la couleur.

function convertJSON(responseJSON) {
  // verif si la reponse est ok
  if (responseJSON.ok) {
    // Dans ce cas :
    // - On formate la réponse
    // - Puis on la retourne
    return responseJSON.json();
  }
}

fetchkanap();

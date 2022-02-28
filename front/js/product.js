let params = new URL (document.location).searchParams;
let ID = params.get("ID");
//console.log(ID);

function fetchkanap() {
  fetch(`http://localhost:3000/api/products/${ID}`) 
    .then(convertJSON)
    .then(function (dataFromAPI) {
      //console.log(dataFromAPI); 
      //const API
      const namekanap = dataFromAPI.name;
      const descriptionduKANAP = dataFromAPI.description;
      const descriptionALT = dataFromAPI.altTxt;
      const photo = dataFromAPI.imageUrl;
      const balisephoto = document.getElementById("ok");
      const selectioncolor = document.getElementById ("colors");
      const prix = dataFromAPI.price;
      //sellecteure d'element
      const ajoutpanier = document.getElementById("addToCart");
      const Idform =document.getElementById("quantity");
      const choiceColors =document.getElementById("colors");
     
     
 

      //choix des quantier 
      
      //selection du bouton pour que cette valeur se dimette dans la bonnne variable
      
      

      let images = document.createElement("img");
        //atributs creation
      images.setAttribute("src",photo);
      images.setAttribute("alt",descriptionALT);
      
      let colorsK  =dataFromAPI.colors;
      let tabscolors = [];
      tabscolors = colorsK;
      
      //boucle pour les couleurs
      tabscolors.forEach(items => {
      const evrycolors = items;
      //console.log(evrycolors);
      //console.log(selectioncolor);
      let option =document.createElement("option");
      document.getElementById("title");
      document.getElementById("description");
      document.getElementById("price");
      title.textContent = namekanap;
      description.textContent = descriptionduKANAP;
      option.textContent= evrycolors;
      price.textContent = prix;
      balisephoto.appendChild(images);
      selectioncolor.appendChild(option);
     
      
     
      
    });
   
    //Fonction qui va écouter le clic pour récupérer les différences informations sur la quantité 
    //le nom du produit et la couleur.
    
   
   

      Idform.addEventListener("click", () => {
      ajoutpanier.addEventListener('click',handleAddToCart);
      optionProduit = [namekanap,ID,choiceColors.value,Idform.value,prix]
     
      
      function handleAddToCart() {

      console.log(optionProduit);

      optionProduit = [namekanap,ID,choiceColors.value,Idform.value,prix];
    
      // Recup les valeurs qu'il faut
      // Les mettre dans un tableau 
      // Et "sauvegarder" le tableau dans le local storage
    }
    choiceColors.addEventListener("click",()=> {
      console.log(choiceColors.value);
      optionProduit = [namekanap,ID,choiceColors.value,Idform.value,prix];
     
      
      console.log(optionProduit);

      
     
    });
    
   
  })
  
 
  
  });
};
//Fonction qui va écouter le clic pour récupérer les différences informations sur la quantité 
//le nom du produit et la couleur.
console.log(localStorage);

function convertJSON(responseJSON) {
  // verif si la reponse est ok
  if (responseJSON.ok) {
    // Dans ce cas : 
    // - On formate la réponse
    // - Puis on la retourne
    return responseJSON.json();
  }
}



console.log(localStorage);
// Appel à la fonction
fetchkanap();

let produitEnregisterDansLelocalStorage = JSON.parse(localStorage.getItem("1"))
console.log(produitEnregisterDansLelocalStorage);
if (produitEnregisterDansLelocalStorage){       
  
}

const fetchkanap = () => {

  // On effectue un call à une API
  // => On envoie une requete à une API pour lui demander des informations
  fetch ("http://localhost:3000/api/products") // On déclenche la requete sur l'URL suivante (= endpoint => là où notre API nous délivre des données)
    .then(function (responseJSON) {
      // Ici, une fois que la requete est effectuée
      // On reçoit dans ce bloc then, là réponse de l'API au format JSON

      // Si la réponse de l'API est ok
      if (responseJSON.ok) {
        // On retourne la réponse de l'API (qui est au format JSON)
        // dans un format que JS va pouvoir utiliser pour travailler (un tableau d'objet JS)
        return responseJSON.json();
      }
    })
    .then(function(dataFromAPI){
      // Dans ce bloc .then(), on reçoit la réponse de l'API une fois convertis en tableau objet JS

      // Un tableau est un type de variable 'complexe' qui contient plusieurs elements
      // Chaque element est présent à un certain index
      // Les index d'un tableau commence à 0
      
      //console.log(dataFromAPI);

      // Pour pouvoir atteindre un element en particulier d'un tableau, il faut le pointer grâce à son index
      
      //console.log(dataFromAPI[0]);

      // On veut pouvoir afficher en console le nom de chacun de nos canapés
      // On veut pouvoir faire en sorte de parcourir, un à un, nos elements du tableau
      // Et pour chaque element, executer une console.log()
      // ==> BOUCLE
      // for, while, for...in, for...of
      // La fonction .forEach()

      // La fonction forEach permet de boucler sur un tableau
      // Pour chaque tour de boucle, la fonction forEach() va executer la fonction renseignée (callback) 

      // On a la possibilite de renseigner la fonction de callback a executer 
      // On fait attention a ne pas mettre les (), sinon on viendrait executer la fonction
      // Ici, ce n'est pas à nous d'executer la fonction, on delegue ce role à la fonction forEach()
      // => On renseigne donc un raccourcis vers la fonction que forEach va devoir executer pour chaque tour de boucle
      // dataFromAPI.forEach(afficheCanape);

      // Syntaxe moderne : avec fonctione fléchée
      // dataFromAPI.forEach((item) => { console.log(item.price) });

      // Syntaxe non-moderne mais peut être plus accessible au début
      dataFromAPI.forEach(function(item) {

        // On crée une variable dans laquelle on place la nom du canapé courant
        const name = item.name;
        const identifient = item._id;
        const desriptifkanap = item.altTxt;
        const descrpit = item.description;
        const visuel = item.imageUrl;
        const items  = document.getElementById("items");
        const lienpageproduit = "./product.html";

        
         
        

        // Prendre l'habitude de vérifier nos données
        //console.log(name,identifient,desriptifkanap,descrpit,visuel);
        const newlien = document.createElement("a");
        const neawarticle  = document.createElement("article");
        const namekanap = document.createElement("h3");
        const images = document.createElement("img");
        const paragraphe = document.createElement("p");
        
        //console.log(newlien,neawarticle,images,paragraphe,namekanap);
        namekanap.classList.add("productName");
        paragraphe.classList.add("productDescription");

        paragraphe.textContent = descrpit;
        namekanap.textContent = name;
        images.textContent = visuel;

        newlien.setAttribute("href",lienpageproduit);
        newlien.setAttribute("id",identifient)
        images.setAttribute("src",visuel);
        images.setAttribute("alt",desriptifkanap);
        
        

       
        items.appendChild(newlien);
        newlien.appendChild(neawarticle);
        neawarticle.appendChild(images);
        neawarticle.appendChild(namekanap);
        neawarticle.appendChild(paragraphe);
        
        
        // Pour chaque tour de boucle (et donc pour chaque element du tableau)
        // Il va falloir reconstruire l'architecture HTML suivante
        // Il va falloit remplacer les données qu'il faut à partir de données qu'on reçoit (du canapé courant) 
        /**

         * <a href="./product.html?id="__ ID __">
            <article>
              <img src="__URL DE L'IMAGE__" alt="__ ALT TXT__">
              <h3 class="productName">__ NOM DU CANAPE__</h3>
              <p class="productDescription">"__ DESCRIPTION __</p>
            </article>
          </a>
         */
        

          // Il faut créer des elements HTML => https://developer.mozilla.org/fr/docs/Web/API/Document/createElement
          // Il faut remplacer leur contenu text => https://developer.mozilla.org/fr/docs/Web/API/Node/textContent
          // Il faut renseigner leurs attributs et valeur => https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute
          // Il faut renseigner leurs calsses => https://developer.mozilla.org/fr/docs/Web/API/Element/classList
          // Il faut imbriquer les elements pour respecter la structure HTML => https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild
          // Il ne faut pas oublier de rajouter la strcture complète dans le DOM => https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild
      });
    });
}




// Appel de la fonction => On execute le code présent dans la fonction
// Si on n'appelle jamais la fonction, le code ne s'execute jamais
fetchkanap();

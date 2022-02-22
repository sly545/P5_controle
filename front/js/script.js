const fetchkanap = () => {
  // On effectue un call à une API
  // => On envoie une requete à une API pour lui demander des informations
  fetch("http://localhost:3000/api/products") // On déclenche la requete sur l'URL suivante (= endpoint => là où notre API nous délivre des données)
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
    .then(function (dataFromAPI) {
      console.log(dataFromAPI);
      //boucle sur l'api  
      dataFromAPI.forEach(function (item) {
        //const
        const name = item.name;
        const identifient = item._id;
        const desriptifkanap = item.altTxt;
        const descrpit = item.description;
        const visuel = item.imageUrl;
        const items = document.getElementById("items");

        //variable

        //console.log(name,identifient,desriptifkanap,descrpit,visuel);
        //creation des elements du dom
        let newlien = document.createElement("a");
        let neawarticle = document.createElement("article");
        let namekanap = document.createElement("h3");
        let images = document.createElement("img");
        let paragraphe = document.createElement("p");
        //let lienpageproduit = "./product.html?";
        let joined = `./product.html?ID=${identifient}`;
        

        
        
        
        

        //console.log(newlien,neawarticle,images,paragraphe,namekanap);
        //ajout des class
        namekanap.classList.add("productName");
        paragraphe.classList.add("productDescription");
        //ajout du texte
        paragraphe.textContent = descrpit;
        namekanap.textContent = name;
        images.textContent = visuel;
        //ajout des atributs
        newlien.setAttribute("href",joined);
        newlien.setAttribute("id", identifient);
        images.setAttribute("src", visuel);
        images.setAttribute("alt", desriptifkanap);
        //indentation de la structur html
        items.appendChild(newlien);
        newlien.appendChild(neawarticle);
        neawarticle.appendChild(images);
        neawarticle.appendChild(namekanap);
        neawarticle.appendChild(paragraphe);
      });
    });
};

fetchkanap();

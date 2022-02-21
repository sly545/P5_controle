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
      
      
       console.log(dataFromAPI);

      
      dataFromAPI.forEach(function(item) {

        // On crée une variable dans laquelle on place la nom du canapé courant
        const name = item.name;
        const identifient = item._id;
        const desriptifkanap = item.altTxt;
        const descrpit = item.description;
        const visuel = item.imageUrl;
        const items  = document.getElementById("items");
        let parmams = new URL (document.location).searchParams;
        let id = parmams.get("42")
        console.log(id);
        
        

        
         
        

        // Prendre l'habitude de vérifier nos données
        //console.log(name,identifient,desriptifkanap,descrpit,visuel);
        const newlien = document.createElement("a");
        const neawarticle  = document.createElement("article");
        const namekanap = document.createElement("h3");
        const images = document.createElement("img");
        const paragraphe = document.createElement("p");
        let lienpageproduit = "./product.html";


        
        
        
        //console.log(newlien,neawarticle,images,paragraphe,namekanap);
        
        namekanap.classList.add("productName");
        paragraphe.classList.add("productDescription");

        paragraphe.textContent = descrpit;
        namekanap.textContent = name;
        images.textContent = visuel;

        newlien.setAttribute("href",lienpageproduit);
        newlien.setAttribute("id",identifient);
        images.setAttribute("src",visuel);
        images.setAttribute("alt",desriptifkanap);
        
        

        
       

        

        
        

       
        items.appendChild(newlien);
        newlien.appendChild(neawarticle);
        neawarticle.appendChild(images);
        neawarticle.appendChild(namekanap);
        neawarticle.appendChild(paragraphe);


       
        
        
        
        

         
      });
    });
}

fetchkanap();


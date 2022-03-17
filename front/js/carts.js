let produitEnregistrerDansLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.log(produitEnregistrerDansLocalStorage);

let pricomande = 0;
let totalQty = 0;
produitEnregistrerDansLocalStorage.forEach((items) => {
  pricomande = pricomande + (items.quantity * items.prix);
  totalQty += items.quantity;
})
//console.log(pricomande);
//console.log(totalQty);






produitEnregistrerDansLocalStorage.forEach(items => {
    //constent recuperer du ou des canape du local storage.
    const name = items.name;
    let prix = items.prix;
    const couleur = items.colors;
    let quantiter= items.quantity;
    const ID = items.identification;
    const visuelKanap = items.imageduKanap;
    const descrptionPhoto = items.descrptionPhoto;
    const number = "number";
    const min = "1";
    const max = "100";
    const apelParents = document.getElementById("cart__items");
    const contenerprixcommande =document.getElementById("totalPrice")
    const prixmultiple = prix*quantiter;
    //tableaux avec toute les data pas utile pour l'instant
    let tabletous = [name,couleur,prix,visuelKanap,descrptionPhoto,ID,quantiter];

    console.log(items.quantity);
  
    
   //tentative boucle sure total-prix
   


  
 //console.log(prixComande);
 //console.log(apelParents);
 //console.log(visuelKanap);
    
    


    //console.log(name,prix,quantiter,couleur,ID,visuelKanap,descrptionPhoto);
     // creation des diferrent element html de la pages.
    let identificationKanpCouleurKanap = document.createElement("article");
    identificationKanpCouleurKanap.classList.add("cart__item");
    identificationKanpCouleurKanap.setAttribute("data-id",ID);
    identificationKanpCouleurKanap.setAttribute("data-color",couleur);
    let images = document.createElement("img");
    let divcontenerImage =  document.createElement("div")
    divcontenerImage.classList.add("cart__item__img")
    images.setAttribute("src",visuelKanap);
    images.setAttribute("alt",descrptionPhoto);
    let contenereferenceProdutit = document.createElement("div")
    contenereferenceProdutit.classList.add("cart__item__content");
    let referenceProduit = document.createElement("div")
    referenceProduit.classList.add("cart__item__content__description")
    let nomKananSelection = document.createElement("h2")
    nomKananSelection.textContent=name;
    let couleureSelection = document.createElement("p")
    couleureSelection.textContent=couleur;
    let prixKanapSelction = document.createElement("p")   
    prixKanapSelction.textContent= prixmultiple;
    let divcontenerSeting = document.createElement("div")
    divcontenerSeting.classList.add("cart__item__content__settings")
    let divcontenersetingQantity = document.createElement("div")
    divcontenersetingQantity.classList.add("cart__item__content__settings__quantity")
    let quantytiSelctect = document.createElement("p")
    quantytiSelctect.textContent=quantiter;
    let inuputchange =document.createElement("input");
    inuputchange.classList.add("itemQuantity");
    inuputchange.setAttribute("type",number);
    inuputchange.setAttribute("name",name);
    inuputchange.setAttribute("min",min)
    inuputchange.setAttribute("max",max)
    inuputchange.setAttribute("value",quantiter)
    let divContenersupretion = document.createElement("div");
    divContenersupretion.classList.add("cart__item__content__settings__delete");
    let divsupretion = document.createElement("p")
    divsupretion.classList.add("deleteItem");
    divsupretion.textContent="Supprimer";
    contenerprixcommande.textContent=pricomande;
    
  


    
    

 

   

    //structure html de la partit ajout client Kanape
    apelParents.appendChild(identificationKanpCouleurKanap);
    identificationKanpCouleurKanap.appendChild(divcontenerImage);
    identificationKanpCouleurKanap.appendChild(contenereferenceProdutit);
    contenereferenceProdutit.appendChild(referenceProduit);
    identificationKanpCouleurKanap.appendChild(divcontenerSeting);
    identificationKanpCouleurKanap.appendChild(divContenersupretion);
    divcontenerImage.appendChild(images);
    contenereferenceProdutit.appendChild(nomKananSelection);
    contenereferenceProdutit.appendChild(couleureSelection);
    contenereferenceProdutit.appendChild(prixKanapSelction);
    divcontenerSeting.appendChild(divcontenersetingQantity);
    divcontenerSeting.appendChild(divContenersupretion);
    divContenersupretion.appendChild(divsupretion);
    divcontenersetingQantity.appendChild(quantytiSelctect);
    divcontenersetingQantity.appendChild(inuputchange);
   
   
    

//aditioner
        
//evenemnt changement de quantiter.
   
             inuputchange.addEventListener("change",() =>{
               console.log(inuputchange.value);
               //ils faut trouver le produit j'uste le produit cliquer:
               let produitTrouve = produitEnregistrerDansLocalStorage.find(el => el ) 
              
              
              let quaniterAmodifer = [inuputchange.value ]  
               console.log(quaniterAmodifer);
               
            

             
              produitTrouve.quantity = inuputchange.value;
              //console.log(produitTrouve);

           
              
              localStorage.setItem(
                "produit",
                JSON.stringify(produitEnregistrerDansLocalStorage)
              );
              window.location.href= "cart.html"
              
         })


    


    
    //--------------------------------------------------------//
     //evenement au click pour suprimer //    
   



     divsupretion.addEventListener("click",() =>{
      
      let grandesuppresion = produitEnregistrerDansLocalStorage.find(quantity => quantity = quantity);
      //console.log(grandesuppresion);


    let produitAsuprimer = grandesuppresion;
      //obejectif reussir a selcetion seul le kanape choisit ou selvtioner tous les autre kanap selectioner 
  
     console.log(produitAsuprimer);
     //jenvois le produit dans le local Storage
     grandesuppresion = produitEnregistrerDansLocalStorage.filter(el => el !== produitAsuprimer);
     console.log(grandesuppresion);
     
     localStorage.setItem(
      "produit",
      JSON.stringify(grandesuppresion)
    );

   
    window.location.href= "cart.html"
    
  });
    


 

 
 
});

  










    



let produitEnregistrerDansLocalStorage = JSON.parse(
  localStorage.getItem("produit")
);
console.log(produitEnregistrerDansLocalStorage);

let pricomande = 0;
let totalQty = 0;
produitEnregistrerDansLocalStorage.forEach((items) => {
  pricomande = pricomande + items.quantity * items.prix;
  totalQty += items.quantity;
});
//console.log(pricomande);
//console.log(totalQty);

produitEnregistrerDansLocalStorage.forEach((items) => {
  //constent recuperer du ou des canape du local storage.
  const name = items.name;
  let prix = items.prix;
  const couleur = items.colors;
  let quantiter = items.quantity;
  const ID = items.identification;
  const visuelKanap = items.imageduKanap;
  const descrptionPhoto = items.descrptionPhoto;
  const number = "number";
  const min = "1";
  const max = "100";
  const apelParents = document.getElementById("cart__items");
  const contenerprixcommande = document.getElementById("totalPrice");
  const prixmultiple = prix * quantiter;
  //tableaux avec toute les data pas utile pour l'instant
  //let tabletous = [name,couleur,prix,visuelKanap,descrptionPhoto,ID,quantiter];
  // selecteure pour le formulaire de commmande
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let address = document.getElementById("address");
  let city = document.getElementById("city");
  let email = document.getElementById("email");
  let order = document.getElementById("order");
  let formulaire = document.getElementsByClassName("cart__order__form")
  //console.log(firstName,lastName,address,city,email,order);



  //tentative boucle sure total-prix

  //console.log(prixComande);
  //console.log(apelParents);
  //console.log(visuelKanap);

  //console.log(name,prix,quantiter,couleur,ID,visuelKanap,descrptionPhoto);
  // creation des diferrent element html de la pages.
  let identificationKanpCouleurKanap = document.createElement("article");
  identificationKanpCouleurKanap.classList.add("cart__item");
  identificationKanpCouleurKanap.setAttribute("data-id", ID);
  identificationKanpCouleurKanap.setAttribute("data-color", couleur);
  let images = document.createElement("img");
  let divcontenerImage = document.createElement("div");
  divcontenerImage.classList.add("cart__item__img");
  images.setAttribute("src", visuelKanap);
  images.setAttribute("alt", descrptionPhoto);
  let contenereferenceProdutit = document.createElement("div");
  contenereferenceProdutit.classList.add("cart__item__content");
  let referenceProduit = document.createElement("div");
  referenceProduit.classList.add("cart__item__content__description");
  let nomKananSelection = document.createElement("h2");
  nomKananSelection.textContent = name;
  let couleureSelection = document.createElement("p");
  couleureSelection.textContent = couleur;
  let prixKanapSelction = document.createElement("p");
  prixKanapSelction.textContent = prixmultiple;
  let divcontenerSeting = document.createElement("div");
  divcontenerSeting.classList.add("cart__item__content__settings");
  let divcontenersetingQantity = document.createElement("div");
  divcontenersetingQantity.classList.add(
    "cart__item__content__settings__quantity"
  );
  let quantytiSelctect = document.createElement("p");
  quantytiSelctect.textContent = quantiter;
  let inuputchange = document.createElement("input");
  inuputchange.classList.add("itemQuantity");
  inuputchange.setAttribute("type", number);
  inuputchange.setAttribute("name", name);
  inuputchange.setAttribute("min", min);
  inuputchange.setAttribute("max", max);
  inuputchange.setAttribute("value", quantiter);
  let divContenersupretion = document.createElement("div");
  divContenersupretion.classList.add("cart__item__content__settings__delete");
  let divsupretion = document.createElement("p");
  divsupretion.classList.add("deleteItem");
  divsupretion.textContent = "Supprimer";
  contenerprixcommande.textContent = pricomande;

  //structure html de la partit ajout client Kanape
  apelParents.appendChild(identificationKanpCouleurKanap);
  identificationKanpCouleurKanap.appendChild(divcontenerImage);
  identificationKanpCouleurKanap.appendChild(contenereferenceProdutit);
  contenereferenceProdutit.appendChild(referenceProduit);
  identificationKanpCouleurKanap.appendChild(divcontenerSeting);
  identificationKanpCouleurKanap.appendChild(divContenersupretion);
  divcontenerImage.appendChild(images);
  contenereferenceProdutit.appendChild(nomKananSelection);
  contenereferenceProdutit.appendChild(couleureSelection);
  contenereferenceProdutit.appendChild(prixKanapSelction);
  divcontenerSeting.appendChild(divcontenersetingQantity);
  divcontenerSeting.appendChild(divContenersupretion);
  divContenersupretion.appendChild(divsupretion);
  divcontenersetingQantity.appendChild(quantytiSelctect);
  divcontenersetingQantity.appendChild(inuputchange);

  //aditioner

  //evenemnt changement de quantiter.

  inuputchange.addEventListener("change", () => {
    // console.log(inuputchange.value);
    //ils faut trouver le produit j'uste le produit cliquer:
    

    const produitTrouve = produitEnregistrerDansLocalStorage.find(function (
      product
    ) {
      return product.identification === ID && product.quantity;
      //"LA COULEUR DU PRODUIT QU'OIN RAJOUTE DANS LE PANIER"; "L'ID DU PRODUIT QU'OIN RAJOUTE DANS LE PANIER"
    });
    console.log(produitTrouve);

    produitTrouve.quantity = inuputchange.value;
    console.log(produitTrouve);

    localStorage.setItem(
      "produit",
      JSON.stringify(produitEnregistrerDansLocalStorage)
    );
    window.location.href = "cart.html";
  });

  //--------------------------------------------------------//
  //evenement au click pour suprimer //

  divsupretion.addEventListener("click", () => {
    let produitTrouve = produitEnregistrerDansLocalStorage.find(function (
      product
    ) {
      return product.identification === ID && product.quantity;
      //"LA COULEUR DU PRODUIT QU'OIN RAJOUTE DANS LE PANIER"; "L'ID DU PRODUIT QU'OIN RAJOUTE DANS LE PANIER"
    });
    console.log(produitTrouve);
    //console.log(grandesuppresion);

    let produitAsuprimer = produitTrouve;
    //obejectif reussir a selcetion seul le kanape choisit ou selvtioner tous les autre kanap selectioner

    console.log(produitAsuprimer);
    //jenvois le produit dans le local Storage
    produitTrouve = produitEnregistrerDansLocalStorage.filter(
      (el) => el !== produitAsuprimer
    );
    console.log(produitTrouve);

    localStorage.setItem("produit", JSON.stringify(produitTrouve));

    window.location.href= "cart.html"
  });

  order.addEventListener("click" , (e) => {
    e.preventDefault(e);
    prenonNonVilleControle();
    mailControle();
    let prenomValid = firstName.value
    let nomValid = lastName.value;
    let addressValid = address.value;
    let villeValid = city.value;
    let emailValid = email.value;
    
  
   
   
   const products = [
    {
      id: ID,
      price: prix,
    },
  ];
  
  const idProduct = products.map(product => {
    return product.id;
  });
  
  const object = {
    contact: {
      firstName: prenomValid,
      lastName: nomValid,
      address: addressValid,
      city: villeValid,
      email:emailValid
  },
    products: idProduct
  };
  const options = {
    method: "POST",
    body: JSON.stringify(object),
    headers: { "Content-Type": "application/json" },
  };
  console.log(options);
  
  fetch('http://localhost:3000/api/products', object)
  .then(response => response.json())
  .then(data => {
    window.location.href = `./confirmation.html?orderid=${data.orderId=options}`;
  })

  


});

  



  
  function prenonNonVilleControle(){

    const controlePrenon = firstName.value;
    const controleNom = lastName.value;
    const controleVille = city.value;
    //controle du prenon
    if (/^[A-Za-z]{3,20}$/.test(controlePrenon,controleNom,controleVille)) {
      //console.log("ok");
    } else {
      //console.log("ko");
      alert("champs invalide");
    }
    
  }

  function mailControle(){
  
    const verifeMail = email.value;
    //controle du prenon
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(verifeMail)) {
    
    } else {
      console.log("ko");
      alert("champs invalide");
    }
    
  }










});

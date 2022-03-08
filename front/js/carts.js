let produitEnregistrerDansLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.log(produitEnregistrerDansLocalStorage);


produitEnregistrerDansLocalStorage.forEach(items => {
    //constent recuperer du ou des canape du local storage.
    const name = items.name;
    const prix = items.prix;
    const couleur = items.colors;
    const quantiter= items.quantity;
    const ID = items.identification;
    const visuelKanap = items.imageduKanap;
    const descrptionPhoto = items.descrptionPhoto;
    const number = "number";
    const min = "1";
    const max = "100";
    const value ="";
    const apelParents = document.getElementById("cart__items");
    const totalPrix = prix*quantiter;
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
    prixKanapSelction.textContent= totalPrix;
    let divcontenerSeting = document.createElement("div")
    divcontenerSeting.classList.add("cart__item__content__settings")
    let divcontenersetingQantity = document.createElement("div")
    divcontenersetingQantity.classList.add("cart__item__content__settings__quantity")
    let quantytiSelctect = document.createElement("p")
    console.log(quantytiSelctect);
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
   
 
    
    
    


    
     



    
    //--------------------------------------------------------//
     //evenement au click pour suprimer //    
   
    divsupretion.addEventListener("click",() =>{
       console.log(name,ID,couleur,quantiter,);
       //filter le local  ID diferete de l'emment condition inversse//

       
     
        
        
});
    


});







    

    

    


    
    
    

    


















    




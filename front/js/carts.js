let produitEnregistrerDansLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.log(produitEnregistrerDansLocalStorage);


produitEnregistrerDansLocalStorage.forEach(items => {
    //constent recuperer ddu ou des canape du local storage.
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
    const value ="42";
    const apelPapa = document.getElementById("cart__items");
    console.log(apelPapa);

    //console.log(name,prix,quantiter,couleur,ID,visuelKanap,descrptionPhoto);

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
    prixKanapSelction.textContent= prix;
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
    inuputchange.setAttribute("value",value)
    let divContenersupretion = document.createElement("div");
    divContenersupretion.classList.add("cart__item__content__settings__delete");
    let divsupretion = document.createElement("p")
    divsupretion.classList.add("deleteItem");
    divsupretion.textContent="Supprimer";
    



  



    

    


    
    
    

    















});

/*  <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
                <div class="cart__item__img">
                  <img src="../images/product01.jpg" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>Nom du produit</h2>
                    <p>Vert</p>
                    <p>42,00 €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article> --></div>*/

    




let params = new URL (document.location).searchParams;
let ID = params.get("ID");
console.log(ID);
const fetchkanap = () => {
    
    fetch(`http://localhost:3000/api/products/${ID}`) 
      .then(function (responseJSON) {
        
        if (responseJSON.ok) {
          
          return responseJSON.json();
        }
      })
      .then(function (dataFromAPI) {
        console.log(dataFromAPI); 
        //const
        const namekanap = dataFromAPI.name;
        const prix = dataFromAPI.price;
        const descriptionduKANAP = dataFromAPI.description; 
        const descriptionALT = dataFromAPI.altTxt;
        const photo = dataFromAPI.imageUrl;
        let colors =dataFromAPI.colors;
        console.table(colors); 
        const elemenone = dataFromAPI.colors[0];
        const elementwo = dataFromAPI.colors[1];
        const elementree = dataFromAPI.colors[2];
        const elementfor = dataFromAPI.colors[3];
        
        
        


        console.log(elementfor);
        
        //console.log(elemenone,elementwo,elementree,elementfor);
        const balisephoto = document.getElementById("ok");
        const selectioncolor = document.getElementById ("colors");
      
        
        
        
        
        
        
        
        //console.log(namekanap,prix,description,descriptionALT,photo);

        //creation des elements du dom
        let images = document.createElement("img");
        let option1 =document.createElement("option");
        let option2 =document.createElement("option");
        let option3 = document.createElement("option");
        let option4 = document.createElement("option");


            
        
          
       
        

  
        

        
        
        
        
        //console.log(images,option1,option2,option3,option4);
        
       
        option1.setAttribute("value",elemenone);
        option2.setAttribute("value",elementwo);
        option3.setAttribute("value",elementree)
        option4.setAttribute("value",elementfor)
        
        
        
        images.setAttribute("src",photo);
        images.setAttribute("alt",descriptionALT);
        
        document.getElementById("title");
        document.getElementById("description");
        document.getElementById("price");
        
        title.textContent = namekanap;
        description.textContent = descriptionduKANAP;
        option1.textContent= elemenone;
        option2.textContent = elementwo;
        option3.textContent = elementree;
        option4.textContent = elementfor;
        price.textContent = prix;
        balisephoto.appendChild(images);
        selectioncolor.appendChild(option1);
        selectioncolor.appendChild(option2);
        selectioncolor.appendChild(option3);
        selectioncolor.appendChild(option4);

        
        


        
       
        
       
      

        
        

      
        

        
        
        

       
        
      





      
        







        
        
      });
      
  };
  
  fetchkanap();
  
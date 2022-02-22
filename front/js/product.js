console.log("coucou");
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
        
        
      });
      
  };
  
  fetchkanap();
  
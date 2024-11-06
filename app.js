

//lkky

loadItems();
    
    async function loadItems() {
       
let searchtxt=document.getElementById("search").value;
if(searchtxt==""){
  loadItems2();
return;
}
        let res = await fetch(`https://restcountries.com/v3.1/name/${searchtxt}`);
        let items = await res.json();
        let body = "";
        items.forEach(element => {
            console.log(element);
            body+=`
                <div class="col">
                    <div class="card shadow-sm">
                      <img src=${element.flags.png} alt="">
                      <div class="card-body">
                      <h2>${element.name.common}</h2>
                        <p class="card-text">Capital : ${element.capital}</p>
                        <p class="card-text">Region : ${element.region	}</p>
                        <p class="card-text">Population : ${element.population}</p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                           <a href=${element.maps.googleMaps} class="btn btn-primary" target="_blank">View on Google Maps</a>
                            
                          </div>
                         
                        </div>
                      </div>
                    </div>
                  </div>
            `;
    
            
            
        });

    console.log(body);

    document.getElementById("row").innerHTML=body;
    
};

loadItems2();

async function loadItems2() {
       
  //let searchtxt=document.getElementById("search").value;
  
          let res = await fetch("https://restcountries.com/v3.1/all");
          let items = await res.json();
          let body = "";
          items.forEach(element => {
              console.log(element);
              body+=`
                  <div class="col">
                      <div class="card shadow-sm">
                        <img src=${element.flags.png} alt="">
                        <div class="card-body">
                        <h2>${element.name.common}</h2>
                          <p class="card-text">Capital : ${element.capital}</p>
                          <p class="card-text">Region : ${element.region	}</p>
                          <p class="card-text">Population : ${element.population}</p>
                          <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                             <a href=${element.maps.googleMaps} class="btn btn-primary" target="_blank">View on Google Maps</a>
                              
                            </div>
                           
                          </div>
                        </div>
                      </div>
                    </div>
              `;
      
              
              
          });
  
      console.log(body);
  
      document.getElementById("row").innerHTML=body;
      
  };


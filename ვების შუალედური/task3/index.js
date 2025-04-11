/**
 * პირობა იხილეთ HTML ფაილში
 */
const products = [
    {
      id: 1,
      name: "LG OLED TV",
      description: "65-inch OLED 4K Smart TV",
      image: "https://fakeimg.pl/150x150",
    },
    {
      id: 2,
      name: "Sonos Arc",
      description: "Premium Smart Soundbar",
      image: "https://fakeimg.pl/150x150",
    },
    {
      id: 3,
      name: "Dyson V15 Detect",
      description: "Cordless Vacuum Cleaner",
      image: "https://fakeimg.pl/150x150",
    },
    {
      id: 4,
      name: "Instant Pot Duo",
      description: "7-in-1 Electric Pressure Cooker",
      image: "https://fakeimg.pl/150x150",
    },
  ];

  let showProducts = document.getElementById("toggleButton");
  let productList = document.getElementById("productList");

  showProducts.addEventListener("click", function(){

    if(showProducts.innerHTML === "Show Products"){
        for(let i = 0; i < products.length; i++){
            let showList = document.createElement("div");
        showList.innerHTML = 
        `<div class="card">
              <div class="card-header">
                <div class="product-info">
                  <div class="avatar">
                    <img src="${products[i].image}" alt="LG OLED TV" />
                  </div>
                  <div class="product-name">
                    <h3>${products[i].name}</h3>
                    <p class="product-info">${products[i].description}</p>
                  </div>
                </div>
              </div>
              <div class="card-content">
                <p class="product-id">${products[i].id}</p>
              </div>
            </div>`;
    
            productList.appendChild(showList);
        }
    
        showProducts.innerHTML = "Hide Products";
    }else{
        showList.innerHTML = ``;
        productList.appendChild(showList);
    }

    

    
  })
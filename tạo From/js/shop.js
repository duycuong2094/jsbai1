let product = [
   {
      img :"../img/ảnh1.webp",
      name: "Anber",
      price:400.000,
      sl:1,
      id:1
   },
   {
      img :"../img/ảnh2.webp",
      name: "Liqui",
      price:400.000,
      sl:1,
      id:2
   },
   {
      img :"../img/ảnh3.webp",
      name: "Leilinh",
      price:600.000,
      sl:1,
      id:3
   },
   {
      img :"../img/ảnh4.webp",
      name: "Candacer",
      price:600.000,
      sl:1,
      id:4
   },
   {
      img :"../img/ảnh 5.webp",
      name: "Layla",
      price:800.000,
      sl:1,
      id:5
   },
   {
      img :"../img/ảnh 6.webp",
      name: "Akaya",
      price:800.000,
      sl:1,
      id:6
   },
]
localStorage.setItem("products",JSON.stringify(product));
let products=JSON.parse(localStorage.getItem("products"));
renderProducts()
function renderProducts() {
  let result='';
  for (let i = 0; i < products.length; i++) {
   result+=
   `
    <div class="element">
      <img class="image" src="${products[i].img}"  />
      <p class="nameproduct">${products[i].name}</p>
      <div class="sl"> SỐ lƯỢNG${products[i].sl}</div>
      <span class="price">${products[i].price} VNĐ</span>
      <div><button onclick="addToCart(${products[i].id})">Thêm</button></div>
      </div>
            
   `   
  }
  document.getElementById("product").innerHTML= result ;
 } 
 

 function addToCart(idsp) {
  let listProduct=JSON.parse(localStorage.getItem("listProductCart"));
  if(listProduct==null){
    listProduct=[];
    for (let a = 0;a < products.length; a++) {
      if(products[a].id== idsp){
        listProduct.push(products[a]);
        localStorage.setItem("listProductCart",JSON.stringify(listProduct));
        
      }
    }
  }else{
    for(let index=0;index<products.length;index++){
      if(products[index].id== idsp){
        listProduct.push(products[index]);
        localStorage.setItem("listProductCart", JSON.stringify(listProduct));
        break;
      }
    } 
  }
}
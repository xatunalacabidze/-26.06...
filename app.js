let products = [];
function AddProduct(){
let productName = document.getElementById("product").Value;
alert(productName);
products.push(productName);
let container = document.getElementById("products");
productName.forEach((product) => {
   container.innerHTML +=`<h1> ${product} </h1>` ;
});
}
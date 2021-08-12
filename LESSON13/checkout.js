


function Product(name, price, quantity) {
    console.log("product's this");
    console.log(this);
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}
console.log(this);


function Display() {
    console.log("display's this");
    console.log(this);
    this.name = document.getElementById("name");
    this.price = document.getElementById("price");
    this.quantity = document.getElementById("quantity");
}


document.getElementById('customer-form').addEventListener("submit",function (event) {
    console.log("....event....");
    console.log(event);
    console.log("form's this");
    console.log(this);
    event.preventDefault();



    const name = this.getElementById("name");
    const price = this.getElementById("price");
    const quantity = this.getElementById("quantity");
    const product = new Product(name.value,price.value,quantity.value);
    const display = new Display();
    console.log(display);
    console.log(product);

})



























// const queryString = window.location.search;
// console.log(queryString);
// const urlParams = new URLSearchParams(queryString);
// console.log(urlParams);
// const firstname = urlParams.get("firstname");
// const lastname = urlParams.get("lastname");
// alert("welcome " + firstname + " " + lastname);


const updateProductQuantity = (input) => {
    alert(input.value);
}

document.querySelectorAll(".product-quantity input").forEach(function(input){
    input.addEventListener("change", function(){
        updateProductQuantity(input);
    });
});

const removeProduct = (button) => {
    let productRow = button.parentElement.parentElement;
    productRow.remove();
}

document.querySelectorAll(".product-removal button").forEach(function(button){
    button.addEventListener("click", function(){
        removeProduct(button);
    });
});





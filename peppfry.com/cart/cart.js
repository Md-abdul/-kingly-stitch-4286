let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);

let main_Container = document.getElementById("cart-container");

function display(arr) {

  // get the total value
  let total = document.getElementById('order-total');
  let quantity = document.createElement("span")
  // quantity.textContent = product.quantity;

  main_Container.innerHTML = "";
cart.forEach((product, index) => {
    //product card
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    //image container for product card
    let img = document.createElement("img");
    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "img__container");
    img.src = product.img;

//     // details container for product card
    let detail__container = document.createElement("div");
    detail__container.setAttribute("class", "detail_container");
    let details = document.createElement("h3");
    let price = document.createElement("h4");
    let discount = document.createElement("p");
    let add_to_cart = document.createElement("button");
    details.innerText = product.details;
    price.innerText = "$" + product.price;
    discount.innerText = product.discount;
    add_to_cart.innerText = "checkout";

    add_to_cart.addEventListener('click', () =>{
      location.href = '../checkout/index.html'
    })

    let incDecDiv = document.createElement("div");
    incDecDiv.setAttribute("class", "countButton");

//     //for increase and decrese button
    let incButton = document.createElement("button");
    let count = document.createElement("p");
    let decButton = document.createElement("button");
    let remove = document.createElement('button');

    incButton.setAttribute("class", "increse_btn");    //here class select in inc and dec but
    decButton.setAttribute("class", "decrese_btn");
    count.setAttribute("class", "counttext");
    remove.setAttribute('class', 'remove-btn')

    incButton.innerHTML = "+";
    decButton.innerHTML = "-";
    count.innerHTML = 1;
    remove.innerHTML = 'Remove '
    let counts = 2;

    remove.addEventListener('click', () => {
      // cart.splice(index, 1);
      deletedtat(cart, index);
      
        // localStorage.setItem("cart", JSON.stringify(cart));
        // display(cart)
    })


    incButton.addEventListener("click", () => {
      count.innerHTML = counts++;
    });
    decButton.addEventListener("click", () => {
      count.innerHTML = counts--;

      if (counts >= 1) {
        return;
      }
    });
//     // append all the data element in their respective divs/container
    imgDiv.append(img);


    // incDecDiv.append(incButton, count, decButton);
    detail__container.append(
      details,
      price,
      discount,
      add_to_cart,
      incButton,
      decButton,
      count,
      remove,
      quantity
    );

    // append container in the card div
    card.append(imgDiv, detail__container);

    //  append container in the card div
    main_Container.append(card);
    console.log(card)
  });

  
  let sum = 0;
  for(let i=0;i<cart.length;i++){
    sum+=cart[i].price*cart[i].quantity;
  }
 total.textContent = sum;
}
display(cart);


function deletedtat(data, index){
  data.splice(index,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  display(data)
}
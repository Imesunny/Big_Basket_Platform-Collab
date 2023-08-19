var justClicked = JSON.parse(localStorage.getItem("just-clicked"));

var img = document.getElementById("big_img");
var title = document.getElementById("main_product_title");
var mrp_strike_off = document.getElementById("mrp_price_strikeof");
var discountedPrice = document.getElementById("discountedPrice");
var addtoBasket = document.getElementById("addToBagBtn");
var firstCard = document.getElementById("first_price_mrp_card");

img.setAttribute("src", justClicked.img);

title.innerText = justClicked.name;
mrp_strike_off.innerHTML = `MRP: <span style="text-decoration: 1px solid black line-through;">Rs ${justClicked.pricePerKg}</span>`;
discountedPrice.innerHTML = `Price: Rs ${justClicked.DiscountPrice}</span> <span class="perkg">(${justClicked.DiscountPrice}/kg)</span>`;

firstCard.innerHTML = `Rs ${justClicked.DiscountPrice} <span class="mrp-strike-through">MRP: Rs
${justClicked.pricePerKg}</span><span class="red-color"> **% Off</span>`;

addtoBasket.addEventListener("click", function (event) {
  var cart = JSON.parse(localStorage.getItem("cart_items")) || [];
  console.log(justClicked);
  cart.push(justClicked);
  localStorage.setItem("cart_items", JSON.stringify(cart));
  var before_cart_added = document.getElementById("before_cart");
  var after_cart_added = document.getElementById("after_cart");

  before_cart_added.style.display = "none";
  after_cart_added.style.display = "flex";

  alert("Item added to cart");
});

var first_image = document.getElementById("first_image");
first_image.addEventListener("click", function (event) {
  event.target.style.border = "1px solid rgba(22, 225, 32)";
  document.getElementById("second_image").style.border =
    "1px solid rgba(0, 0, 0, 0.1)";
});
var second_image = document.getElementById("second_image");
second_image.addEventListener("click", function (event) {
  event.target.style.border = "1px solid rgba(22, 225, 32)";
  document.getElementById("first_image").style.border =
    "1px solid rgba(0, 0, 0, 0.1)";
});

first_image.setAttribute("src", justClicked.img);
second_image.setAttribute("src", justClicked.img);

var title_about_section = document.querySelectorAll(".card_title_name");
title_about_section.forEach(function (element) {
  element.innerText = justClicked.name;
});

var my_basket = document.getElementById("my_basket");
my_basket.addEventListener("click", function () {
  window.location.assign("./cart.html");
});

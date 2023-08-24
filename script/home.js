var vegetables = [
     {
        img: "https://www.bigbasket.com/media/uploads/p/s/10000067_23-fresho-capsicum-green.jpg",
        name: "capsicum - Green (Loose)",
        pricePerKg:90,
        DiscountPrice: 81,
        deleveryDate: "Standard_Delivery : 10 july",

     }
     ,
     {
        img: "https://www.bigbasket.com/media/uploads/p/s/10000071_14-fresho-carrot-orange.jpg",
        name: "Carrot - Orange (Loose)",
        pricePerKg:130,
        DiscountPrice: 108,
        deleveryDate: "Standard_Delivery : 10 july",

     }
     ,
     {
        img: "https://www.bigbasket.com/media/uploads/p/s/10000067_23-fresho-capsicum-green.jpg",
        name: "capsicum - Green (Loose)",
        pricePerKg:90,
        DiscountPrice: 81,
        deleveryDate: "Standard_Delivery : 10 july",

     }
     ,
     {
        img: "https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg",
        name: "Cauliflower (Loose)",
        pricePerKg:90,
        DiscountPrice: 81,
        deleveryDate: "Standard_Delivery : 10 july",

     }
     ,
     {
        img: "https://www.bigbasket.com/media/uploads/p/s/10000148_30-fresho-onion.jpg",
        name:" Onion (Loose)",
        pricePerKg:45,
        DiscountPrice: 33,
        deleveryDate: "Standard_Delivery : 10 july",

     }
]

var vegetableContainer = document.querySelector("#vegetables");

displayFunc(vegetables);

function displayFunc(array){
   array.innerhtml = "";

array.forEach(function(item){
   
    var card = document.createElement("div");
    card.setAttribute("id","card");
    var image = document.createElement("img");
    var name = document.createElement("p");
    var pricePerKg = document.createElement("p");
    var DiscountPrice = document.createElement("p");
    var deleveryDate = document.createElement("p");
    var addToCart = document.createElement("button");

    name.innerText = item.name;
    pricePerKg.innerText = `Price per kg :- `+ item.pricePerKg;
    DiscountPrice.innerText = `Discount price :-`+ item.DiscountPrice;
    deleveryDate.innerText = item.deleveryDate;
    image.src=item.img;
    addToCart.innerText ="Add To Cart";

    addToCart.addEventListener("click",function(){
        addData(item);
    })

    card.append(image,name,pricePerKg,DiscountPrice,deleveryDate,addToCart);
    vegetableContainer.append(card);


})
}

   // BestSeller
var bestSeller = [
   {
      img: "https://www.bigbasket.com/media/uploads/p/s/10000067_23-fresho-capsicum-green.jpg",
      name: "capsicum - Green (Loose)",
      pricePerKg:90,
      DiscountPrice: 81,
      deleveryDate: "Standard_Delivery : 10 july",

   }
   ,
   {
      img: "https://www.bigbasket.com/media/uploads/p/s/10000071_14-fresho-carrot-orange.jpg",
      name: "Carrot - Orange (Loose)",
      pricePerKg:130,
      DiscountPrice: 108,
      deleveryDate: "Standard_Delivery : 10 july",

   }
   ,
   {
      img: "https://www.bigbasket.com/media/uploads/p/s/10000067_23-fresho-capsicum-green.jpg",
      name: "capsicum - Green (Loose)",
      pricePerKg:90,
      DiscountPrice: 81,
      deleveryDate: "Standard_Delivery : 10 july",

   }
   ,
   {
      img: "https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg",
      name: "Cauliflower (Loose)",
      pricePerKg:90,
      DiscountPrice: 81,
      deleveryDate: "Standard_Delivery : 10 july",

   }
   ,
   {
      img: "https://www.bigbasket.com/media/uploads/p/s/10000148_30-fresho-onion.jpg",
      name:" Onion (Loose)",
      pricePerKg:45,
      DiscountPrice: 33,
      deleveryDate: "Standard_Delivery : 10 july",

   }
]

  var best_seller = document.querySelector("#best-sellers");

  displayFunc(bestSeller);
  
  

var arrcart = JSON.parse(localStorage.getItem("cart")) || [];
function addData(item){
 arrcart.push(item);
 localStorage.setItem("cart",JSON.stringify(arrcart));
}








// js for read more button which is in footer section

var read = document.querySelector("#read")
read.addEventListener("click",function(){
   
   var dots = document.querySelector("#dots");
   var moreText = document.querySelector("#more");
   // var btn = document.querySelector("read");

   if(dots.style.display === "none"){
      dots.style.display = "inline";
      read.innerHTML = "Read more";
      moreText.style.display = "none";
   }
   else{
      dots.style.display = "none";
      read.innerHTML = "Read less";
      moreText.style.display = "inline";
   }
})


// functions for buttons

// function myFunction() {
//   var signUp= document.getElementsByClassName(".but2");
// location.href = "Signup.html";
//  }

//  function myFunction() {
//    var basket= document.querySelector("#my_basket1");
//    location.href = "cart.html";
//   }


var login = document.querySelector(".but1");
login.addEventListener("click",function(){
   location.href = "login_with_number.html";
})


var signUp = document.querySelector(".but2");
signUp.addEventListener("click",function(){
   location.href = "Signup.html";
})

var basket = document.querySelector("#my_basket1");
basket.addEventListener("click",function(){
   location.href = "cart.html";
})

var vegs = document.querySelector("#veg");
vegs.addEventListener("click",function(){
   location.href = "vegetables.html";
})
 
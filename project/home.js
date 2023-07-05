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

function displayFunc(vegi){
    vegetableContainer.innerhtml = "";

vegi.forEach(function(item){
   
    var card = document.createElement("div");
    card.setAttribute("id","card");
    var image = document.createElement("img");
    var name = document.createElement("p");
    var pricePerKg = document.createElement("p");
    var DiscountPrice = document.createElement("p");
    var deleveryDate = document.createElement("p");
    var addToCart = document.createElement("button");

    name.innerText = item.name;
    pricePerKg.innerText = item.pricePerKg;
    DiscountPrice.innerText = item.DiscountPrice;
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

var arrcart = JSON.parse(localStorage.getItem("cart")) || [];
function addData(item){
 arrcart.push(item);
 localStorage.setItem("cart",JSON.stringify(arrcart));
}
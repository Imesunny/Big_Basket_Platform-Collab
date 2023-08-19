
document.querySelector("#button4").addEventListener("click",function(){
    var data=[];
    var Name=document.querySelector("#name").value;
data.push(Name);
var contact=document.querySelector("#con").value;
data.push(contact);
var street=document.querySelector("#street").value;
data.push(street);

var city=document.querySelector("#city").value;
data.push(city);
var pin=document.querySelector("#pin").value;
data.push(pin);
localStorage.setItem("address",JSON.stringify(data));
if(Name==""){
  alert("Please fill your name")
}else if(contact==""){
  alert("Please fill your contact number")
}else if(city==""){
  alert("Please fill your city name")
}else if(pin==""){
  alert("Please fill your pin code")
}else{window.location.replace("payment.html")}

})
document.querySelector("#button5").addEventListener("click",function(){
  window.location.reload();
})
document.getElementById("pay").addEventListener("click",function(){
    window.location.href = "payment.html";
})
function ALERT(){
  alert("First you need to fill your address")
}
var VegArr = [
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

// Function to update the table content
function updateTableContent(VegArr) {
    var tbody = document.querySelector("table tbody");
    tbody.innerHTML = "";
  
    var totalItems = 0;
    var totalAmount = 0;
  
    VegArr.forEach(function (item) {
      var row = document.createElement("tr");
  
      var itemName = document.createElement("td");
      itemName.textContent = item.name;
  
      var itemPrice = document.createElement("td");
      itemPrice.textContent = "₹" + item.pricePerKg;
  
      var itemQuantity = document.createElement("td");
  
      var increaseButton = document.createElement("button");
      increaseButton.textContent = "+";
      increaseButton.addEventListener("click", function () {
        var currentQuantity = item.quantity || 0;
        currentQuantity++;
        item.quantity = currentQuantity;
        updateTableContent(VegArr);
      });
  
      var decreaseButton = document.createElement("button");
      decreaseButton.textContent = "-";
      decreaseButton.addEventListener("click", function () {
        var currentQuantity = item.quantity || 0;
        if (currentQuantity > 0) {
          currentQuantity--;
          item.quantity = currentQuantity;
          updateTableContent(VegArr);
        }
      });
  
      itemQuantity.appendChild(decreaseButton);
      itemQuantity.appendChild(document.createTextNode(" " + (item.quantity || 0) + " "));
      itemQuantity.appendChild(increaseButton);
  
      var itemSubtotal = document.createElement("td");
      var subtotal = (item.quantity || 0) * item.pricePerKg;
      itemSubtotal.textContent = "₹" + subtotal;
  
      var itemSavings = document.createElement("td");
      var savings = (item.pricePerKg - item.DiscountPrice) * (item.quantity || 0);
      itemSavings.textContent = "₹" + savings;
  
      row.appendChild(itemName);
      row.appendChild(itemPrice);
      row.appendChild(itemQuantity);
      row.appendChild(itemSubtotal);
      row.appendChild(itemSavings);
  
      tbody.appendChild(row);
  
      totalItems += (item.quantity || 0);
      totalAmount += subtotal;
    });
  
    var summaryRow = document.createElement("tr");
    summaryRow.innerHTML = `
      <td colspan="2">Fruits & Vegetables ${VegArr.length} items</td>
      <td>Total: ${totalItems}</td>
      <td>Total Amount: ₹${totalAmount}</td>
      <td></td>
    `;
  
    tbody.appendChild(summaryRow);
  }
  
  updateTableContent(VegArr);
  
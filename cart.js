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

function updateTableContent(VegArr) {
    var tbody = document.querySelector("table tbody");
    tbody.innerHTML = "";
  
    var totalItems = 0;
    var totalAmount = 0;
    var totalSavings = 0;
  
    VegArr.forEach(function (item,index) {

        var subtotal = (item.quantity || 0) * item.pricePerKg;
        totalItems += (item.quantity || 0);
        totalAmount += subtotal;
        savings += (item.pricePerKg - item.DiscountPrice) * (item.quantity || 0);

  var subtotalTag = document.querySelector("#upperAdjustment b:nth-child(1)");
  subtotalTag.textContent = "Subtotal: ₹" + totalAmount;

  var totalTag = document.querySelector("#upperAdjustment b:nth-child(2)");
  totalTag.textContent = totalAmount;

  var totalAmountTag = document.querySelector("#LowerAdjustment b:nth-child(1)");
  totalAmountTag.textContent = "TOTAL: ₹" + totalAmount;

  var addTotalTag = document.querySelector("#LowerAdjustment b:nth-child(2)");
  addTotalTag.textContent = totalAmount;

  var savingsTag = document.querySelector("#checkout_right p");
  savingsTag.textContent = "₹" + totalSavings;


      var subtotal = (item.quantity || 0) * item.pricePerKg;
      totalItems += item.quantity || 0;
      totalAmount += subtotal;
      totalSavings += (item.pricePerKg - item.DiscountPrice) * (item.quantity || 0);
  
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

      var deleteButton = document.createElement("button");
deleteButton.classList.add("delete-button");
deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';

var deleteButtonWrapper = document.createElement("td");
deleteButtonWrapper.style.display = "flex";
deleteButtonWrapper.style.justifyContent = "center";
deleteButtonWrapper.appendChild(deleteButton);

        
        deleteButton.addEventListener("click", function () {
            VegArr.splice(index, 1); 
            updateTableContent(VegArr);
        
        var tbody = document.querySelector("table tbody");
        tbody.removeChild(row);
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
      row.appendChild(deleteButtonWrapper);
  
      tbody.appendChild(row);
    });
  
    var summaryRow = document.createElement("tr");
    summaryRow.innerHTML = `
      <td colspan="2">Fruits & Vegetables ${VegArr.length} items</td>
      <td>Total: ${totalItems}</td>
      <td>Total Amount: ₹${totalAmount}</td>
      <td>Total Savings: ₹${totalSavings}</td>
    `;
  
    tbody.appendChild(summaryRow);

    var table = document.querySelector("table");
    table.style.textAlign = "center";
    table.style.fontSize = "16px";
  
    // Apply CSS styles to the table cells (<td>)
    var tableCells = document.querySelectorAll("table td");
    tableCells.forEach(function (cell) {
      cell.classList.add("table-cell");
    });
  
  }
  updateTableContent(VegArr);
  
// Create the main holder_section div
const holderSectionDiv = document.getElementById("holder_section");

// Dont see this code because it is to display the products instead go to line number 215 and read
var product = [
  {
    img: "https://www.bigbasket.com/media/uploads/p/s/1214886_8-fresho-tender-coconut-water-no-added-sugar-flavours.jpg",
    brand: "Fresho",
    name: "Tender Coconut Water - No Added Sugar, Flavours",
    quantity: 1,
    deleveryDate: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "bakery",
    pricePerKg: 50,
    DiscountPrice: 33,
  },

  {
    img: "https://www.bigbasket.com/media/uploads/p/s/1223991_1-coca-cola-diet-coke-soft-drink.jpg",
    brand: "Coco Cola",
    name: "Diet Coke Soft Drink",
    quantity: 1,
    deleveryDate: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "baverage",
    pricePerKg: 70,
    DiscountPrice: 60,
  },
  {
    img: "https://www.bigbasket.com/media/uploads/p/s/266564_11-taj-mahal-tea.jpg",
    brand: "Taj Mahal",
    name: "Tea",
    quantity: 1,
    deleveryDate: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "baverage",
    DiscountPrice: 100,
    pricePerKg: 382,
  },

  {
    img: "https://www.bigbasket.com/media/uploads/p/s/266564_11-taj-mahal-tea.jpg",
    brand: "Taj Mahal",
    name: "Tea",
    quantity: 1,
    deleveryDate: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "baverage",
    pricePerKg: 382,
    DiscountPrice: 382,
  },
];

var products = JSON.parse(localStorage.getItem("products")) || product;

var category = "Baverage";

document.getElementById(
  "categoryText"
).innerText = `${category} (${products.length})`;

updateDisplay(products);

function updateDisplay(arr) {
  holderSectionDiv.innerHTML = "";
  arr.forEach(function (element, index, arr) {
    // Create the actual-child div
    const actualChildDiv = document.createElement("div");
    actualChildDiv.setAttribute("class", "actual-child");

    // Create the child div
    const childDiv = document.createElement("div");
    childDiv.setAttribute("class", "child");

    // Create the first div containing the text "GET XX% OFF"
    const discountDiv = document.createElement("div");

    var dis = element.pricePerKg - element.DiscountPrice;
    dis = (dis * 100) / element.pricePerKg;
    discountDiv.textContent = `GET ${Math.floor(dis)}% OFF`;

    // Create the span element inside the discountDiv
    const discountSpan = document.createElement("span");
    discountSpan.textContent = " *";
    discountDiv.appendChild(discountSpan);

    childDiv.appendChild(discountDiv);

    // Create the img element
    const img = document.createElement("img");
    img.setAttribute("src", element.img);
    img.setAttribute("alt", element.name);
    childDiv.appendChild(img);

    // Create the first p element
    const title = document.createElement("p");
    title.textContent = element.brand;
    childDiv.appendChild(title);

    // Create the second p element
    const realTitle = document.createElement("p");
    realTitle.textContent = element.name;
    childDiv.appendChild(realTitle);

    const select = document.createElement("select");
    select.setAttribute("id", "options");

    const option = document.createElement("option");
    option.setAttribute(
      "value",
      `${element.DiscountPrice}|${element.pricePerKg}`
    );
    option.textContent = `1kg - ${element.DiscountPrice}`;
    select.appendChild(option);

    childDiv.appendChild(select);

    // Create the lower-holder div
    const lowerHolderDiv = document.createElement("div");
    lowerHolderDiv.setAttribute("class", "lower-holder");

    // Create the prices p element
    const pricesP = document.createElement("p");
    pricesP.setAttribute("id", "prices");
    pricesP.innerHTML = `MRP: <span>Rs ${element.pricePerKg}</span> Rs ${element.DiscountPrice}`;

    lowerHolderDiv.appendChild(pricesP);

    // Create the delivery div
    const deliveryDiv = document.createElement("div");
    deliveryDiv.setAttribute("id", "delivery");

    // Create the truck icon
    const truckIcon = document.createElement("i");
    truckIcon.setAttribute("class", "fa-solid fa-truck fa-lg");
    deliveryDiv.appendChild(truckIcon);

    // Create the deliveryTime span
    const deliveryTimeSpan = document.createElement("span");
    deliveryTimeSpan.setAttribute("id", "deliveryTime");
    deliveryTimeSpan.textContent = "Standard Delivery: Today 8:00AM - 10:00AM";
    deliveryDiv.appendChild(deliveryTimeSpan);

    lowerHolderDiv.appendChild(deliveryDiv);

    // Create the addtocartbutton div
    const addToCartButtonDiv = document.createElement("div");
    addToCartButtonDiv.setAttribute("id", "addtocartbutton");

    // Create the quantity input section
    const quantitySection = document.createElement("div");
    const quantityLabel = document.createElement("span");
    quantityLabel.textContent = "Qty";
    const quantityInput = document.createElement("input");
    quantityInput.setAttribute("class", "quantity");
    quantityInput.setAttribute("type", "number");
    quantityInput.setAttribute("autocomplete", "off");
    quantityInput.setAttribute("value", "1");
    quantityInput.setAttribute("min", "1");
    quantitySection.appendChild(quantityLabel);
    quantitySection.appendChild(quantityInput);
    addToCartButtonDiv.appendChild(quantitySection);

    // Create the add button
    const addButton = document.createElement("button");
    addButton.textContent = "ADD ";

    addButton.addEventListener("click", function () {
      var cartItems = JSON.parse(localStorage.getItem("cart_items")) || [];
      cartItems.push(element);
      localStorage.setItem("cart_items", JSON.stringify(cartItems));

      var notificatoinMessage = document.getElementById("message");
      notificatoinMessage.textContent = `Successfully added ${element.title} to the basket`;
      document.getElementById("modal_success").style.display = "flex";
    });

    // Create the trash can icon
    const trashCanIcon = document.createElement("i");
    trashCanIcon.setAttribute("class", "fa-solid fa-trash-can fa-lg");
    addButton.appendChild(trashCanIcon);

    addToCartButtonDiv.appendChild(addButton);
    lowerHolderDiv.appendChild(addToCartButtonDiv);
    childDiv.appendChild(lowerHolderDiv);
    actualChildDiv.appendChild(childDiv);
    holderSectionDiv.appendChild(actualChildDiv);
  });
}

document.getElementById("21to50").addEventListener("change", function () {
  if (this.checked) {
    console.log("Checked");
    updateDisplay(
      products.filter(function (element) {
        return element.DiscountPrice >= 21 && element.DiscountPrice <= 50;
      })
    );
  } else {
    updateDisplay(products);
  }
});

document.getElementById("51to100").addEventListener("change", function () {
  if (this.checked) {
    console.log("Checked");
    updateDisplay(
      products.filter(function (element) {
        return element.DiscountPrice >= 51 && element.DiscountPrice <= 100;
      })
    );
  } else {
    updateDisplay(products);
  }
});

document.getElementById("101to200").addEventListener("change", function () {
  if (this.checked) {
    console.log("Checked");
    updateDisplay(
      products.filter(function (element) {
        return element.DiscountPrice >= 101 && element.DiscountPrice <= 200;
      })
    );
  } else {
    updateDisplay(products);
  }
});

document.getElementById("201to500").addEventListener("change", function () {
  if (this.checked) {
    console.log("Checked");
    updateDisplay(
      products.filter(function (element) {
        return element.DiscountPrice >= 201 && element.DiscountPrice <= 500;
      })
    );
  } else {
    updateDisplay(products);
  }
});

document.getElementById("morethan501").addEventListener("change", function () {
  if (this.checked) {
    console.log("Checked");
    updateDisplay(
      products.filter(function (element) {
        return element.DiscountPrice > 501;
      })
    );
  } else {
    updateDisplay(products);
  }
});

document.getElementById("upto5").addEventListener("change", function () {
  if (this.checked) {
    console.log("Checked");
    updateDisplay(
      products.filter(function (element) {
        return (
          ((element.pricePerKg - element.DiscountPrice) * 100) /
            element.pricePerKg <
          5
        );
      })
    );
  } else {
    updateDisplay(products);
  }
});

document.getElementById("5to10").addEventListener("change", function () {
  if (this.checked) {
    console.log("Checked");
    updateDisplay(
      products.filter(function (element) {
        return (
          ((element.pricePerKg - element.DiscountPrice) * 100) /
            element.pricePerKg >=
            5 &&
          ((element.pricePerKg - element.DiscountPrice) * 100) /
            element.pricePerKg <=
            10
        );
      })
    );
  } else {
    updateDisplay(products);
  }
});

document.getElementById("10to15").addEventListener("change", function () {
  if (this.checked) {
    console.log("Checked");
    updateDisplay(
      products.filter(function (element) {
        return (
          ((element.pricePerKg - element.DiscountPrice) * 100) /
            element.pricePerKg >=
            10 &&
          ((element.pricePerKg - element.DiscountPrice) * 100) /
            element.pricePerKg <=
            15
        );
      })
    );
  } else {
    updateDisplay(products);
  }
});

document.getElementById("15to25").addEventListener("change", function () {
  if (this.checked) {
    console.log("Checked");
    updateDisplay(
      products.filter(function (element) {
        return (
          ((element.pricePerKg - element.DiscountPrice) * 100) /
            element.pricePerKg >=
            15 &&
          ((element.pricePerKg - element.DiscountPrice) * 100) /
            element.pricePerKg <=
            25
        );
      })
    );
  } else {
    updateDisplay(products);
  }
});

document.getElementById("morethan25").addEventListener("change", function () {
  if (this.checked) {
    console.log("Checked");
    updateDisplay(
      products.filter(function (element) {
        return (
          ((element.pricePerKg - element.DiscountPrice) * 100) /
            element.pricePerKg >
          25
        );
      })
    );
  } else {
    updateDisplay(products);
  }
});

document
  .getElementById("modal_success")
  .addEventListener("click", function (event) {
    var modal = document.getElementById("modal_success");
    if (event.target == modal) {
      event.target.style.display = "none";
    }
  });

document
  .querySelector(".modal_success>i:nth-child(3)")
  .addEventListener("click", function (event) {
    var modal = document.getElementById("modal_success");
    modal.style.display = "none";
  });

// Create the main holder_section div
const holderSectionDiv = document.getElementById("holder_section");

var product = [
  {
    img: "https://www.bigbasket.com/media/uploads/p/s/10000148_30-fresho-onion.jpg",
    title: "Onion (Loose)",
    quantity: 1,
    brand: "Fresho",
    delivery: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "vegetables",
    minPrice: 34234,
    options: [
      {
        text: "1kg - 34234 Rs",
        discounrPrice: 34234,
        originalPrice: 3423434234,
      },
      {
        text: "2kg - 95 Rs",
        discounrPrice: 3423434234,
        originalPrice: 342343423434234,
      },
    ],
  },
  {
    img: "https://www.bigbasket.com/media/uploads/p/s/10000159_27-fresho-potato.jpg",
    title: "Potato",
    quantity: 1,
    brand: "Fresho",
    delivery: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "vegetables",
    minPrice: 33,
    options: [
      {
        text: "1kg - 33 Rs",
        discounrPrice: 33,
        originalPrice: 45,
      },
      {
        text: "2kg - 95 Rs",
        discounrPrice: 95,
        originalPrice: 1005,
      },
    ],
  },
  {
    img: "https://www.bigbasket.com/media/uploads/p/s/10000204_16-fresho-tomato-local.jpg",
    title: "Tomato - Local (Loose)",
    quantity: 1,
    brand: "Fresho",
    delivery: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "vegetables",
    minPrice: 33,
    options: [
      {
        text: "1kg - 33 Rs",
        discounrPrice: 33,
        originalPrice: 45,
      },
      {
        text: "2kg - 95 Rs",
        discounrPrice: 95,
        originalPrice: 1005,
      },
    ],
  },
  {
    img: "https://www.bigbasket.com/media/uploads/p/s/10000070_15-fresho-carrot-orange.jpg",
    title: "Carrot - Orange (Loose)",
    quantity: 1,
    brand: "Fresho",
    delivery: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "vegetables",
    minPrice: 33,
    options: [
      {
        text: "1kg - 33 Rs",
        discounrPrice: 33,
        originalPrice: 45,
      },
      {
        text: "2kg - 95 Rs",
        discounrPrice: 95,
        originalPrice: 1005,
      },
    ],
  },

  {
    img: "https://www.bigbasket.com/media/uploads/p/s/10000148_30-fresho-onion.jpg",
    title: "Onion (Loose)",

    quantity: 1,
    brand: "Fresho",
    delivery: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "vegetables",
    minPrice: 33,
    options: [
      {
        text: "1kg - 33 Rs",
        discounrPrice: 33,
        originalPrice: 45,
      },
      {
        text: "2kg - 95 Rs",
        discounrPrice: 95,
        originalPrice: 1005,
      },
    ],
  },
  {
    img: "https://www.bigbasket.com/media/uploads/p/s/10000159_27-fresho-potato.jpg",
    title: "Potato",
    quantity: 1,
    brand: "Fresho",
    delivery: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "vegetables",
    minPrice: 33,
    options: [
      {
        text: "1kg - 33 Rs",
        discounrPrice: 33,
        originalPrice: 45,
      },
      {
        text: "2kg - 95 Rs",
        discounrPrice: 95,
        originalPrice: 1005,
      },
    ],
  },
  {
    img: "https://www.bigbasket.com/media/uploads/p/s/10000204_16-fresho-tomato-local.jpg",
    title: "Tomato - Local (Loose)",
    quantity: 1,
    brand: "Fresho",
    delivery: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "vegetables",
    minPrice: 33,
    options: [
      {
        text: "1kg - 33 Rs",
        discounrPrice: 33,
        originalPrice: 45,
      },
      {
        text: "2kg - 95 Rs",
        discounrPrice: 95,
        originalPrice: 1005,
      },
    ],
  },
  {
    img: "https://www.bigbasket.com/media/uploads/p/s/10000070_15-fresho-carrot-orange.jpg",
    title: "Carrot - Orange (Loose)",
    quantity: 1,
    brand: "Fresho",
    delivery: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "vegetables",
    minPrice: 33,
    options: [
      {
        text: "1kg - 33 Rs",
        discounrPrice: 33,
        originalPrice: 45,
      },
      {
        text: "2kg - 95 Rs",
        discounrPrice: 95,
        originalPrice: 1005,
      },
    ],
  },

  {
    img: "https://www.bigbasket.com/media/uploads/p/s/10000148_30-fresho-onion.jpg",
    title: "Onion (Loose)",

    quantity: 1,
    brand: "Fresho",
    delivery: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "vegetables",
    minPrice: 33,
    options: [
      {
        text: "1kg - 33 Rs",
        discounrPrice: 33,
        originalPrice: 45,
      },
      {
        text: "2kg - 95 Rs",
        discounrPrice: 95,
        originalPrice: 1005,
      },
    ],
  },
  {
    img: "https://www.bigbasket.com/media/uploads/p/s/10000159_27-fresho-potato.jpg",
    title: "Potato",
    quantity: 1,
    brand: "Fresho",
    delivery: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "vegetables",
    minPrice: 33,
    options: [
      {
        text: "1kg - 33 Rs",
        discounrPrice: 33,
        originalPrice: 45,
      },
      {
        text: "2kg - 95 Rs",
        discounrPrice: 95,
        originalPrice: 1005,
      },
    ],
  },
  {
    img: "https://www.bigbasket.com/media/uploads/p/s/10000204_16-fresho-tomato-local.jpg",
    title: "Tomato - Local (Loose)",
    quantity: 1,
    brand: "Fresho",
    delivery: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "vegetables",
    minPrice: 33,
    options: [
      {
        text: "1kg - 33 Rs",
        discounrPrice: 33,
        originalPrice: 45,
      },
      {
        text: "2kg - 95 Rs",
        discounrPrice: 95,
        originalPrice: 1005,
      },
    ],
  },
  {
    img: "https://www.bigbasket.com/media/uploads/p/s/10000070_15-fresho-carrot-orange.jpg",
    title: "Carrot - Orange (Loose)",
    quantity: 1,
    brand: "Fresho",
    delivery: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "vegetables",
    minPrice: 33,
    options: [
      {
        text: "1kg - 33 Rs",
        discounrPrice: 33,
        originalPrice: 45,
      },
      {
        text: "2kg - 95 Rs",
        discounrPrice: 95,
        originalPrice: 1005,
      },
    ],
  },

  {
    img: "https://www.bigbasket.com/media/uploads/p/s/10000148_30-fresho-onion.jpg",
    title: "Onion (Loose)",

    quantity: 1,
    brand: "Fresho",
    delivery: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "vegetables",
    minPrice: 33,
    options: [
      {
        text: "1kg - 33 Rs",
        discounrPrice: 33,
        originalPrice: 45,
      },
      {
        text: "2kg - 95 Rs",
        discounrPrice: 95,
        originalPrice: 1005,
      },
    ],
  },
  {
    img: "https://www.bigbasket.com/media/uploads/p/s/10000159_27-fresho-potato.jpg",
    title: "Potato",
    quantity: 1,
    brand: "Fresho",
    delivery: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "vegetables",
    minPrice: 33,
    options: [
      {
        text: "1kg - 33 Rs",
        discounrPrice: 33,
        originalPrice: 45,
      },
      {
        text: "2kg - 95 Rs",
        discounrPrice: 95,
        originalPrice: 1005,
      },
    ],
  },
  {
    img: "https://www.bigbasket.com/media/uploads/p/s/10000204_16-fresho-tomato-local.jpg",
    title: "Tomato - Local (Loose)",
    quantity: 1,
    brand: "Fresho",
    delivery: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "vegetables",
    minPrice: 33,
    options: [
      {
        text: "1kg - 33 Rs",
        discounrPrice: 33,
        originalPrice: 45,
      },
      {
        text: "2kg - 95 Rs",
        discounrPrice: 95,
        originalPrice: 1005,
      },
    ],
  },
  {
    img: "https://www.bigbasket.com/media/uploads/p/s/10000070_15-fresho-carrot-orange.jpg",
    title: "Carrot - Orange (Loose)",
    quantity: 1,
    brand: "Fresho",
    delivery: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "vegetables",
    minPrice: 33,
    options: [
      {
        text: "1kg - 33 Rs",
        discounrPrice: 33,
        originalPrice: 45,
      },
      {
        text: "2kg - 95 Rs",
        discounrPrice: 95,
        originalPrice: 1005,
      },
    ],
  },

  {
    img: "https://www.bigbasket.com/media/uploads/p/s/1214886_8-fresho-tender-coconut-water-no-added-sugar-flavours.jpg",
    brand: "Fresho",
    title: "Tender Coconut Water - No Added Sugar, Flavours",
    quantity: 1,
    delivery: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "baverages",
    minPrice: 33,
    options: [
      {
        text: "1kg - 33 Rs",
        discounrPrice: 33,
        originalPrice: 45,
      },
      {
        text: "2kg - 95 Rs",
        discounrPrice: 95,
        originalPrice: 1005,
      },
    ],
  },

  {
    img: "https://www.bigbasket.com/media/uploads/p/s/1223991_1-coca-cola-diet-coke-soft-drink.jpg",
    brand: "Coca Cola",
    title: "Diet Coke Soft Drink",
    quantity: 1,
    delivery: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "baverages",
    minPrice: 33,
    options: [
      {
        text: "1kg - 33 Rs",
        discounrPrice: 33,
        originalPrice: 45,
      },
      {
        text: "2kg - 95 Rs",
        discounrPrice: 95,
        originalPrice: 1005,
      },
    ],
  },

  {
    img: "https://www.bigbasket.com/media/uploads/p/s/264679_5-milky-mist-paneer-premium-fresh.jpg",
    brand: "Milky Mist",
    title: "Paneer - Rich in Protien, Calcium, Excellent Taste",
    quantity: 1,
    delivery: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "bakery",
    minPrice: 33,
    options: [
      {
        text: "1kg - 33 Rs",
        discounrPrice: 33,
        originalPrice: 45,
      },
      {
        text: "2kg - 95 Rs",
        discounrPrice: 95,
        originalPrice: 1005,
      },
    ],
  },

  {
    img: "https://www.bigbasket.com/media/uploads/p/s/271205_14-id-fresho-idly-dosa-batter.jpg",
    brand: "ID Fresho",
    title: "Idly & Dosa Batter",
    quantity: 1,
    delivery: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "snacks",
    minPrice: 33,
    options: [
      {
        text: "1kg - 33 Rs",
        discounrPrice: 33,
        originalPrice: 45,
      },
      {
        text: "2kg - 95 Rs",
        discounrPrice: 95,
        originalPrice: 1005,
      },
    ],
  },

  {
    img: "https://www.bigbasket.com/media/uploads/p/s/1215171_3-bingo-tedhe-medhe-snacks-with-corn-rice-dal-masala-tadka.jpg",
    brand: "Bingo",
    title: "Tedhe Medhe Snacks - With Corn, Rice, Dal, Masala Tadka",
    quantity: 1,
    delivery: "Standard Delivery: Today 8:00AM - 10:00AM",
    category: "snacks",
    minPrice: 33,
    options: [
      {
        text: "6 pkts - 25 Rs",
        discounrPrice: 25,
        originalPrice: 30,
      },
      {
        text: "10 pkts - 40 Rs",
        discounrPrice: 40,
        originalPrice: 50,
      },
    ],
  },
];

var producsts = JSON.parse(localStorage.getItem("products")) || product;
var cartItems = JSON.parse(localStorage.getItem("cart_items")) || [];

console.log(window);

var filteredItems = "";
var url = window.location.href;
var category = "All Items";

if (url.includes("?")) {
  var cat = url.split("?");
  category = cat[cat.length - 1];
  console.log(category);
  filteredItems = producsts.filter(function (element) {
    return element.category === category;
  });
} else {
  filteredItems = [...producsts];
}

document.getElementById(
  "categoryText"
).innerText = `${category} (${filteredItems.length})`;

updateDisplay(filteredItems);

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

    var dis =
      element.options[0].originalPrice - element.options[0].discounrPrice;
    dis = (dis * 100) / element.options[0].originalPrice;
    discountDiv.textContent = `GET ${Math.floor(dis)}% OFF`;

    // Create the span element inside the discountDiv
    const discountSpan = document.createElement("span");
    discountSpan.textContent = " *";
    discountDiv.appendChild(discountSpan);

    childDiv.appendChild(discountDiv);

    // Create the img element
    const img = document.createElement("img");
    img.setAttribute("src", element.img);
    img.setAttribute("alt", element.title);
    childDiv.appendChild(img);

    // Create the first p element
    const title = document.createElement("p");
    title.textContent = element.brand;
    childDiv.appendChild(title);

    // Create the second p element
    const realTitle = document.createElement("p");
    realTitle.textContent = element.title;
    childDiv.appendChild(realTitle);

    const select = document.createElement("select");
    select.setAttribute("id", "options");

    element.options.forEach(function (object) {
      const option = document.createElement("option");
      option.setAttribute("value", object.discounrPrice);
      option.textContent = object.text;
      select.appendChild(option);
    });

    childDiv.appendChild(select);

    // Create the lower-holder div
    const lowerHolderDiv = document.createElement("div");
    lowerHolderDiv.setAttribute("class", "lower-holder");

    // Create the prices p element
    const pricesP = document.createElement("p");
    pricesP.setAttribute("id", "prices");
    pricesP.innerHTML = `MRP: <span>Rs ${element.options[0].originalPrice}</span> Rs ${element.options[0].discounrPrice}`;

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
      var object = {
        title: arr[index].title,
        quantity: quantityInput.value,
        price: select.value,
      };

      cartItems.push(object);
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
      filteredItems.filter(function (element) {
        return element.minPrice >= 21 && element.minPrice <= 50;
      })
    );
  } else {
    updateDisplay(filteredItems);
  }
});

document.getElementById("51to100").addEventListener("change", function () {
  if (this.checked) {
    console.log("Checked");
    updateDisplay(
      filteredItems.filter(function (element) {
        return element.minPrice >= 51 && element.minPrice <= 100;
      })
    );
  } else {
    updateDisplay(filteredItems);
  }
});

document.getElementById("101to200").addEventListener("change", function () {
  if (this.checked) {
    console.log("Checked");
    updateDisplay(
      filteredItems.filter(function (element) {
        return element.minPrice >= 101 && element.minPrice <= 200;
      })
    );
  } else {
    updateDisplay(filteredItems);
  }
});

document.getElementById("201to500").addEventListener("change", function () {
  if (this.checked) {
    console.log("Checked");
    updateDisplay(
      filteredItems.filter(function (element) {
        return element.minPrice >= 201 && element.minPrice <= 500;
      })
    );
  } else {
    updateDisplay(filteredItems);
  }
});

document.getElementById("morethan501").addEventListener("change", function () {
  if (this.checked) {
    console.log("Checked");
    updateDisplay(
      filteredItems.filter(function (element) {
        return element.minPrice > 501;
      })
    );
  } else {
    updateDisplay(filteredItems);
  }
});

document.getElementById("upto5").addEventListener("change", function () {
  if (this.checked) {
    console.log("Checked");
    updateDisplay(
      filteredItems.filter(function (element) {
        return (
          ((element.options[0].originalPrice -
            element.options[0].discounrPrice) *
            100) /
            element.options[0].originalPrice <
          5
        );
      })
    );
  } else {
    updateDisplay(filteredItems);
  }
});

document.getElementById("5to10").addEventListener("change", function () {
  if (this.checked) {
    console.log("Checked");
    updateDisplay(
      filteredItems.filter(function (element) {
        return (
          ((element.options[0].originalPrice -
            element.options[0].discounrPrice) *
            100) /
            element.options[0].originalPrice >=
            5 &&
          ((element.options[0].originalPrice -
            element.options[0].discounrPrice) *
            100) /
            element.options[0].originalPrice <=
            10
        );
      })
    );
  } else {
    updateDisplay(filteredItems);
  }
});

document.getElementById("10to15").addEventListener("change", function () {
  if (this.checked) {
    console.log("Checked");
    updateDisplay(
      filteredItems.filter(function (element) {
        return (
          ((element.options[0].originalPrice -
            element.options[0].discounrPrice) *
            100) /
            element.options[0].originalPrice >=
            10 &&
          ((element.options[0].originalPrice -
            element.options[0].discounrPrice) *
            100) /
            element.options[0].originalPrice <=
            15
        );
      })
    );
  } else {
    updateDisplay(filteredItems);
  }
});

document.getElementById("15to25").addEventListener("change", function () {
  if (this.checked) {
    console.log("Checked");
    updateDisplay(
      filteredItems.filter(function (element) {
        return (
          ((element.options[0].originalPrice -
            element.options[0].discounrPrice) *
            100) /
            element.options[0].originalPrice >=
            15 &&
          ((element.options[0].originalPrice -
            element.options[0].discounrPrice) *
            100) /
            element.options[0].originalPrice <=
            25
        );
      })
    );
  } else {
    updateDisplay(filteredItems);
  }
});

document.getElementById("morethan25").addEventListener("change", function () {
  if (this.checked) {
    console.log("Checked");
    updateDisplay(
      filteredItems.filter(function (element) {
        return (
          ((element.options[0].originalPrice -
            element.options[0].discounrPrice) *
            100) /
            element.options[0].originalPrice >
          25
        );
      })
    );
  } else {
    updateDisplay(filteredItems);
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

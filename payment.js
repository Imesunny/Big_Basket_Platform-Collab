var total = JSON.parse(localStorage.getItem("total"));

   document.getElementById("basketValue").innerText = total;
   document.getElementById("totalpayable").innerText = total;


    var Netbanking = () => {
        document.getElementById("mainDiv").innerHTML = null;
        var h3 = document.createElement("h3");
        h3.innerText = "Frequently Used Banks";

        var opt1 = document.createElement("input");
        opt1.setAttribute("id","netselect")
        opt1.type = "radio"
        opt1.name = "ak"
        opt1.style = "cursor:pointer"

        var label1 = document.createElement("label");
        label1.setAttribute("for","netselect");
        label1.innerText = "ICICI NetBanking";

        var br = document.createElement("br");
        var br1 = document.createElement("br");

        var opt2 = document.createElement("input");
        opt2.setAttribute("id","netselect2")
        opt2.type = "radio"
        opt2.name = "ak"
        opt2.style = "cursor:pointer"


        var label2 = document.createElement("label");
        label2.setAttribute("for","netselect2");
        label2.innerText = "State Bank of India";

        var br3 = document.createElement("br");
        var br4 = document.createElement("br");

        var opt3 = document.createElement("input");
        opt3.setAttribute("id","netselect3")
        opt3.type = "radio"
        opt3.name = "ak"
        opt3.style = "cursor:pointer";

        var label3 = document.createElement("label");
        label3.setAttribute("for","netselect3");
        label3.innerText = "HDFC Bank";

        var btn = document.createElement("button");
        btn.setAttribute("id","netbtn");
        btn.innerText = "Save and Confirm";
        btn.addEventListener("click", ()=>{
            paymentSuccess()
        })

        var br5 = document.createElement("br");

        document.getElementById("mainDiv").append(h3,opt1,label1,br,br1,opt2,label2,br3,br4,opt3,label3,br5,btn)
    }

    let upi = () => {
        document.getElementById("mainDiv").innerHTML = null;

        var p = document.createElement("p");
        p.innerText = "UPI ID";

        var input = document.createElement("input");
        input.setAttribute("id","inpupi")
        input.placeholder = "user@bankname";

        var p2 = document.createElement("p");
        p2.innerText = "A payment request will be sent to this UPI ID";

        var btn = document.createElement("button");
        btn.setAttribute("id","upibtn")
        btn.innerText = "Verify and Confirm Payment"
        btn.addEventListener("click", ()=>{
            paymentSuccess()
        })

        document.getElementById("mainDiv").append(p,input,p2,btn);
    }

    var wallet = () => {
        document.getElementById("mainDiv").innerHTML = null;
        var h3 = document.createElement("h3");
        h3.innerText = "All Wallets";

        var opt1 = document.createElement("input");
        opt1.setAttribute("id","netselect")
        opt1.type = "radio"
        opt1.name = "ak"
        opt1.style = "cursor:pointer"

        var label1 = document.createElement("label");
        label1.setAttribute("for","netselect");
        label1.innerText = "Paytm";

        var br = document.createElement("br");
        var br1 = document.createElement("br");

        var opt2 = document.createElement("input");
        opt2.setAttribute("id","netselect2")
        opt2.type = "radio"
        opt2.name = "ak"
        opt2.style = "cursor:pointer"


        var label2 = document.createElement("label");
        label2.setAttribute("for","netselect2");
        label2.innerText = "Airtel Money";

        var br3 = document.createElement("br");
        var br4 = document.createElement("br");

        var opt3 = document.createElement("input");
        opt3.setAttribute("id","netselect3")
        opt3.type = "radio"
        opt3.name = "ak"
        opt3.style = "cursor:pointer";

        var label3 = document.createElement("label");
        label3.setAttribute("for","netselect3");
        label3.innerText = "Mobikwik";

        var br8 = document.createElement("br");
        var br9 = document.createElement("br");

        var opt4 = document.createElement("input");
        opt4.setAttribute("id","netselect4")
        opt4.type = "radio"
        opt4.name = "ak"
        opt4.style = "cursor:pointer";

        var label4 = document.createElement("label");
        label4.setAttribute("for","netselect4");
        label4.innerText = "Freecharge";

        var btn = document.createElement("button");
        btn.setAttribute("id","netbtn");
        btn.innerText = "Save and Confirm";
        btn.addEventListener("click", ()=>{
            paymentSuccess()
        })

        var br5 = document.createElement("br");

        document.getElementById("mainDiv").append(h3,opt1,label1,br,br1,opt2,label2,br3,br4,opt3,label3,br8,br9,opt4,label4,br5,btn)
    }

    var paylater = () => {
        document.getElementById("mainDiv").innerHTML = null;
        var h3 = document.createElement("h3");
        h3.innerText = "All Wallets";

        var opt1 = document.createElement("input");
        opt1.setAttribute("id","netselect")
        opt1.type = "radio"
        opt1.name = "ak"
        opt1.style = "cursor:pointer"

        var label1 = document.createElement("label");
        label1.setAttribute("for","netselect");
        label1.innerText = "Simple";

        var br = document.createElement("br");
        var br1 = document.createElement("br");

        var btn = document.createElement("button");
        btn.setAttribute("id","netbtn");
        btn.innerText = "Save and Confirm";
        btn.addEventListener("click", ()=>{
            paymentSuccess()
        })

        var br5 = document.createElement("br");

        document.getElementById("mainDiv").append(h3,opt1,label1,br5,btn)
    }

    var cashcarddel = () => {
        document.getElementById("mainDiv").innerHTML = null;
        var h3 = document.createElement("h3");
        h3.innerText = "Cash/Card on Delivery";

        var opt1 = document.createElement("input");
        opt1.setAttribute("id","netselect")
        opt1.type = "radio"
        opt1.name = "ak"
        opt1.style = "cursor:pointer"

        var label1 = document.createElement("label");
        label1.setAttribute("for","netselect");
        label1.innerText = "Cash on Delivery";

        var br = document.createElement("br");
        var br1 = document.createElement("br");

        var opt2 = document.createElement("input");
        opt2.setAttribute("id","netselect2")
        opt2.type = "radio"
        opt2.name = "ak"
        opt2.style = "cursor:pointer"

        var label2 = document.createElement("label");
        label2.setAttribute("for","netselect2");
        label2.innerText = "Card on Delivery";

        var br3 = document.createElement("br");
        var br4 = document.createElement("br");

        var btn = document.createElement("button");
        btn.setAttribute("id","netbtn");
        btn.innerText = "Place Order";
        btn.addEventListener("click", ()=>{
            paymentSuccess()
        })

        var br5 = document.createElement("br");

        document.getElementById("mainDiv").append(h3,opt1,label1,br3,br4,opt2,label2,br5,btn)
        
    }

    var paymentSuccess = () =>{
        window.location.href = "paymentsuccess.html";
    }

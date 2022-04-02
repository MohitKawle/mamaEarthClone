
 // navbar script start*************
 import {navbar,footer, cartpopup, loginpop, mainlogin} from './html/components/navbar.js';
     
 let bar = document.querySelector("#navbar");

 let foot = document.querySelector("#footer");
   let cart = document.querySelector(".bg-modal");

    let login1 = document.querySelector("#loginpop");

    let logindummy = document.querySelector(".mainlogin");


  bar.innerHTML = navbar();
  foot.innerHTML = footer();
   cart.innerHTML = cartpopup()
    login1.innerHTML = loginpop()
    logindummy.innerHTML = mainlogin()


    document.getElementById('login').addEventListener("mouseup", function () {
    document.querySelector('.modal').style.display = "flex";

});


document.querySelector('.modal').addEventListener("dblclick", function () {
    document.querySelector('.modal').style.display = "none";
});
// dblclick

//  end code *************


document.getElementById('cart').addEventListener("click", function () {
document.querySelector('.bg-modal').style.display = "flex";
//   document.querySelector("#but2").innerHTML = null
});

document.querySelector('.close').addEventListener("click", function () {
document.querySelector('.bg-modal').style.display = "none";

});
// ************ start code for alert meassage***************

   document.getElementById('loginone').addEventListener("click", function () {
                    // document.querySelector('.mainlogin').style.display = "flex";
                    window.location.href="signin.html"
                });

                document.querySelector('.closemain').addEventListener("click", function () {
                    document.querySelector('.mainlogin').style.display = "none";
                });

    // *********append the pages ethe pages
            const addeven = (idname, place) => {
            idname.addEventListener("click", () => {
                window.location.href = `${place}`
            })

}
            addeven(document.querySelector("#home"), "index.html")
            addeven(document.querySelector("#allproduct"), "all_products.html")
            addeven(document.querySelector("#baby"), "baby.html")
            addeven(document.querySelector("#face"), "face.html")
            addeven(document.querySelector("#beauty"), "face.html")
            addeven(document.querySelector("#body"), "/bodydata.html")
            addeven(document.querySelector(".logo"), "index.html")
            document.querySelector(".logo").style.cursor="pointer"

            // navbar script end*************

            let cart_data = JSON.parse(localStorage.getItem("cart"));
            var count = document.querySelector("#circle")
            count.innerHTML = cart_data.length;
            count.style.background ="#00afef"

            // ***************************************************
            let items = document.getElementById("abocenter");
let Sub_total =  document.getElementById("total_price");
let copy_of_total_price=null;

const displayCart=(data)=>{
    let total=0
    Sub_total.innerText=null;
    items.innerHTML=null;
data.forEach((elem,index) => {
    let frame = document.createElement("div");
    frame.setAttribute("id","frame")

    let firstDiv = document.createElement("div");

    let secondDiv = document.createElement("div");
    secondDiv.setAttribute("id","secondDiv")

    let pAndQty = document.createElement("div");
   
    let Title = document.createElement("p")
    Title.innerText = elem.title

    let image = document.createElement("img")
    image.src = elem.imageurl
    firstDiv.append(image)

    let price_div = document.createElement("div")
    let Price = document.createElement("p")
    Price.innerText="₹"+elem.price
    price_div.append(Price)

    if(elem.qtyNo==undefined){
        elem.qtyNo=1;
    }
    Sub_total.innerText = `₹${(total+=(elem.price*elem.qtyNo))}`
    copy_of_total_price=total;

    let quantity_div = document.createElement("div");
    quantity_div.setAttribute("id","quantity_div")
    let decbtn = document.createElement("button");
    decbtn.innerHTML = "-"
    decbtn.addEventListener("click",()=>{
        Decbtn(elem,index);
    })
    let incbtn = document.createElement("button");
    incbtn.innerHTML = "+"
    incbtn.addEventListener("click",()=>{
        Incbtn(elem,index)
    })
    let Qty = document.createElement("p");
    Qty.innerText=elem.qtyNo;

    quantity_div.append(decbtn,Qty,incbtn);

    pAndQty.append(price_div,quantity_div)

    secondDiv.append(Title,pAndQty)

    frame.append(firstDiv,secondDiv)
    items.append(frame)
});
};

// decreasing the quantity---------------
const Decbtn=(elem,index)=>{
    elem.qtyNo--;
    if(elem.qtyNo===0){
        cart_data.splice(index,1)
        localStorage.setItem("cart",JSON.stringify(cart_data))
        window.location.reload();
      }
  displayCart(cart_data)
}
// increasing the quantity---------------
const Incbtn=(elem,index)=>{
    elem.qtyNo++
    displayCart(cart_data)
    localStorage.setItem("cart",JSON.stringify(cart_data))
};

displayCart(cart_data);

document.getElementById("fixedbottom").addEventListener("click",()=>{
window.location.href="payment.html"
})
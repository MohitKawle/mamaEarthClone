

let cart_data = JSON.parse(localStorage.getItem("cart"));
let items = document.getElementById("items");

let Sub_total =  document.getElementById("total_price");


// displayCart(cart_data)

const displayCart=(data)=>{
    let total=0
    Sub_total.innerText=null;
    items.innerHTML=null;
    document.getElementById("heading").innerText=`Order Summary (${cart_data.length} Items)`;
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
}


function Decbtn(elem,index){
    elem.qtyNo--;
    if(elem.qtyNo===0){
        cart_data.splice(index,1)
      }
  displayCart(cart_data)
  localStorage.setItem("cart",JSON.stringify(cart_data))
}
function Incbtn(elem,index){
    elem.qtyNo++
    displayCart(cart_data)
    localStorage.setItem("cart",JSON.stringify(cart_data))
}

displayCart(cart_data)



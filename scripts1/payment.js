

let cart_data = JSON.parse(localStorage.getItem("cart"));
let items = document.getElementById("items");
let Sub_total =  document.getElementById("total_price");
let copy_of_total_price=null;

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

// payment method validation function***********
let method_value=null;
const upi_method=()=>{
    method_value=1;
};
const card_method=()=>{
    method_value=2;
};
const netbank_method=()=>{
    method_value=3;
};
const wallet_method=()=>{
    method_value=4;
};
const cod_method=()=>{
    method_value=0;
};
// *************************************************

// Address form data taking********************************

let addressForm = document.getElementById("addressForm");
addressForm.addEventListener("submit",(event)=>{
event.preventDefault();
const formData = new FormData(addressForm);
let first_name = formData.get("first_name")
let last_name = formData.get("last_name")
let email = formData.get("email")
let mobile = formData.get("mobile")
let pin = formData.get("pin")
let city = formData.get("city")
let state = formData.get("state")
let Address  = formData.get("Address")
if(first_name==""|| last_name==""|| email==""||pin==""|| city==""|| 
mobile==""||Address==""  || state==""){
    alert("please fill all the field")
}else{
    if(method_value===0){
        let object = {
            first_name,
            last_name,
            email,
            pin,
            city,
            mobile,
            Address,
            state,
        }
        // console.log(object)
        localStorage.setItem("address",JSON.stringify(object));
        //(----order sucessfull page will link here-------)
    }
    else{
        alert("COD available only")
    }
}
});
// ************************************************************
let getDetails = JSON.parse(localStorage.getItem("item"));
let img_div = document.getElementById("img_div");
let titlediv = document.getElementById("title_div");
let price_details = document.getElementById("Price_details");

const get_item=(data)=>{
    let price_div = document.createElement("div");

    let image = document.createElement("img");
    image.src = data.imageurl;

    let Title = document.createElement("h2");
    Title.innerText = data.title;

    let Price = document.createElement("p")
    Price.setAttribute("class","price")
    Price.innerText= `₹${data.price}`

    let p = document.createElement("h3");
    p.innerText="Price"
     
    let logo = document.createElement("img");
    logo.setAttribute("id", "logo");
    logo.src = "https://mamaearthp.imgix.net/wysiwyg/goodness-icons.png"


    let Rating = document.createElement("p")
    Rating.innerText= "★"+data.rating+" | 45 Reviews";

    price_div.append(p,Price,"inclusive of all texes")
    

    img_div.append(image);
    titlediv.append(Title,Rating,price_div,logo)
};


let qtyNo=1;
const priceFun = (data2) =>{
    price_details.innerHTML=null;
    let price_div = document.createElement("div");

    let Price = document.createElement("p")
    Price.setAttribute("class","price")
    Price.innerText= `₹${data2.price}`

    let p = document.createElement("h3");
    p.innerText="Price"

    let Rating = document.createElement("p")
    Rating.innerText= "★"+data2.rating+" | 45 Reviews";

    let btn = document.createElement("button");
    btn.innerText = "ADD TO CART"
    $(btn).click(function () {
        $('.alert').addClass("show");
        $('.alert').removeClass("hide");
        $('.alert').addClass("showAlert");
        setTimeout(function () {
            $('.alert').removeClass("show");
            $('.alert').addClass("hide");
        }, 1000);
    });
    btn.setAttribute("id","addTocart")
    btn.addEventListener("click",()=>{
        addTocart(data2,qtyNo)
    });

    let quantity_div = document.createElement("div");
    quantity_div.setAttribute("id","quantity_div")
    let decbtn = document.createElement("button");
    decbtn.innerHTML = "-"
    decbtn.addEventListener("click",()=>{
        Decbtn();
    })
    let incbtn = document.createElement("button");
    incbtn.innerHTML = "+"
    incbtn.addEventListener("click",()=>{
        Incbtn()
    })
    let Qty = document.createElement("p");
    Qty.innerText=qtyNo;
    quantity_div.append(decbtn,Qty,incbtn);
    
    price_div.append(p,Price,"inclusive of all texes",Rating,"Quantity",quantity_div,btn)
    price_details.append(price_div);
}

function Decbtn(){
    if(qtyNo>1){
        qtyNo--
    }
    priceFun(getDetails)
}
function Incbtn(){
    qtyNo++
    priceFun(getDetails)
}

let Cart = JSON.parse(localStorage.getItem("cart")) || [];
const addTocart=(elem,qtyNo)=>{
    let Add_item = elem
    Add_item["qtyNo"] = qtyNo;
    Cart.push(Add_item);
    var count = document.querySelector("#circle")
       count.innerHTML = Cart.length;
       count.style.background ="#00afef"
    localStorage.setItem("cart",JSON.stringify(Cart))
}
priceFun(getDetails)
get_item(getDetails)


// _________________________________________
// review

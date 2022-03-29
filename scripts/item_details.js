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
    Price.setAttribute("class","Price")
    Price.innerText= `₹ ${data.price}`

    let p = document.createElement("h3");
    p.innerText="Price"
    let logo = document.createElement("img");
    logo.setAttribute("id","logos")
    logo.src = "https://mamaearthp.imgix.net/wysiwyg/goodness-icons.png"

    let Rating = document.createElement("p")
    Rating.innerText= "★ "+data.rating+" | 44 Reviews" ;

    price_div.append(p,Price,"inclusive of all texes")
    

    img_div.append(image);
    titlediv.append(Title,Rating,price_div,logo)
};




const priceFun = (data2) =>{

    let price_div = document.createElement("div");

    let Price = document.createElement("p")
    Price.setAttribute("class","Price")
    Price.innerText= `₹ ${data2.price}`

    let Rating = document.createElement("p")
    Rating.innerText= "★ "+data2.rating+" | 44 Reviews" ;

    let p = document.createElement("h3");
    p.innerText="Price"

    let btn = document.createElement("button");
    btn.innerText = "ADD TO CART"
    btn.setAttribute("id","addTocart")
    btn.addEventListener("click",()=>{
        addTocart(data2)
    });

    price_div.append(p,Price,"inclusive of all texes",Rating,btn)
    price_details.append(price_div);
}

let Cart = JSON.parse(localStorage.getItem("cart")) || [];
const addTocart=(elem)=>{
    let Add_item = elem
    Cart.push(Add_item);
    localStorage.setItem("cart",JSON.stringify(Cart))
}
priceFun(getDetails)
get_item(getDetails)
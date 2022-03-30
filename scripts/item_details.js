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
    Price.innerText= `Rs.${data.price}`

    let p = document.createElement("h3");
    p.innerText="Price"

    let Strikeprice = document.createElement("p")
    Strikeprice.innerText = data.strikeprice

    let Rating = document.createElement("p")
    Rating.innerText= data.rating;

    price_div.append(p,Price,"inclusive of all texes")
    

    img_div.append(image);
    titlediv.append(Title,Rating,price_div)
};




const priceFun = (data2) =>{

    let price_div = document.createElement("div");

    let Price = document.createElement("p")
    Price.innerText= `Rs.${data2.price}`

    let p = document.createElement("h3");
    p.innerText="Price"
    price_div.append(p,Price,"inclusive of all texes")
    price_details.append(price_div);

}
priceFun(getDetails)
get_item(getDetails)
let baby_data = JSON.parse(localStorage.getItem("baby_products"));
// console.log(baby_data)

const appendBaby= (data) =>{
    document.getElementById("B_main").innerHTML="";
    data.forEach((elem) => {
        let frame = document.createElement("div");

        let frame1 = document.createElement("div")
        frame1.addEventListener("click",()=>{
          item(elem)
      });
        let Title = document.createElement("p")
        Title.setAttribute("id","B_title")
        Title.innerText = elem.title

        let image = document.createElement("img")
        image.src = elem.imageurl

        let Price = document.createElement("p")
        Price.setAttribute("id","B_price")
        Price.innerText="₹"+elem.price

        let Rating = document.createElement("p")
        Rating.setAttribute("class", "B_rating")
        Rating.innerText= elem.rating+"★";

        let btn = document.createElement("button");
        btn.innerText = "ADD TO CART"
        btn.setAttribute("id","addTocart")
        btn.addEventListener("click",()=>{
            addTocart(elem)
        })

        frame.append(image,Title,Rating,Price)
        frame1.append(frame,btn)
        document.getElementById("B_main").append(frame1)
    });
};

appendBaby(baby_data)

//To see the detailes of the product function----------------
const item=(elem)=>{
    let Item = elem;
    localStorage.setItem("item",JSON.stringify(Item));
    window.location.href="item_details.html"
}

// product adding to cart function----------------------------
let Cart = JSON.parse(localStorage.getItem("cart")) || [];
const addTocart=(elem)=>{
    let Add_item = elem
    Cart.push(Add_item);
    localStorage.setItem("cart",JSON.stringify(Cart))
}

// Sliding effect:----------------------------------------------
let slider_img = JSON.parse(localStorage.getItem("slider_image"));
let i =1;
let B_slide = document.getElementById("B_slide");
B_slide.innerHTML = "";
  let Dimage = document.createElement("img");
  Dimage.src = slider_img[0];
  B_slide.append(Dimage);
setInterval(function () {
  if (i == slider_img.length) {
    i = 0;
  }
  B_slide.innerHTML = "";
  Dimage.src = slider_img[i];
  B_slide.append(Dimage);
  i++;
}, 3000);

// sort function is written from here----------------------
const sortItems=()=>{
  let sorting=document.getElementById("B_sorter").value;
 
  if(sorting=="h2l"){
    baby_data.sort((a,b)=>{
          return b.price - a.price;
      });
      // console.log(baby_data)
      appendBaby(baby_data);
  }
  else if(sorting=="l2h"){
    baby_data.sort((a,b)=>{
          return a.price-b.price;
      });
      appendBaby(baby_data);
  }
  else if(sorting=="rating"){
    baby_data.sort((a,b)=>{
          return b.rating-a.rating;
      });
      appendBaby(baby_data);
  }
 }
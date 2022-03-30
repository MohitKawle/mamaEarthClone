let baby_data = JSON.parse(localStorage.getItem("baby_products"));
// console.log(baby_data)
let B_main = document.getElementById("B_main");

const appendBaby= (data,where,value) =>{
    where.innerHTML="";
    data.forEach((elem) => {
        let frame = document.createElement("div");
        frame.addEventListener("click",()=>{
          item(elem)
        });

        let frame1 = document.createElement("div")
       
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

        if(value===2){
          let tag = document.createElement("div");
          tag.setAttribute("id","tag")
          tag.innerHTML = "BESTSELLER"
          frame.append(tag,image,Title,Rating,Price)
        }else{
          frame.append(image,Title,Rating,Price)
        }

        // frame.append(image,Title,Rating,Price)
        frame1.append(frame,btn)
        where.append(frame1)
    });
};

appendBaby(baby_data,B_main,1)

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
      appendBaby(baby_data,B_main,1);
  }
  else if(sorting=="l2h"){
    baby_data.sort((a,b)=>{
          return a.price-b.price;
      });
      appendBaby(baby_data,B_main,1);
  }
  else if(sorting=="rating"){
    baby_data.sort((a,b)=>{
          return b.rating-a.rating;
      });
      appendBaby(baby_data,B_main,1);
  }
 }



//  **********************************************************
let bs_data = JSON.parse(localStorage.getItem("best_selling_baby"));
let best_sellert_div=document.getElementById("BS_slider");

appendBaby(bs_data,best_sellert_div,2);
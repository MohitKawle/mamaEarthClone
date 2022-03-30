const append=(data,parent)=>{
    console.log("hello")
    parent.innerHTML=null;
    data.map((elem)=>{
    // console.log("Hello");
    let div=document.createElement("div");
    div.setAttribute("class","small");

    let title=document.createElement("h5");
    title.innerText=elem.title;
    title.setAttribute("class","title")
    // console.log(title);
    
    let image=document.createElement('img');
    image.src=elem.imageurl;
    
    let price=document.createElement("h3");
    price.setAttribute("class","price")
    price.innerText="₹"+elem.price;
    
    let rating=document.createElement("h4");
    rating.setAttribute("class","rating")
    rating.innerText=elem.rating+"★";

    let add=document.createElement("button");
    add.innerText="ADD TO CART";
    
    div.append(image,title,rating,price,add);
    parent.append(div);

     div.onclick= function detail(){
       //  console.log("Hello");
       localStorage.setItem("title",JSON.stringify(elem));
     }
     
    add.onclick=()=>{
     //console.log("Hello")
     localStorage.setItem("cart",JSON.stringify(elem));
    }
 
     });
}
export default append;
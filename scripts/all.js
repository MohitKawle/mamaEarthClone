import append from "/components/append.js"

let data=JSON.parse(localStorage.getItem("face_data"))||[];
let baby_data = JSON.parse(localStorage.getItem("baby_products"))||[];
let container=document.getElementById("cont");
//append(data,container);
var f=1;
//const face=()=>{
  //  f=2;
   // append(data,container);
//}

let face=document.getElementById("facei").addEventListener("click",()=>{
    f=2;
    append(data,container);
})

let sortItems=document.getElementById("setsel");
sortItems.addEventListener("change",()=>{ 
//const sortItems=()=>{
    let sorting=sortItems.value;
    console.log("Hi")
   
    if(sorting=="h2l"){
        data.sort((a,b)=>{
            console.log("spr");
            return b.price - a.price;
        });
        if(f==2){
            console.log("oye")
            append(data,container);
        }
    }
    else if(sorting=="l2h"){
        data.sort((a,b)=>{
            return a.price-b.price;
        });
       if(f==2){
           append(data,container);
       }
    }
    else if(sorting=="rating"){
        data.sort((a,b)=>{
            return b.rating-a.rating;
        });
        if(f==2){
            append(data,container);
        }
    }
   })
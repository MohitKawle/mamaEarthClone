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
});
let hair=document.getElementById("hairi").addEventListener("click",()=>{
    f=5;
    append(data,container);
});
let body=document.getElementById("bodyi").addEventListener("click",()=>{
    f=4;
    append(data,container);
});
let baby=document.getElementById("babyi").addEventListener("click",()=>{
    f=3;
    append(baby_data,container);
});

let sortItems=document.getElementById("setsel");
sortItems.addEventListener("change",()=>{ 
//const sortItems=()=>{
    let sorting=sortItems.value;   
    if(sorting=="h2l"){
        data.sort((a,b)=>{
            return b.price - a.price;
        });
        if(f==2){
            append(data,container);
        }
        else if(f==3){
            append(baby_data,container);
        }
        else if(f==4){
        }
        else if(f==5){}
    }
    else if(sorting=="l2h"){
        data.sort((a,b)=>{
            return a.price-b.price;
        });
       if(f==2){
           append(data,container);
       }
       else if(f==3){
        append(baby_data,container);
       }
       else if(f==4){}
       else if(f==5){}
    }
    else if(sorting=="rating"){
        data.sort((a,b)=>{
            return b.rating-a.rating;
        });
        if(f==2){
            append(data,container);
        }
        else if(f==3){
            append(baby_data,container);
        }
        else if(f==4){}
        else if(f==5){}
    }
   })
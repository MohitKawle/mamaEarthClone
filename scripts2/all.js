import append from "/components/append.js"

let data=JSON.parse(localStorage.getItem("face_data"))||[];
let baby_data = JSON.parse(localStorage.getItem("babydata"))||[];
let body_data=JSON.parse(localStorage.getItem("bodyProducts"))||[];
let main_data=JSON.parse(localStorage.getItem("all_data"))||[];
let container=document.getElementById("cont1555");
append(main_data,container);
var f=1;

let all=document.getElementById("alli").addEventListener("click",()=>{
    append(main_data,container);
});

let face=document.getElementById("facei").addEventListener("click",()=>{
    f=2;
    append(data,container);
});
let body=document.getElementById("bodyi").addEventListener("click",()=>{
    f=4;
    append(body_data,container);
});
let baby=document.getElementById("babyi").addEventListener("click",()=>{
    f=3;
    append(baby_data,container);
});
let hair=document.getElementById("hairi").addEventListener("click",()=>{
    f=5;
   append(baby_data,container);
});


let sortItems=document.getElementById("setsel");
 sortItems.addEventListener("change",()=>{
     let sorting=sortItems.value;
     //console.log(sorting);
     //face data
     if(f==2){
     if(sorting=="h2l"){
      data.sort((a,b)=>{
          return b.price-a.price;
      })
          append(data,container);
      }
      else if(sorting=="l2h"){
          data.sort((a,b)=>{
              return a.price-b.price;
          })
          append(data,container);
      }
      else if(sorting=="rating"){
          data.sort((a,b)=>{
              return b.rating-a.rating;
          })
          append(data,container);
      }
     }
// main data
     if(f==1){
        if(sorting=="h2l"){
         main_data.sort((a,b)=>{
             return b.price-a.price;
         })
             append(main_data,container);
         }
         else if(sorting=="l2h"){
             main_data.sort((a,b)=>{
                 return a.price-b.price;
             })
             append(main_data,container);
         }
         else if(sorting=="rating"){
             main_data.sort((a,b)=>{
                 return b.rating-a.rating;
             })
             append(main_data,container);
         }
        }
//baby_data
        if(f==3){
            if(sorting=="h2l"){
             baby_data.sort((a,b)=>{
                 return b.price-a.price;
             })
                 append(baby_data,container);
             }
             else if(sorting=="l2h"){
                 baby_data.sort((a,b)=>{
                     return a.price-b.price;
                 })
                 append(baby_data,container);
             }
             else if(sorting=="rating"){
                 baby_data.sort((a,b)=>{
                     return b.rating-a.rating;
                 })
                 append(baby_data,container);
             }
            }
//body_data
            if(f==4){
                if(sorting=="h2l"){
                 body_data.sort((a,b)=>{
                     return b.price-a.price;
                 })
                     append(body_data,container);
                 }
                 else if(sorting=="l2h"){
                     body_data.sort((a,b)=>{
                         return a.price-b.price;
                     })
                     append(body_data,container);
                 }
                 else if(sorting=="rating"){
                     body_data.sort((a,b)=>{
                         return b.rating-a.rating;
                     })
                     append(body_data,container);
                 }
                }
                
       //hair         
                if(f==5){
                    if(sorting=="h2l"){
                     baby_data.sort((a,b)=>{
                         return b.price-a.price;
                     })
                         append(baby_data,container);
                     }
                     else if(sorting=="l2h"){
                         baby_data.sort((a,b)=>{
                             return a.price-b.price;
                         })
                         append(baby_data,container);
                     }
                     else if(sorting=="rating"){
                         baby_data.sort((a,b)=>{
                             return b.rating-a.rating;
                         })
                         append(baby_data,container);
                     }
                    }
 })

//sliding part


let slideshow=document.getElementById("face_slider");
let slidearr=[];
const img1="https://images.ctfassets.net/66mrrren2unf/5kaAcTPfa6WK3WrRtpZoQc/d7fbc3cdede555135dab5c1c0187bdaf/Desktop.jpg?q=40";
const img2="https://images.ctfassets.net/66mrrren2unf/2gTR8xcf8Rxp4zvfzcRZl3/9a24954ff7b7f2066d69535d3f3ca7bb/Desktop.jpg?q=40";
const img3="https://images.ctfassets.net/66mrrren2unf/7HvyA24fZoupMV6HeOZmBV/b8b1fe1de6b1f9a5f08273f0bf0d850a/Banner_Website.jpg?q=40";
const img4="https://images.ctfassets.net/66mrrren2unf/3PnUXonZQ0tDY8e7siuCA7/48451c727f3e60ee71b3a628eda928cd/Desktop_Without_CTA.jpg?q=40";
const img5="https://images.ctfassets.net/66mrrren2unf/6nc4ahNcZm8FqgU4vU3vKl/cdfcd3ba0f2db050759fc68ee82a4313/Desktop_Bye-Bye-Face-Creams-with-CTA.jpg?q=40";
slidearr.push(img1);
slidearr.push(img2);
slidearr.push(img3);
slidearr.push(img4);
slidearr.push(img5);
let i=1;
let img=document.createElement("img");
img.src=slidearr[0];
slideshow.append(img);
setInterval(()=>{
    if(i==slidearr.length){
        i=0;
    }
    slideshow.innerHTML=null;
    let img=document.createElement("img");
   
    img.src=slidearr[i];
    i++;
    slideshow.append(img);
},5000);















































// sortItems.addEventListener("change",()=>{ 
// //const sortItems=()=>{
//     let sorting=sortItems.value;   
//     if(sorting=="h2l"){
//         console.log(f);
//         data.sort((a,b)=>{
//             return b.price - a.price;
//         });
//     //   append(data,container);
//        // append(baby_data,container);
//         if(f==2){
//             append(data,container);
//         }
//         else if(f==3){
//             append(baby_data,container);
//         }
//         else if(f==4){
//             append(body_data,container);
//         }
        
//         else if(f==1){
//             append(main_data,container);
//            }
//         else if(f==5){}
        
//     }
//     else if(sorting=="l2h"){
//         data.sort((a,b)=>{
//             return a.price-b.price;
//         });
//         if(f==3){
//             console.log("baby")
//          append(baby_data,container);
//         }
//        else if(f==2){
//            append(data,container);
//        }     
//        else if(f==4){
//            console.log("body")
//         append(body_data,container);
//        }
//        else if(f==5){}
//     //    else{
//     //     append(main_data,container);
//     // }
//     }
//     else if(sorting=="rating"){
//         data.sort((a,b)=>{
//             return b.rating-a.rating;
//         });
//         if(f==2){
//             append(data,container);
//         }
//         else if(f==3){
//             append(baby_data,container);
//         }
//         else if(f==4){
//             append(body_data,container);
//         }
//         else if(f==5){}
//         // else{
//         //     append(main_data,container);
//         // }
//     }
//    })
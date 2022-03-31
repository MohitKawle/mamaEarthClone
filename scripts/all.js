import append from "/components/append.js"

let data=JSON.parse(localStorage.getItem("face_data"))||[];
let baby_data = JSON.parse(localStorage.getItem("babydata"))||[];
let body_data=JSON.parse(localStorage.getItem("bodyProducts"))||[];
let main_data=JSON.parse(localStorage.getItem("all_data"))||[];
let container=document.getElementById("cont");
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
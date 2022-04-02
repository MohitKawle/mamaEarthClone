let slide = [
        "https://images.ctfassets.net/66mrrren2unf/2gTR8xcf8Rxp4zvfzcRZl3/9a24954ff7b7f2066d69535d3f3ca7bb/Desktop.jpg?q=40",
        "https://images.ctfassets.net/66mrrren2unf/jvnVpA7ItjHuqkoeGFOi9/c24266e7809b06ca3f0796b95d07be65/Desktop.jpg?q=40",
        "https://images.ctfassets.net/66mrrren2unf/6nc4ahNcZm8FqgU4vU3vKl/cdfcd3ba0f2db050759fc68ee82a4313/Desktop_Bye-Bye-Face-Creams-with-CTA.jpg?q=40",
        "https://images.ctfassets.net/66mrrren2unf/3PnUXonZQ0tDY8e7siuCA7/48451c727f3e60ee71b3a628eda928cd/Desktop_Without_CTA.jpg?q=40",
        "https://images.ctfassets.net/66mrrren2unf/7HvyA24fZoupMV6HeOZmBV/b8b1fe1de6b1f9a5f08273f0bf0d850a/Banner_Website.jpg?q=40",

]


let i = 0;

    let images = slide

    var container=document.querySelector("#slideimg")

       let image = images[0];

        container.innerHTML=null;
        let img = document.createElement("img");

       img.src = image;
       container.append(img); 

         setInterval(function (){

        if(i===images.length){
            i=0;
        }

        let image = images[i];

        container.innerHTML=null;
        let img = document.createElement("img");

       img.src = image;
       container.append(img);

          var index = i;
           var index1 = i;
        //   console.log(index)

         document.querySelector("#but1").addEventListener("click",()=>{
               let p2 = index-1;
            //    console.log(p2)
               if(p2 >=0){
                      
                    let image = images[p2];
                    container.innerHTML=null;
                    let img = document.createElement("img");

                    img.src = image;
                    container.append(img);
                   
               }

           
        document.querySelector("#but2").addEventListener("click",()=>{
            let p1 = index1+1

            if(p1 < 5){
               
                let image = images[p1];
             container.innerHTML=null;
            let img = document.createElement("img");

            img.src = image;
            container.append(img);
            }

        })   
        })
        
       
        i++;

    },2000);




    //  ************************************************

   const append1 = (data,parent) =>{
     
    parent.innerHTML = null;

   data.map(({title,imageurl,price,strikeprice,rating})=>{
       
       let div =  document.createElement("div");

       let t =  document.createElement("p")
           t.innerText = title
            
       let img1 = document.createElement("img");
           img1.src =  imageurl
           img1.addEventListener("click",()=>{
            var obj1={
                title,
                 imageurl,
                price,
                strikeprice,
                rating,
            }
            additem(obj1)
      });

       let r = document.createElement("div");
           if(rating === 5.0){
             r.innerHTML = rating+".0" +"★";
              r.setAttribute("id","rate")
           }
           else{
              r.innerHTML = rating +"★";
           r.setAttribute("id","rate")
           }
          


       let div1 =  document.createElement("div");
           div1.setAttribute("id","strike")
           
       let p = document.createElement("p");
           p.innerText = "₹ "+price ;
           p.id = "priceone"

       let st = document.createElement("strike");
            st.innerText = strikeprice ;
             st.setAttribute("id","str")
       
       let cart = document.createElement("button");
           cart.innerText= "ADD TO CART"
           cart.setAttribute("id","addcart")
           
               $(cart).click(function () {
                    $('.alert').addClass("show");
                    $('.alert').removeClass("hide");
                    $('.alert').addClass("showAlert");
                    setTimeout(function () {
                        $('.alert').removeClass("show");
                        $('.alert').addClass("hide");
                    }, 1000);
                });
           
           cart.addEventListener("click",()=>{
              
                var obj={
                    title,
                     imageurl,
                    price,
                    strikeprice,
                    rating,
                }
                //  objarr.push(obj)
             addData(obj)
             
           })
            div1.append(p,st)

           div.append(img1,t,r,div1,cart)

           parent.append(div);

   });

};

    function additem(obj1){
        
       localStorage.setItem("item",JSON.stringify(obj1))
       window.location.href="item_details.html";
    }

    // //////////// adding to cart
    let objarr = JSON.parse(localStorage.getItem("cart")) || []
    function addData(obj){
        objarr.push(obj);
       var count = document.querySelector("#circle")
       count.innerHTML = objarr.length;
       count.style.background ="#00afef"
       localStorage.setItem("cart",JSON.stringify(objarr))
    //    window.location.href="blog.html"
    }
       let parent = document.querySelector("#append1");
       let parent1 = document.querySelector("#append2");
       let parent2 = document.querySelector("#append3");
       let parent3 = document.querySelector("#append4");
       let parent4 = document.querySelector("#append5");
        let parent5 = document.querySelector("#append6")
   
       let baby1 = JSON.parse(localStorage.getItem("babydata"));
       let body = JSON.parse(localStorage.getItem("bodyProducts"))
            // console.log(baby1.length)
       let right = document.querySelector("#rightarrow")
       let left = document.querySelector("#leftarrow")

       let right1 = document.querySelector("#rightarrow1")
       let left1 = document.querySelector("#leftarrow1")
 
       let right2 = document.querySelector("#rightarrow2")
       let left2 = document.querySelector("#leftarrow2")

       let right3 = document.querySelector("#rightarrow3")
       let left3 = document.querySelector("#leftarrow3")

       let right4 = document.querySelector("#rightarrow4")
       let left4 = document.querySelector("#leftarrow4")

       let right5 = document.querySelector("#rightarrow5")
       let left5= document.querySelector("#leftarrow5")

          
        
     function appendslide(slide,mainparent,r,l){
           let m=0        
            let index;
            r.addEventListener("click",()=>{
                  index = m++;
                 if(index<slide.length-2){
                     console.log(index)
                      let newdata = []
                for(let i=index;i<index+3;i++){
                    
                      newdata.push(slide[i])
                 }
                    
                  append1(newdata,mainparent)
                }
                
            })
              let m1=slide.length-1
              l.addEventListener("click",()=>{
                  let ind1 = m1--
               if(ind1 > 3){
                      let newdata1 = []
                for(let i=ind1;i>ind1-3;i--){
                
                newdata1.push(slide[i])
                }
                console.log(newdata1)
                append1(newdata1,mainparent)
               }
            })
     
     }

     appendslide(baby1,parent,right,left)
     appendslide(body,parent1,right1,left1);
     appendslide(baby1,parent2,right2,left2);
     appendslide(baby1,parent3,right3,left3);
     appendslide(baby1,parent4,right4,left4);
     appendslide(baby1,parent5,right5,left5);

     function defaultappend(slide,mainparent){
          let newdata = []
         for(let i=0;i<3;i++){
               
                newdata.push(slide[i])
         }
         append1(newdata,mainparent)
     }
     defaultappend(baby1,parent)
     defaultappend(body,parent1)
     defaultappend(baby1,parent2)
     defaultappend(baby1,parent3)
     defaultappend(baby1,parent4)
     defaultappend(baby1,parent5)


    let dataone =  JSON.parse(localStorage.getItem("description"));
    console.log(dataone)
    let app = document.querySelector("#sidediv")
      dataone.map(({title,para})=>{
       
       let div =  document.createElement("div");
          
       let t =  document.createElement("h1")
           t.innerText = title
       
       let p = document.createElement("p");
           p.innerText = para

       let b = document.createElement("button");
           b.innerText = "VIEW ALL"
      
          div.append(t,p,b)
           app.append(div);

   });

   let super1 =  JSON.parse(localStorage.getItem("superstanderd"));;
   let app2 = document.querySelector("#super")
    super1.map(({img,title,para})=>{
       
       let div =  document.createElement("div");
           div.id = "s1"

       let div1 =  document.createElement("div");
           div1.id = "s2"

       let div2 =  document.createElement("div");
           div2.id="s3"
          
       let t =  document.createElement("h3")
           t.innerText = title
       
       let p = document.createElement("p");
           p.innerText = para

       let img1 = document.createElement("img");
           img1.src = img

           div1.append(img1)
           div2.prepend(t,p)
      
          div.append(div1,div2)
           app2.append(div);

   });

   let ii = 0;

   let sldata = ["/photo/2.png","/photo/3.png","/photo/4.png","/photo/5.png" ];
   let coinapp = document.querySelector("#sliderreview")
     let im13 = document.createElement("img")
       coinapp.innerHTML=null
         im13.src = sldata[0]
      coinapp.append(im13)
    setInterval(function (){

        if(ii===sldata.length){
            ii=0;
        }

        let ima = sldata[ii];

        coinapp.innerHTML=null;
        let img12 = document.createElement("img");

       img12.src = ima;
       coinapp.append(img12);
       
        ii++;

    },3000)

    // // ******for popup

    //   appending data to cart;

      //*******************end code**************      
        //   document.querySelector("#login").addEventListener("mouseover", function () {
        //         document.querySelector('.loginmain').style.display = "flex";
        //     });

        //     document.querySelector('#slideimg').addEventListener("mouseout", function () {
        //         document.querySelector('.loginmain').style.display = "none";
        //     });
   
                let cart_data = JSON.parse(localStorage.getItem("cart"));
                console.log(cart_data)
            var count = document.querySelector("#circle")
            count.innerHTML = cart_data.length;
            count.style.background ="#00afef"
window.addEventListener("load",()=>{

    var hairProducts=[
        {
            title:"Henna Shampoo with Henna and Deep Roast Coffee for Premature Greying - 250 ml",
            imageurl:"https://honasa-mamaearth-production.imgix.net/h/e/henna-shampoo-1.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"",
            price:349,
            rating:4.3,
            offer:"",
        },
        {
            title:"Henna Hair Oil with Henna & Coffee Oil for Premature Graying - 150 ml",
            imageurl:"https://honasa-mamaearth-production.imgix.net/h/e/henna-oil-2.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"",
            price:419,
            rating:4.3,
            offer:"",
        },
        {
            title:"Mamaearth Almond Hair Mask with Cold Pressed Almond Oil & Vitamin E for Healthy Hair Growth- 200 g",
            imageurl:"https://honasa-mamaearth-production.imgix.net/a/l/almond-hair-mask_2.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"",
            price:599,
            rating:4.9,
            offer:"",
        },
        {
            title:"Onion Shampoo with Onion & Plant Keratin for Hair Fall Control - 400ml",
            imageurl:"https://honasa-mamaearth-production.imgix.net/_/o/_onion-oil-150ml_.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"₹799",
            price:518,
            rating:4.9,
            offer:"(35%off)",
        },
        {
            title:"Onion Conditioner for Hair Growth and Hair Fall Control with Onion and Coconut, 400ml",
            imageurl:"https://honasa-mamaearth-production.imgix.net/o/n/onion_hair_mask_1.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"₹799",
            price:518,
            rating:4.9,
            offer:"(35%off)",
        },
        {
            title:"Onion Conditioner for Hair Fall Control - 250ml",
            imageurl:"https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-conditioner-250ml-with-ingredient_2.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"₹799",
            price:518,
            rating:4.9,
            offer:"(35%off)",
        },
        {
            title:"Healthy Hair Combo : Happy Heads shampoo, 200ml and No More Tangles Conditioner, 200ml",
            imageurl:"https://honasa-mamaearth-production.imgix.net/s/h/shampoo-conditioner1800x1800_vdyppzbzvnlh2lix.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"₹799",
            price:518,
            rating:4.9,
            offer:"(35%off)",
        },
        {
            title:"No More Tangles Conditioner for frizz free hair, 200ml",
            imageurl:"https://honasa-mamaearth-production.imgix.net/i/m/img_6889-with-prob_bjaylguyp3aj3wow.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"",
            price:399,
            rating:4.9,
            offer:"",
        },
        {
            title:"Root Restore Hair Oil for hair fall reduction, 100ml",
            imageurl:"https://honasa-mamaearth-production.imgix.net/i/m/img_6819-with-prob_dvpzp3xmm6xv2rhr.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"₹799",
            price:518,
            rating:4.9,
            offer:"(35%off)",
        },
        {
            title:"BhringAmla Hair Mask for Intense Hair Treatment - 200 g",
            imageurl:"https://honasa-mamaearth-production.imgix.net/b/h/bhringamla_hair_mask_1.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"",
            price:699,
            rating:4.9,
            offer:"",
        },
        {
            title:"Tea Tree Anti-Dandruff Hair Regime Kit",
            imageurl:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-kit-_bg_1200x1200_1_mcld7jogzpznwscj.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"₹1297",
            price:908,
            rating:4.9,
            offer:"(30%off)",
        },
        {
            title:"Hair Fall Control Kit",
            imageurl:"https://honasa-mamaearth-production.imgix.net/h/a/hair_fall_control_kit_1.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"₹1396",
            price:977,
            rating:4.9,
            offer:"(30%off)",
        },
        {
            title:"Intense Hair Treatment Kit",
            imageurl:"https://honasa-mamaearth-production.imgix.net/b/h/bhringamla-combo_msqe7ulfgyv85fsi.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"₹1197",
            price:838,
            rating:4.9,
            offer:"(30%off)",
        },
        {
            title:"Anti-Hair Fall Spa Kit",
            imageurl:"https://honasa-mamaearth-production.imgix.net/a/n/anti_hair_fall_spa_kit_1.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"₹1197",
            price:868,
            rating:4.9,
            offer:"(30%off)",
        },
        {
            title:"Essential Anti-Hair Fall Kit",
            imageurl:"https://honasa-mamaearth-production.imgix.net/a/n/anti-fall_regimen_kit_uges0reark90qp1c.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"₹1696",
            price:1187,
            rating:4.9,
            offer:"(30%off)",
        },
        {
            title:"Tea Tree Shampoo and Onion Hair Oil Combo",
            imageurl:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-shampoo-_-onion-hair-oil_ezrrdrhuu1rkbagp.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"₹748",
            price:726,
            rating:4.9,
            offer:"(3%off)",
        },
        {
            title:"Damage repair kit",
            imageurl:"https://honasa-mamaearth-production.imgix.net/d/a/damage-repair-kit.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"₹1096",
            price:868,
            rating:4.9,
            offer:"(30%off)",
        },
        {
            title:"Onion Hair Serum and Onion Hair Oil Combo",
            imageurl:"https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-serum-_-onion-hair-oil_r0cve2co4dbojm9f.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"₹698",
            price:677,
            rating:4.8,
            offer:"(3%off)",
        },
        {
            title:"BhringAmla Shampoo and Conditioner Combo",
            imageurl:"https://honasa-mamaearth-production.imgix.net/o/n/onion-shampoo-_-onion-conditioner_2hflieeliqkohq22.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"₹898",
            price:881,
            rating:4.8,
            offer:"(3%off)",
        },
        {
            title:"Argan Shampoo and Conditioner Combo",
            imageurl:"https://honasa-mamaearth-production.imgix.net/a/r/argan_shampoo_and_conditionor_teypfi95redgibq8.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"₹698",
            price:677,
            rating:4.8,
            offer:"(3%off)",
        },
        {
            title:"Rose Body Lotion with Rose Water & Milk for Deep Hydration (400 ml) - Pack of 2",
            imageurl:"https://honasa-mamaearth-production.imgix.net/r/o/rose_body_lotion_7.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"₹799",
            price:518,
            rating:4.9,
            offer:"(35%off)",
        },
        {
            title:"Aloe Turmeric Gel for Skin and Hair 150ml",
            imageurl:"https://honasa-mamaearth-production.imgix.net/a/l/aloe_turmeric_gel_for_skin_and_hair_150ml_1.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"",
            price:249,
            rating:4.9,
            offer:"",
        },
        {
            title:"Hair Fall Reduction Combo",
            imageurl:"https://honasa-mamaearth-production.imgix.net/h/a/hairfall_reduction_combo_wvzngxlqxrvtnrvn.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"₹1299",
            price:1258,
            rating:4.9,
            offer:"(3%off)",
        },
        {
            title:"Onion Shampoo and Onion Hair Serum Combo",
            imageurl:"https://honasa-mamaearth-production.imgix.net/o/n/onion_shampoo_serum_combo_ruqrbph9uvkyx3my.jpg?auto=compress&fit=scale&w=400&h=400",
            strike_price:"₹698",
            price:668,
            rating:4.8,
            offer:"(3%off)",
        },
    
    ];
    localStorage.setItem("hairProducts",JSON.stringify(hairProducts));
});

let hair_data = JSON.parse(localStorage.getItem("hairProducts"));
// console.log(hair_data)
let B_main = document.getElementById("B_main");

const appendhair= (data,where,value) =>{
    where.innerHTML="";
    data.forEach((elem)=>{
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
        image.setAttribute("id","photo")

        let Rating = document.createElement("p")
        Rating.setAttribute("class", "B_rating")
        Rating.innerText= elem.rating+"★";

        var div=document.createElement("div");
        div.setAttribute("id","PRICE")

        let Price = document.createElement("p")
        Price.setAttribute("id","B_price")
        Price.innerText="₹"+elem.price

        var strike=document.createElement("s");
        strike.innerText=elem.strike_price;

        var offer=document.createElement("p");
        offer.innerText=elem.offer;

        let btn = document.createElement("button");
        btn.innerText = "ADD TO CART"
        $(btn).click(function () {
          $('.alert').addClass("show");
          $('.alert').removeClass("hide");
          $('.alert').addClass("showAlert");
          setTimeout(function () {
              $('.alert').removeClass("show");
              $('.alert').addClass("hide");
          }, 1000);
      });
        btn.setAttribute("id","addTocart")
        btn.addEventListener("click",()=>{
            addTocart(elem)
        })
        div.append(Price,strike,offer);

        if(value===3){
          let tag = document.createElement("div");
          tag.setAttribute("id","tag")
          tag.innerHTML = "BESTSELLER"
          frame.append(tag,image,Title,Rating,div)
        }else{
          frame.append(image,Title,Rating,div)
        }

        // frame.append(image,Title,Rating,Price)
        frame1.append(frame,btn)
        where.append(frame1)
    });
};

appendhair(hair_data,B_main,1)

    // bodyProducts.map(function (elem,index,array){
        
    //     var mainDiv=document.createElement("div");
    
    //     var img=document.createElement("img");
    //     img.setAttribute("src",elem.imageurl);

    //     var title=document.createElement("p");
    //     title.innerText=elem.title;

    //     var rating=document.createElement("p");
    //     rating.innerText=elem.rating+"★";

    //     var div=document.createElement("div");

    //     var price=document.createElement("p");
    //     price.innerText="₹"+elem.price;

    //     var strike=document.createElement("s");
    //     strike.innerText=elem.strike_price;

    //     var offer=document.createElement("p");
    //     offer.innerText=elem.offer;

    //     var btn=document.createElement("button");
    //     btn.innerText="ADD TO CART";
        
    //     div.append(price,strike,offer);
    //     mainDiv.append(img,title,rating,div,btn);
    //     document.querySelector("#products").append(mainDiv);
    // });



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

// sort function
const sortItems=()=>{
    let sorting=document.getElementById("B_sorter").value;
   
    if(sorting=="h2l"){
      hair_data.sort((a,b)=>{
            return b.price - a.price;
        });
        // console.log(hair_data)
        appendhair(hair_data,B_main,1);
    }
    else if(sorting=="l2h"){
      hair_data.sort((a,b)=>{
            return a.price-b.price;
        });
        appendhair(hair_data,B_main,1);
    }
    else if(sorting=="rating"){
      hair_data.sort((a,b)=>{
            return b.rating-a.rating;
        });
        appendhair(hair_data,B_main,1);
    }
   }
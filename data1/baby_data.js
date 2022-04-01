window.addEventListener("load",()=>{
    let baby_products = [
        {
            title:"Gentle Cleansing Shampoo, 400ml",
            imageurl:"https://honasa-mamaearth-production.imgix.net/s/h/shampo_props_ky0ozlvydza60eyc.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:0,
            price:399,
            rating:5.0,
        },
        {
            title:"Milky Soft Face Cream With Murumuru Butter for Babies, 60 ml",
            imageurl:"https://honasa-mamaearth-production.imgix.net/_/m/_milky_soft_face_cream_.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:0,
            price:199,
            rating:4.9,
        },
        {
            title:"Deeply Nourishing Body Wash for babies, 400ml",
            imageurl:"https://honasa-mamaearth-production.imgix.net/b/o/body-wash_probs_ui8gwmtjnj2sahbz.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:0,
            price:399,
            rating:4.8,
        },
        {
            title:"Moisturizing Bathing Bar Soap For Babies, pack of 2*75g",
            imageurl:"https://honasa-mamaearth-production.imgix.net/f/d/fds_9573-props_qwhqvlzshodrynok.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:249,
            price:242,
            rating:4.8,
        },
        {
            title:"Agent Apple Body Wash for Kids with Apple & Oat Protein – 300 ml (Pack of 2)",
            imageurl:"https://honasa-mamaearth-production.imgix.net/a/g/agent-apple-body-wash.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:598,
            price:299,
            rating:5.0,
        },
        {
            title:"Major Mango Body Wash For Kids with Mango & Oat Protein - 300 ml (Pack of 2)",
            imageurl:"https://honasa-mamaearth-production.imgix.net/m/a/mango-body-wash.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:598,
            price:299,
            rating:5.0,
        },
        {
            title:"Super Strawberry Body Lotion for Kids With Strawberry & Shea Butter - 400 ml (Pack of 2)",
            imageurl:"https://honasa-mamaearth-production.imgix.net/s/u/super-strawberry-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:798,
            price:399,
            rating:5.0,
        },
        {
            title:"Original Orange Body Lotion For Kids With Orange & Shea Butter - 400 ml (Pack of 2)",
            imageurl:"https://honasa-mamaearth-production.imgix.net/o/r/original-orange-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:798,
            price:399,
            rating:5.0,
        },
        {
            title:"Major Mango Body Lotion For Kids with Mango Butter & Milk Protein - 400 ml (Pack of 2)",
            imageurl:"https://honasa-mamaearth-production.imgix.net/m/a/major-mango-body-lotion-for-kids.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:798,
            price:399,
            rating:5.0,
        },
        {
            title:"Agent Apple Body Lotion for Kids with Apple & Oat Milk– 400 ml (Pack of 2)",
            imageurl:"https://honasa-mamaearth-production.imgix.net/a/g/agent-apple-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:798,
            price:399,
            rating:5.0,
        },
        {
            title:"Major Mango Body Lotion For Kids with Mango Butter & Milk Protein - 400 ml",
            imageurl:"https://honasa-mamaearth-production.imgix.net/m/a/mango-body-lotions.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:0,
            price:399,
            rating:5.0,
        },
        {
            title:"Brave Blueberry Body Lotion For Kids with Blueberry and Kokum Butter– 400 ml",
            imageurl:"https://honasa-mamaearth-production.imgix.net/b/r/brave-blueberry-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:0,
            price:398,
            rating:5.0,
        },
        {
            title:"Agent Apple Body Lotion for Kids with Apple & Oat Milk– 400 ml",
            imageurl:"https://honasa-mamaearth-production.imgix.net/a/g/agent_apple-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:0,
            price:399,
            rating:5.0,
        },
        {
            title:"Milky Soft Natural Lip Balm for Babies with Oats, Milk & Calendula – 4g",
            imageurl:"https://honasa-mamaearth-production.imgix.net/m/i/milky-soft-lip-balm-1.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:0,
            price:199,
            rating:4.9,
        },
        {
            title:"Milky Soft Face Cream With Murumuru Butter for Babies, 60 ml",
            imageurl:"https://honasa-mamaearth-production.imgix.net/_/m/_milky_soft_face_cream_.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:0,
            price:199,
            rating:5.0,
        },
        {
            title:"Nourishing Bathing Bar Soap For Kids - ( Pack of 5, 75g Each)",
            imageurl:"https://honasa-mamaearth-production.imgix.net/n/o/nourishing-bathing-bars_2_anb6wlrvagej2noa.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:0,
            price:499,
            rating:5.0,
        },
        {
            title:"Gentle Cleansing Shampoo, 400ml",
            imageurl:"https://honasa-mamaearth-production.imgix.net/s/h/shampo_props_ky0ozlvydza60eyc.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:0,
            price:199,
            rating:4.5,
        },
        {
            title:"Agent Apple Body Wash for Kids with Apple and Oat Protein - 300 ml",
            imageurl:"https://honasa-mamaearth-production.imgix.net/g/r/green_apple_baby_body_wash_1_1_.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:0,
            price:299,
            rating:4.9,
        },
        {
            title:"Plant-Based Diaper Pants for Babies – 9-14 kg (Size L - 30 Diapers)",
            imageurl:"https://honasa-mamaearth-production.imgix.net/d/i/diapers-l-1.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:0,
            price:699,
            rating:5.0,
        },
        {
            title:"Welcome Baby Essential Kit ",
            imageurl:"https://honasa-mamaearth-production.imgix.net/w/e/welcome-baby-essential-kit_iov2mdbdmdyyv6vu.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:1773,
            price:999,
            rating:5.0,
        },
    ];

    let slider_image = ["https://images.ctfassets.net/66mrrren2unf/1LH7b5JOWtuTiarFdJ2QNA/07434c4bf1d6e104ada7e8c7f13f57d3/desktop-bathing-.jpg?q=40",
                        "https://images.ctfassets.net/66mrrren2unf/5gFRTMpp5Y2ABnftnUsbp4/a1ccf6de76610c0b874372f8d66c91d2/Desktop.jpg?q=40"
                       ];

    let best_seller = [
        {
            title:"Agent Apple Body Lotion for Kids with Apple & Oat Milk– 400 ml (Pack of 2)",
            imageurl:"https://honasa-mamaearth-production.imgix.net/a/g/agent-apple-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:798,
            price:399,
            rating:5.0,
        },
        {
            title:"Major Mango Body Lotion For Kids with Mango Butter & Milk Protein - 400 ml",
            imageurl:"https://honasa-mamaearth-production.imgix.net/m/a/mango-body-lotions.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:0,
            price:399,
            rating:5.0,
        },
        {
            title:"Brave Blueberry Body Lotion For Kids with Blueberry and Kokum Butter– 400 ml",
            imageurl:"https://honasa-mamaearth-production.imgix.net/b/r/brave-blueberry-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:0,
            price:398,
            rating:5.0,
        },
        {
            title:"Agent Apple Body Lotion for Kids with Apple & Oat Milk– 400 ml",
            imageurl:"https://honasa-mamaearth-production.imgix.net/a/g/agent_apple-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
            strikeprice:0,
            price:399,
            rating:5.0,
        },
    ];
    localStorage.setItem("best_selling_baby",JSON.stringify(best_seller))
    localStorage.setItem("slider_image",JSON.stringify(slider_image));
    localStorage.setItem("baby_products", JSON.stringify(baby_products));
});
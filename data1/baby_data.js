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
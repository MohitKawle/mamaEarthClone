
 // navbar script start*************
 import {navbar,footer, cartpopup, loginpop, mainlogin} from './html/components/navbar.js';
     
 let bar = document.querySelector("#navbar");

 let foot = document.querySelector("#footer");
   let cart = document.querySelector(".bg-modal");

    let login1 = document.querySelector("#loginpop");

    let logindummy = document.querySelector(".mainlogin");


  bar.innerHTML = navbar();
  foot.innerHTML = footer();
   cart.innerHTML = cartpopup()
    login1.innerHTML = loginpop()
    logindummy.innerHTML = mainlogin()


    document.getElementById('login').addEventListener("mouseup", function () {
    document.querySelector('.modal').style.display = "flex";

});


document.querySelector('.modal').addEventListener("dblclick", function () {
    document.querySelector('.modal').style.display = "none";
});
// dblclick

//  end code *************


document.getElementById('cart').addEventListener("click", function () {
document.querySelector('.bg-modal').style.display = "flex";
//   document.querySelector("#but2").innerHTML = null
});

document.querySelector('.close').addEventListener("click", function () {
document.querySelector('.bg-modal').style.display = "none";

});
// ************ start code for alert meassage***************

 document.getElementById('loginone').addEventListener("click", function () {
        document.querySelector('.mainlogin').style.display = "flex";
    });

    document.querySelector('.closemain').addEventListener("click", function () {
        document.querySelector('.mainlogin').style.display = "none";
    })

    // *********append the pages ethe pages
            const addeven = (idname, place) => {
            idname.addEventListener("click", () => {
                window.location.href = `${place}`
            })

}
            addeven(document.querySelector("#home"), "index.html")

            // navbar script end*************
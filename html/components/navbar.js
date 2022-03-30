const navbar = ()=>{
    return `
      <div id="m1">
            <p>Asia's 1st Brand with MADE SAFE Certified Products</p>
            <p>Free Shipping Above 399 | COD Available | Extra 5% OFF on Prepaid Orders | Shop Now</p>
            <svg fill="none" height="18" width="18" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle ; margin-top: 2px;">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
        </div>
        <div id="m2">
            <!-- <div></div> -->
            <div>
                <img alt="mamaearth" class="logo"
                    src="https://mamaearthp.imgix.net/wysiwyg/mamaearth-logo.png?auto=format&amp;fit=scale">
            </div>
            <div>
                <input  type="search" placeholder="Search for products..." name=""value="">
                <button ><i class="search-icon" ><svg width="17.82" height="16.834" viewBox="0 0 17.82 16.834">
                       <path
                         d="M0 6.318a6.282 6.282 0 003.744 5.652 7.006 7.006 0 007.025-.68l5.673 5.354a.871.871 0 001.133-.041.756.756 0 00.044-1.07l-5.673-5.354a6.022 6.022 0 00.219-7.469A6.894 6.894 0 004.676.29 6.354 6.354 0 000 6.318zM6.679 1.59a4.875 4.875 0 015.009 4.728 4.875 4.875 0 01-5.009 4.728A4.875 4.875 0 011.67 6.318 4.875 4.875 0 016.679 1.59z"
                         fill="white" class="path-selector"></path>
                     </svg></i><P>Search</P></button>
            </div>
            <div id="cartdiv">
             <div>  <i class="fa-solid fa-cart-shopping"></i>  <div id=circle></div> <p id="cart">Cart</p></div>
             <div><i class="fa-solid fa-user"></i> <p id="login">Login</p></div>
            </div>
        </div>
           
        <div id="stline"></div>

        <div id="m3">
           <div>
                 <p>HOME</p>
            <p>BABY</p>
            <p>BEAUTY</p>
            <p>HAIR</p>
            <p>FACE</p>
            <p>BODY</p>
            <p>GIFTY PACKS</p>
            <p>ALL PRODUCTS</p>
            <p>BLOG</p>
            <p>PLANT GOODNESS</p>
            <p>STORE LOCATOR</p>
           </div>
        </div>
    `
}

const leftarrow = ()=>{
    return `<svg fill="none" height="2rem" width="2rem" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle;">
        <polyline points="15 18 9 12 15 6"></polyline>
    </svg>`
}

const rightarrow = ()=>{
     return `<svg fill="none" height="2rem" width="2rem" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle;"><polyline points="9 18 15 12 9 6"></polyline></svg>`
}

export {navbar,leftarrow,rightarrow};


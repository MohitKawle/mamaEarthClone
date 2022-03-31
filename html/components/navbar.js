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
           
        <div id="stline" style="border: 0.5px solid #afacac;"></div>

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
        stroke-linecap="round" stroke-linejoin="round" style="display: inline-block;vertical-align: middle;">
        <polyline points="15 18 9 12 15 6"></polyline>
    </svg>`
}

const rightarrow = ()=>{
     return `<svg fill="none" height="2rem" width="2rem" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle;"><polyline points="9 18 15 12 9 6"></polyline></svg>`
}

const footer =() =>{
    return ` <div id=f1>
            <!-- **minif1 -->
            <div id="s1">
                <img width="38px" height="38px" src="https://mamaearthp.imgix.net/wysiwyg/mobile-truck.png?auto=format" srcset="https://mamaearthp.imgix.net/wysiwyg/mobile-truck.png?auto=format 44w,
                                      https://mamaearthp.imgix.net/wysiwyg/delivery2x.png?auto=format 155w"
                    sizes="(max-width: 767px) 22px, 3rem" loading="lazy" alt="">
                   <br>
                   <h4 style="color:#1d1d1d">Free Shipping</h4> 
                   <P style="color:#868686">On Orders Above Rs. 399</P>
            </div>
            <div id="s2">
                <div>
                    <img width="38px" height="38px" src="https://mamaearthp.imgix.net/wysiwyg/mobile-wallet.png?auto=format" srcset="https://mamaearthp.imgix.net/wysiwyg/mobile-wallet.png?auto=format 34w,
                                      https://mamaearthp.imgix.net/wysiwyg/Group_81512x.png?auto=format 127w"
                    sizes="(max-width: 767px) 17px, 2.75rem" loading="lazy" alt="">
                    <br>
                   
                    <h4 style="color:#1d1d1d">COD Available</h4>
                    <P style="color:#868686">@ Rs. 40 Per Order</P>
                </div>
                    <div> 
                        <P style="color:#1d1d1d ; font-size: 25px;">Have Queries or Concerns?</P>
                         <button id="cont">CONTACT US</button>
                    </div>
            </div>

        </div>
        <!-- ***minif2** -->
        <div id="f2">
            <div id="g">
                <div id="h1">PAYMENT</div>
                <div id="h2"><img src="https://mamaearthp.imgix.net/wysiwyg/noun_trusted_27146262x_6Ekja92.png?auto=format" alt="">100% Payment Protection, Easy Return Policy</div>
                <div id="h3">
                    <img width="60px" height="28px" src="https://mamaearthp.imgix.net/wysiwyg/visa2x.png?auto=format&amp;fit=scale"
                        loading="lazy" alt="">

                    <img width="60px" height="28px" src="https://mamaearthp.imgix.net/wysiwyg/master_card2x.png?auto=format&amp;fit=scale"
                        loading="lazy" alt="">
                    <img width="60px" height="28px"
                        src="https://mamaearthp.imgix.net/wysiwyg/american_express2x.png?auto=format&amp;fit=scale" loading="lazy" alt="">
                    <img width="60px" height="28px" src="https://mamaearthp.imgix.net/wysiwyg/net_banking2x.png?auto=format&amp;fit=scale"
                        loading="lazy" alt="">
                </div>
            </div>
            <div id="g2">
                <div id="i1">
                    <img loading="lazy" src="https://mamaearthp.imgix.net/wysiwyg/dermatology-tested-100x1002x.png?auto=format" alt="">
                    <br>
                    <p>Dermatologically Tested</p>
                </div>
                <div id="i2">
                    <img loading="lazy" src="https://mamaearthp.imgix.net/wysiwyg/fda-100x1002x.png?auto=format" alt="">
                    <br>
                    <p>FDA Approved</p>
                </div>
                <div id="i3">
                    <img loading="lazy" src="https://mamaearthp.imgix.net/wysiwyg/MadeSafeImages13Jan/madesafe13janlogo.png?auto=format">
                    <br>
                    <p>Made Safe Certified</p>
                </div>
            </div>
        </div>
          <!-- ********* -->
          <div id="link">
              <div>
                  <h2 style="color:#3d3d3d">USEFUL LINKS</h2>
                  <p>Privacy Policy</p>
                  <p>Returns</p>
                  <p>Terms & Conditions</p>
                  <p>Terms & Conditions- Cashback</p>
                  <p>FAQs</p>
                  <p>We’re Safe</p>
                  <p>Track Order</p>
                  <p>Contact Us</p>
                  <p>Sitemap</p>
                  <p>About Us</p>
              </div>
              <div>
                <h2 style="color:#3d3d3d">CATEGORIES</h2>
                <p>Baby</p>
                <p>Beauty</p>
                <p>Hair</p>
                <p>Face</p>
                <p>Body</p>
                <p>Gift Pack</p>
                <p></p>
              </div>
              <div>
                <h2 style="color:#3d3d3d">MY ACCOUNT</h2>
                <p>Account</p>
                <p>Orders</p>
                <p>Addresses</p>
               
              </div>
              <div id="award">
                <img loading="lazy" src="https://mamaearthp.imgix.net/wysiwyg/Best-Brand500x5002x.png?auto=format" alt="Economics Times"
                    title="Economics Times" class="Image__Img-sc-l95u5r-0 eyriMu">
              </div>
          </div>
          <!-- ** -->
          <div id="love">
              <div>
                <h3 style="color:#3d3d3d ; margin-left: 350px;"  class="Heading-sc-1wttbek-0 dauLlj heading">SHOW US SOME <i fill="currentColor" class="heart-icon"
                        style="display: inline-block;"><svg fill="currentColor" height="1.5rem" width="1.5rem" viewBox="0 0 1792 1792"
                            style="display: inline-block; color:red; vertical-align: middle;">
                            <path
                                d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z">
                            </path>
                        </svg></i> ON SOCIAL MEDIA</h3>
              </div>
              <div>
                <div  class="Flex-sc-1lsr9yp-0 cFwbLi SocialIcons-sc-1qisupg-0 jBpnmL icons-container"><a target="_blank" class=""
                        href="https://www.facebook.com/Mamaearthindia/"><i  style=" color: #5c5c5c;margin-left: 400px;"fill="currentColor" style="display: inline-block;"><svg
                                fill="none" height="1.5rem" width="1.5rem" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle;">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg></i></a><a target="_blank" class="" href="https://twitter.com/mamaearthindia?lang=en"><i
                           style=" color: #5c5c5c; margin-left: 10px;"  fill="currentColor" style="display: inline-block;"><svg fill="currentColor" height="1.5rem" width="1.5rem"
                                viewBox="0 0 1664 1792" style="display: inline-block; vertical-align: middle;">
                                <path
                                    d="M1620 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z">
                                </path>
                            </svg></i></a><a target="_blank" class="" href="https://www.instagram.com/mamaearth.in/?hl=en"><i
                          style=" color: #5c5c5c;margin-left: 10px;"  fill="currentColor" style="display: inline-block;"><svg fill="currentColor" height="1.5rem" width="1.5rem"
                                viewBox="0 0 1536 1792" style="display: inline-block; vertical-align: middle;">
                                <path
                                    d="M1024 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zM1162 896q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zM1270 486q0 38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zM768 266q-7 0-76.5-0.5t-105.5 0-96.5 3-103 10-71.5 18.5q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5 0.5 76.5-0.5 76.5 0 105.5 3 96.5 10 103 18.5 71.5q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-0.5 76.5 0.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5 0-105.5-0.5-76.5 0.5-76.5 0-105.5-3-96.5-10-103-18.5-71.5q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5 0-76.5 0.5zM1536 896q0 229-5 317-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124t-124-322q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z">
                                </path>
                            </svg></i></a><a target="_blank" class="" href="https://www.youtube.com/channel/UC5qhqSIcahBKKMEdLPFqeVA"><i
                         style=" color: #5c5c5c;margin-left: 10px;"   fill="currentColor" style="display: inline-block;"><svg fill="currentColor" height="1.5rem" width="1.5rem"
                                viewBox="0 0 1536 1792" style="display: inline-block; vertical-align: middle;">
                                <path
                                    d="M971 1244v211q0 67-39 67-23 0-45-22v-301q22-22 45-22 39 0 39 67zM1309 1245v46h-90v-46q0-68 45-68t45 68zM343 1027h107v-94h-312v94h105v569h100v-569zM631 1596h89v-494h-89v378q-30 42-57 42-18 0-21-21-1-3-1-35v-364h-89v391q0 49 8 73 12 37 58 37 48 0 102-61v54zM1060 1448v-197q0-73-9-99-17-56-71-56-50 0-93 54v-217h-89v663h89v-48q45 55 93 55 54 0 71-55 9-27 9-100zM1398 1438v-13h-91q0 51-2 61-7 36-40 36-46 0-46-69v-87h179v-103q0-79-27-116-39-51-106-51-68 0-107 51-28 37-28 116v173q0 79 29 116 39 51 108 51 72 0 108-53 18-27 21-54 2-9 2-58zM790 525v-210q0-69-43-69t-43 69v210q0 70 43 70t43-70zM1509 1276q0 234-26 350-14 59-58 99t-102 46q-184 21-555 21t-555-21q-58-6-102.5-46t-57.5-99q-26-112-26-350 0-234 26-350 14-59 58-99t103-47q183-20 554-20t555 20q58 7 102.5 47t57.5 99q26 112 26 350zM511 0h102l-121 399v271h-100v-271q-14-74-61-212-37-103-65-187h106l71 263zM881 333v175q0 81-28 118-38 51-106 51-67 0-105-51-28-38-28-118v-175q0-80 28-117 38-51 105-51 68 0 106 51 28 37 28 117zM1216 171v499h-91v-55q-53 62-103 62-46 0-59-37-8-24-8-75v-394h91v367q0 33 1 35 3 22 21 22 27 0 57-43v-381h91z">
                                </path>
                            </svg></i></a><a target="_blank" class="" href="https://in.pinterest.com/mamaearthindia/"><i
                       style=" color: #5c5c5c;margin-left: 10px;"     fill="currentColor" style="display: inline-block;"><svg fill="currentColor" height="1.5rem" width="1.5rem"
                                viewBox="0 0 1536 1792" style="display: inline-block; vertical-align: middle;">
                                <path
                                    d="M1536 896q0 209-103 385.5t-279.5 279.5-385.5 103q-111 0-218-32 59-93 78-164 9-34 54-211 20 39 73 67.5t114 28.5q121 0 216-68.5t147-188.5 52-270q0-114-59.5-214t-172.5-163-255-63q-105 0-196 29t-154.5 77-109 110.5-67 129.5-21.5 134q0 104 40 183t117 111q30 12 38-20 2-7 8-31t8-30q6-23-11-43-51-61-51-151 0-151 104.5-259.5t273.5-108.5q151 0 235.5 82t84.5 213q0 170-68.5 289t-175.5 119q-61 0-98-43.5t-23-104.5q8-35 26.5-93.5t30-103 11.5-75.5q0-50-27-83t-77-33q-62 0-105 57t-43 142q0 73 25 122l-99 418q-17 70-13 177-206-91-333-281t-127-423q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg></i></a><a class="socialEmailIcon" href="mailto:care@mamaearth.in"><i fill="currentColor"
                         style=" color: #5c5c5c;margin-left: 10px;"   style="display: inline-block;"><svg fill="currentColor" height="1.5rem" width="1.5rem" viewBox="0 0 20 20"
                                style="display: inline-block; vertical-align: middle;">
                                <path
                                    d="M1.574,5.286c0.488,0.262,7.248,3.894,7.5,4.029C9.326,9.45,9.652,9.514,9.98,9.514c0.328,0,0.654-0.064,0.906-0.199
                	s7.012-3.767,7.5-4.029C18.875,5.023,19.337,4,18.44,4H1.521C0.624,4,1.086,5.023,1.574,5.286z M18.613,7.489
                	c-0.555,0.289-7.387,3.849-7.727,4.027s-0.578,0.199-0.906,0.199s-0.566-0.021-0.906-0.199S1.941,7.777,1.386,7.488
                	C0.996,7.284,1,7.523,1,7.707S1,15,1,15c0,0.42,0.566,1,1,1h16c0.434,0,1-0.58,1-1c0,0,0-7.108,0-7.292S19.004,7.285,18.613,7.489z">
                                </path>
                            </svg></i></a></div>
              </div>
          </div>
          <!-- -**** -->
          <div id="last">
            <span>© 2022 Honasa Consumer Pvt. Ltd. All Rights Reserved</span>
          </div>`
}


export {navbar,leftarrow,rightarrow,footer};



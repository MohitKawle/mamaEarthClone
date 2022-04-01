const upi =()=>{
    return `<div id="payment_Form_l1">
    <p>Pay Using UPI ID</p>
    <div><p>Applied : Extra 5% Off with Your Order</p></div>
  </div>
  <p>Enter UPI ID (Google Pay, BHIM, PhonePe & more)</p>
  <input
    type="text"
    name="upi"
    id="upiF"
    placeholder="Enter your UPI ID"
  />`
}

const card =()=>{
    return `<div id="payment_Form_l1">
    <p>Pay Using Credit Or Debit Cards</p>
    <div><p>Applied : Extra 5% Off with Your Order</p></div>
  </div>
  <input
    type="text"
    name="cardF"
    id="card"
    placeholder="card number"
  />
  <br>
  <input type="number" placeholder="MM" id="month" name="month" min="1" max="12">
  <input type="number"  name="year" placeholder="YY" id="year" min="2022" max="2030"><br>
  <input type="number" name="cvv" id="cvv" placeholder="Enter cvv">`
};
const netBanking =()=>{
    return `  <div id="payment_Form_l1">
    <p>Net Banking</p>
    <div><p>Applied : Extra 5% Off with Your Order</p></div>
  </div>
  <div id="bank">
    <div id="hdfc"><img src="https://mamaearthp.imgix.net/wysiwyg/hdfc-logo.png?auto=format" alt="hdfclogo"><p>HDFC</p></div>
    <div id="sbi"><img src="https://mamaearthp.imgix.net/wysiwyg/sbi-logo.png?auto=format" alt="hdfclogo"><p>SBI</p></div>
    <div id="icici"><img src="https://mamaearthp.imgix.net/wysiwyg/icici-logo.png?auto=format" alt="hdfclogo"><p>ICICI</p></div>
    <div id="Axis"><img src="https://mamaearthp.imgix.net/wysiwyg/axis-logo.png?auto=format" alt="hdfclogo"><p>AXIS</p></div>
  </div>
  <select id="selectbank">
    <option value="">Select Bank</option>
    <option value="airtel_payment">Airtel Payment Bank</option>
    <option value="bankOfBaroda">Bank Of Baroda</option>
    <option value="BankOfMaharastra">BankOfMaharastra</option>
    <option value="BankOfIndia">Bank Of India</option>
    <option value="Pnb">Punjab National Bank</option>
    <option value="inb">Indian Bank</option>
  </select>`
}
const wallet =()=>{
    return ` <div id="payment_Form_l1">
    <p>Pay Using Online Wallets</p>
    <div><p>Applied : Extra 5% Off with Your Order</p></div>
  </div>
  <div id="wallets">
    <div id="phonepay"><img src="https://mamaearth.in/static/mamaearth/phonepe.png" alt="hdfclogo"></div>
    <div id="amazonpay"><img src="https://mamaearth.in/static/mamaearth/azpay.png" alt="hdfclogo"></div>
    <div id="freecharge"><img src="https://mamaearth.in/static/mamaearth/freecharge.png" alt="hdfclogo"></div>
    <div id="moviekwik"><img src="https://mamaearth.in/static/mamaearth/mobikwik.png" alt="hdfclogo"></div>
  </div>`
}
const cod =()=>{
    return ` <div id="payment_Form_l1">
    <p>Cash On Delivery</p>
</div>
<div id="cod_disadvantage">
  <p>Do you know you get an Extra 5% Off when you pay online? For everyone’s safety, we advise paying online to limit contact and help stop the spread of the virus.</p>
</div>`
}
export {upi, card,netBanking,wallet,cod}
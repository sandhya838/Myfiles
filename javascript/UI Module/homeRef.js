// sunday lecture
const home=`<H1 >FarmaFood</H1><br>


    <input type="text" id="name"><br>
    <input type="text" id="quantity"  >
    <input type="button" value="place Order" onclick="getOrder()">
    <br>
    <div id="orderStatus"></div>
     `


function getOrder(){
   let allorders=localStorage?.getItem('orders');
   allorders=allorders?JSON.parse(allorders):[]
   allorders.push( {name:document.getElementById('name').value,quantity:document.getElementById('quantity').value });
   localStorage?.setItem( "orders",  JSON.stringify(allorders))
   document.getElementById('orderStatus').innerHTML='<h3>Your order is placed</h3>'
}



// saturday lecture
// const home=`<H1>FarmaFood</H1><br>
// <!-- <button class="btn" onclick="se">Search</button></span> -->
// <div class="serched" id="serched">

// </div>
// <div class="buyer" id="buyer">

// </div>

// <div id="seller" class="seller js">
//      <!-- <div class="seller-img" id="4">
//         <div class="details">
//             <h3 id="name1"></h3>
//             <h5 id="price1">
//                 </h>
//         </div>

//     </div> -->

// </div>

// <br><br>
// <div class="cart-item" id="cart-item">

// </div>

// </div>`
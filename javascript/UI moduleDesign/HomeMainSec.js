const homePage=`<H1>FarmaFood</H1><br>
<p>Fruits are nature’s marvelous gift to humankind;
 indeed, they are life-enhancing medicines packed with vitamins,
  minerals, antioxidants, and many phytonutrients (Plant-derived micronutrients). 
  They are an absolute feast to our sight, not just because of their color and flavor 
  but of their unique nutrient profile that helps the human body be fit, rejuvenate, 
  and free of diseases!</p><br>
  <hr><br>
  <h1 style="color:red;">Product Details</h1><br>
  <div class="orderInpute">
  <span class="spanProd">Product Name: <input type="text" id="name"></span><br><br>
  <span class="spanProd">Quantity: <input type="text" id="quantity"></span><br><br>
  <span class="spanProd"><input type="button" class="ordBtn" value="place Order" onclick="getOrder()"></span>
  <br>
  <div id="orderStatus">     </div>
  </div>
  `





  function getOrder(){
    let allOrders=localStorage?.getItem('orders');
    allOrders=allOrders?JSON.parse(allOrders):[]
    allOrders.push( {name:document.getElementById('name').value,quantity:document.getElementById('quantity').value });
    localStorage?.setItem( "orders", JSON.stringify(allOrders));
    document.getElementById('orderStatus').innerHTML='<h3>Your order is placed</h3>'
 }

//  function getOrder(){
//      let allOrders=localStorage.getItem ? JSON.parse(localStorage.getItem("orders")) : [];
//      allOrders.push( {name:document.getElementById('name').value,quantity:document.getElementById('quantity').value });
//      localStorage?.setItem("orders",JSON.stringify(allOrders));
//     document.getElementById("orderStatus").innerHTML='<h3>Your Order is Placed</h3>'
//  }
 
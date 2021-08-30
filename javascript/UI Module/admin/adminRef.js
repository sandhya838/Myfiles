// sunday lecture
let tabaleData=`<table><tr><td>sr No</td> <td> Name</td> <td>Quantity</td></tr>`
let closeTable=`</table>`

let createTable =(list,htmlDiv)=>{
    let vegArr=localStorage?.getItem(list);
    vegArr= vegArr?JSON.parse(vegArr):[]
tableArr= vegArr.map((ele,i)=>{
       return( `<tr><td>${i+1}</td><td>${ele.name}</td><td>${ele.quantity}</td>
       <td><input type="button" value="Deliver Order" onclick="deliverOrder('${ele.name}')"></td>
       <td><input type="button" value="Cancel Order" onclick="cancelOrder('${ele.name}')"></td>  </tr>`)
    })
  console.log(tabaleData+ tableArr.join('')+closeTable)
   let allOrders= tabaleData+ tableArr.join('')+closeTable
   document.getElementById(htmlDiv).innerHTML=allOrders;
}


function deliverOrder(itemName){
    let vegArr=localStorage?.getItem("orders");
    vegArr= vegArr?JSON.parse(vegArr):[]
    let prodDelivered=vegArr.filter(ele=>ele.name===itemName)
    vegArr=vegArr.filter(ele=>ele.name!=itemName)
   
    localStorage.setItem('deliveredOrders',JSON.stringify(prodDelivered))
console.log(JSON.stringify(vegArr))
localStorage.setItem('orders',JSON.stringify(vegArr))
createTable('deliveredOrders','dOrders')
createTable('orders','allorders')

}

  let admin=`        </div>
<h3>Insert New Item</h3><br>
<Label>ID:   </Label><input id="id" type="text"><br><br>
<Label>Name: </Label><input id="name" type="text"><br><br>
<Label>Price:<input type="text" id="price"><br><br>
    <Label>Quantity:  </Label><input id="quantity" type="text"><br><br>
<Label>Image Path:  </Label><input id="image" type="text"><br><br>
<Label>Category:  </Label>
<input type="radio" id="veg" name="gender" value="veg">
<label for="veg">Vegitables</label>
<input type="radio" id="fruits" name="gender" value="fruits">
<label for="fruits">Fruits</label><br><br>

<input class="btn" type="reset" value="Reset">
<input type="button" value="Add Item" class="btn" onclick="addStock()"> </button><br>
</form>

<input type="button" value="Show All Orders" onclick="createTable('orders','allorders')"/>

<div id="allorders"> </div>
<div id="dOrders"> </div>
</div>`

 const adminNavbar=`<div class="header">
<div class="page-title">Admin</div>
</div>
<div class="menu" id="sticky">
<ul class="menu-ul">
    <a onclick="showPage('home')" class="a-menu">
        <li> Admin Home</li>
    </a>
    <a href="#" class="a-menu">
        <li>Manage stocks</li>
    </a>
    <a onclick="showPage('admin')" class="a-menu">
        <li>Orders</li>
    </a>
    <!-- <a href="#" class="a-menu"><li>cart</li></a> -->
</ul>
<div class="search-box">
    <form>
        <input id="inpt" type="text" placeholder=" Type to Search" name="search" class="search-input" />
        <i id="search" onclick="search()" class="fa fa-search" onclick=""></i>
        <!-- <i class="fa fa-shopping-cart"></i> -->
</div>
<button class="cartBtn" id="cart-btn">cart</button>

</div>`
















// // Saturday lecture
// let tabaleData=`<table><tr><td>sr No</td> <td> Name</td> <td>Quantity</td></tr>`
// let closeTable=`</table>`
// const vegArr=[{id:1,name:'veg1',quantity:200},
//             {id:2,name:'veg2',quantity:100},
//             ]
// let createTable =()=>{

// tableArr= vegArr.map(ele=>{
//        return( '<tr>'+ '<td>' + ele.id +'</td>+'+ '<td>' + ele.name +'</td>+'+ '<td>' + ele.quantity +'</td>+'+'</tr>')
//     })
//   console.log(tabaleData+ tableArr.join('')+closeTable)
//    return (tabaleData+ tableArr.join('')+closeTable)

// }




// let admin=` </div>
// <h3>Insert New Item</h3><br>
// <Label>ID:   </Label><input id="id" type="text"><br><br>
// <Label>Name: </Label><input id="name" type="text"><br><br>
// <Label>Price:<input type="text" id="price"><br><br>
//     <Label>Quantity:  </Label><input id="quantity" type="text"><br><br>
// <Label>Image Path:  </Label><input id="image" type="text"><br><br>
// <Label>Category:  </Label>
// <input type="radio" id="veg" name="gender" value="veg">
// <label for="veg">Vegitables</label>
// <input type="radio" id="fruits" name="gender" value="fruits">
// <label for="fruits">Fruits</label><br><br>

// <input class="btn" type="reset" value="Reset">
// <input type="button" value="Add Item" class="btn" onclick="addStock()"> </button><br>
// </form>
// ${createTable()}
// </div>`

// const adminNavbar=`<div class="header">
// <div class="page-title">Admin</div>
// </div>
// <div class="menu" id="sticky">
// <ul class="menu-ul">
//     <a onclick="showPage('home')" class="a-menu">
//         <li> Admin Home</li>
//     </a>
//     <a href="#" class="a-menu">
//         <li>Manage stocks</li>
//     </a>
//     <a onclick="showPage('admin')" class="a-menu">
//         <li>Orders</li>
//     </a>
//     <!-- <a href="#" class="a-menu"><li>cart</li></a> -->
// </ul>
// <div class="search-box">
//     <form>
//         <input id="inpt" type="text" placeholder=" Type to Search" name="search" class="search-input" />
//         <i id="search" onclick="search()" class="fa fa-search" onclick=""></i>
//         <!-- <i class="fa fa-shopping-cart"></i> -->
// </div>
// <button class="cartBtn" id="cart-btn">cart</button>
// </div>`


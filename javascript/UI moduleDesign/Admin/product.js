
let tabaleData=`<table><tr><td>sr_No&nbsp;&nbsp;&nbsp;</td><td> Name&nbsp;&nbsp;&nbsp;</td> <td>Quantity&nbsp;&nbsp;</td></tr>`
let  closeTable=`</table>`

let createTable=(list,htmlDiv)=>{
    let vegArr=localStorage?.getItem(list);
    vegArr=vegArr?JSON.parse(vegArr):[]
    tableArr=vegArr.map((ele,i)=>{
        return(`<tr><td>${i+1}</td><td>${ele.name}</td><td>${ele.quantity}</td>
        <td><input type="button" value="Deliver Order" onclick="deliverOrder('${ele.name}')">&nbsp;&nbsp;</td> 
        <td><input type="button" value="Cancel Order" onclick="cancelOrder('${ele.name}')"></td>  </tr>`)
    })
    // console.log(tabaleData+ tableArr.join('')+closeTable);
    let allorders=tabaleData+ tableArr.join('')+closeTable;
    document.getElementById(htmlDiv).innerHTML=allorders;
}

function deliverOrder(itemName){
    let vegArr=localStorage?.getItem("orders");
    vegArr=vegArr?JSON.parse(vegArr):[];
    let prodDelivered=vegArr.filter(ele=>ele.name===itemName);
    vegArr=vegArr.filter(ele=>ele.name!=itemName);
    prodDelivered+=vegArr;
    localStorage.setItem('deliveredOrders',JSON.stringify(prodDelivered));
    localStorage.setItem('orders',JSON.stringify(vegArr));
    createTable('deliveredOrders','dOrders');
    createTable('orders','allorders')

}


function cancelOrder(itemName){
    let vegArr=localStorage?.getItem("orders");
    vegArr=vegArr?JSON.parse(vegArr):[];
    let prodCancle=vegArr.filter(ele=>ele.name===itemName);
    vegArr=vegArr.filter(ele=>ele.name!=itemName);
    localStorage.setItem('cancleOrders',JSON.stringify(prodCancle));
    localStorage.setItem('orders',JSON.stringify(vegArr));
    createTable('cancleOrders','COrders');
    createTable('orders','allorders')

}


let Product=`<br><h1>Product Details</h1>

<input type="button" class="prodInpute" value="All Orders" onclick="createTable('orders','allorders')"/><br><br>

<div id="allorders" class="allOrder"> 

</div><br>
<hr>
<div class="orderContainer">
        <h2>Deliver Order Details</h2>
        <div id="dOrders" class="deliverOrd">
            
        </div>
<br><br>
        <h2>Cancle Order Details</h2>
        <div id="COrders" class="cancleOrd">
            
        </div>
</div>`
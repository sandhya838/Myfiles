const adminPage=`</div class="InputContent">
<div class="subContent">
<p class="headingName">Insert New Item</p><br>
<Label> ID:   </Label><input id="id" type="text"><br><br>
<Label> Name: </Label><input id="name" type="text"><br><br>
<Label> Price:<input type="text" id="price"><br><br>
    <Label> Quantity:  </Label><input id="quantity" type="text"><br><br>
<Label> Image Path:  </Label><input id="image" type="text"><br><br>
<Label> Category:  </Label>
<input type="radio" id="veg" name="gender" value="veg">
<label for="veg">Vegitables</label>
<input type="radio" id="fruits" name="gender" value="fruits">
<label for="fruits">Fruits</label><br><br>

<input class="btn" type="reset" value="Reset">
<input type="button" value="Add Item" class="btn" onclick="addStock()"> </button><br>
</form>
</div>
</div>`

const adminNavBar=`<div class="header">
<div class="page-title"><img src="./Admin/AdminLogo.png" alt="Logo" style="height: 80px; width: 70px;"> Admin</div>
</div>
<div class="menu" id="sticky" style="height: 60px;" >
<ul class="menu-ul" style="margin-top:8px;">
    <a onclick="showMainPage('home')" class="a-menu">
        <li>Home</li>
    </a>
    </a>
    <a onclick="showMainPage('Product')" class="a-menu">
    <li>Product</li>
</a>
    <a onclick="showMainPage('login')" class="a-menu">
        <li>Login</li>
    </a>
    <a onclick="showMainPage('Manage Article')" class="a-menu">
        <li>Manage Article</li>
    </a>
    <a onclick="showMainPage('Manage Gallary')" class="a-menu">
    <li>Manage Gallary</li>
</a>
</ul>
<button class="signOut" id="signOut">Sign Out</button>
</div>`
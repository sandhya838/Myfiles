const navBar=`<div class="header">
<div class="page-title">Fresh Fruits</div>
</div>
<div class="menu" id="sticky">
<ul class="menu-ul">
    <a onclick="showMainPage('home')" class="a-menu">
        <li>Home</li>
    </a>
    <a href="#" class="a-menu">
        <li>Deals</li>
    </a>
    <a onclick="showMainPage('admin')" class="a-menu">
        <li>Admin</li>
    </a>
    <!-- <a href="#" class="a-menu"><li>cart</li></a> -->
</ul>
<div class="search-box">
    <form>
        <input id="inpt" type="text" placeholder=" Type to Search" name="search" class="search-input" />
        <i id="search" onclick="search()" class="fa fa-search" onclick=""></i>
        <!-- <i class="fa fa-shopping-cart"></i> -->
    </form>
</div>
<button class="cartBtn" id="cart-btn">cart</button>
</div>
`
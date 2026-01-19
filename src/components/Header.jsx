import React from 'react'
function Header(){
    return(
    <header>
      <div className="header_top">
        <div className="container">
          <div className="header_wrapper">
            <ul>
              <li>
                <a href="">+8809613821489</a>
              </li>
              <li>
                <a href="">support@falaqfood.com</a>
              </li>
            </ul>
            <a className="header_track_btn" href="">Track Your Order </a>
          </div>
        </div>
      </div>
      <nav>
        <div className="container">
          <div class="nav_wrapper">
            <a href="#">
            <img src="./images/logo.png" alt=""/>
          </a>
          <ul>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="search_box">
          <input type="text" placeholder="search for products"/>
          <button> <i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <div className="user_cart_icon">
          <button><i className="fa-regular fa-user"></i></button>
          <button><i className="fa-solid fa-bag-shopping"></i></button>
          </div>
          
          </div>
        </div>
      </nav>
    </header>
    );
}

export default Header;
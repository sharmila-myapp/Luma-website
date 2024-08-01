/*import React from 'react'

const Header = () => {
  return (
     <div>
        <div className="header"></div>
          <div className="Line1"></div>
                <div className="A">
                  <p>This is a demo store to test your test automaiton scripts. No orders will be fulfilled. If you are facing any issue, email us at hello@softwaretestingboard.com.</p>
                </div>
               <nav>
                    <div class="div1">
                      <p><a href="Support.js" className="link">Support This Project</a></p>
                      <p><a href="SignIn.js" className="link">Sign In</a></p>
                      <p class="or">or</p>
                      <p><a href="Create.js" className="link">Create an Account</a></p>
                   </div>
                </nav>
      </div>
  )
}

export default Header*/


import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdAccountBox } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";









const Header = () => {
  return (
    <div>
      <header>
        <div className='header1'>
          <p className='cls1'><li><a href="currency.js">$currency</a></li></p>
              <div className='cls2'>
              <li><a href="FaPhone.js"><FaPhone />12345</a></li>
              </div>
              <div className='cls3'>
              <li><a href="MyAccount.js"><MdAccountBox />myAccount</a></li>
              </div>
              <div className='cls4'>
              <li><a href="Wish.js"><FaHeart />wishList</a></li>
              </div>
              <div className='cls5'>
             <li><a href="Cart.js"><FaShoppingCart />cart</a></li> 
              </div>
              <div className='cls6'>
              <li><a href="Checkout.js"><IoBagCheckOutline />checkout</a></li>
              </div>

                  <div className='cls7'>QaFox.com
                  </div>
                  <div >
                    <button  className='cls9'><FaShoppingCart />0 items(s)-$0.00</button>
                   </div>
              <div className='cls10'>line1


                <ul className='cls11'>
                  
                <li>
                  <a href="Desktop.js">Desktop <ion-icon name="chevron-down-outline" class="down-icon"></ion-icon></a>
                      
                        <ul className='cls12'>
                            <li><a href="Desktop.js/Pc.js">pc(0)</a></li>
                            <li><a href="Desktop.js/Mac.js">Mac(1)</a></li>
                            <li><a href="Desktop.js/Show.js">show all Desktops</a></li>
                        </ul>
                    
                </li>
                  
                  <li><a href="Laptop.js">Laptops&Notebooks</a></li>
                  <li><a href="Compounents.js">Compounents</a></li>
                  <li><a href="Tablets.js">Tablets</a></li>

                </ul>
                <div className='laddu'>
                  <input type="text" name="search" placeholder='search' className='y1'></input>
                  <button type="button" className="y2"><FaSearch />
                  </button>
                </div>
              </div>

              

              
              

              

          
        

        </div>
          
        
              
            
          
      </header>
    
      
    </div>
  )
}

export default Header

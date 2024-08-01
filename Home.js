/*import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";



const Home = ({list,handleChange,handleDelete}) => {
  return (
    <div>
      <ul>
        {
          list.map((li) => (
          <li>
            <input type="checkbox"checked={li.checked}onChange={()=>handleChange(li.id)}/>
            <label>{li.item}</label>
            <FaRegTrashAlt onClick ={()=> handleDelete(li.id)}/>
            

          </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Home*/

import React from 'react'

const Home = () => {
  const demo1 = () => {
    document.getElementById("b1").src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/w/s/ws12-blue_main_1.jpg"
  }
  const demo2 = () => {
    document.getElementById("b1").src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/w/s/ws12-orange_main_1.jpg"
  }
  const demo3 = () => {
    document.getElementById("b1").src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/w/s/ws12-purple_main_1.jpg"
  }
  const demo4 = () => {
    document.getElementById("b2").src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/w/t/wt09-purple_main_1.jpg"
  }
  const demo5 = () => {
    document.getElementById("b2").src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/w/t/wt09-white_main_1.jpg"
  }
  const demo6 = () => {
    document.getElementById("b2").src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/w/t/wt09-yellow_main_1.jpg"
  }
  const demo7 = () => {
    document.getElementById("b3").src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/m/t/mt07-gray_main_1.jpg"
  }
  const demo8 = () => {
    document.getElementById("b4").src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/m/h/mh07-black_main_1.jpg"
  }
  const demo9 = () => {
    document.getElementById("b4").src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/m/h/mh07-gray_main_1.jpg"
  }
  const demo10 = () => {
    document.getElementById("b4").src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/m/h/mh07-green_main_1.jpg"
  }

  return (
    <div>
             <div>
                  <img src="https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/images/logo.svg" alt="" className="P"/>
               </div>
              <div >
                  <img src="https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-main.jpg" alt="" className="L"/>
              </div>
              <div className="T">
                    <p>New Luma Yoga Collection</p>
                    <p>Get fit amd look fab in new<br></br>seasonal styles</p>
                     <button className="btn1"><a href="New-yoga.js">Shop New Yoga</a></button>
              </div>
              <div class="mdiv2-2">
                    <p>
                        <img src="https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-t-shirts.png" alt="yellow"></img>
                        <p class="p3">Even more ways to mix and match</p>
                        <p class="p4">Buy 3 Luma tees get a 4th free</p>
                        <a href="Tees.js">Shop Tees <ion-icon name="chevron-forward-outline"></ion-icon></a>
                    </p>
                </div>
                  <div>
                       <img src="https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-pants.jpg" alt="" className='img1'></img>
                  </div>
                 <div className="M">
                          <h1>20% OFF</h1>
                          <p>luma pants When you<br></br>shop today*<br></br><br></br></p>
                          <a href="Shop.js">Shop pants <ion-icon name="chevron-forward-outline"></ion-icon></a>
                  </div>

                  <div>
                      <img src="https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-erin.jpg" alt=""  className='O'/>
                   </div>
                    <div className="bobby">
                        <h1>Take it from <br></br>Erin<br></br></h1>
                        <p>Luma Founder erin<br></br>Renny shares Her<br></br>favorites!</p>
                        <a href="Erin-revommends.js">Shop Erin Recommends <ion-icon name="chevron-forward-outline"></ion-icon></a>
                      </div>
                     <div>
                        <img src="https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-performance.jpg" alt=""className="Q" />
                    </div>
                    <div className="X"><p>Science Meet</p>
                          <p>performance</p>
                          <p>Wiking to raingear,Luma<br></br>
                          covers you</p>
                          <a href="Performance.js">Shop Performance <ion-icon name="chevron-forward-outline"></ion-icon></a>
                    </div>
                  <div>
                      <img src="https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-eco.jpg" alt="" className="mom"></img>
                  </div>
                <div className="dad">
                    <p>Twice around,twice as nice<br>
                     </br><br></br>Find conscientious,comfy clothing our eco-friendly<br></br>Collection</p>
                     <a href="Shop Eco-Friendly.js">Shop Eco-Friendly<ion-icon name="chevron-forward-outline"></ion-icon></a>
                </div>
              
                 <div className='akka'>
                        <p>Hot Sellers</p>
                  </div>
                    <div className='bal'> Here is What's trending on luma right now
                    </div><br></br>

                 <div class="mdiv4">
                    <div class="mdiv4-1">
                        <img src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/w/s/ws12-orange_main_2.jpg" alt="Orange"  id="b1"></img>
                        <p class="p13">Radiant Tee</p>
                        <p class="p14">As low as <h1>$22.00</h1></p>
                        <p class="p15"><button>XS</button><button>S</button><button>M</button><button>L</button><br></br><button>XL</button></p>
                        <p><button id="bt1" onClick={demo1}></button><button id="bt2" onClick={demo2}></button><button id="bt3" onClick={demo3}></button></p>
                        <button class="p16">Add to cart</button>
                     </div>
                    <div class="mdiv4-2">
                        <img src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/w/t/wt09-white_main_1.jpg" alt="white" id="b2"></img>
                        <p class="p13">Breathe-Easy Tank</p>
                        <p class="p14">As low as<h1>$34.00</h1></p>
                        <p class="p15"><button>XS</button><button>S</button><button>M</button><button>L</button><br></br><button>XL</button></p>
                        <p><button id="bt4" onClick={demo4}></button><button id="bt5" onClick={demo5}></button><button id="bt6" onClick={demo6}></button></p>
                        <button class="p16">Add to cart</button>
                      </div>
                      <div class="mdiv4-3">
                        <img src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/m/t/mt07-gray_main_1.jpg" alt="gray" id="b3"></img>
                        <p class="p13">Argus All-Weather Tank</p>
                       <p class="p14">As low as<h1>$22.00</h1></p>
                        <p class="p15"><button>XS</button><button>S</button><button>M</button><button>L</button><br></br><button>XL</button></p>
                        <p><button id="bt7" onClick={demo7}></button></p>
                        <button class="p16">Add to cart</button>
                      </div>
                    <div class="mdiv4-4">
                        <img src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/m/h/mh07-gray_main_2.jpg" alt="Hoodie" id="b4"></img>
                       <p class="p13">Hero Hoodie</p>
                        <p class="p14">As low as<h1>$54.00</h1></p>
                        <p class="p15"><button>XS</button><button>S</button><button>M</button><button>L</button><br></br><button>XL</button></p>
                        <p><button id="bt8" onClick={demo8}></button><button id="bt9" onClick={demo9}></button><button id="bt10" onClick={demo10}></button></p>
                        <button class="p16">Add to cart</button>
                      </div>
                    <div class="mdiv4-5">
                           <img src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/m/b/mb02-gray-0.jpg" alt="back pack"></img>
                          <p class="p13">Fusion Backpack</p>
                          <p class="p14">As low as<h1>$59.00</h1></p>
                          <button class="p16">Add to cart</button>
                      </div>

                  </div>
    
                      
    </div>
  )
}

export default Home













import React from 'react'

const Navbar = () => {
  return (
    <div class="div3">
    <ul class="ul1">
        <li><a href="What's-new.js">What's New</a></li>
        <li><a href="Women.js">Women <ion-icon name="chevron-down-outline" class="down-icon"></ion-icon></a>
            <div>
            <ul class="ul2">
                <li><a href="Women.js/Tops.js">Tops <ion-icon name="chevron-forward-outline"></ion-icon></a>
                    <div>
                    <ul class="ul3">
                        <li><a href="Women.js/Jackets.js">Jackets</a></li>
                        <li><a href="Women.js/Hoodies-Sweatshirts.js">Hoodies & Sweatshirts</a></li>
                        <li><a href="Women.js/Tees.js">Tees</a></li>
                        <li><a href="Women.js/Bras-Tanks.js">Bras & Tanks</a></li>
                    </ul>
                    </div>
                </li>
                <li><a href="Women.js/Bottoms.js">Bottoms <ion-icon name="chevron-forward-outline"></ion-icon></a>
                    <div>
                    <ul class="ul4">
                        <li><a href="Women.js/Pants.js">Pants</a></li>
                        <li><a href="Women.js/Shorts.js">Shorts</a></li>
                    </ul>
                    </div>
                </li>
            </ul>
            </div>
        </li>
        <li><a href="Men.js">Men <ion-icon name="chevron-down-outline" class="down-icon"></ion-icon></a>
            <div>
            <ul class="ul5">
                <li><a href="Men.js/Tops.js">Tops <ion-icon name="chevron-forward-outline"></ion-icon></a>
                    <div>
                    <ul class="ul6">
                        <li><a href="Men.js/Jackets.js">Jackets</a></li>
                        <li><a href="Men.js/Hoodies-Sweatshirts.js">Hoodies & Sweatshirts</a></li>
                        <li><a href="Men.js/Tees.js">Tees</a></li>
                        <li><a href="Men.js/Tanks.js">Tanks</a></li>
                    </ul>
                    </div>
                </li>
                <li><a href="Men.js/Bottoms.js">Bottoms <ion-icon name="chevron-forward-outline"></ion-icon></a>
                    <div>
                    <ul class="ul7">
                        <li><a href="Men.js/Pants.js">Pants</a></li>
                        <li><a href="Men.js/Shorts.js">Shorts</a></li>
                    </ul>
                    </div>
                </li>
            </ul>
            </div>
        </li>
        <li><a href="Gear.js">Gear <ion-icon name="chevron-down-outline" class="down-icon"></ion-icon></a>
            <div>
            <ul class="ul8">
                <li><a href="Gear.js/Bags.js">Bags</a></li>
                <li><a href="Gear.js/Fitness-equipment.js">Fitness Equipment</a></li>
                <li><a href="Gear.js/Watches.js">Watches</a></li>
            </ul>
            </div>
        </li>
        <li><a href="Training.js">Training <ion-icon name="chevron-down-outline" class="down-icon"></ion-icon></a>
            <div>
            <ul class="ul9">
                <li><a href="Training.js/Video-Download.js">Video Download</a></li>
            </ul>
            </div>
        </li>
        <li><a href="Sale.js">Sale</a></li>
    </ul>
</div>

  )
}

export default Navbar


    
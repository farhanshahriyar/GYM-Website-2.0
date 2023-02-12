import React from 'react'
import './Product.css'
import P1 from '../Assets/products/1.png'
import P2 from '../Assets/products/2.png'
import P3 from '../Assets/products/3.png'
import P4 from '../Assets/products/4.png'

const Product = () => {
return (
<>
    <section class="product-section">
        <div className="section-header">
            <h3>What's New</h3>
            <h2>SHOP THE LATEST</h2>
        </div>

        <div class="section-context">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur</p>
        </div>
        <div class="product-container">
            <div class="product-item">
                <img src={P1} alt="Product 1" />
                <p class="product-name">Rogue HG 2.0 Bumper Plates</p>
                <p class="product-price"><s>$409</s><span>$300</span></p>
            </div>
            <div class="product-item">
                <img src={P2} alt="Product 2" />
                <p class="product-name">The Ohio Bar - Cerakote</p>
                <p class="product-price">$300</p>
            </div>
            <div class="product-item">
                <img src={P3} alt="Product 3" />
                <p class="product-name">Rogue Adjustable Bench 3.0</p>
                <p class="product-price">$300</p>
            </div>
            <div class="product-item">
                <img src={P4} alt="Product 4" className='product-img' />
                <p class="product-name">Rogue USA Nylon Lifting Belt</p>
                <p class="product-price"><s>$60</s><span>$30</span></p>
            </div>
        </div>
        <button className='btn-product'>VIEW ALL PRODUCTS</button>
    </section>
</>
)
}

export default Product
import React from 'react'
import './Lastpart.css'
import { GrTwitter } from 'react-icons/gr'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Lastpart = () => {
return (
<>
    <section>
        <div className="lastpart-container">
            <div className="lastpart-item">
                <div className="lastpart-left-1">
                    <h1 className="logo">LOGO.</h1>
                    <p>Be the first who learns about our
                        great promotions!</p>
                    <h3>Follow us</h3>
                    <div className="social-icons">
                        <a href="#"><GrTwitter></GrTwitter></a>
                        <a href="#"><FaFacebookF></FaFacebookF></a>
                        <a href="#"><FaInstagram></FaInstagram></a>
                    </div>
                </div>
                <div className='middle-part'>
                    <div className="lastpart-left-2">
                        <h2 className='lastpart-heading'>Products</h2>

                        <p>New Arrival</p>
                        <p>Best Seller</p>
                        <p>On Sale</p>
                        <p>All Collection</p>
                    </div>
                    <div className="lastpart-center">
                        <h2 className='lastpart-heading'>CATEGORY</h2>

                        <p>Barbells</p>
                        <p>Plates</p>
                        <p>Benches</p>
                        <p>Appareal</p>
                        <p>Straps & Supports</p>
                    </div>
                    <div className="lastpart-right-2">
                        <h2 className='lastpart-heading'>Info</h2>

                        <p>About</p>
                        <p>Blog</p>
                        <p>Feature</p>
                        <p>Store Location</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy </p>
                    </div>
                </div>
                <div className="lastpart-right-1">
                    <h2>SUBSCRIBE</h2>

                    <p>Subscribe our newsletter and get
                        discount 30% off</p>
                    <div className='lastpart-input'>
                        <input type="text" placeholder="Enter your email..." /><button>Sign Up</button>
                    </div>
                </div>
            </div>
            <div className="lastpart-right-1-clone">
                    <h2>SUBSCRIBE</h2>

                    <p>Subscribe our newsletter and get
                        discount 30% off</p>
                    <div className='lastpart-input'>
                        <input type="text" placeholder="Enter your email..." /><button>Sign Up</button>
                    </div>
                </div>
        </div>
    </section>
</>
)
}

export default Lastpart
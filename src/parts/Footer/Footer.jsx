import React from 'react'
import './Footer.css'
import P1 from '../Footer/images/1.png'
import P2 from '../Footer/images/2.png'
import P3 from '../Footer/images/3.png'
import P4 from '../Footer/images/4.png'
import P5 from '../Footer/images/5.png'

const Footer = () => {
  return (
    <>
      <section class="footer-section">
        <div className="footer-header">
            <h3>gallery</h3>
            <h1 className='header-text'>INSTAGRAM</h1>
        </div>
        <div class="footer-container">
            <div class="footer-item">
                <img src={P1} alt="img 1" />
            </div>
            <div class="footer-item">
                <img src={P2} alt="img 2" />
              
            </div>
            <div class="footer-item">
                <img src={P3} alt="img 3" />
              
            </div>
            <div class="footer-item">
                <img src={P4} alt="img 4" />
         
            </div>
            <div class="footer-item">
                <img src={P5} alt="img 5" />
            </div>
        </div>
        <hr></hr>
        <div className="footer-bottom">
            <div className="footer-bottom-left">
                </div>
            </div>
    </section>
      
    </>
  )
}

export default Footer

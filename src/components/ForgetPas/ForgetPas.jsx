import React from 'react'
import './ForgetPas.css'
import Announcement from '../../parts/Announcement/Announcement'
import Header from '../../parts/Header/Header'
import Lastpart from '../../parts/Lastpart/Lastpart'

const ForgetPas = () => {
  return (
    <>
    <Announcement />
    <Header />
    <section className='login-part'>
        <div class="forget-container">
            <h2>Reset your password</h2>
            <form className='login-form'>
            <p className='forget-text'>We'll send you an email to reset your password.</p>
                <label for="email">Email</label>
                <input type="text" placeholder="your@email.com" />
                <div style={{display: 'flex' , alignItems: 'center', gap: '25px', marginTop: '40px'}}>
                <button id='form-btn'>Reset</button>
                <p onClick={()=> window.location.href='/login'}  class="cancel-pass">Cancel</p>
                </div>
            </form>
           <div className="new-account-part">
           <h3 className='new-account'>New Customer?</h3>
            <p className='new-account-content'>Sign up for an account to take advantage of order tracking and history as well as pre-filled forms during checkout on subsequent orders.</p>
            <button className='new-account-btn'>Register</button>
           </div>
        </div>
    </section>
    <Lastpart />
    </>
  )
}

export default ForgetPas

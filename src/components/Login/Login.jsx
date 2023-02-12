import React from 'react'
import './Login.css'
import Announcement from '../../parts/Announcement/Announcement'
import Header from '../../parts/Header/Header'
import Lastpart from '../../parts/Lastpart/Lastpart'

const Login = () => {
return (
<>
    <Announcement />
    <Header />
    <section className='login-part'>
        <div class="login-container">
            <h2>Log in</h2>
            <form className='login-form'>
                <label for="email">Email</label>
                <input type="text" placeholder="your@email.com" />
                <label for="password">Password</label>
                <input type="password" placeholder="****************" />
                <div style={{display: 'flex' , alignItems: 'center', gap: '25px', marginTop: '40px'}}>
                <button id='form-btn'>LOGIN</button>
                <p onClick={()=> window.location.href='/forget'}  class="forgot-password">Forget your password?</p>
                </div>
            </form>
           <div className="new-account-part">
           <h3 className='new-account'>New Customer?</h3>
            <p className='new-account-content'>Sign up for an account to take advantage of order tracking and history as well as pre-filled forms during checkout on subsequent orders.</p>
            <button onClick={()=> window.location.href='/register'}  className='new-account-btn'>Register</button>
           </div>
        </div>
    </section>
    <Lastpart />
</>
)
}

export default Login
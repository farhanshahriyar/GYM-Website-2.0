import React from 'react'
import Announcement from '../../parts/Announcement/Announcement'
import Header from '../../parts/Header/Header'
import Lastpart from '../../parts/Lastpart/Lastpart'
import './Register.css'

const Register = () => {
  return (
    <>
      <Announcement />
    <Header />
    <section className='login-part'>
        <div class="login-container">
            <h2>Sign up</h2>
            <form className='login-form'>
                <label for="email">First name</label>
                <input type="text" placeholder="enter" />
                <label for="email">Last name</label>
                <input type="text" placeholder="your@email.com" />
                <label for="email">Email</label>
                <input type="text" placeholder="your@email.com" />
                <label for="password">Password</label>
                <input type="password" placeholder="****************" />
                <div style={{display: 'flex' , alignItems: 'center', gap: '25px', marginTop: '40px'}}>
                <button id='regform-btn'>register</button>
                </div>
            </form>
        </div>
    </section>
    <Lastpart />
    </>
  )
}

export default Register

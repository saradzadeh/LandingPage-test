import './Login.css';
import React, { Component } from 'react'
import {HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom'



  export default function Login(){
    return (
        <Router>
            
        <div>
            <p className='nav-bar-logo'>NEW STYLE</p>
        </div>

        <Route>
        <nav>
        <Link to="/">
        <div className='home-in-login'>
            <p>Home</p>
            </div>
        </Link>
        </nav>

        <div className='login-form'>
            <span>Email</span> <input className='email' type="email"/>
            <span>Password</span> <input className='pass' type="password"/>
            <button>Sign Up</button>
        </div>

        <footer>
            <section className='line'>   
            </section>
            <p className='footer'>&copy;copy right 2021 by new style</p>
        </footer>

        </Route>
        </Router>
    )
}

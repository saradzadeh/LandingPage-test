import './Product.css';
import React, { Component } from 'react'
import {HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom'



    export default function Product(){
        return (           
            <Router>

                <div>
                    <p className='nav-bar-logo'>NEW STYLE</p>
                </div>   

                <Route>
                    <nav className='nav-in-product'>
                        <Link to='/'>
                            <div className='home-in-product'>
                                <p>Home</p>
                            </div>
                        </Link>
                    </nav>

                    <h1>DO NOT MISS OUR NEW COLLECTION</h1>

                    <div className='product-items'>
                        <img className='product-image' src="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGZhc2hpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                        <p>BLACK COAT <span>125$</span></p>

                        <img className='product-image' src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGZhc2hpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                        <p>BLUE SHOES <span>160$</span></p>

                        <img className='product-image' src="https://images.unsplash.com/photo-1571513722275-4b41940f54b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fGZhc2hpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                        <p>WHITE SET<span>350$</span></p>

                        <img className='product-image' src="https://images.unsplash.com/photo-1606391901318-07003db08d63?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGZhc2hpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                        <p>PURPLE DRESS<span>200$</span></p>
                    </div>

                    <footer>
                        <section className='line'> </section>
                        <p className='footer'>&copy;copy right 2021 by new style</p>
                    </footer>

                </Route>
            </Router>
        )
    }

// add the right routes here
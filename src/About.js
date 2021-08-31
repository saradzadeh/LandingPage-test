import './About.css';
import React, { Component } from 'react'
import {HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom'



    export default function About(){
        return (
            <Router>
                <Route>
                    <nav className='nav-in-about'>
                        <Link to='/'>
                            <div className='home-in-about'>
                                <p className='home-panel'>Home</p>
                            </div>
                        </Link>
                    </nav>

                    <div className='line-style'></div>
                    <h1 className='header-about'>ABOUT US</h1>

                    <div className='about-grid'>
                        <p className='text-about'>
                            While some exclusive brands may claim the label haute couture, the term is technically limited to members of the Chambre Syndicale de la Haute Couture[8] in Paris.[5] Haute couture is more aspirational; inspired by art and culture, and in most cases, reserved for the economic elite.

                            Fashion is also a source of art, allowing people to display their unique tastes and styling.[9] Different designers are influenced by outside stimuli and reflect this inspiration in their works. For example, Gucci's 'stained green' jeans[10] may look like a grass stain, but to many others, they display purity, freshness, and summer.[1]
                        </p>
                        <img className='image-about' src="https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGZhc2hpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />

                        <footer>
                            <section className='line'>   
                            </section>
                            <p className='footer'>&copy;copy right 2021 by new style</p>
                        </footer>
                    </div>

                </Route>
            </Router>
        )
    }

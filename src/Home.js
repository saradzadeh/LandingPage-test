import './Home.css';
import {HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import ImageSlider from './ImageSlider';





export default function Home(){
    return (
        <Router>
            <Route>
                <div className='big-box'>
                    <nav className='nav-bar-grid'>
                        
                        <div >
                            <p className='nav-bar-logo'>NEW STYLE</p>
                        </div>
                        
                        <div className='nav-bar-links'>
                            
                            <Link to='/about'>
                                <div className='about'>
                                <p>ABOUT</p>
                                </div>      
                            </Link>

                            <Link to='/login'>
                                <div className='login'>
                                <p>LOGIN</p>
                                </div>
                            </Link>

                            <Link to='/product'>
                                <div className='product'>
                                <p>PRODUCTS</p>
                                </div>
                            </Link>
                            
                        </div>
                    </nav>


                    <div>
                        <ImageSlider /> 
                    </div>
                    

                </div>

                    <div>
                        <h1>
                            THE BEST NEW STYLE IDEAS
                        </h1>
                        <p className='text'>
                            As noted by fashion scholar Susan B. Kaiser, everyone is forced to appear, that is, there is no unmediated way of being before others.[4] Whether we want it or not, everyone appearing before another is evaluated by the dress, their attire. This most commonly means how one looks, what colors, materials, and silhouette one wears on the body. Even if the garments are all the same, they will appear different; if the item is washed, folded, mended, or new.

                            The term fashion is plagued by its many different uses, and by the unclear application of the concept. For example, the term connotes difference, but also sameness. It signifies the latest distinction and trend, as well as the return of the old. While it may be defined by an insular and esteemed aesthetic elite, who make a look exclusive, this look is often using references from those excluded from making the distinction.
                            
                            Whereas a trend often connotes a peculiar aesthetic expression and often lasting shorter than a season, fashion is a distinctive and industry-supported expression traditionally tied to the fashion season and collections.[5] Style is an expression that lasts over many seasons and is often connected to cultural movements and social markers, symbols, class, and culture (ex. Baroque, Rococo, etc.). According to sociologist Pierre Bourdieu, fashion connotes "the latest difference."[6]
                        </p>
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
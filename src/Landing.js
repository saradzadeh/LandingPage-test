import React, { component } from 'react'

import {HashRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

import About from './About'
import Login from './Login'
import Product from './Product'
import Home from './Home'



class Landing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                
                    <Switch>
                    <Route path= '/about'>
                        <About />
                    </Route>

                    <Route exact path='/'>
                        <Home />
                    </Route>

                    <Route path='/login'>
                        <Login />
                    </Route>

                    <Route path='/product'>
                        <Product />
                    </Route>

                    </Switch>
                        
                </div>
            </Router>
        )
    }
}

export default Landing
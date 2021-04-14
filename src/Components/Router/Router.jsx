import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Signin from '../Auth/SignIn/Signin'
import Signup from '../Auth/SIgnUp/Signup'
import {Home} from '../Pages/Home/Home'

import CreateProject from '../Pages/Project/CreateProject'

import { CreateInvoice } from '../Pages/Invoices_/CreateInvoice'

import HomeHeader from './Header/HomeHeader'
import { Footer } from '../Pages/Footer/Footer'

export default function Router() {
    return (
        <div>
           
            <HomeHeader/>
        
        
            <Switch>
                <Route exact path="/">
                    <Home />                    
                </Route>

                <Route path="/invoice">
                  <CreateInvoice/>                  
                </Route>
        

                <Route path="/sign-in">
                    <Signin />
                </Route>
                <Route path="/Signup">
                    <Signup />
                </Route>

                <Route path="/projects">
                    <CreateProject />
                </Route>

            </Switch>
            <Footer/>
        </div>
    )
}

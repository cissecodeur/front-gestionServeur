import React, { Component } from 'react'
import Register from './Components/Register'
import { Link  , BrowserRouter , Switch , Route} from 'react-router-dom'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Login from './Components/Login'
import ResetPassword from './Components/ResetPassword'
import Contact from './Components/Contact'

export default class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>
           
    <Switch> 
      <Route  path ="/register" component = { Register }/>
      <Route  path ="/home" component = { Home }/>
      <Route  path ="/" component = { Login }  exact />      
      <Route  path ="/resetpassword" component = { ResetPassword }/>  
      <Route  path ="/contact" component = { Contact }  exact />  
       
                          
    </Switch> 
      </div>
  </BrowserRouter>
    )
  }
}

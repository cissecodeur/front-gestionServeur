import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'

export default class Home extends Component {
    render() {
        return (
            <div>
               <Header/>
               <Menu/>
             <center><Footer/></center>  
            </div>
        )
    }
}

import React,  { Component } from "react";
import { BrowserRouter, Route , Switch , Link, Redirect } from 'react-router-dom';

export class Admin extends Component{
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
         //verif du token
         if(token == null){
             loggedIn = false
         }
            
         this.state = { loggedIn }
    }

    render(){
             if(this.state.loggedIn === false){
                 return <Redirect to = "/"/>
             }

        return(
            <div className = "center">

                 <h3>
                     Bienvenue sur la page d'Administration
                 </h3>
                     <Link to = "logout">Deconnexion</Link>

                 

            </div>
        )
    }
}
 
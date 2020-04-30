import React,  { Component } from "react";
import { BrowserRouter, Route , Switch , Link, Redirect  } from 'react-router-dom';

export class Login1 extends Component{

    constructor(props){
         super(props)
         //let  loggedIn = false
         
         const token = localStorage.getItem("token")
         let loggedIn = true
         //verif du token
         if(token == null){
             loggedIn = false
         }
         this.state = {
             username : "",
             password : "",
             loggedIn  
         }
         this.onChange = this.onChange.bind(this);
         this.submitForm = this.submitForm.bind(this);
    }


    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitForm(e){
         e.prenventDefaut()
         const{ username , password} = this.state
              //Verifaction des credentials
          localStorage.setItem("token", "agxzdyndgnfnvdcdcfjbchvs")
          if(username === "A" && password === "B"){
                this.setState({ loggedIn : true })
          }

    }

    render(){
              //Redirection
          if(this.state.loggedIn){
              return <Redirect to = "/admin" />
          }

        return(
            <div className = "">

                 <h3>
                    Login
                      <form onSubmit = { this.submitForm }>
                        <input 
                             type ="text" 
                             placeholder = "username" 
                             name = "username"
                             value = {this.state.username}
                             onChange = {this.onChange}/> <br/><br/>

                        <input 
                             type ="password" 
                             placeholder = "password" 
                             name = "password"
                             value = {this.state.password}
                             onChange = {this.onChange}/><br/><br/>

                        <input type ="submit" placeholder = "Se connecter" /> 
                            
                      </form>
                 </h3>

            </div>
        )
    }
}
 
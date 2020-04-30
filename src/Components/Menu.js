import React, { Component } from 'react'
import { Link , BrowserRouter , Switch , Route} from 'react-router-dom'
import  ListServeur  from './ListServeur'
import AddServer from './AddServer'
import Extinction from './Extinction'
import ManagementServer from './ManagementServer'
import Elements_menu from './Elements_menu'
import Restart from './Restart'


export default class Menu extends Component {
    render() {
        return (
<BrowserRouter> 
<div>
 
<Elements_menu 
           ManagementServer  = "Manager mes serveurs"
           ListServeur = "Mes serveurs"
           Locataires = "Locataires"
           Addserver = "Ajouter un serveur"
            
        /> 
        <Switch> 
      <Route  path ="/listserver" component = { ListServeur }/> 
      <Route  path ="/addserver" component = { AddServer }/>  
      <Route  path ="/managementserver" component = { ManagementServer }/>   
      <Route  path ="/extinction/:id" component = { Extinction }/> 
      <Route  path ="/restart/:id" component = { Restart }/> 
       
                                        
    </Switch> 

    </div>
</BrowserRouter> 


        )
    }
}

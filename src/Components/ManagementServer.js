import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Button , ButtonToolbar,Modal } from 'react-bootstrap'
import axios from 'axios';
import MyToastShutdown from './MyToastShutdown';
import { Link } from 'react-router-dom'
import Confirm from './Confirm'

export default class ManagementServer extends Component {
  constructor(props){
    super(props);
    this.state = this.initialState
    this.state.show = false
    this.state = {
      serveurdetails : [],
     
    }
   
   
}


initialState =  {
    
    id :'',
    libelle: '',
    host: '',
    login: '',
    email : '',
    numero : '',
    password:'',

}

componentDidMount = () => {
  this.findAllServer()  ; 
  const serverId =  this.props.match.params.id

    if(serverId) {
         this.getServerById(serverId)
    }
}

   findAllServer(){
        axios.get("http://localhost:9090/server/all")
        .then(response => response.data)
        .then((data) => this.setState({ serveurdetails : data }) );
   }


EteindreAllServeur = () => {
    
    axios.post("http://localhost:9090/server/eteindreAll" )
    .then(response => {
      if(response.data != null){
        this.setState({show:true})
        setTimeout(() => this.setState({show:false}) , 3000 ) ;
                }
         else{
      this.setState({show:false}) 
       }
           })
    .catch((err) => console.log(err))

    this.setState(this.state.serveurdetails = []);
   
}


RedemarrerAllServeur = () => {
  if(window.confirm("Voulez vous redemarrer ce serveur ?"))
   {
    axios.post("http://localhost:9090/server/redemarrerAll" )
    .then(response => {
      if(response.data != null){
        this.setState({show:true})
        setTimeout(() => this.setState({show:false}) , 3000 ) ;
                }
         else{
      this.setState({show:false}) 
       }
           })
    .catch((err) => console.log(err))

        this.setState(this.initialState);
   }
}
   

    render() {

        const  title ="Manager mes serveurs";
        const  { serveurdetails } = this.state;

        return (
            <div>
                  <div style = {{ "display" : this.state.show ? "block" : "none"}}>
                    <MyToastShutdown
                       children ={{ show :this.state.show , message :"Serveur eteint avec succes" , type:"success"}}
                      />
                  </div>

                <Card className = " text-white" style = {{  "margin-left" : "20%" , "background-color" : "#353842"}}>
                    <Card.Header ><h4 ><span className = "fab fa-linux" /> &nbsp;{title}</h4></Card.Header>                       
                     
                      <Card.Body>
                        <table className ="table table-strhosted ">
                          <thead>
                                <tr>
                                <th scope="col">Id</th>
                                <th scope="col">NOMS SERVEURS</th>
                                <th scope="col">HOSTS</th>
                                <th scope="col">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>                      
                        { serveurdetails.map(serveurdetail =>
                         <tr key = { serveurdetail.id }>
                          <td>{ serveurdetail.id }</td>
                          <td>{ serveurdetail.libelle }</td>
                          <td>{ serveurdetail.host }</td>
                                                 
                         
                          <td>      
                          <ButtonToolbar> 
                          <Link to = {"/restart/" + serveurdetail.id} > 
                            <Button  className ="mr-2"  variant = "warning" >
                              <span className = "fas fa-undo"/>                          
                            </Button>                                   
                          </Link>

                          <Link to = {"/extinction/" + serveurdetail.id} > 
                            <Button   className ="mr-2 "   variant = "danger"  >                                                                                             
                                   <span className="fa fa-power-off" />                                  
                            </Button>
                          </Link>
                          </ButtonToolbar>              
                             
                          </td>       
                         </tr>  
                            )}  
                    </tbody>
                    
                        </table>
                        <br/>
                        <Button
                                     className ="mr-2"
                                     onClick = {() =>{this.EteindreAllServeur()} }
                                     variant = "danger"
                                     >
                                   <span className="fa fa-power-off" /> Eteindre tous les serveurs
                      </Button>
                      <Button
                                     className ="mr-2"
                                     onClick = {() =>{this.RedemarrerAllServeur()} }
                                     variant = "warning"
                                     >
                                   <span className = "fas fa-undo"/> Redemarrer tous les serveurs
                      </Button>
                      </Card.Body>
                     
                </Card>
                 
            </div>
        )
    }
}

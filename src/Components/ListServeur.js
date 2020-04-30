import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Button , ButtonToolbar } from 'react-bootstrap'
import axios from 'axios';
import MyToastRed from './MyToastRed'
import { Link } from 'react-router-dom';


export default class ListServeur extends Component {
    constructor(props){
        super(props);
        this.state = this.initialState
        this.state.show = false
        this.state = {             
            serveurdetails:[],                                         
                                     }
    
    
    }
    
    initialState =  {
              
      libelle: '',
      host: '',
      login: '',
      email : '',
      numero : '',
      password:''
      
  }

    componentDidMount() {
          axios.get("http://localhost:9090/server/all")
                .then(response => response.data)
                .then((data) => this.setState({ serveurdetails : data }) );
                                
    }


//Fin de la consommation de la methode get
// fonction de supression
deleteServer = (id)  => {
  if(window.confirm("Voulez vous supprimer ce serveur ?"))
  {
   axios.delete(`http://localhost:9090/server/supprimer/${id}` )
    .then(response => {
         if(response.data != null){
           this.setState({show:true})
           setTimeout(() => this.setState({show:false}) , 3000 ) ;
           this.setState({
             serveurdetails : this.state.serveurdetails
                .filter((serveurdetail) => serveurdetail.id !== id)
           })
         }
    
         else{
          this.setState({show:false}) 
        }
   })
  }
}


SupprimerAllServeur = () => {
  if(window.confirm("Voulez vous supprimer ce serveur ?"))
   {
    axios.delete("http://localhost:9090/server/supprimer" )
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
}

ExporterAllServeur() {
 
   
}


    render() {

        const  title ="Liste des serveurs";
        const  { serveurdetails } = this.state;
             

        return (
            <div>
                   <div style = {{ "display" : this.state.show ? "block" : "none"}}>
                      <MyToastRed
                       children ={{ show :this.state.show , message :"Serveur supprimé avec succes" , type:"danger"}}
                       />
                  </div>
                  
                <Card className = " text-white" style = {{  "margin-left" : "20%" , "background-color" : "#353842"}}>
                    <Card.Header><h4><span className = "fas fa-list"/>&nbsp;{title}</h4></Card.Header>
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

                              <Link to = {"/editserver/" + serveurdetail.id} >
                              <Button  className ="mr-2"  variant ="info">                  
                                    Modifier    
                              </Button> 
                              </Link>

                              <Button
                                     className ="mr-2"
                                     onClick = {() => this.deleteServer(serveurdetail.id) }
                                     variant = "danger"
                                     >
                                   <span className="fa fa-trash" /> &nbsp; supprimer
                                    </Button>
                            </ButtonToolbar>   
                          </td>       
                         </tr>  
                            )}  
                                 
                    </tbody>
                    </table> <br/>
                                <Button
                                     className ="mr-2"
                                     onClick = {() =>{this.SupprimerAllServeur()} }
                                     variant = "danger"
                                     >
                                   <span className="fa fa-trash" /> vider la liste
                                 </Button>

                                 <Button
                                     className ="mr-2"
                                     onClick = {() =>{this.ExporterServeur()} }
                                     variant = "btn btn-outline-success"
                                     >
                                   <span className="fa fa-list" /> Exporter la liste au format excel (.xlsx)
                                 </Button>
                  </Card.Body>
                      
                </Card>
                                        
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Card , Form , Button, Col } from 'react-bootstrap'
import axios from 'axios'
import MyToastGreen from './MyToastGreen';
import { Link } from 'react-router-dom'

export default class Restart extends Component {
        constructor(props){
            super(props);
            this.state = this.initialState
            this.state.show = false

            this.handleUpdate = this.handleUpdate.bind(this)

        }


        initialState =  {
            id :'', 
            libelle: '',
            host: '',
            login: '',
            email : '',
            numero : '',
            password:''
        
            
        }

        componentDidMount = () => {

            const serverId =  this.props.match.params.id

              if(serverId) {
                   this.getServerById(serverId)
              }
        }
        
        getServerById = (serverId) =>{
            axios.get(`http://localhost:9090/server/all/${serverId}`)
            .then(response => {
                if(response.data != null){

                    this.setState({
                        id :response.data.id, 
                        libelle: response.data.libelle,
                        host: response.data.host,
                        login: response.data.login,
                        email : response.data.email,
                        numero : response.data.numero,
                        password:response.data.password
                  })
                }
            })
            .catch((error) => {
                    console.log(error)
            })
        }

        
        handleUpdate = e => {
            e.preventDefault();
            
            const server = {
                id : this.state.id,
                libelle: this.state.libelle,
                host:   this.state.host,
                login: this.state.login,
                password: this.state.password
  
        } ;
  
            axios.post("http://localhost:9090/server/eteindreOne/",server)
            .then(response => {
                if(response.data != null){
                   this.setState({show:true})
                   setTimeout(() => this.setState({show:false}) , 3000 ) ;
                   setTimeout(() => this.serverList() , 3000 ) ;
                        }
                else{
                    this.setState({show:true})
                    setTimeout(() => this.setState({show:false}) , 3000 ) ;
                    setTimeout(() => this.serverList() , 3000 ) ;
                  }
                           
             })

             this.setState({ 
                libelle: '',
                host: '',
                login: '',
                password:''
            })
             
            
        } 
 

        //Appel a la liste de serveurs
    serverList = () => {
             return this.props.history.push("/managementserver")
        }
        
    

    render() {
        
        const { libelle , host , login , password } = this.state;
        const  title ="Voulez vous eteindre le serveur ?";

        return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

               <div>
                  <div style = {{ "display" : this.state.show ? "block" : "none"}}>
                      <MyToastGreen
                          show = { this.state.show }  message = {"Serveur eteint avec succes" }
                          type ={ "succes" }/>
                  </div>
              
                <Card className = " text-white"  style = {{  "marginLeft" : "20%" ,"marginRight" : "5%","background-color" : "#353842  "}}>
                    <Card.Header><h4><span className = "fab fa-linux" />&nbsp;{title}</h4></Card.Header>
                    <Form  onSubmit = { this.handleUpdate } >
                           
                              <Form.Control required
                                    name = "libelle"
                                    value = { libelle }
                                    type="hidden" placeholder="nom du serveur"  autoComplete = "off"
                                 />

                              <Form.Control  required
                                name = "host" 
                                value = { host }
                                type="hidden" placeholder="ip du serveur" autoComplete = "off"
                              />

                              <Form.Control required
                                    name = "login" 
                                    value = { login }
                                    type="hidden" placeholder="login" autoComplete = "off"
                                />

                            <Form.Control
                                name = "password"  
                                value = { password }
                                type="hidden" placeholder="mot de passe" autoComplete = "off"
                             required/>
                      



                    <Card.Footer style ={{ "textAlign" : "right"}}>        
                        <Button  variant="success" type="submit" >
                        <span className = ""/>
                              Oui
                        </Button> &nbsp;  

                    <Link to ="/managementserver">                        
                        <Button  variant="btn btn-danger">
                              Non
                        </Button>
                     </Link>
                    </Card.Footer>
                    </Form>
                    
                </Card>
                </div>  
            
        )
    }
}

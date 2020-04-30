import React, { Component } from 'react'
import { Card , Form , Button, Col } from 'react-bootstrap'
import axios from 'axios'
import MyToastGreen from './MyToastGreen';
import { Link } from 'react-router-dom'

export default class EditServer extends Component {
        constructor(props){
            super(props);
            this.state = this.initialState
            this.state.show = false

            this.handleChange = this.handleChange.bind(this)
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
                email : this.state.email,
                numero : this.state.numero,
                password: this.state.password
  
        } ;
  
            axios.post("http://localhost:9090/server/ajouter/",server)
            .then(response => {
                if(response.data != null){
                   this.setState({show:true})
                   setTimeout(() => this.setState({show:false}) , 3000 ) ;
                   setTimeout(() => this.serverList() , 3000 ) ;
                        }
                else{
                   this.setState({show:false}) 
                  }
                           
             })

             this.setState({ 
                libelle: '',
                host: '',
                login: '',
                email : '',
                numero : '',
                password:''
            })
             
            
        } 
 

        //Appel a la liste de serveurs
    serverList = () => {
             return this.props.history.push("/listserver")
        }
        
    handleChange = e =>{
            this.setState({
                [e.target.name]: e.target.value
            });
          }

    render() {
        
        const { libelle , host , login , numero, email
               , password } = this.state;

        const  title ="Modifier le serveur";
        return (

               <div>
                  <div style = {{ "display" : this.state.show ? "block" : "none"}}>
                      <MyToastGreen
                          show = { this.state.show }  message = {"Serveur modifié avec succes" }
                          type ={ "succes" }/>
                  </div>
              
                <Card className = " text-white"  style = {{ "margin-left" : "20%" ,"background-color" : "#353842  "}}>
                    <Card.Header><h4><span className = "fas fa-plus-circle" />&nbsp;{title}</h4></Card.Header>
                    <Form  onSubmit = { this.handleUpdate } >
                    <Card.Body>
                    <Form.Row>

                       <Form.Group as = {Col}>
                            <Form.Label>Nom du serveur</Form.Label>
                              <Form.Control required
                                    name = "libelle"
                                    value = { libelle }
                                    onChange = {(e) => this.handleChange(e)}
                                    type="text" placeholder="nom du serveur"  autoComplete = "off"
                                 />
                       </Form.Group>

                       <Form.Group controlId="formBasicIpServeur" as = {Col}>
                            <Form.Label>Ip du serveur</Form.Label>
                              <Form.Control  required
                                name = "host" 
                                value = { host }
                                onChange = {(e) => this.handleChange(e)}
                                type="text" placeholder="ip du serveur" autoComplete = "off"
                              />
                       </Form.Group>

                       <Form.Group controlId="formBasicLogin" as = {Col}>
                            <Form.Label>Login du serveur</Form.Label>
                              <Form.Control required
                                    name = "login" 
                                    value = { login }
                                    onChange = { (e) => this.handleChange(e)}
                                    type="text" placeholder="login" autoComplete = "off"
                                />
                       </Form.Group> 
                    </Form.Row>
                    
                    <Form.Row>
                       <Form.Group controlId="formBasicPhone" as = {Col}>
                            <Form.Label>Votre numero</Form.Label>
                              <Form.Control  required
                                name = "numero" 
                                value = { numero }
                                onChange = { (e) => this.handleChange(e)}
                                type="text" placeholder="votre numero de telephone (+225)"  autoComplete = "off"
                              />
                              <Form.Text className="text-muted">
                              Vous serez notifié par sms sur ce numero en cas d'actions sur le serveur
                            </Form.Text>
                       </Form.Group>
                      
                        <Form.Group controlId="formBasicEmail" as = {Col}>
                            <Form.Label>Votre email</Form.Label>
                            <Form.Control   required
                                name = "email" 
                                value = { email }
                                onChange = {(e) => this.handleChange(e)}
                                type="email" placeholder="votre email" autoComplete = "off"
                             />
                            <Form.Text className="text-muted">
                              Vous serez notifié sur ce email en cas d'actions sur le serveur
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" as = {Col}>
                            <Form.Label>Mot de passe du serveur</Form.Label>
                            <Form.Control
                                name = "password"  
                                value = { password }
                                onChange = {(e) => this.handleChange(e) }
                                type="password" placeholder="mot de passe" autoComplete = "off"
                             required/>
                        </Form.Group>
                    </Form.Row>  
                      
                    </Card.Body>



                    <Card.Footer style ={{ "textAlign" : "right"}}>
                               
                        <Button  variant="success" type="submit" >
                        <span className = "fas fa-save"/>
                        &nbsp;  Modifier
                        </Button> &nbsp;  
                       
                     <Link to ="/listserver">                        
                        <Button  variant="btn btn-danger">
                           <span className = "fa fa-times"/>
                           &nbsp;  Quitter
                        </Button>
                     </Link>
                     &nbsp; &nbsp;
                     <Button  variant="btn btn-primary" onClick = {()=> this.serverList()}>
                           <span className = "fa fa-list"/>
                           &nbsp;  Retour a la liste
                        </Button>
                    
                    </Card.Footer>
                    </Form>
                    
                </Card>
                </div>  
            
        )
    }
}

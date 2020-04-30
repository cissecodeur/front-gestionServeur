import React, { Component } from 'react'
import { Card , Form , Button, Col } from 'react-bootstrap'
import axios from 'axios'
import MyToastGreen from './MyToastGreen';
import { Link } from 'react-router-dom'

export default class AddServer extends Component {
        constructor(props){
            super(props);
            this.state = this.initialState
            this.state.show = false
            this.state.file = null

            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)

        }


        initialState =  {
              
            libelle: '',
            host: '',
            login: '',
            email : '',
            numero : '',
            password:''
        
            
        }
        
            // Upload file
        handleFile = (e) => {
              let file = e.target.files[0]
               this.setState({file:e})
        }
               //Upload de fichier
        handleUpload = (e) =>{

             let file = this.state.file
             let formData = new FormData()
             formData.append('fichier',file)

            axios.post("http://localhost:9090/server/import-excel", e )
            .then(response => {
                if(response.data != null){
                   this.setState({show:true})
                   setTimeout(() => this.setState({show:false}) , 3000 ) ;
                        }
                else{
                   this.setState({show:true}) 
                  }
                           
             })

            
        }

        handleSubmit = e => {
            e.preventDefault();
            
            const server = {

                libelle: this.state.libelle,
                host:   this.state.host,
                login: this.state.login,
                email : this.state.email,
                numero : this.state.numero,
                password: this.state.password
  
        } ;
  
            axios.post("http://localhost:9090/server/ajouter", this.state)
            .then(response => {
                if(response.data != null){
                   this.setState({show:true})
                   setTimeout(() => this.setState({show:false}) , 3000 ) ;
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

        
    handleChange = e =>{
            this.setState({
                [e.target.name]: e.target.value
            });
          }

    render() {
        
        const { libelle , host , login , numero, email
               , password } = this.state;

        const  title ="Nouveau serveur";
        return (

               <div>
                    <div style = {{ "display" : this.state.show ? "block" : "none"}}>
                      <MyToastGreen
                          show = { this.state.show }  message = {"Serveur ajouté avec succes" }
                          type ={ "succes" }/>
                  </div>
            
                <Card className = " text-white"  style = {{ "marginLeft" : "20%" ,"backgroundColor" : "#353842  "}}>
              
                    <Card.Header><h4><span className = "fas fa-plus-circle" />&nbsp;{title}</h4></Card.Header>
                    <Form  onSubmit = {this.handleSubmit} >
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
                              type="number" placeholder="votre numero de telephone (+225)"  autoComplete = "off"
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
                        &nbsp;  Enregister
                        </Button> &nbsp;  
                       
                     <Link to ="/home">                        
                        <Button  variant="btn btn-danger">
                           <span className = "fa fa-times"/>
                           &nbsp;  Annuler
                        </Button>
                     </Link>
                    
                    </Card.Footer>
                    </Form>

                    <Form.Group as = {Col}>
                        <Form>
                          <input type ="file" name ="file" onChange = {(e) => this.handleFile(e)}/>
                        </Form> <br/>
                        <Button  variant="btn btn-outline-success" type="submit" onClick = {(e) => this.handleUpload(e)}>
                            Importer le fichier excel (.xlsx)
                        </Button>
                    </Form.Group>
                    
                </Card>
                </div>  
            
        )
    }
}

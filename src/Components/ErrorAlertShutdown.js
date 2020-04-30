import React, { Component } from 'react'
import { Toast } from 'react-bootstrap'


export default class ErrorAlertShutdown extends Component {
     

    render() {

        const toastCss = {
                  position :  "fixed",
                  zIndex :"1",
                  top      : "55px",
                  right     : "15px",
                  boxShadow  : "red"
        };

        return (
            <div  >
                 <Toast className = {" border text-white border-danger bg-danger "} showB = {this.props.children.showB}>
                     <Toast.Header className = {"bg-danger text-white"} closeButton = {false}>
                           <strong className = "mr-auto">Erreur</strong>
                     </Toast.Header>

                     <Toast.Body>
                             {this.props.children.message}
                     </Toast.Body>

                 </Toast>
                
            </div>
        )
    }
}

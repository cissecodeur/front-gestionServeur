import React, { Component } from 'react'
import { Toast } from 'react-bootstrap'


export default class MyToastGreen extends Component {
     

    render() {

        const toastCss = {
                  position :  "fixed",
                  zIndex :"1",
                  top      : "55px",
                  right     : "15px",
                  boxShadow  : "green"
        };

        return (
            <div style = {this.props.show ? toastCss : null} >
                 <Toast className = {" border text-white border-success bg-success "} show = {this.props.show}>
                     <Toast.Header className = {"bg-success text-white"} closeButton = {false}>
                           <strong className = "mr-auto">succes</strong>
                     </Toast.Header>

                     <Toast.Body>
                             {this.props.message}
                     </Toast.Body>

                 </Toast>
                
            </div>
        )
    }
}

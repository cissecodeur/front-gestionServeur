
import React, { Component } from 'react';


class Confirm extends Component {
 constructor() {
   super();

   this.state = {
     isOpen: false,
   };

    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
 }

 handleCancel() {
   this.setState({ isOpen: false });
 }

 handleConfirm() {
   this.setState({ isOpen: false });
 }

 render() {
   const { isOpen } = this.state;
   return (
     <div className={!isOpen ? 'modal' : 'modal is-active'}>
       <button className="delete" aria-label="close" onClick={this.handleCancel} />  
       <div>
         <section>
           <p>Are you sure?</p>
         </section>
         <footer className="modal-card-foot">
           <button className="button is-danger" onClick={this.handleConfirm}>OK</button>
           <button className="button" onClick={this.handleCancel}>Cancel</button>
         </footer>
       </div>
     </div>
   );
 }
}

export default Confirm;

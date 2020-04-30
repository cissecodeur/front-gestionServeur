import React, { Component } from 'react'
import { Link  , BrowserRouter , Switch , Route} from 'react-router-dom'

export default class ResetPassword extends Component {
    render() {
        return (
            <div>
                 <div style = {{  display: "flex", justifyContent: "center" ,alignItems: "center" }}>
<div>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <title>OSIRIS | Connexion</title>
  <div className="register-box">
    <div className="register-logo">
        <b>OSIRIS</b>
    </div>
    <div className="card">
      <div className="card-body register-card-body">
        <p className="login-box-msg">Reinitialisation du mot de passe</p>
        <form action="../../index.html" method="post">
         
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope" />
              </div>
            </div>
          </div>
            
            {/* /.col */}
            <div className="col-12">
              <button type="submit" className="btn btn-outline-success">Reinitialiser mon mot de passe</button> &nbsp; 
              <Link to="/" className="text-center">retour</Link>
            </div>
        </form>
     
      </div>
      {/* /.form-box */}
    </div>{/* /.card */}
  </div>
  {/* /.register-box */}
</div>
 </div>
            </div>
        )
    }
}

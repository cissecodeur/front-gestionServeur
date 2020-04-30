import React, { Component } from 'react'
import { Link  , BrowserRouter , Switch , Route} from 'react-router-dom'

export default class Login extends Component {
    
    render() {
        return (
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
        <p className="login-box-msg">Authentifiez-vous pour acceder a la plateforme</p>
        <form action="../../index.html" method="post">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="nom" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-user" />
              </div>
            </div>
          </div>

          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="mot de passe" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
            
            {/* /.col */}
            <div className="col-12">
              <button type="submit" className="btn btn-success btn-block">Se connecter</button>
            </div>
        </form>
     <div className="social-auth-links text-center">
          <p>- Ou -</p>
          <a href="#" className="btn btn-block btn-primary">
            <i className="fab fa-facebook mr-2" />
            se connecter avec Facebook
          </a>
          <a href="#" className="btn btn-block btn-danger">
            <i className="fab fa-google-plus mr-2" />
            Se connecter avec Google+
          </a>
        </div> 
        <Link to="/register" className="text-center"> &nbsp;inscrivez-vous ici</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/resetpassword" className="text-center">Mot de passe oublié?</Link>
      </div>
      
      {/* /.form-box */}
    </div>{/* /.card */}
  </div>
  {/* /.register-box */}
</div>
 </div>
  
  )
    }
}


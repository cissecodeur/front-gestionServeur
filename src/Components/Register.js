import React, { Component } from 'react'
import { Link  , BrowserRouter , Switch , Route} from 'react-router-dom'
import Login from './Login'



export default class Register extends Component {
    render() {
        return (

<div style = {{  display: "flex", justifyContent: "center" ,alignItems: "center" }}>
<div>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <title>OSIRIS | Inscription</title>
  <div className="register-box">
    <div className="register-logo">
        <b>OSIRIS</b>
    </div>
    <div className="card">
      <div className="card-body register-card-body">
        <p className="login-box-msg">Inscrivez-vous pour acceder a la plateforme</p>
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
            <input type="email" className="form-control" placeholder="Email" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope" />
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
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="confirmer votre mot de passe" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="icheck-primary">
                <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                <label htmlFor="agreeTerms">
                  j'accepte les <a href="#">termes</a>
                </label>
              </div>
            </div>
            {/* /.col */}
            <div className="col-4">
              <button type="submit" className="btn btn-primary btn-block">S'inscrire</button>
            </div>
            {/* /.col */}
          </div>
        </form>
        <div className="social-auth-links text-center">
          <p>- OU -</p>
           <a href="#" className="btn btn-block btn-primary">
            <i className="fab fa-facebook mr-2" />
            s'inscrire avec Facebook
          </a> 
          <a href="#" className="btn btn-block btn-danger">
            <i className="fab fa-google-plus mr-2" />
            s'inscrire avec Google+
          </a>
          
        </div>
        <Link to="/" className="text-center"> &nbsp;Se connecter ici</Link>
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

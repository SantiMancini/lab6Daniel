import React, { Component } from 'react';
import { Link } from 'react-router';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import '../App.css';

class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <img className="navbar-left" src={'./logoGYm.ico'} alt="boohoo" height="50" width="50"/>
          <Link className="navbar-brand" to="/">Gimnasio UM</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            {
             ( isLoggedIn() ) ? <Link to="/calendar">Calendario Actividades</Link> :  ''
            }
          </li>
          <li>
            {
             ( isLoggedIn() ) ? <Link to="/myActivities">Mis Actividades</Link> :  ''
            }
          </li>
          <li>
            {
             ( isLoggedIn() ) ? <Link to="/editUser">Editar Perfil</Link> :  ''
            }
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
           {
             (isLoggedIn()) ? ( <button id="thisButton" className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button id="thisButton" className="btn btn-info log" onClick={() => login()}>Log In</button> )
           }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;

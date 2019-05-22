import React from 'react';
import Container from './Components/login/container'
import Main from './Components/main/index'// eslint-disable-next-line
import PrivateRoute from './Components/PrivateRoute'
import './App.css'
import {connect} from 'react-redux'
import {login} from './Actions/'
import { Route, Link } from 'react-router-dom';




const App = props => {

if(localStorage.getItem("token")){
  props.login();
}

  return (
    <div className='display'>
      <nav className="main-nav">
        {!props.isLoggedIn && <Link className="main-nav-link" to='/cred/login'> Login</Link>}
        {props.isLoggedIn && <Link className="main-nav-link" to='/cred/login'> LogOut</Link>}
        <Link className="main-nav-link" to='/protected'> Events</Link>
      </nav>
      {!props.isLoggedIn && <Route path='/cred' component={Container} />}
      <Route path='/protected' component={Main} />
      {/* switch to Route to view page*/}
    </div>
  );
}


const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}
export default connect(mapStateToProps, {login})(App);

import React from 'react';
import Container from './Components/login/container'
import Main from './Components/main/index'// eslint-disable-next-line
import PrivateRoute from './Components/PrivateRoute'
import './App.css'
import {connect} from 'react-redux'
import {login, logout} from './Actions/'
import { Route, Link } from 'react-router-dom';




const App = props => {


if(localStorage.getItem("token")){
  props.login();
}

  return (
    <div className='display'>
      <nav className="main-nav">
        {!props.isLoggedIn && <Link className="main-nav-link" to='/cred/login'> Login</Link>}
        <Link className="main-nav-link" to='/protected'> Events</Link>
      </nav>
      <Route path='/cred' render={props => <Container {...props} loggedin={props.isLoggedIn} /> }/>
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
export default connect(mapStateToProps, {login, logout})(App);

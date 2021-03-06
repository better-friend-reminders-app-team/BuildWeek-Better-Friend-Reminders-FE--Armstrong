import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Login from './login';
import Register from './register';
import './loginStyles.css'
import {NavWrapper, LoginCont} from './styledComponents'

const Container = props => {

    return (
        
        <LoginCont>
            <NavWrapper>
                <NavLink className='link' to='/cred/login' >Login</NavLink>{' '}
                <NavLink className='link' to='/cred/register' >Register</NavLink>
            </NavWrapper>
            <Route path='/cred/login' component={Login} />
            <Route path='/cred/register' component={Register} />
        </LoginCont> 
    )
}

export default Container; 
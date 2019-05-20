import React from 'react';
import Container from './Components/login/container'
import Main from './Components/main/index'
import PrivateRoute from './Components/PrivateRoute'

import { Route, Link } from 'react-router-dom';




function App() {
  return (
    <div className='display'>
      <nav>
        <Link to='/cred/login'> Login</Link>
        <Link to='/protected'> Friends </Link>
      </nav>
      <Route path='/cred' component={Container} />
      <Route path='/protected' component={Main} />
      {/* switch to Route to view page*/}
    </div>
  );
}


export default App;

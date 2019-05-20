import React from 'react';
import { Route, Link } from 'react-router-dom';
import newEvent from './newEvent'


class Main extends React.Component {

    render() {
        return (
            <div>
                <h1>TEST</h1>
                <div className='newButton'>
                    <Link to='/protected/new-event'> Add Event </Link>
                </div>
                    <Route path='/protected/new-event' component={newEvent} />
            </div>
        )
    }
}

export default Main;
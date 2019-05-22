import React from 'react';
import { Route, Link } from 'react-router-dom';
import newEvent from './newEvent';
import { connect } from 'react-redux';
import { Card, CardContainer, Head, Select, SelectContainer } from './styledMain'
import './mainStyles.css';
import '../../App.css';

import { deleteEvent } from '../../Actions';



class Main extends React.Component {
    state = {
        deletingEvent: null,
    };

    deleteEvent = id => {
        this.setState({ deletingEventId: id })
        this.props.deleteEvent(id);
    };





    render() {
        console.log(this.props.events)
        return (
            <div>
                <Head>
                    <h1>Events</h1>
                    <div className='newButton'>
                        <Link className="add-event-link" to='/protected/new-event'> Add Event </Link>
                    </div>
                </Head>
                <Route path='/protected/new-event' component={newEvent} />
                <SelectContainer>
                    <Select>
                        <option>All</option>
                        <option>Birthday</option>
                        <option>Wedding</option>
                        <option>Aniversary</option>
                        <option>Holiday</option>
                        <option>Party</option>
                    </Select>
                </SelectContainer>
                <CardContainer>
                    {this.props.events.map(event => (
                        <Card>
                            <h4>{event.event}</h4>
                            <p>{event.date}</p>
                            <p>{event.description}</p>
                            <p>{event.messageDate}</p>
                            <p>{event.message}</p>
                            <i class="fas fa-pencil-alt" />
                            <i
                                class="fas fa-times"
                                onClick={() => this.deleteEvent(event.id)}
                            />
                        </Card>
                    ))}

                </CardContainer>

            </div>
        )
    }
}

const mapStateToProps = ({
    events,
    deletingEvent
}) => ({
    events,
    deleteEvent
});

// const mapStateToProps = state => {
//     return {
//         events: state.events,
//         deletingEvent: state.deletingEvent
//     };
// }

export default connect(
    mapStateToProps,
    { deleteEvent }
)(Main);
import React from 'react';
import { Route, Link } from 'react-router-dom';
import newEvent from './newEvent';
import { connect } from 'react-redux';
import { Card, CardContainer, Head, Select, SelectContainer } from './styledMain'
import './mainStyles.css';
import '../../App.css';

import { deleteEvent, editEvent } from '../../Actions';

import EditForm from './EditForm';


class Main extends React.Component {
    state = {
        deletingEvent: null,
        editingEventId: null
    };

    // componentDidMount() {
    //     this.props.getData();
    // }

    deleteEvent = id => {
        this.setState({ deletingEventId: id })
        this.props.deleteEvent(id);
    };

    editEvent = (e, event) => {
        e.preventDefault();
        this.props.editEvent(event).then(() => {
            this.setState({ editingEventId: null });
        });
    };

    closeEdit = () =>{
        this.setState({ editingEventId:''})
    }





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
                    {this.props.events.map(event => {
                        if (this.state.editingEventId === event.id) {
                            return (
                                <Card>
                                    <EditForm
                                        event={event}
                                        editEvent={this.editEvent}
                                        editingEvent={this.props.editingEvent}
                                        closeEdit = {this.closeEdit}
                                    />
                                </Card>
                            );
                        }
                        console.log(this.state.editingEventId)
                        return (
                            <Card>
                                <h4>{event.event}</h4>
                                <p>{event.date}</p>
                                <p>{event.description}</p>
                                <p>{event.messageDate}</p>
                                <p>{event.message}</p>
                                <i 
                                    className="fas fa-pencil-alt" 
                                    onClick = {() =>this.setState({ editingEventId: event.id})}
                                    
                                />
                                <i
                                    className="fas fa-times"
                                    onClick={() => this.deleteEvent(event.id)}
                                />
                            </Card>
                        )
                    })}

                </CardContainer>

            </div>
        )
    }
}

const mapStateToProps = ({
    events,
    deletingEvent,
    editingEvent
}) => ({
    events,
    deleteEvent,
    editingEvent
});

// const mapStateToProps = state => {
//     return {
//         events: state.events,
//         deletingEvent: state.deletingEvent
//     };
// }

export default connect(
    mapStateToProps,
    { deleteEvent, editEvent}
)(Main);
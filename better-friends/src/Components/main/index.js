import React from 'react';
import { Route, Link } from 'react-router-dom';
import newEvent from './newEvent';
import { connect } from 'react-redux';
import { Card, CardContainer, Head, Select, SelectContainer, Error} from './styledMain'
import './mainStyles.css';
import '../../App.css';

import { deleteEvent, editEvent } from '../../Actions';

import EditForm from './EditForm';


class Main extends React.Component {
    state = {
        deletingEvent: null,
        editingEventId: null,
        selectType: 'all'
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

    FilteredEvents = (events) =>{
        if( this.state.selectType ==='all'){
            return events
        }
         return events.filter(event =>{
            return (event.type === this.state.selectType)
        })
    }

    onChange = e =>{
        let value = e.target.value;
        let name = e.target.name;
        this.setState({
            [name]:value
        })

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
                    <Select name= 'selectType' onChange = {this.onChange} value = {this.state.selectType}>
                        <option value ='all'>All</option>
                        <option value = 'birthday'>Birthday</option>
                        <option value = 'wedding'>Wedding</option>
                        <option value ='anniversary'>Anniversary</option>
                        <option value = 'holiday'>Holiday</option>
                        <option value = 'party'>Party</option>
                    </Select>
                </SelectContainer>
                <CardContainer>
                {this.FilteredEvents(this.props.events).length === 0 && 
                    <Error>There are no upcoming {`${this.state.selectType}`.charAt(0).toUpperCase()+ `${this.state.selectType}`.slice(1)}s</Error>
                }
                    {this.FilteredEvents(this.props.events).map(event => {
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
import React from 'react';
import {connect} from 'react-redux';
import { addEvent } from '../../Actions';

class newEvent extends React.Component {
    state = {
        new: {
            event: '',
            date: '',
            description: '',
            messageDate: '',
            message: ''
        }
    };

    handleChanges = e => {
        let value = e.target.value;
        this.setState({
            newEvent: {
                ...this.state.new,
                [e.target.name]: value
            }
        });
    };

    addEvent = e => {
        e.preventDefault();
        this.props.addEvent(this.state.new).then(() =>{
            this.props.history.push('/protected')
        });
        this.setState({
            new: {
                event: '',
                date: '',
                description: '',
                messageDate: '',
                message: ''
            }
        });
    };


    render() {
        return (
            <div className='new-event'>
                <h1>Add New Event</h1>
                <form className='form' onSubmit = {this.addEvent}>
                    <input
                        type='text'
                        name='event'
                        placeholder='event'
                    />
                    <input
                        type='text'
                        name='date'
                        placeholder='date'
                    />
                    <input
                        type='text'
                        name='description'
                        placeholder='description'
                    />
                    <input
                        type='text'
                        name='messageDate'
                        placeholder='Send Date'
                    />
                    <input
                        type='text'
                        name='message'
                        placeholder='message'
                    />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}



export default connect(null, {addEvent})(newEvent);
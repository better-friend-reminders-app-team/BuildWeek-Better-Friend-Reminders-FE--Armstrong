import React from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../../Actions';
import { Button, Form, EventForm, Input, Area, Title, Close, CloseBtn} from './styledMain'

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

    close = () => {
        this.props.history.push('/protected')
    }

    addEvent = e => {
        e.preventDefault();
        this.props.addEvent(this.state.new).then(() => {
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
            <EventForm>
                <Close>
                    <CloseBtn onClick={this.close}>X</CloseBtn>
                </Close>
                <Title>
                    <h4>New Event</h4>
                </Title>
                <Form className='form' onSubmit={this.addEvent}>
                    <Input
                        type='text'
                        name='event'
                        placeholder='Event'
                    />
                    <Input
                        type='text'
                        name='date'
                        placeholder='Date'
                    />

                    <Input
                        type='text'
                        name='messageDate'
                        placeholder='Send Date'
                    />
                    <Area
                        type='text'
                        rows='3'
                        name='Description'
                        placeholder='Description'
                    />
                    <Area
                        type='text'
                        name='message'
                        placeholder='Message'
                        rows='3'
                    />
                    <Button>Add</Button>
                </Form>
            </EventForm>
        )
    }
}



export default connect(null, { addEvent })(newEvent);
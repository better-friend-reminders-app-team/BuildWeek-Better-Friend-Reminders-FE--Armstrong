import React from 'react';

import {EditCard, EditBtn, EditHead, EditFormStyle, EditInput, EditArea, EditTitle, EditCloseBtn, CloseBtn } from './styledMain'


class EditForm extends React.Component {
    state = {
        event: this.props.event
    }

    handleChanges = e => {
        let value = e.target.value;
        this.setState({
            event: {
                ...this.state.event,
                [e.target.name]: value
            }
        });
    };

    editEvent = e =>{
        this.props.editEvent(e, this.state.event)
    }

    closeEdit = () => {
        this.props.closeEdit();
    }
   


    render() {
        return (
            <EditCard>
                <div>
                    <EditCloseBtn>
                        <CloseBtn onClick ={this.editEvent}>X</CloseBtn >
                    </EditCloseBtn>
                    <EditHead>
                        <EditTitle>Edit</EditTitle>
                    </EditHead>
                    <EditFormStyle onSubmit={this.addEvent}>
                        <EditInput
                            type='text'
                            name='event'
                            placeholder='Event'
                            value = {this.state.event.event}
                            onChange = {this.handleChanges}
                        />
                        <EditInput
                            type='text'
                            name='date'
                            placeholder='Date'
                            value = {this.state.event.date}
                            onChange = {this.handleChanges}
                        />

                        <EditInput
                            type='text'
                            name='messageDate'
                            placeholder='Send Date'
                            value = {this.state.event.messageDate}
                            onChange = {this.handleChanges}
                        />
                        <EditArea
                            type='text'
                            rows='3'
                            name='Description'
                            placeholder='Description'
                            value = {this.state.event.description}
                            onChange = {this.handleChanges}
                        />
                        <EditArea
                            type='text'
                            name='message'
                            placeholder='Message'
                            rows='3'
                            value = {this.state.event.message}
                            onChange = {this.handleChanges}
                        />
                        <EditBtn>Submit</EditBtn>
                    </EditFormStyle>
                </div>
            </EditCard>
        )
    }
}

export default EditForm;

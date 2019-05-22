import React from 'react';
import { Form, Input, Button } from './styledComponents';
import { login } from '../../Actions/index';
import {connect} from 'react-redux';

class Login extends React.Component {
    state = {
        un: '',//username
        pw: ''//password
    }


    handleChanges = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    submit = (e) => {
        e.preventDefault();
        alert('you submitted')
        if (localStorage.getItem('username') === null && localStorage.getItem('password') === null) {
            localStorage.setItem('username', this.state.un)
            localStorage.setItem('password', this.state.pw)
            this.props.login(this.state)
        }

        this.setState({
            un: '',
            pw: ''
        })
    }

    render() {
        return (
            <Form onSubmit={this.submit}>
                <Input name="un" onChange={this.handleChanges} value={this.state.un} placeholder="username" />
                <Input name="pw" onChange={this.handleChanges} value={this.state.pw} placeholder="password" />
                <Button>Login</Button>
            </Form>
        )
    }
}


export default connect(null, {login})(Login);
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
        if (localStorage.getItem('username') === this.state.un && localStorage.getItem('password') === this.state.pw) {
           localStorage.setItem("token", this.props.token)
            alert('you are signed in')
            this.props.login()
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

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps, {login})(Login);
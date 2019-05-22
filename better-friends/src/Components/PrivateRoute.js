import React from 'react';
// eslint-disable-next-line
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render= {props => {
                if (localStorage.getItem('token')) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to = 'login' />;
                }
            }}
        />
    );
};

const mapStateToProps = state => ({
    // return {
    //     token : state.token once we have a token
    //}
});

export default (connect(
    mapStateToProps,
    {}
)(PrivateRoute)
);
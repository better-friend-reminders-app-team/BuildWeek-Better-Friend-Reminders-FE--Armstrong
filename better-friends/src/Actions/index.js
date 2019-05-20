import axios from 'axios';

export const GET_DATA_START = 'ADD_START';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAIL = 'GET_DATA_FAIL';

export const getData = () => dispatch =>{
    dispatch ({ type: GET_DATA_START})
    axios 
        .get('***LINK****')
        .then(res =>{
            dispatch ({ type: GET_DATA_START, payload: res.data })
        })
        .catch (err => {
            console.log(err.response)
            dispatch({ type: GET_DATA_FAIL, payload: err.response })
        })
}
    

export const ADD_START = 'ADD_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAIL = 'ADD_FAIL';

export const addEvent = event => dispatch => {
    dispatch({ type: ADD_START });
    return axios
        .post('***LINK***', event)
        .then(res => {
            dispatch({ type: ADD_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err.response);
            dispatch({ type: ADD_FAIL, payload: err.response });
        });
}


export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = creds => dispatch => {
    console.log('hello')
    dispatch({type: LOGIN_START})
    axios.post('***LINK***', creds)
    .then(res => {
     localStorage.setItem('token', res.data)
     dispatch({type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => {dispatch({type: LOGIN_FAIL, payload: err})})
}


export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const register = creds => dispatch => {
    dispatch({type: REGISTER_START})
    axios.put('***LINK***', creds)
    .then(res => {
        localStorage.setItem('token', res.data)
        dispatch({type: REGISTER_SUCCESS, payload: res.data})
    })
    .catch(err => {dispatch({type: REGISTER_FAIL, payload: err})})
}
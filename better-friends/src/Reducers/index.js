import {
    ADD_START,
    ADD_SUCCESS,
    ADD_FAIL
} from '../Actions';

const initialState = {
    addingEvent: false,
    events: [],
    error: ''
}

const reducer = (state = initialState, action) =>{
    console.log(action);
    switch(action.type){
        case ADD_START:
            return {
                ...state,
                addingEvent: true,
            };
        case ADD_SUCCESS:
            return {
                ...state,
                addingEvent: true,
                error:'',
                events: action.payload
            };
        default: 
            return state;    
    }
}
export default reducer;
import {
    USER_GET_USER_INFO
} from '../constants';

const initialState = {
    sincronized: false,
    currrentBoard: null
}

export default function(state = initialState, action){
    switch (action.type) {
        case USER_GET_USER_INFO:
            return Object.assign({}, state,{
                ...action.payload,
                sincronized: true
            })
    
        default:
            return state;
    }
}
import {
    LIST_GET_ALL
} from '../constants';

const initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
        
        case LIST_GET_ALL:
            return action.payload
    
        default:
            return state;
    }
}
import {
    LIST_GET_ALL,
    LIST_CREATE
} from '../constants';

const initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
        
        case LIST_GET_ALL:
            return [...action.payload]

        case LIST_CREATE:
            return [...state, action.payload]
    
        default:
            return state;
    }
}
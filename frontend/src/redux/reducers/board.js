import {
    BOARD_SUCCESS_BYID
} from '../constants';

const initialState = null;

export default function(state = initialState, action) {
    switch (action.type) {
        
        case BOARD_SUCCESS_BYID:
            return Object.assign({}, state, 
                action.payload
            )
    
        default:
            return state;
    }
}
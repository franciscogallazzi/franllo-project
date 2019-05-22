import {
    BOARD_REQUEST_BYID,
    BOARD_SUCCESS_BYID,
    BOARD_FAILED_BYID
} from '../constants';

const initialState = null;

export default function(state = initialState, action) {
    switch (action.type) {
        
        case BOARD_SUCCESS_BYID:
            console.log('BOARD_SUCCESS_BYID', action);
            return Object.assign({}, state, 
                action.payload
            )
    
        default:
            return state;
    }
}
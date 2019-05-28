import {
    BOARD_GET_FOR_ME,
    BOARD_CREATE
} from '../constants';

const initialState = {
    data: [],
    sincronized: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        
        case BOARD_GET_FOR_ME:
            return Object.assign({}, state,{
                data: action.payload,
                sincronized: true
            })

        case BOARD_CREATE:
           return  Object.assign({}, state,{
                data: [...state.data, action.payload],
                sincronized: true
            })
    
        default:
            return state;
    }
}
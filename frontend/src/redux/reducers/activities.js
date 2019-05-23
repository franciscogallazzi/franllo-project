import {
    ACTIVITY_GET_ALL,
    ACTIVITY_UPDATE,
    ACTIVITY_CREATE
} from '../constants';

const initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
        
        case ACTIVITY_GET_ALL:
            return action.payload

        case ACTIVITY_CREATE:
            return [...state, action.payload]
    
        case ACTIVITY_UPDATE:
            let updated = false;
            const s = state.map(item => {
                if (item.id !== action.payload.id) {
                    updated = true;
                    return item;
                } else {
                    return {
                        ...item,
                        ...action.payload
                    }
                }
            })
            if (!updated) {
                s.push(action.payload)
            }
            return s;
        default:
            return state;
    }
}
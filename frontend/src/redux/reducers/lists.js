import {
    LIST_GET_ALL,
    LIST_CREATE,
    LIST_UPDATE
} from '../constants';

const initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
        
        case LIST_GET_ALL:
            return [...action.payload]

        case LIST_CREATE:
            return [...state, action.payload]

        case LIST_UPDATE:
            let updated = false;
            const lists = state.map(list => {
                if (list.id === action.payload.id){
                    updated = true;
                    return {
                        ...list,
                        ...action.payload
                    }
                }
                return list;
            })
            if (!updated) {
                lists.push(action.payload);
            }
            return lists;
    
        default:
            return state;
    }
}
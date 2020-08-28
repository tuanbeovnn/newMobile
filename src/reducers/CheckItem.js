import * as types from './../constants/ActionTypes';

let initialState = []

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHECK_ITEM:
            let newState = [...state];
            if (action.checked) {
                newState.push(action.id);
            }
            else {
                newState = newState.filter(id => id !== action.id);
            }
            return newState
        default: return state;
    }
};

export default myReducer; 
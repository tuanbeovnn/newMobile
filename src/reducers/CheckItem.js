import * as types from './../constants/ActionTypes';

let initialState = {
    checkboxStatus: []
}

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHECK_ITEM:
            return {
                ...state,
            }
            
        default: return state;
    }
};

export default myReducer; 
import * as types from './../constants/ActionTypes';

let initialState = {}

let myReducer = (state = initialState, action) => {
    switch (action.type) {
       
        case types.UPDATE_ITEM:
            return  action.productEdit;
        default: 
            return state;
    }
};

export default myReducer; 
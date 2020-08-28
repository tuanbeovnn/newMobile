import * as types from './../constants/ActionTypes';

let initialState = {
    id: '',
    name: '',
    price: '',
    discountCode: '',
    Quantity: '',
    Unit: '',
    Origin: '',
    Warranty: '',
    Description: '',
    status: false
}

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_PRODUCT:
            return action.updateItem;
        default:
            return state;
    }
};

export default myReducer; 
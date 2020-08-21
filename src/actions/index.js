import * as types from './../constants/ActionTypes';
export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
};

export const addProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}
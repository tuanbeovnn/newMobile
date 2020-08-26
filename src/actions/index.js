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

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM,
    }
}

export const openForm = () => {
    return {
        type: types.OPEN_FORM,
    }
}
export const closeForm = () => {
    return {
        type: types.CLOSE_FORM,
    }
}

export const deteleItem = (id) => {
    console.log('id :>> ', id);
    return {
        type: types.DELETE_ITEM,
        id
    }
}

export const checkItem = (data) => {
    return {
        type: types.CHECK_ITEM,
        data
    }
}

export const updatedItem = (productEdit) => {
    return {
        type: types.UPDATE_ITEM,
        productEdit
        
    }
}
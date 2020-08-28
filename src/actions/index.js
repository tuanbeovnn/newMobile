import * as types from './../constants/ActionTypes';
export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
};

export const saveProduct = (updateItem) => {
    return {
        type: types.SAVE_PRODUCT,
        updateItem
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
    return {
        type: types.DELETE_ITEM,
        id
    }
}

export const checkItem = (data) => {
    return {
        type: types.CHECK_ITEM,
        ...data
    }
}

export const deleteAnyItem = (checkItem) => {
    return {
        type: types.DELETE_ANY_ITEM,
        checkItem
    }
}
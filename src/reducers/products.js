import * as types from './../constants/ActionTypes';

let s4 = () => {// random ra chuoi
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

let generateID = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4();
}

let findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
}

let data = JSON.parse(localStorage.getItem('products'));
let initialState = data && data.length ? data : [
    {
        id: 1,
        productName: 'IPhone X',
        price: 1000,
        discountCode: 'ABCD',
        unit: 'psc',
        origin: 'USA',
        warranty: '1 year',
        description: 'Good',
        status: false,
        categoryCode: 'apple'
    },
    {
        id: 2,
        productName: 'IPhone Xs',
        price: 900,
        discountCode: 'ABCD',
        unit: 'psc',
        origin: 'USA',
        warranty: '1 year',
        description: 'Good',
        status: true,
        categoryCode: 'apple'
    },
    {
        id: 3,
        productName: 'IPhone Xsmax',
        price: 900,
        discountCode: 'ABCD',
        unit: 'psc',
        origin: 'USA',
        warranty: '1 year',
        description: 'Good',
        status: true,
        categoryCode: 'apple'
    },
    {
        id: 4,
        productName: 'IPhone Xsmaxxx',
        price: 900,
        discountCode: 'ABCD',
        unit: 'psc',
        origin: 'USA',
        warranty: '1 year',
        description: 'Good',
        status: true,
        categoryCode: 'apple'
    },
    {
        id: 5,
        productName: 'IPhone Xsmin',
        price: 900,
        discountCode: 'ABCD',
        unit: 'psc',
        origin: 'USA',
        warranty: '1 year',
        description: 'Good',
        status: true,
        categoryCode: 'apple'
    }
]; // state mac dinh la 1 array vi products la 1 array

let myReducer = (state = initialState, action) => {
    let id = '';
    let index = -1;
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.SAVE_PRODUCT:
            let newProduct = {
                id: action.updateItem.id,
                productName: action.updateItem.name,
                price: action.updateItem.price,
                discountCode: action.updateItem.discountCode,
                unit: action.updateItem.Unit,
                origin: action.updateItem.Origin,
                warranty: action.updateItem.Warranty,
                description: action.updateItem.Description,
                status: action.updateItem.status === 'true' ? true : false,
                categoryCode: action.updateItem.categoryCode
            };
            if (!newProduct.id) {
                newProduct.id = generateID();
                state.push(newProduct);
            } else {
                // id = action.id;//chỉ có action.product làm gì có action.id dau
                id = newProduct.id;
                index = findIndex(state, id);
                state[index] = newProduct;
            }
            localStorage.setItem('products', JSON.stringify(state));
            return [...state];
        case types.DELETE_ITEM:
            //id = action.id;
            //index = findIndex(state, id);
            //state.splice(index,1);
            const newState = state.filter(p => p.id !== action.id);
            //cái này là lọc các sản phẩm trùng id với action.id
            localStorage.setItem('products', JSON.stringify(newState));
            return [...newState];
        case types.DELETE_ANY_ITEM:
            let filterState = [...state];
            action.checkItem.map(id => {
                filterState = filterState.filter(p => p.id !== id);
            });
            localStorage.setItem('products', JSON.stringify(filterState));
            return filterState;
        default: return state;
    }
};

export default myReducer; 
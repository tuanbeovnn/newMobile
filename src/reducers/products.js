import * as types from './../constants/ActionTypes';

let s4 = () => {// random ra chuoi
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
}

let generateID = () => {
    return s4() + s4() + '-'+ s4() + '-'+ s4()+ '-'+ s4();
}
let data = JSON.parse(localStorage.getItem('prodducts'));
let initialState = data ? data : [
    // {
    //     id: 1,
    //     productName: 'IPhone X',
    //     price: 1000,
    //     discountCode: 'ABCD',
    //     unit: 'psc',
    //     origin: 'USA',
    //     warranty: '1 year',
    //     description: 'Good',
    //     status: false,
    //     categoryCode: 'apple'
    // },
    // {
    //     id: 2,
    //     productName: 'IPhone Xs',
    //     price: 900,
    //     discountCode: 'ABCD',
    //     unit: 'psc',
    //     origin: 'USA',
    //     warranty: '1 year',
    //     description: 'Good',
    //     status: true,
    //     categoryCode: 'apple'
    // }
]; // state mac dinh la 1 array vi products la 1 array

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
            case types.ADD_PRODUCT:
                let newProduct = {
                    id: generateID(),
                    productName : action.product.name,
                    price: action.product.price,
                    discountCode: action.product.discountCode,
                    unit: action.product.Unit,
                    origin: action.product.Origin,
                    warranty: action.product.Warranty,
                    description: action.product.Description,
                    status: action.product.status === 'true' ? true : false,
                    categoryCode: action.product.categoryCode
                }
                console.log(action);
                state.push(newProduct);
                localStorage.setItem('products',JSON.stringify(state)); 
                return [...state];  
        default: return state;
    }
};

export default myReducer; 
import * as types from './../constants/ActionTypes';

let s4 = () => {// random ra chuoi
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
}

let generateID = () => {
    return s4() + s4() + '-'+ s4() + '-'+ s4()+ '-'+ s4();
}

let findIndex = (products, id) =>{
    var result = -1;
    products.forEach((product, index) =>{
        if(product.id === id) {
            result = index;
        }
    });
    return result;
}
const findI = (products, id) => products.findIndex(p => p.id === id); 
//muốn findIndex thì có hàm findIndex này mà

let data = JSON.parse(localStorage.getItem('products'));
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
    let id = '';
    let index = -1;
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_PRODUCT:
            var newProduct = {
                    id: action.product.id,
                    productName : action.product.name,
                    price: action.product.price,
                    discountCode: action.product.discountCode,
                    unit: action.product.Unit,
                    origin: action.product.Origin,
                    warranty: action.product.Warranty,
                    description: action.product.Description,
                    status: action.product.status === 'true' ? true : false,
                    categoryCode: action.product.categoryCode
            };
            if(!newProduct.id) {
                newProduct.id = generateID();
                state.push(newProduct);
            }else {
                // id = action.id;//chỉ có action.product làm gì có action.id dau
                id=newProduct.id;
                index = findIndex(state, id);
                state[index] =  newProduct;   
            }
            localStorage.setItem('products',JSON.stringify(state)); 
            return [...state];
        case types.DELETE_ITEM:
            //id = action.id;
            //index = findIndex(state, id);
            //state.splice(index,1);
            console.log('action,state :>> ', action,state);
            const newState = state.filter(p => p.id !== action.id);
            //cái này là lọc các sản phẩm trùng id với action.id
            localStorage.setItem('products', JSON.stringify(newState));
            return [...newState];
        default: return state;
    }
};

export default myReducer; 
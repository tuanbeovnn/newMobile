import { combineReducers } from 'redux';
import products from './products';
import isDisplayForm from './toggle';
import updateItem from './productUpdate';
import checkItem from './CheckItem';

const myReducer = combineReducers({
    products,
    isDisplayForm,
    checkItem,
    updateItem,
});

export default myReducer;
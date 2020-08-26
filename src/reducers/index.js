import { combineReducers } from 'redux';
import products from './products';
import isDisplayForm from './toggle';
import updateItem from './productUpdate';

const myReducer = combineReducers({
    products,
    isDisplayForm,
    updateItem
});

export default myReducer;
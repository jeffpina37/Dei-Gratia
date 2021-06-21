import { createStore, combineReducers } from 'redux';
import { inventoryReducer } from '../features/inventory/inventorySlice';
import { cartReducer } from '../features/cartContainer/cartSlice';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice';

export const store = createStore(combineReducers({
    inventory: inventoryReducer,
    cart: cartReducer,
    currencyFilter: currencyFilterReducer,
    searchTerm: searchTermReducer
}));
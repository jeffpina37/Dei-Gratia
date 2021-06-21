import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './inventory.css';
import { calculatePrice, getCurrencySymbol} from '../../utilities';
import { addItem } from '../cartContainer/cartSlice';
import { loadData, selectFilteredInventory } from './inventorySlice.js';
import { selectCurrencyFilter } from '../currencyFilter/currencyFilterSlice'


export const Inventory = () => {
    const inventory = useSelector(selectFilteredInventory);
    const currencyFilter = useSelector(selectCurrencyFilter)
    const dispatch = useDispatch()


    const onMount = () => {
        dispatch(loadData());
    };
    useEffect(onMount, [dispatch]);

    const onClickHandler = (inventoryItem) => {
        dispatch(addItem(inventoryItem));
    };

    if (inventory.length === 0) {
        return <p className='Empty'> Sorry, no products are currently available... </p>
    };

    return <ul id='inventory-container'>{inventory.map(createInventoryItem)}</ul>;

    function createInventoryItem(inventoryItem) {
        const { price, name, img} = inventoryItem;
        const displayPrice = calculatePrice(price, currencyFilter);

        return (
            <li key={name} className='item'>
                <img className='item-photo' src={img} alt=''/>
                <h3>{name}</h3>
                <h3 className='price'>
                    {getCurrencySymbol(currencyFilter)}
                    {displayPrice.toFixed(2)} {currencyFilter}
                </h3>
                <button 
                    onClick={() => onClickHandler(inventoryItem)}
                    className='add-to-cart-btn'
                >
                    Add to Cart
                </button>
            </li>
        )
    }
}

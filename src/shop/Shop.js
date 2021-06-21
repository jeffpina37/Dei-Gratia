import React from 'react';
import './shop.css';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm';
import { Inventory } from '../features/inventory/Inventory';



export const Shop = () => {
    return (
        <div className='shop-container'> 
            <h1>Shop</h1>
            <div className='line'></div> 
            <br></br>
            <br></br>
            <div className='termfilter'>
                <CurrencyFilter />
                <SearchTerm />
            </div>
                <Inventory/>
        </div>
       
    )
};



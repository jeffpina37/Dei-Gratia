import React from 'react';
import './navbar.css';
import { useSelector } from 'react-redux';
import { selectCart } from '../features/cartContainer/cartSlice';

export const Count = () => {
        const cart = useSelector(selectCart)
            let count = 0;
            Object.keys(cart).forEach((itemName) => {
                count += cart[itemName].quantity;
            });

        return (
            <div >
                <div className='nav-count'>{count}</div>    
            </div>
        )
        }
    



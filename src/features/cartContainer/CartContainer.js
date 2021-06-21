import React from 'react';
import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotal, getCurrencySymbol } from '../../utilities';
import { changeItemQuantity, selectCart } from './cartSlice';
import {  selectCurrencyFilter } from '../../features/currencyFilter/currencyFilterSlice'


export const CartContainer = () => {
    const submit = () => {
        alert('Checkout is currently closed')
    }

    const cart = useSelector(selectCart)
    const currencyFilter = useSelector(selectCurrencyFilter);
    const dispatch = useDispatch();


    const onInputChangeHandler = (name, input) => {
        if (input === '') {
            return;
        }

        const newQuantity = Number(input);

        dispatch(changeItemQuantity(name, newQuantity));
    };


    const cartElements = Object.keys(cart).map(createCartItem)
    

    const total = calculateTotal(cart, currencyFilter);


    return (
        <div id="cart-container">
            <ul id="cart-items" >{cartElements}</ul>
            <h3 className='total' >
                Total{''}
                <span className='total-value'>
                    {getCurrencySymbol(currencyFilter)}  {total}   {currencyFilter}
                </span>
            </h3>
            <div className='checkout'>
                <button onClick={submit} className='button-checkout'>CHECKOUT</button>
            </div>
        </div>
    );

     function createCartItem(name){
        const item = cart[name];
        
        

        if (item.quantity === 0) {
            return <p>Please add items to your cart...</p>;
        }

        return (
            <li className='container' key={name}>
                <img className='photo-cart' src={item.img} alt=''/>
                <p>{name}</p>
                <select
                    className='item-quantity'
                    value={item.quantity}
                    onChange={(e) => {
                        onInputChangeHandler(name, e.target.value);
                    }}
                >
                    {[...Array(10).keys()].map((_, index) => (
                        <option key={index} value={index}>
                            {index}
                        </option>
                    ))}
                </select>
                <p className='space'>${item.price}</p>
            </li>
        )
    }
}

import React from 'react';
import './button.css';

export const Button = () => {

    const submit = () => {
        alert('Thank You for Subscribing!')
    }
  
    return (
        <div className='btn-container'>
            <div className='btn-wrapper'>
                <div>
                    <h1 className='btn-padding'>Monthly Dispatch</h1>
                    <h5 className='btn-padding2'>Sign up to receive news and updates.</h5>
                </div>
                <form className='footer-form-div'>
                    <input className='footer-form' type='email' placeholder='EMAIL ADDRESS'/>
                </form>
                    <button onClick={submit} className='sub-button'>SUBSCRIBE</button>
            </div>
        </div>
    )
}

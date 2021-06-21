import React from 'react';
import { Button } from '../button/Button';
import './contact.css';

export const Contact = () => {

    const submit = () => {
        alert('Thank You for your message!')
    }

    return (
        <div>
            <div className='contact-container'>
                <div className='contact-wrapper'>
                    <div className='contact-text'>Get in touch.</div>
                    <div></div>
                    <div className='contact-text2'>Home@DieGratia.com</div>
                    <div className='contact-text2'>917-555-9279</div>
                </div>
                <div className='contact-wrapper2'>
                    <div className='name-form'>
                        <h5>Name*</h5>
                        <input className='input-name' placeholder='First Name..'/>
                        <input className='input-name' placeholder='Last Name..'/>
                    </div>
                    <div>
                        <h5>Email*</h5>
                        <input className='input-name'/>
                        <h5>Subject*</h5>
                        <input className='input-name'/>
                        <h5>Message*</h5>
                        <textarea placeholder="Write something.." ></textarea>
                    </div>
                    <button onClick={submit} className='contact-btn'>Submit</button>
                </div>
            </div>
            <Button/>
            
        </div>
    )
}

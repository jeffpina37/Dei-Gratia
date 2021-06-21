import React from 'react';
import { Button } from '../button/Button';
import './home.css';

export const Home = () => {
    return (
        <div>
            <div>
                    <div>
                        <div className='home-header'>
                            <img src='./photo-1/MAINPHOTO.jpg' alt=''/>
                        </div>
                        <div className='home-body'>
                            <h1>Brightening homes with unique, durable products.</h1>
                        </div>
                    </div>
                    <div className='home-body-2'>
                        <div className='home-body-2-1'>
                            <img src='/photo-1/photo3.jpg' alt=''/>
                        </div>
                        <div className='home-body-2-1'>
                            <h2 >Featured</h2>
                            <img src='/photo-1/photo2.jpg' alt=''/>
                            <h1 >GoldenMist Pair</h1>
                        </div>
                    </div>
                    <div className='home-body-3'>
                        <div className='home-body-3-container'>
                            <h3 >Explore</h3>
                            <h1 >The Core Collection</h1>
                            <img className='photo-2' src='/photo-1/photo4.jpg' alt=''/>
                        </div>
                        <div className='home-body-3-container'>
                            <h3 >Start Fresh</h3>
                            <h1 >Sets and Pairs</h1>
                            <img  className='photo-3' src='/photo-1/shop3.jpg' alt=''/>
                        </div>
                    </div>
                </div>
                <Button/>
        </div>   
    )
}

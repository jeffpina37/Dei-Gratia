import React from 'react';
import './stocklist.css';

export const Stocklist = () => {
    return (
        <div className='stocklist-container'>
            <div className='stocklist-wrapper'>
                <div className='stocklist-row'>
                    <div className='card'>
                        <h2>Los Angeles</h2>
                        <h5>Pottery Barn</h5>
                        <h5>300 N Beverly Dr, Beverly Hills</h5>
                    </div>
                    <div className='card'>
                        <h2 >Savannah</h2>
                        <h5>Pottery Barn</h5>
                        <h5>214 Drayton St, Savannah</h5>
                    </div>
                    <div className='card'>
                        <h2 >Atlanta</h2>
                        <h5>Anthropologie</h5>
                        <h5>1207 Howell Mill Rd, Atlanta</h5>
                    </div>
                    <div className='card'>
                        <h2 >New York City</h2>
                        <h5>Totokaelo</h5>
                        <h5>61 Crosby St, New York</h5>
                    </div>
                </div>
                <div className='stocklist-row'>
                    <div className='card'>
                            <h2 >Bay Area</h2>
                            <h5>Williams-Sonoma</h5>
                            <h5>113 Hillsdale Mall, San Mateo</h5>
                        </div>
                        <div className='card'>
                            <h2 >Fort Collins</h2>
                            <h5>Home</h5>
                            <h5>215 E Foothills Pkwy, Fort Collins</h5>
                        </div>
                        <div className='card'>
                            <h2 >Boston</h2>
                            <h5>Crate and Barrel</h5>
                            <h5>199 Boylston St, Chestnut Hill</h5>
                        </div>
                        <div className='card'>
                            <h2 >Santa Fe</h2>
                            <h5>Paseo Pottery</h5>
                            <h5>1424 Paseo De Peralta, Santa Fe</h5>
                        </div>

                </div>
            </div>
        </div>
    )
}

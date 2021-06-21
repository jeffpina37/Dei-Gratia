import React from 'react';
import './searchTerm.css'
import { useSelector, useDispatch } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import {GrClose} from 'react-icons/gr';
import { setSearchTerm, clearSearchTerm, selectSearchTerm} from './searchTermSlice';


export const SearchTerm = () => {
   const searchTerm = useSelector(selectSearchTerm);
   const dispatch = useDispatch();

    const onSearchTermChangeHandler = (e) => {
        const userInput = e.target.value;
        dispatch(setSearchTerm(userInput));
    };

    const onClearSearchTermHandler = () => {
        dispatch(clearSearchTerm());
    }

    return (
            <div id='search-container'>
                <FiSearch className='search-icon'/>
                <input
                    id='search'
                    type='text'
                    value={searchTerm}
                    onChange={onSearchTermChangeHandler}
                    placeholder='Search products'
                />
                {searchTerm.length > 0 && (
                <button
                    onClick={onClearSearchTermHandler}
                    type='button'
                    id='Search-clear-button'
                >
                    <GrClose/>
                </button>
                )}
            </div>
    )
}
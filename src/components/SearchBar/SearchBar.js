import React from 'react';
import './SearchBar.module.css';

function SearchBar() {
    return (
        <div className='SearchBar'>
            <input placeholder='Enter a song, an album or an artist...' />
            <button className='SearchButton'>SEARCH</button>
        </div>
    );
}

export default SearchBar;
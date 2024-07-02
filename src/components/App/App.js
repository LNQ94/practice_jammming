import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Tracklist from '../Tracklist/Tracklist';

function App() {
    return(
        <div className='App'>
            <h1>Jamming</h1>
            <SearchBar />
            <Tracklist />
        </div>
    )
}
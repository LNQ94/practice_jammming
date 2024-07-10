import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.module.css';

function SearchResults({SearchResults}) {
    return (
        <div className="SearchResults">
            <h2>Search Results</h2>
            <Tracklist tracks={SearchResults}/>
        </div>
    );
    
}

export default SearchResults;
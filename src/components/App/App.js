import React, {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Tracklist from '../Tracklist/Tracklist';

function App() {

    const [searchResults, setSearchResults] = useState([
        {id: 1, name: 'Song1', artist: 'Artist1', album: 'Album1'},
        {id: 2, name: 'Song2', artist: 'Artist2', album: 'Album2'},
        {id: 3, name: 'Song3', artist: 'Artist3', album: 'Album3'}
    ]);

    return(
        <div className='App'>
            <h1>Jamming</h1>
            <SearchBar />
            <Tracklist />
            <SearchResults searchResults={searchResults}/>
        </div>
    );
}

export default App;
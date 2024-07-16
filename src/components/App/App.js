import React, { useState, useEffect } from 'react';
import './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  useEffect(() => {
    Spotify.getAccessToken();
  }, []);

  const addTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks(prevTracks => [...prevTracks, track]);
  };

  const removeTrack = (track) => {
    const updatedTracks = playlistTracks.filter(savedTrack => savedTrack.id !== track.id);
    setPlaylistTracks(updatedTracks);
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackUris)
      .then(() => {
        setPlaylistName('New Playlist');
        setPlaylistTracks([]);
        console.log('Playlist saved to Spotify!');
      })
      .catch(error => {
        console.error('Error saving playlist:', error);
      });
  };

  const search = (term) => {
    Spotify.search(term)
      .then(searchResults => {
        setSearchResults(searchResults);
      })
      .catch(error => {
        console.error('Error searching:', error);
      });
  };

  return (
    <div className="App">
      <h1>JaMmInG</h1>
      <div>
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            setPlaylistName={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;


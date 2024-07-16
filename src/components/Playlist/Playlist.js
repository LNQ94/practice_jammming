import React, { useState } from 'react';
import Tracklist from '../Tracklist/Tracklist';
import Spotify from '../../util/Spotify';
import styles from './Playlist.module.css';

function Playlist({ playlistName, playlistTracks, setPlaylistName, onRemove }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState(playlistName);

  const handleNameChange = (event) => {
    setNewPlaylistName(event.target.value);
  };

  const handleNameClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    setPlaylistName(newPlaylistName);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
      setPlaylistName(newPlaylistName);
    }
  };

  const handleSaveToSpotify = () => {
    const trackUris = playlistTracks.map(track => track.uri);

    Spotify.createPlaylist(newPlaylistName)
      .then(newPlaylistId => {
        return Spotify.addTracksToPlaylist(newPlaylistId, trackUris);
      })
      .then(() => {
        console.log('Playlist saved to Spotify!');
        // Optionally, reset the playlist in your app state or perform other actions
      })
      .catch(error => {
        console.error('Error saving playlist:', error);
        // Handle error gracefully
      });
  };

  return (
    <div className={styles.Playlist}>
      {isEditing ? (
        <input
          value={newPlaylistName}
          onChange={handleNameChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          className={styles.Input}
        />
      ) : (
        <h2 onClick={handleNameClick}>{playlistName}</h2>
      )}
      <Tracklist tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button className={styles.SaveButton} onClick={handleSaveToSpotify}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;

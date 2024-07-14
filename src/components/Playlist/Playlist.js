
import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.module.css';

const mockPlaylist = [
  { id: 3, name: 'Playlist Song 1', artist: 'Artist 3', album: 'Album 3' },
  { id: 4, name: 'Playlist Song 2', artist: 'Artist 4', album: 'Album 4' },
];

function Playlist() {
  return (
    <div className="Playlist">
      <input defaultValue="New Playlist" />
      <Tracklist tracks={mockPlaylist} />
      <button className="SaveButton">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;

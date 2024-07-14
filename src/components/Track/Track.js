import React from 'react';
import './Track.module.css';

function Track({track}) {
    return (
        <div className='Tracklist'>
            <h3>{track.name}</h3>
            <p>{track.artist} | {track.album}</p>
        </div>
    );
}

export default Track;
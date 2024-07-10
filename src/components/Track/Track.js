import React from 'react';
import Track from '../Track/Track';
import './Tracklist.module.css';

function Tracks({tracks}) {
    return (
        <div className='Tracklist'>
            {tracks.map(track => {
                <Track key={tracks.id} track={track} />
            })}
        </div>
    );
}

export default Tracklist;
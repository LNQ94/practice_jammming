import React from 'react';
import styles from './Track.module.css';

function Track({ track, onAdd, onRemove, isRemoval }) {
    const renderAction = () => {
      return isRemoval ? (
        <button className="Track-action" onClick={() => onRemove(track)}>-</button>
      ) : (
        <button className="Track-action" onClick={() => onAdd(track)}>+</button>
      );
    };
  
    return (
      <div className="Track">
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
        {renderAction()}
      </div>
    );
  }

export default Track;
import React from 'react';
import Audio from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AudioPlayer = ({ audio }) => {
    return (
        <div style={{ flex: 1, marginBottom: '1em', marginTop: '1em' }}>
            <Audio
                autoPlay={false}
                src={audio}
            />
        </div>
    )
}

export default AudioPlayer;
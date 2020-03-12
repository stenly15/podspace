import React from 'react';
import { Link } from 'react-router-dom';
import AudioPlayer from './AudioPlayer';


const DetailScreen = (props) => {
    const { thumbnail, title, url, episodes } = props.location.podcasts[props.match.params.id - 1];

    return (
        <div className="list-container">
            <div className="list-item-image-container-detail">
                <img src={thumbnail} alt={title} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '2em' }}>
                <h3 style={{ color: 'white' }}>{title}</h3>
                <a href={url} style={{ color: '#11e2d4', fontSize: '12px' }}>{url}</a>
                {
                    episodes && episodes.map(episode => <AudioPlayer audio={episode.audio} />)
                }
                <Link
                    style={{
                        marginTop: '10px',
                        color: '#11e2d4',
                        backgroundColor: '#282727',
                        border: '0.15em solid #11e2d4',
                        width: '6em',
                    }}
                    to='/'
                > {`<< Kembali`} </Link>
            </div>
        </div>
    )
}

export default DetailScreen;
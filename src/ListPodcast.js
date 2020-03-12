import React from 'react';

const ListPodcast = ({ thumbnail, title, url }) => {
    return (
        <div className="list-container">
            <div className="list-item-image-container">
                <img src={thumbnail} alt={title} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '2em' }}>
                <h3 style={{ color: 'white' }}>{title}</h3>
                <a href={url} style={{ color: '#11e2d4', fontSize: '12px' }}>{url}</a>
                <input
                    type="submit"
                    value="Lihat >>"
                    back
                    style={{
                        marginTop: '10px',
                        color: '#11e2d4',
                        backgroundColor: '#282727',
                        border: '0.15em solid #11e2d4',
                        width: '5em',
                    }} />
            </div>
        </div>
    )
}

export default ListPodcast;
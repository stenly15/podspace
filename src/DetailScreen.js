import React from 'react';

const DetailScreen = ({ onNavigateToListScreen }) => {
    return <div>
        <h1>Detail Podcast</h1>
        <a href="#" onClick={onNavigateToListScreen}>
            Back to List
      </a>
    </div>
}

export default DetailScreen;
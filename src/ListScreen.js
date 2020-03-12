import React from 'react';
import PodcastItem from './PodcastItem';
import Search from './Search';

const ListScreen = ({ handleSearchText, onNavigateToDetailScreen, podcasts, searchPodcast }) => {

    const filteredPodcast = podcasts.filter(podcast => podcast.title.toLowerCase().includes(searchPodcast.toLowerCase()));
    return (
        <>
            <div className="header-container">
                <Search
                    placeholder="Cari podcast..."
                    handleChange={handleSearchText}
                />
            </div>
            {
                filteredPodcast.map(item => {
                    return (
                        <PodcastItem
                            key={item.id}
                            title={item.title}
                            url={item.url}
                            thumbnail={item.thumbnail}
                            onNavigateToDetailScreen={onNavigateToDetailScreen}
                        />
                    )
                })
            }
        </>
    )
}

export default ListScreen;
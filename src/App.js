import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import ListPodcast from './ListPodcast';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      podcasts: [],
      searchPodcast: ''
    }
  }

  componentDidMount() {
    fetch('https://json-server-heroku-svoqwyfacm.now.sh/podcasts')
      .then(response => response.json())
      .then(podcasts => this.setState({ podcasts }))
  }

  render() {
    const { podcasts, searchPodcast } = this.state;
    const filteredPodcast = podcasts.filter(podcast => podcast.title.toLowerCase().includes(searchPodcast.toLowerCase()));

    return (
      <div className="App">
        <div className="app-container">
          <div className="header-container">
            <Search
              placeholder="Cari podcast..."
              handleChange={e => this.setState({ searchPodcast: e.target.value })}
            />
          </div>
          {
            filteredPodcast.map(item => {
              return (
                <ListPodcast key={item.id} title={item.title} url={item.url} thumbnail={item.thumbnail} />
              )
            })
          }
        </div>
      </div>
    );
  }

}

export default App;

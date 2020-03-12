import React from 'react';
import logo from './logo.svg';
import './App.css';
import DetailScreen from './DetailScreen';
import ListScreen from './ListScreen';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      podcasts: [],
      searchPodcast: '',
      screen: 'list'
    }
  }

  componentDidMount() {
    fetch('https://json-server-heroku-svoqwyfacm.now.sh/podcasts')
      .then(response => response.json())
      .then(podcasts => this.setState({ podcasts }))
  }

  onNavigateToListScreen = () => this.setState({ screen: 'list' });

  onNavigateToDetailScreen = () => this.setState({ screen: 'detail' });

  handleSearchText = event => this.setState({ searchPodcast: event.target.value })

  render() {
    return (
      <div className="App">
        <div className="app-container">
          {
            this.state.screen === 'list' && (
              <ListScreen
                podcasts={this.state.podcasts}
                searchPodcast={this.state.searchPodcast}
                handleSearchText={this.handleSearchText}
                onNavigateToDetailScreen={this.onNavigateToDetailScreen} />
            )
          }
          {
            this.state.screen === 'detail' && (
              <DetailScreen onNavigateToListScreen={this.onNavigateToListScreen} />
            )
          }
        </div>
      </div>
    );
  }
}

export default App;

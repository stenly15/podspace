import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import DetailScreen from './DetailScreen';
import ListScreen from './ListScreen';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      podcasts: [],
      searchPodcast: '',
      screen: { name: 'list', id: '' }
    }
  }

  componentDidMount() {
    fetch('https://json-server-heroku-svoqwyfacm.now.sh/podcasts')
      .then(response => response.json())
      .then(podcasts => this.setState({ podcasts }))
  }

  onNavigateToListScreen = () => this.setState({ screen: { name: 'list' } });

  onNavigateToDetailScreen = () => this.setState({ screen: { name: 'detail' } });

  handleSearchText = event => this.setState({ searchPodcast: event.target.value })

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <Switch>
            <Route exact path='/' component={() => <ListScreen
              podcasts={this.state.podcasts}
              searchPodcast={this.state.searchPodcast}
              handleSearchText={this.handleSearchText}
              onNavigateToDetailScreen={this.onNavigateToDetailScreen} />} />
            <Route exact path='/detail/:id' component={DetailScreen} />
          </Switch>

        </div>
      </div>
    );
  }
}

const Home = () => {
  return (
    <div><h1>Home</h1></div>
  )
};


export default App;

import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import DetailScreen from './screens/DetailScreen';
import ListScreen from './screens/ListScreen';
import Logo from './screens/Logo';

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
        <Logo />
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

export default App;

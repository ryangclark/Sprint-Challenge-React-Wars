import React, { Component } from 'react';
import './App.css';

import ListContainer from './components/ListContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      homeworlds: {},
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  checkStateForHomeworld = homeworldURL => {
    // check if homeworldURL is in App state
    if (this.state.homeworlds.hasOwnProperty(homeworldURL)) {
      // wait for the `getHomeworld() fetch()` to complete
      return;
    }
    this.setState({ homeworlds: {...this.state.homeworlds, [homeworldURL]: null} });
    this.getHomeworld(homeworldURL);
    return;
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level, we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it into our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      // once `starwarsChars` has been populated, begin fetching their homeworlds
      .then(() => this.state.starwarsChars.forEach(
        char => this.checkStateForHomeworld(char.homeworld)
      ))
      .catch(err => {
        throw new Error(err);
      });
  }

  getHomeworld = URL => {
    console.log('getHomeworld running! url:', URL);
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ homeworlds: {...this.state.homeworlds, [URL]: data} });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <ListContainer 
          charList={this.state.starwarsChars}
          homeworlds={this.state.homeworlds}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import ListContainer from './components/ListContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      homeworlds: [],
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  checkHomeworldState = homeworldURL => {
    for (let world of this.state.homeworlds) {
      if (homeworldURL === world.url) {
        console.log('homeworld found in app state!', world.name);
        return world;
      }
    }
    this.getHomeworld(homeworldURL);
    return null; //return null for CharacterCard.js logic
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
        this.setState({ homeworlds: [...this.state.homeworlds, data] });
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
          checkHomeworldState={this.checkHomeworldState}
          // homeworlds={this.state.homeworlds}
        />
      </div>
    );
  }
}

export default App;

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
        this.state.starwarsChars.forEach(char => this.getHomeworlds(char));
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  // I can't get this to work. Ugh.
  getHomeworlds = URL => {
    console.log('getHomeworld running!');
    fetch(URL)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data.results);
            this.setState({ homeworlds: [...this.state.homeworlds, data.results] });
        })
        .catch(err => {
            throw new Error(err);
        });
  }

  // setHomeworlds = char => {
  //   console.log('setHomeworlds running!');
  //   for (let world of this.homeworlds) {
  //     if (char.homeworld === world.url) {return;}
  //     const newHomeworld = this.getHomeworld(char.homeworld);
  //     newHomeworld = {...newHomeworld, url: char.homeworld};
  //     this.setState({
  //       homeworlds: {...this.state.homeworlds, newHomeworld}
  //     })
  //   }
    // if (char.homeworld)
    // this.setState({
      // homeworlds: 
      // starwarsChars: this.state.starwarsChars.map(char => {
        // let newChar = {...char};
        // newChar.homeworld = this.getHomeworld(newChar.homeworld);
        // newChar.homeworld = 'fart';
        // console.log(char.homeworld);
        // return {...char, homeworld: this.getHomeworld(char.homeworld)};
      // })
    // })
  // }

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

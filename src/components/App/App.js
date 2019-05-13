import React, { Component } from 'react';
import './App.css';

// Components
import PlayersGrid from '../playersgrid/PlayersGrid';
import SearchBar from '../searchbar/SearchBar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerData: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(`https://football-players-b31f2.firebaseio.com/players.json?print=pretty`);
    const json = await response.json();
    this.setState({ playerData: json });
  }

  render() {
    const { playerData } = this.state;
    return (
      <div className="App">
        <h1>Football Player Finder</h1>
        <SearchBar></SearchBar>
        <PlayersGrid players={playerData}></PlayersGrid>
      </div>
    );
  }
}

export default App;

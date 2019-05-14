import React, { Component } from 'react';
import './PlayersGrid.scss';

class PlayersGrid extends Component {
  
  convertToAge(birthdate) {
    const todaysYear = new Date().getUTCFullYear();
    const playersBirthYear = new Date(birthdate).getUTCFullYear();
    const playersAge = todaysYear - playersBirthYear;
    return playersAge;
  }

  componentDidMount() {
   
  }
  
  render() {
    const { players } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Position</th>
            <th>Team</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
            players.map((player, i) => {
              return(
                <tr key={i}>
                  <td>{player.name}</td>
                  <td>{player.position}</td>
                  <td>{player.nationality}</td>
                  <td>{this.convertToAge(player.dateOfBirth)}</td>
                </tr>
              );
            })
          }
          </tbody>
      </table>
    );
  }
}

export default PlayersGrid;

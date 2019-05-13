import React, { Component } from 'react';
import './PlayersGrid.css';

class PlayersGrid extends Component {
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
                  <td>{player.dateOfBirth}</td>
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

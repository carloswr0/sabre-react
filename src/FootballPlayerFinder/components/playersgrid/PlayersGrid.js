import React, { Component } from 'react';
import './PlayersGrid.scss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class PlayersGrid extends Component {
  convertToAge(birthdate) {
    const todaysYear = new Date().getUTCFullYear();
    const playersBirthYear = new Date(birthdate).getUTCFullYear();
    const playersAge = todaysYear - playersBirthYear;
    return playersAge;
  }

  filterPlayer(tempPlayer, filters) {   
    for (let propName in filters) {
      if(filters.name && tempPlayer.name.includes(filters[propName].toUpperCase())) {
        return true;
      }
      if(filters.position && tempPlayer.position.includes(filters[propName].toUpperCase())) {
        return true;
      }
      if(filters.age && tempPlayer.dateOfBirth === parseInt(filters[propName])) {
        return true;
      }
    }
    return false;
  }
  
  
  render() {
    const { players, filters } = this.props;
    
    let filteredPlayers = [];
    let playersToRender = [];
    
    if(players) {
      filteredPlayers = players.filter(player => { 
        const tempPlayer = {
          name: player.name.toUpperCase(),
          dateOfBirth: this.convertToAge(player.dateOfBirth),
          position: player.position.toUpperCase(),
        };
        return this.filterPlayer(tempPlayer, filters);
      });
    }
  

    if(filteredPlayers.length > 0) {
      playersToRender = filteredPlayers;
    } else {
      playersToRender = players;
    };

    return (
      <Paper className="table-custom">   
        <Table>
          <TableHead className="table-head-custom">
            <TableRow className="table-head-row-custom">
              <TableCell>Player</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Team</TableCell>
              <TableCell>Age</TableCell>
            </TableRow >
          </TableHead>
          <TableBody>
            { playersToRender ? 
              playersToRender.map((player, i) => {
                return(
                  <TableRow className="table-body-row-custom" key={i}>
                    <TableCell className="table-cell-custom">{player.name}</TableCell>
                    <TableCell className="table-cell-custom">{player.position}</TableCell>
                    <TableCell className="table-cell-custom">{player.nationality}</TableCell>
                    <TableCell className="table-cell-custom">{this.convertToAge(player.dateOfBirth)}</TableCell>
                  </TableRow >
                );
              }) : null
            }
            </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default PlayersGrid;

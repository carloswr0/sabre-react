import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actionCreator';

// Components
import Main from '../Main/Main';

export function mapStateToProps(state) {
  return {
    players: state.players,
    filters: state.filter,
  };
}

export function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;

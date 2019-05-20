import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

// Root Reducers
import rootReducer from './FootballPlayerFinder/reducers/index';

// Creates the store with our reducers and default state
const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
); 

if(module.hot) {
  module.hot.accept('./FootballPlayerFinder/reducers/',() => {
    const nextRootReducer = require('./FootballPlayerFinder/reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}
export default store;
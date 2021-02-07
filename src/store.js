import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {songsListReducer} from './reducers/SongsListReducer';
import thunk from 'redux-thunk';
const initialState = {  };
const reducer = combineReducers({
  songsList: songsListReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;
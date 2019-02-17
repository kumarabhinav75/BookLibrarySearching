import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//importing reducers
import {booksData} from './Redux/Reducers/booksData.reducer';
import {searchFilter} from './Redux/Reducers/searchFilter.reducer';
import {searchInput} from './Redux/Reducers/searchInput.reducer';
//import combinedReducer
import {combineReducers} from 'redux';
//importing store
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const bookAppReducer = combineReducers({
  booksData,
  searchInput,
  searchFilter
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(bookAppReducer, devTools);
//

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Component } from 'react';
import './App.css';

//components
import Filter from './components/Filter';
import Sort from './components/Sort';
import SearchUser from './components/SearchUser';
import List from './components/List';

//redux
import { Provider } from "react-redux";
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <header>
            <Filter />
            <Sort />
            <SearchUser />
          </header>
          <List data={store.getState()}/>
        </div>
      </Provider>
    );
  }
}

export default App;

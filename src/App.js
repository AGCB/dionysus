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
  constructor(props) {
    super(props);

    this.state = {
      sortAscending: true
    };
    this.sortByASC = this.sortByASC.bind(this);
    this.sortByDESC = this.sortByDESC.bind(this);
  }

  sortByASC() {
    this.setState(prev => {
      return {
        sortAscending: true
      }
    })
  }
  sortByDESC() {
    this.setState(prev => {
      return {
        sortAscending: false
      }
    })
  }
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <header>
            <Filter />
            <Sort
                  sortByASC={this.sortByASC}
                  sortByDESC={this.sortByDESC}/>
            <SearchUser />
          </header>
            <List sortascending={this.state.sortAscending}/>
            <footer style={{textAlign: "right",
                            marginTop:"20px",
                            marginRight: "10px"}}>
              <span>coded with <span role="img"
                                     aria-label="love">💓 </span>
                     by alex</span>
            </footer>
        </div>
      </Provider>
    );
  }
}

export default App;

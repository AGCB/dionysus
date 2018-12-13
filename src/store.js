import { createStore } from 'redux';
import MainReducer from './reducers/MainReducer';

//json
import users from './json/users.json';
import posts from './json/posts.json';
const userData = [];
userData.push(users, posts);

// devTools gets passed in as the 3rd parameter
// so that we get reduxDevTools working on local host. 
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
                 window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(MainReducer,
                          userData,
                          devTools);

export default store;

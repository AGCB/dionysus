import { createStore } from 'redux';
import MainReducer from './reducers/MainReducer';

import users from './json/users.json';
import posts from './json/posts.json';

const userData = {
  users: users,
  posts: posts
}

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
                 window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(MainReducer,
                          userData,
                          devTools);

export default store;

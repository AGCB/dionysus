



//unclear if this is necessary.

//json
import users from '../json/users.json';
import posts from '../json/posts.json';
const userData = {
  users: users,
  posts: posts
}

export default function MainReducer(state = userData, action) {
  switch (action.type) {
    case 'TOGGLE_ACTIVE':
      console.log('state from case TOGGLE_ACTIVE is...', state);
      return {
        users: userData.users,
        posts: userData.posts.filter(x => {
          return (x.active);
        })
      }
    case 'TOGGLE_INACTIVE':
      console.log('state from case TOGGLE_INACTIVE is...', state);
      return {
        users: userData.users,
        posts: userData.posts.filter(x => {
          return (!x.active);
        })
      }
    case 'SEARCH_USER_NAME':
    console.log('state from case SEARCH_USER_NAME is...', state);
      return state;
    default:
      return state
  }
}

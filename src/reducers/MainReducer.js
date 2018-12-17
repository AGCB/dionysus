import users from '../json/users.json';
import posts from '../json/posts.json';

const userData = {
  users: users,
  posts: posts
}

export default function MainReducer(state = userData, action) {
  switch (action.type) {
    case 'TOGGLE_ACTIVE':
      return {
        users: userData.users,
        posts: userData.posts.filter(x => {
          return (x.active);
        })
      }
    case 'TOGGLE_INACTIVE':
      return {
        users: userData.users,
        posts: userData.posts.filter(x => {
          return (!x.active);
        })
      }
    case 'SEARCH_USER_NAME':
      return state;
      default:
        return userData;
  }
}

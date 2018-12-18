import users from '../json/users.json';
import posts from '../json/posts.json';

const userData = {
  users: users,
  posts: posts,
  visibilityFilter: "ACTIVE"
}

export default function MainReducer(state = userData, action) {
  switch (action.type) {
    case 'TOGGLE_ACTIVE':
      return {
        ...state,
        visibilityFilter: action.visibilityFilter
      }
    case 'TOGGLE_INACTIVE':
      return {
        ...state,
        visibilityFilter: action.visibilityFilter
      }
    case 'SEARCH_USER_NAME':
      return state;
    default:
      return userData;
  }
}

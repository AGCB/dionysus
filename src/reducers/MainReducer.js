



//unclear if this is necessary.

//json
import users from '../json/users.json';
import posts from '../json/posts.json';
const userData = {
  users: users,
  posts: posts
}
/*
  My strategy below is flawed. You are constantly reducing the
  filter. Surely I'm not using this reducer correctly.
  need to explore immutability/ spread operator / other examples....

 */
export default function MainReducer(state = userData, action) {
  switch (action.type) {
    case 'TOGGLE_ACTIVE':
      console.log('state from case TOGGLE_ACTIVE is...', state);
      return {
        users: state.users,
        posts: state.posts.filter(x => {
          return (x.active);
        })
      }
    case 'TOGGLE_INACTIVE':
      console.log('state from case TOGGLE_INACTIVE is...', state);
      return {
        users: state.users,
        posts: state.posts.filter(x => {
          return (!x.active);
        })
      }
    case 'SEARCH_USER_NAME':
    console.log('made it to the reducer!!');
      return state.filter(x => {
        return state;
      });
    default:
      return state
  }
}

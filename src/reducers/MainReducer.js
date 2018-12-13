// No other reducers but it's common practice so....
//
//all of my return statements here are placeholders for the idea.
export default function MainReducer(state = [], action) {
  switch (action.type) {
    case 'TOGGLE_ACTIVE':
      console.log('made it to the reducer!!');
      return state.filter(x => {
        return (x.active);
      });
    case 'TOGGLE_INACTIVE':
      console.log('made it to the reducer!!');
      return state.filter(x => {
        return (!x.active);
      });
    case 'SORT_ASCENDING':
      console.log('made it to the reducer!!');
      // don't know how I would do this one yet.
      return "??";
    case 'SORT_DESCENDING':
    // don't know how I would do this one yet.
    console.log('made it to the reducer!!');
      return "??";
    case 'SEARCH_USER_NAME':
    console.log('made it to the reducer!!');
      return state.filter(x => {
        return "x.name === userInput";
      });
    default:
      return state
  }
}

import { TOGGLE_ACTIVE,
         TOGGLE_INACTIVE,
         SORT_ASCENDING,
         SORT_DESCENDING,
         SEARCH_USER_NAME
        } from './actionTypes';

// filter actions
export const toggleActive = () => ({
  type: TOGGLE_ACTIVE,
  visibilityFilter: "ACTIVE"
})
export const toggleInactive =() => ({
  type: TOGGLE_INACTIVE
  visibilityFilter: "INACTIVE"
})

// search userName action
export const searchUserName = userInput => ({
  type: SEARCH_USER_NAME,
  userInput: userInput
})

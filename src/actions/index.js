import { TOGGLE_ACTIVE,
         TOGGLE_INACTIVE,
         SORT_ASCENDING,
         SORT_DESCENDING,
         SEARCH_USER_NAME
        } from './actionTypes';

// filter actions
export const toggleActive = () => ({
  type: TOGGLE_ACTIVE
})
export const toggleInactive =() => ({
  type: TOGGLE_INACTIVE
})

// sort actions
export const sortAscending = () => ({
  type: SORT_ASCENDING
})
export const sortDescending = () => ({
  type: SORT_DESCENDING
})

// search userName action
export const searchUserName = userInput => ({
  type: SEARCH_USER_NAME,
  userInput: userInput
})

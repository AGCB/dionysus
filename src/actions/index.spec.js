import * as actions from './index'

describe('all actions', () => {
  it('toggleActive should create TOGGLE_ACTIVE action', () => {
    expect(actions.toggleActive()).toEqual({
      type: 'TOGGLE_ACTIVE'
    })
  })

  it('toggleInactive should create TOGGLE_INACTIVE action', () => {
    expect(actions.toggleInactive()).toEqual({
      type: 'TOGGLE_INACTIVE'
    })
  })

  it('sortAscending should create SORT_ASCENDING action', () => {
    expect(actions.sortAscending()).toEqual({
      type: 'SORT_ASCENDING'
    })
  })

  it('sortDescending should create SORT_DESCENDING action', () => {
    expect(actions.sortDescending()).toEqual({
      type: 'SORT_DESCENDING'
    })
  })

  it('searchUserName should create SEARCH_USER_NAME action', () => {
    expect(actions.searchUserName("sam")).toEqual({
      type: 'SEARCH_USER_NAME',
      userInput: "sam"
    })
  })
})

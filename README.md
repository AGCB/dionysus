




































# dionysus
 - a small code sample using React/Redux

## Branch
action-dispatching

## Status
Feature Incomplete.
- Redux store has data.
- `List` is connected to the redux store.
- `Filter` actions are firing.
  - state is getting modified but incorrectly.
    - see the comment for `MainReducer`.
- `Sort` has no onclick behavior


---
















### Topics
#### CSS
For the dropdowns, I'm using MaterialUI.
FlexBox only for layout. All styles are in `App.css` minus a few last minute inlines with `style={{foo:bar}}`.


#### Store
..the 10 people and the 100 messages taken from 2 `.json` files found in `./json`

#### Asc/Desc
- one of those moments where you walk away from the screen for a few and ideas pop in....
- To change the order ( ascending/descending ),  I don't need to involve the redux store at all. I thought at first I would dispatch an action but now I'm thinking i will just inject a CSS class that reverses the order with `flex-direction`. Why does the store need to know about it?

### Random Mentions
There were a few things that got brought up in phone conversations that I need more experience with.
- refs and their usage in react
- testing libraries in react.
- JWT and cookies.
- Redux building from scratch.
  - it felt good when I got the mapping of the json to the cards. If we talk further I'd like to know what the AZ team's opinion is on my strategy there. Was there another way I could have shaped the state object to improve the overall app structure?

### ...if more time
- Next time I need dropdowns from scratch I'd like to try a vanilla react [approach](https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe)

---
---
---
---
---
---
---
---
---
---
---
---
---
---
---
---
---
---

## Current Focus
`Sort` has no onClick behavior

---
---
---
---
---
---
---
---
---
---
---
---
---
---
---
---
---

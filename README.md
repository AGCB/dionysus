




































# dionysus
 - a small code sample using React/Redux











## Status
Feature Incomplete.
- actions are not being fired
- none of the buttons are functional.
- no tests written
- Redux store has data. Unlike before branching off master though, `List` now is connected to the redux store, not just receiving the store's data as a prop.
---









### Topics
#### CSS
For the dropdowns, I'm using MaterialUI.
FlexBox only for layout. All styles are in `App.css` minus a few last minute inlines with `style={{foo:bar}}`.


#### Store
..the 10 people and the 100 messages taken from 2 `.json` files found in `./json`
One complication I ran across was having this data spread across 2 objects. My solution was to make them both sibling arrays.

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

---
---
---
---
---
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

## Current War
- read kabu.
2 files.
- I took out the mapping in `List.js` that rendered all of my messages.
  - I want `List` connected to the store properly.
  - the last method gets it from props `data` which i defined in `App` as `<List data={store.getState()}/>`
  - This is not the proper way to use redux. I should have used `MSTP`
- MSTP on `List` component
  - done...
- Dispatching actions....

- i will break off another branch here in case I want to get back to this point.... teardown branch has the List connecting to the redux store.


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

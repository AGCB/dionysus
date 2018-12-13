# dionysus
 - a small code sample using React/Redux

##### Status
Feature Incomplete. Redux store has data but actions are not being fired and none of the buttons are functional. #codefail
I assume someone with full working knowledge could get through this in about an hour. It took me 5 plus to pull this off.

I've debugged redux code, and render props have gotten me far, but there are still parts of redux that I'm make me 😭

##### CSS
For the dropdowns, I'm using MaterialUI.
FlexBox only for layout. All styles are in `App.css` minus a few last minute inlines with `style={{foo:bar}}`.
Next time I need dropdowns from scratch I'd like to try a vanilla react [approach](https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe)


##### Store
..the 10 people and the 100 messages taken from 2 `.json` files found in `./json`
One complication I ran across was having this data spread across 2 objects. My solution was to make them both sibling arrays.

##### Random Mentions
There were a few things that got brought up in phone conversations that I need more experience with.
- refs and their usage in react
- testing libraries in react.
- JWT and cookies.
- Redux building from scratch.
  - it felt good when I got the mapping of the json to the cards. If we talk further I'd like to know what the AZ team's opinion is on my strategy there. Was there another way I could have shaped the state object to improve the overall app structure?

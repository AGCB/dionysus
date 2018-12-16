




































# dionysus
 - a small code sample using React/Redux

## Branch
searchUser-feature

## Status
<details>
  <summary>
    feature details
  </summary>
  <table style="width:100%">
   <tr>
     <th>FILTER</th>
     <th>SORT</th>
     <th>USERNAME SEARCH</th>
   </tr>
   <tr>
     <td>✔</td>
     <td>✔</td>
     <td>needs full work</td>
   </tr>
 </table>
</details>

















<Details>
  <summary> Topics</summary>

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


  ### ...if more time
  - Next time I need dropdowns from scratch I'd like to try a vanilla react [approach](https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe)

</Details>


## Current Focus
- reading [an article ](https://medium.com/capital-one-tech/how-to-work-with-forms-inputs-and-events-in-react-c337171b923b) about forms/events/input in react

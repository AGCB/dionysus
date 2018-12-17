




































# dionysus
 - a small code sample using React/Redux

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
     <td>fires action. needs filtering of list</td>
   </tr>
 </table>
</details>

















<Details>
  <summary> Topics</summary>

  #### CSS
  For the dropdowns, we use MaterialUI.
  FlexBox only for layout. All styles are in `App.css` minus a few last minute inlines with `style={{foo:bar}}`.


  #### Store
  ..the 10 people and the 100 messages taken from 2 `.json` files found in `./json`

  #### Asc/Desc
  - We aren't involving the store. Instead, we conditionally adding CSS classes that handle the listing order through `flex-direction`.

  #### Testing
  - tests written for action dispatching only check for correct obj shape.
  - more need writing.

  #### Redux
  - I'm still using redux reducers incorrectly. In this small example it doesn't matter, but if we were adding posts, then my approach would break the app.


  #### Random Mentions
  There were a few things that got brought up in phone conversations that I need more experience with.
  - refs and their usage in react
  - testing libraries in react.
  - JWT and cookies.


  #### ...Known Bugs
  - dropDowns in vanilla react.
  - searchUser form filtering.
  - more tests
  - css bug wrap not working on descending items.
  - header layout needs cleaner widescreen settings.
  - cleaner button design.

</Details>

---
coded with 💟 ~ agcb

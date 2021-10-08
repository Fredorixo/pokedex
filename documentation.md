# Pokemon API

## Resources:

- [Fetch Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Various Requesting Strategies](https://www.freecodecamp.org/news/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa/)

- [Pokemon Color Scheme](https://veekun.com/dex/media/types/en/)

- [Material Icons](https://fonts.google.com/icons)
- [Usage of Material Icons](https://stackoverflow.com/questions/50303454/how-to-use-the-new-material-design-icon-themes-outlined-rounded-two-tone-and/54902967#54902967)

- [Semicircle CSS](https://codepen.io/xram/pen/thLsk)
- [Pokeball CSS](https://codepen.io/raubaca/pen/obaZmG?html-preprocessor=pug)

- [Controlling Animations using JS](https://dev.to/vaishnavme/displaying-loading-animation-on-fetch-api-calls-1e5m)

- [HTML Code for Icons](https://www.toptal.com/designers/htmlarrows/symbols/)

- [FlatMaps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap#for_adding_and_removing_items_during_a_map)


## Notes

- Using the fetch() function to fetch data through API Request seemed to fullfil the need.
- The fetch() function can be used for all the various HTTP verbs.

- The insertRule() & the cssRules[index] function, both can be used to alter the css properties through JavaScript
  for either the true elements or the pseudo elements.
- The insertRuel() adds a new rule to the CSS StyleSheet whereas the cssRules[index] alters or manipulates
  the existing StyleSheet rules.

- Running the Pokemon API without any parameters returns an array of the possible values that could be placed
  as the parameter.

- To access a key that contains characters that cannot appear in an identifier, like "official-artwork",
  here '-' (hyphen) is a special character which isn't allowed in an identifier. So, to access it,
  use brackets: jsonObj["official-artwork"]


## Challenges:

- Implement Lazy Loading.
- To add a Fist for Attack-type and Shield for Defense-type.
- Add a twinkling star/sparkling effect over the buttons on hover.
- Decrease gap between the sub elements of filter.


## Learnings:

- Learnt about APIs
- How to call and fetch data from an API with GET & POST HTTP verb.
- How to handle data dynamically with javascript.
- Also learnt writing CSS Rules for Stylesheet dynamically in JavaScript.
- Learnt about Promises and JSON.
- Learnt how to tackle with pseudo elements, so as to make changes locally not globally.
- The switch case in JavaScript lets you use strings in its cases since strings in JavaScript is a fundamental
  datatype
- Learnt about CORS(Cross-Origin Resource Sharing).
- Learnt for-in and for-of loops
- Learnt about multi-file programming in JavaScript.
- Always place a return statement in arrow functions if you use a curly brace.
- The json() method doesn't work satisfactorily from the promise returned by Promise.allSettled()
- Learnt to work with Promise.allSettled()
- Learnt about Promise.all() & Promise.any()
- Learnt about Stacking context in CSS, along with new methods to create Stacking Context like transform, opacity,
  filter.
- While creating a Stacking context, make sure to keep something inside of the original container, if you want it
  to show up, and then adjust the z-index to position it in the stack alongside the pseudo elements of the
  container itself.
- Learnt how to control CSS Animations using JavaScript and also about events like "animationstart",
  "animationend".
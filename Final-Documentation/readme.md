## Group Events

### Project Summary (President)

For this project we created a website called Star Dive that focuses on facts about stars and tips. We chose this topic because astronomy inspires curiosity and offers a stunning visual experience. Stars are an excellent subject for this project because they combine science with interactive design. Our goal is to create something that educates, engages visually, and is easy for newcomers to astronomy to understand.


### Live Link

[Home Page](https://creel90.github.io/DeLorean/Final-Documentation/home.html) 

[Famous Stars](https://creel90.github.io/DeLorean/Final-Documentation/Final-project-2/Stars.html)  

[Stargazing](https://creel90.github.io/DeLorean/Final-Documentation/stargazing.html)  

[Milky Way](https://creel90.github.io/DeLorean/Final-Documentation/Final-project-2/milkyway.html)



### Key Takeaways (Analyst)

Accessing, reading, and writing to local storage is very useful for retaining information the user enters between sessions. Local storage can be accessed through the `localStorage` keyword, and a few important functions can be called on it:
- `localStorage.setItem(key, value)`: this allocates space in local storage for a particular value, which can be accessed with a key (usually a string)
- `localStorage.getItem(key)`: this returns the value that is associated with the given key.
- `localStorage.removeItem(key)`: this removes the value from local storage as well as the key tied to it.
- `localStorage.clear()`: this completely cleans out local storage.

Additionally, it should be noted that local storage stores everything as a string. That means that when you read a value from local storage, you may want to surround it in a `JSON.parse()` method so that it does what you expect in code. When writing values to local storage, you'll also want to surround the value being stored in the `JSON.stringify()` method to avoid errors.

For API usage, `async` and `await`, or alternatively `.then()`  function chaning, are used so that pieces of code only execute after a process fully completed. This is useful because APIs might have latency and thus not be able to keep up with the rest of your code. It is critical to also use `.try{}` and `.catch{}` structures so that any errors that come up when using the API do not shut down every other process. 

Throughout various points in this project, other ideas throughout the semester are additionally used:
- DOM Manipulation (reference the page with the `document` keyword, followed by some kind of `getElement` function)
- Changing CSS styling and HTML content through code (access data attributes with `.dataset`, add to the `.classList`, etc)
- Creating elements in code (`document.createElement()`, followed by `.appendChild()` somewhere else)
- Events to create interactability (event listeners like `onClick`, `onInput`, `onFocus`/`onBlur`)
- Objects with attributes based on key-value pairs (ex. `let book = {title: "title", pageCount: 165, checkedOut = false};`)

### Core Webpages (Architect)
1: Home Page - Home page for the website with some small info and an inspirational quote that changes as well as a cool-looking background

2: What are Stars? - Definition of what stars are, how they are made, and what they can be made of with images and graphics. 

3: Type of Star - Will display info on each spectral class of main sequence stars with colored buttons. When clicking on any button, an API will load relevant characteristics of that specific star in a text area beside the buttons.

4: Life cycle of a star—This will be an interactive timeline that views stars' lives from birth to death. It will discuss different ways of dying and have different timeline areas with branches.

5: Famous Stars - This page will explain diffrent types of stars, including how they vary by color, size, and temperature. It will include visual examples and charts.

6: Constellations - Telling stories behind constellations with a possible chart or gallery to select from to learn about.

7: The Milky Way & Beyond - it will be showing stunning images from the Hubble and James Webb telescopes with facts about our galaxy and what lies beyond.

8: Stargazing Tips - Will give suggestions to help someone have a successful stargazing night as well as an interactive feature of the moon phase of that day.

### Design Choices & Local Storage Design (Designer)

List any websites that you might reference to influence your styling choices. List any colors used and what they were used for. 

Describe your local storage data structure with rationale.

### Members & Responsibilities (Scrum Master)

List all members, their roles, and their planned contributions to the project

### Sources

Moon phase emojis found at https://emojis.wiki/moon-phases/
Moon phase code from https://gist.github.com/endel/dfe6bb2fbe679781948c
Tips found at https://www.skyatnightmagazine.com/advice/skills/stargazing-top-tips
Quotes found at https://www.scarymommy.com/star-quotes & https://www.yourtango.com/zodiac/astrology-quotes

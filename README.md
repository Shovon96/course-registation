## Frequently Asked Questions

### 1. Added 3 Project Features?

1.I'm using React Js in this site fully developing.
2.I'm used in this project some cards, react-tostify more attractive in alert and add a cart.
3.This project i will used a button for added functional time and price in the cart.

### 2. Discuss how you managed the state in your assignment project.
Firstly I'm fetching data from local api and store it in a state. Thats why i declared first state for storing all the course data in Cards.jsx file.I just forwarded in state name in carts.jsx file. But the situation got tough when i had to handle button in a child component but the reaction has to be done in carts. cause there was to direct connection or relation between cards, card. jsx to cart.jsx. So i had to use state in the grandparent file (app.jsx). then i had to send the data and receive the data through props.

### I had to create 5 useState in this project.

1.Fetched data's state.
2.Selected courses state.
3.Total Credit Hours State.
5.Remaining Time Hour's state.
4.Total price's state.

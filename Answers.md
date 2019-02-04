1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

3 Javascript methods that don't produce side effects could be Object.Assign, Object.Create, and Array.map. There are other ways of getting around certain things in a more clean way such as using the ...spread operator to spread in old values and change a specific value.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: Actions take in a type and a payload and dispatch the action type and payload as an object to the reducer so we can use it depending on specific cases provided by the type key.

Reducers: Reducers take in action types and payloads to create a new state object with modified values, from the action types we can check which action was dispatched and update state with payload.

Store: The store acts as the applications state which stores all the data needed and then we can pass down the specific state to props of our container components using mapStateToProps and our connect HOC.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

The difference between Application state and Component state is that Application state is usually held in the store and contains data that the application might need to access in multiple places (such as friends lists, posts, etc). Component state is held on a specific component which usually holds data mainly to be put into an action and dispatch it to the reducers to be added to state. An example of this could be having a form to submit something to a database. The form data would be updated on the component state then passed to an action creator to be added to the database, then update state with new data.

4.  What is middleware?

Middleware adds another step in between our dispatches/Action creators and our reducers. This can be described as async and allows us to view state in this step with our logger/thunk

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk allows us to add a dispatch to our action creators which makes us able to dispatch multiple actions based on what we do inside the function, it allows us to create an axios call and and dispatch our responses on each axios method.

6.  Which `react-redux` method links up our `components` with our `redux store`?

React Redux { connect } HOC links our components with our redux store and allows us to acess props via map state to props. The { Provider } Component is what actually links our store reducer to our application by wrapping our app in such component and passing the store as props to it. 
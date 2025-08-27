const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + action.payload,
      };
    case "DECREMENT":
      return {
        counter: state.counter - action.payload,
      };
  }
};

const store = redux.createStore(counterReducer);

console.log(store.getState());

//subscriber function will be called whenever the state changes
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

//very dispatch is a JS object with type which is a string and optional payload
store.dispatch({ type: "INCREMENT", payload: 1 });

import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      throw new Error();
  }
};

const TestReducer = () => {
  //   const abc = useReducer(reducer, initialState);
  //   const [state, dispatch] = useReducer(reducer, initialState);
  //   console.log(abc);
  return <div>This is</div>;
};

export default TestReducer;

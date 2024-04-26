import React, { useState, useReducer } from "react";
import { Button } from "./button";

type stateProps = {
  count: number;
};

type actionProps = {
  type: string;
  payload: number;
};

type actionsProps = {
  type: "add" | "minus" ;
  payload: number;
};


type actionsProps2 = {
  type: "reset" ;
}; 

type actionProps3 =  actionsProps | actionsProps2

const initialState = { count: 0 };

function reducer(state: stateProps, action: actionProps3) {
  switch (action.type) {
    case "add":
      return { count: state.count + action.payload};
    case "minus":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const name: any = "sowmi"
const result  =  name as string
console.log(result)

export const Counter = () => {
  const [currentNumber, setCurrentNumber] = useState<number | null>(0);

  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = () => {
    if (currentNumber !== null) {
      setCurrentNumber(currentNumber + 1);
    } else {
      setCurrentNumber(0);
    }
  };

  const handleDecrement = () => {
    if (currentNumber !== null) {
      setCurrentNumber(currentNumber - 1);
    }
  };

  const handleReset = () => {
    setCurrentNumber(0);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Button handleclick={handleIncrement} btnLabel="Increment" />
        <p>{currentNumber}</p>
        <Button handleclick={handleDecrement} btnLabel="Decrement" />
        <Button handleclick={() => setCurrentNumber(null)} btnLabel="Reset" />
      </div>
      {/* use Reducer */}
      <div style={{ display: "flex" }}>
        <p>COUNT: {state.count}</p>
        <Button
          handleclick={() => dispatch({ type: "add", payload: 2 })}
          btnLabel="ADD"
        />
        <Button
          handleclick={() => dispatch({ type: "minus", payload: 2 })}
          btnLabel="MINUS"
        />
        <Button
          handleclick={() => dispatch({ type: "reset" })}
          btnLabel="RESET"
        />
      </div>
    </>
  );
};

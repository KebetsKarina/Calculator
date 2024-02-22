import { Layout } from "../Layout";
import { useState } from "react";
import { createContext, useContext } from "react";
export const ThemeContext = createContext({});

export function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState();
  const [result, setResult] = useState();

  const handleCalculatePressed = () => {
    // debugger;
    if (operation === "+") {
      let result = firstNumber + secondNumber;
      setResult(result);
    }
    if (operation === "-") {
      let result = firstNumber - secondNumber;
      setResult(result);
    }
    if (operation === "*") {
      let result = firstNumber * secondNumber;
      setResult(result);
    }
    if (operation === "/") {
      let result = firstNumber / secondNumber;
      if (secondNumber != 0) {
        setResult(result);
      } else {
        result = "Cannot execute";
        setResult(result);
      }
    }
  };

  const handleNumberChanged = (e) => {
    // debugger
    if (
      !isNaN(Number(e.target.value)) &&
      (operation === undefined || operation === NaN)
    ) {
      setFirstNumber(Number(firstNumber + e.target.value));
    }

    if (isNaN(Number(e.target.value))) {
      setOperation(e.target.value);
    }

    if (
      !isNaN(Number(e.target.value)) &&
      firstNumber !== "" &&
      operation !== undefined
    ) {
      setSecondNumber(Number(secondNumber + e.target.value));
    }

    if (firstNumber !== "" && secondNumber !== "" && isNaN(Number(e.target.value))) {
      handleCalculatePressed();
    }

    if (result !== undefined && isNaN(Number(e.target.value))) {
      setFirstNumber(result);
      setOperation(e.target.value);
      setSecondNumber("");
    }

    if (
      !isNaN(Number(e.target.value)) &&
      firstNumber !== "" &&
      operation !== undefined
    ) {
      setSecondNumber(Number(secondNumber + e.target.value));
    }
  };

  const value = {
    handleNumberChanged: handleNumberChanged,
    firstNumber: firstNumber,
    secondNumber: secondNumber,
    operation: operation,
    handleCalculatePressed: handleCalculatePressed,
    result: result,
  };

  return (
    <ThemeContext.Provider value={value}>
      <Layout />
    </ThemeContext.Provider>
  );
}

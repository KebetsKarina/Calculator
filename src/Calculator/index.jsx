import { Layout } from "../Layout";
import { useState } from "react";
export function Calculator() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operation, setOperation] = useState("+");
  const [result, setresult] = useState("");
  const handleCalculatePressed = () => {
    if (operation === "+") {
      let result = firstNumber + secondNumber;
      setresult(result);
    }
    if (operation === "-") {
      let result = firstNumber - secondNumber;
      setresult(result);
    }
    if (operation === "*") {
      let result = firstNumber * secondNumber;
      setresult(result);
    }
    if (operation === "/") {
      let result = firstNumber / secondNumber;
      if (secondNumber != 0) {
        setresult(result);
      } else {
        result = "Cannot execute";
        setresult(result);
      }
    }
  };
  const handleFirstNumberChanged = (e) => {
    if (typeof Number(e.target.value) === "number") {
      const newLocal = new Number(e.target.value);
      setFirstNumber(newLocal);
    }
  };
  const handleSecondNumberChanged = (e) => {
    if (typeof Number(e.target.value) === "number") {
      setSecondNumber(new Number(e.target.value));
    }
  };
  const handleOperationChanged = (e) => {
    setOperation(e.target.value);
  };
  return (
    <Layout
      firstNumber={firstNumber}
      handleFirstNumberChanged={handleFirstNumberChanged}
      secondNumber={secondNumber}
      handleSecondNumberChanged={handleSecondNumberChanged}
      operation={operation}
      handleOperationChanged={handleOperationChanged}
      handleCalculatePressed={handleCalculatePressed}
      result={result}
    ></Layout>
  );
}

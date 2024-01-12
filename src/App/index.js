import "./global.app.style.css";
import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";

function Container({ children }) {
  return <div className="App">{children}</div>;
}

function App() {
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
    <Container>
      <section>
        <Input
          name="First number"
          type="number"
          value={firstNumber}
          onValueChaged={handleFirstNumberChanged}
        />
        <Input
          name="Option"
          type="text"
          value={operation}
          onValueChaged={handleOperationChanged}
        />
        <Input
          name="Second number"
          type="number"
          value={secondNumber}
          onValueChaged={handleSecondNumberChanged}
        />
        <Button onClick={handleCalculatePressed} />
        <div className="text">
          Result:<span>{result}</span>
        </div>
      </section>
    </Container>
  );
}

export default App;

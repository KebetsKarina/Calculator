import { Container } from "../Container";
import { Input } from "../Input";
import { Button } from "../Button";
import { ThemeContext } from "../Calculator";
import { useContext } from "react";
export function Layout() {
  const props = useContext(ThemeContext);
  const { handleFirstNumberChanged } = props;
  const { handleSecondNumberChanged } = props;
  const { handleOperationChanged } = props;
  const { firstNumber } = props;
  const { secondNumber } = props;
  const { operation } = props;
  const { handleCalculatePressed } = props;
  const { result } = props;
  
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

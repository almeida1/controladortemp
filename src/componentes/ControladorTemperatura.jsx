import { useState } from "react";
import "./styles.css";
function ControladorTemperatura() {
  const valorInicial = 0;
  const [contador, setContador] = useState(valorInicial);
  const increment = () => {
    setContador((prev) => prev + 1);
  };
  const decrement = () => {
    setContador((prev) => prev - 1);
  };
  const restart = () => {
    setContador(valorInicial);
  };
  return (
    <div>
      <h3 className="titulo"> Controlador de Temperatura </h3>
      {/* define um rotulo para identificar a variavel que deve ser validada */}
      <p data-testid="contador"> {contador}</p>
      <div>
        <button className="button" name="incremento" onClick={increment}>
          Incremento
        </button>
        <button className="button" onClick={decrement}>
          {" "}
          Decremento{" "}
        </button>
        <button className="button" onClick={restart}>
          {" "}
          Reset{" "}
        </button>
      </div>
    </div>
  );
}
export default ControladorTemperatura;

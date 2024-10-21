import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
test("CT04 - o valor do contador deve decrementar de 1 no click do botao", () => {
  render(<App />);
  const btnDecrementa = screen.getByText("Decremento");
  fireEvent.click(btnDecrementa);
  const valorContador = Number(screen.getByTestId("contador").textContent);
  expect(valorContador).toEqual(-1);
});

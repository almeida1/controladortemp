import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
test("CT05 - o botao reset deve registrar zero quando pressionado", () => {
  render(<App />);
  const btnReset = screen.getByText("Reset");
  fireEvent.click(btnReset);
  const valorContador = Number(screen.getByTestId("contador").textContent);
  expect(btnReset).toBeTruthy();
  expect(valorContador).toEqual(0);
});

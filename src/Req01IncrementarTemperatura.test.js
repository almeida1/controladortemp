import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("ct01-verifica se a pagina foi renderizada", () => {
  render(<App />);
  const linkElement = screen.getByText(/controlador de temperatura/i);
  expect(linkElement).toBeInTheDocument();
});
test("CT02- verifica o estado do contador na inicializacao", () => {
  //dado que o contador foi inicializado
  render(<App />);
  //quando consulto o valor do contador
  const valorContador = Number(screen.getByTestId("contador").textContent);
  //entao contador = 0
  expect(valorContador).toBe(0);
});
test("CT03- o valor do contador deve incrementar de 1 no click do botao", () => {
  render(<App />);
  const btnIncrementa = screen.getByRole("button", { name: "Incremento" });
  fireEvent.click(btnIncrementa);
  const valorContador = Number(screen.getByTestId("contador").textContent);
  expect(valorContador).toEqual(1);
});

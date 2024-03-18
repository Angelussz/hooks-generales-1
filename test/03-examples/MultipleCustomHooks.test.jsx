import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");
describe("Pruebas en <MultipleCustomHooks", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("Debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText("Breaking"));
    const nexButton = screen.getByRole("button", { name: "Next Quote" });
    expect(nexButton.disabled).toBeTruthy();
    screen.debug();
  });
  test("Debe de mostrar un Quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Angelo Pérez", quote: "Terrible lo que me va pasar" }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);

    expect(screen.getByText("Terrible lo que me va pasar")).toBeTruthy();
    expect(screen.getByText("Angelo Pérez")).toBeTruthy();
    const nexButton = screen.getByRole("button", { name: "Next Quote" });
    expect(nexButton.disabled).toBeFalsy();

    screen.debug();
  });
  test("Debe llamar la función incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Angelo Pérez", quote: "Terrible lo que me va pasar" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nexButton = screen.getByRole("button", { name: "Next Quote" });
    fireEvent.click(nexButton);
    expect(mockIncrement).toHaveBeenCalled();
    // screen.debug();
  });
});

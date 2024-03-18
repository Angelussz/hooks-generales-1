import {
    fireEvent,
  getByAltText,
  getByLabelText,
  render,
  screen,
} from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";
describe("Pruebas en el componente <TdoItem />", () => {
  const todo = {
    id: 1,
    description: "piedra del alma",
    done: false,
  };
  const onDeleteTodoMock = jest.fn();
  const onTogleTodoMock = jest.fn();
  beforeEach(() => jest.clearAllMocks());
  test("Debe mostrar el Todo pendiente de completar", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onTogleTodoMock}
      />
    );
    const liElement = screen.getByRole("listitem");
    console.log(liElement.innerHTML);
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });
  test("Debe mostrar el Todo completado", () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onTogleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    // expect(spanElement.className).toContain("align-self-center")
    expect(spanElement.className).toContain("text-decoration-line-through");
  });
  test("El span debe llamar a ToggleTodo cuando se hace click", () => {
    render(
        <TodoItem
          todo={todo}
          onDeleteTodo={onDeleteTodoMock}
          onToggleTodo={onTogleTodoMock}
        />
      );
    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onTogleTodoMock).toHaveBeenCalledWith(todo.id);

  });
  test("El boton debe de llamar deleteTodo", () => {
    render(
        <TodoItem
          todo={todo}
          onDeleteTodo={onDeleteTodoMock}
          onToggleTodo={onTogleTodoMock}
        />
      );
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

  });
});

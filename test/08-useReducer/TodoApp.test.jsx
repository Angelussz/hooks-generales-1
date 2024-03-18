import { render, screen } from "@testing-library/react"
import {TodoApp} from "../../src/08-useReducer/TodoApp"
import { useTodos } from "../../src/hooks/useTodos"
jest.mock("../../src/hooks/useTodos")
describe('Pruebas en componente <TodoApp />', () => { 
    useTodos.mockReturnValue({
        todos:[
            {
                id:1, description:"Todo #1", done:false
            },
            {
                id:2, description:"Todo #2", done:true
            }
        ],
        handleDeleteTodo:jest.fn(),
        handleToggleTodo:jest.fn(),
        onNewTodo:jest.fn(),
        todosCount:2,
        pendingTodos:1}) 

    test('Debe de mostrar el componente correctamente', () => { 
        render(<TodoApp />)
        // screen.debug()
        expect(screen.getByText("Todo #1")).toBeTruthy();
        expect(screen.getByText("Todo #2")).toBeTruthy();
        expect(screen.getByRole("textbox")).toBeTruthy();
     })
 })
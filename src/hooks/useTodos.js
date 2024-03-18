import { useReducer,useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initValue = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], initValue);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const onNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };
  const handleDeleteTodo = (id) => {
    // console.log(id)
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };
  const handleToggleTodo = (id) => {
    // console.log({id})
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };
  const todosCount = ()=>{
    return todos.length;
  }
  const pendingTodos = ()=>{
    return todos.filter(todo=> !todo.done).length
  }
  
  return {
    todos,
    handleDeleteTodo,
    handleToggleTodo,
    onNewTodo,
    todosCount:todos.length,
    pendingTodos:todos.filter(todo=> !todo.done).length
  };
};

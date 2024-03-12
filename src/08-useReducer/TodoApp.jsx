import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks";
// const InitialState = [
// ];

// const initValue = ()=>{
//   return JSON.parse(localStorage.getItem("todos")) || [];
// }

export const TodoApp = () => {
  const {todos,todosCount,pendingTodos,handleDeleteTodo,handleToggleTodo,onNewTodo} = useTodos()
  // LOS COMENTARIOS SON SIN CUSTOMHOOKS
  // const [todos, dispatch] = useReducer(todoReducer, InitialState,initValue);
  // useEffect(() => {
  //   localStorage.setItem("todos",JSON.stringify(todos))
  
  // }, [todos])
  
  // const onNewTodo = (todo)=>{
  //     const action = {
  //       type:"[TODO] Add Todo",
  //       payload: todo
  //     }
  //     dispatch(action) 
  // }
  // const handleDeleteTodo = (id)=>{
  //   // console.log(id)
  //   dispatch({
  //     type:"[TODO] Remove Todo",
  //     payload: id
  //   })
  // }
  // const handleToggleTodo = (id)=>{
  //   // console.log({id})
  //   dispatch({
  //     type:"[TODO] Toggle Todo",
  //     payload: id
  //   })
  // }

  return (
    <>
      <h1>
        TodoApp: ({todosCount()}) <small>pendientes: {pendingTodos()}</small>{" "}
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo= {handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <TodoAdd onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  );
};

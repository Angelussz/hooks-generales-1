import React, { useContext } from "react";
import { userContext } from "./context/UserContext";

export const Login = () => {
  const {user,setUser} = useContext(userContext);
  return (
    <>
      <h1>Login</h1>
      <hr />
      <pre>
        {JSON.stringify(user, null,3)}
      </pre>
      <button className="btn btn-primary"
      onClick={()=>{
        setUser({
          id:123,
          name:"Angelo Perez",
          email:"angelo@gmail.com"
        })
      }}
      >
        Establecer Usuario
      </button>
    </>
  );
};

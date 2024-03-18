import { fireEvent, render, screen } from "@testing-library/react";
import { userContext } from "../../src/09-useContext/context/UserContext";
import { Login } from "../../src/09-useContext/Login";
describe('Pruebas en <Login />', () => { 
    test('Debe mostrar el componente sin el usuario', () => { 
        render(
            <userContext.Provider value={{user:null}}>
                <Login />
            </userContext.Provider>
        )
        const preLogin = screen.getByLabelText("preLogin")
        expect(preLogin.innerHTML).toBe("null")

    })
    test('Debe llamar setUser cuando se hace click en el boton', () => {
        const setUserMock = jest.fn()
        const user = {
            id:123,
          name:"Angelo Perez",
          email:"angelo@gmail.com"
        }
        render(
            <userContext.Provider value={{user, setUser: setUserMock}}>
                <Login />
            </userContext.Provider>
        )
        const buttonElement = screen.getByRole("button");
        // console.log(buttonLogin)
        fireEvent.click(buttonElement);
        const preLogin = screen.getByLabelText("preLogin")
        expect(preLogin.innerHTML).toContain(user.name)
        expect(setUserMock).toHaveBeenCalledWith(user)
    })
 })
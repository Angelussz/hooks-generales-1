import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { userContext } from "../../src/09-useContext/context/UserContext";
describe("Prueba en componente <HomePage />", () => {
  test("debe mostrar el componente sin el usuario", () => {
    render(
      <userContext.Provider value={{ user: null }}>
        <HomePage />
      </userContext.Provider>
    );
    // screen.debug()
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });
  test('debe mostrar el componente CON el usuario', () => { 
    const user = {
    id:123,
    name:"angelo perez",
    email:"angelo@gmail.com"
}
    render(
    <userContext.Provider value={{user}}>
        <HomePage />
    </userContext.Provider>
    
    )
    // screen.debug()
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).not.toBe("null");
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).not.toBe(`${user.id}`);
 })
});

import { render, screen, fireEvent } from "@testing-library/react";
import TestingAddInput from '../testingAddInput'

// jest.fn() : Creates a mock function. Optionally takes a mock implementation.
const mockedSetTodo = jest.fn()

// test block 1 
test("should change input", async () => {
    render(<TestingAddInput todos={[]} setTodos={mockedSetTodo}/>)
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    fireEvent.change(inputElement, { target : { value : "testing"} } )
    expect(inputElement.value).toBe("testing")
})

// test block 2
test("should change input to empty when button clicked", async () => {
    render(<TestingAddInput todos={[]} setTodos={mockedSetTodo}/>)
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const button = screen.getByRole("button")

    // trigger event with jest fireEvent
    fireEvent.change(inputElement, { target : { value : "testing"} } )
    fireEvent.click(button)
    expect(inputElement.value).toBe("")
})
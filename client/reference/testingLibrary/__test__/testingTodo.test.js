import { render, screen, fireEvent } from "@testing-library/react";
import TestingTodo from '../testingTodo'

const MockTodo = () => {
    // add something here to imitate the original component
    // for example : router
    return ( 
        <TestingTodo />
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole("button", { name : /Add/i })
    tasks.forEach((task) => {
        fireEvent.change(inputElement, { target : { value : task }})
        fireEvent.click(buttonElement)
    })
}

describe("Add one task", () => {
    test("should do", () => {
        render(<MockTodo />)
        addTask(["say hello to cat"])
        const divElement = screen.getByText(/say hello to cat/i)
        expect(divElement).toBeInTheDocument()
    })
})

describe("Add inputs to div integration test", () => {
    test("should do", () => {
        render(<MockTodo />)
        addTask(["wow", "say hello to cat"])
        const divElements = screen.getAllByTestId(/divTodoList/i)
        expect(divElements.length).toBe(2)
    })
})

describe("task class name test : shouldn't have it at frist render", () => {
    test("should do", () => {
        render(<MockTodo />)
        addTask(["wow", "say hello to cat"])
        const divElement = screen.getByText(/say hello to cat/i)
        expect(divElement).not.toHaveClass("todo-item-active")
    })
})

describe("task class name test : should have it when completed", () => {
    test("should do", () => {
        render(<MockTodo />)
        addTask(["say hello to cat"])
        const divElement = screen.getByText(/say hello to cat/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass("todo-item-active")
    })
})
import { render, screen } from "@testing-library/react";
import TestingTodoFooter from '../testingTodoFooter'

describe("Tests for TestingTodoFooter component", () => {
    
    // test block 1 
    describe("Singular, multiple texts", ()=>{
        test("should render multiple incompleted tasks", () => {
            render(<TestingTodoFooter incompleTasks={2}/>)
            const paragraphElement = screen.getByText(/tasks left/i)
            expect(paragraphElement).toBeInTheDocument()
        }) 
        
        test("should render a single incompleted task", () => {
            render(<TestingTodoFooter incompleTasks={1}/>)
            const paragraphElement = screen.getByText(/task left/i)
            expect(paragraphElement).toBeInTheDocument()
        })
    })
    
    // test block 2
    describe("Visibility", () => {
        test("should be visible to user", () => {
            render(<TestingTodoFooter incompleTasks={5}/>)
            const paragraphElement = screen.getByText(/tasks left/i)
            expect(paragraphElement).not.toBeVisible()
        })
    })
    
    // test block 3
    describe("should contain these", () => {
        test("should contain p tag", () => {
            render(<TestingTodoFooter incompleTasks={5}/>)
            const paragraphElement = screen.getByText(/tasks left/i)
            expect(paragraphElement).toContainHTML("p")
        }) 
        
        test("should contain 1 task left texts", () => {
            render(<TestingTodoFooter incompleTasks={1}/>)
            const paragraphElement = screen.getByText(/task left/i)
            expect(paragraphElement.textContent).toBe("1 task left")
        }) 
    })
    
})
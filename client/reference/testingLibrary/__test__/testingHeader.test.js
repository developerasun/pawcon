import { render, screen } from "@testing-library/react";
import TestingHeader from '../testingHeader'

// Unit tests with GET_BY
test("should render the same text passed into title prop", () => {
    render(<TestingHeader title={"my headers"}/>)
    const headingElement = screen.getByText(/my headers/i)
    expect(headingElement).toBeInTheDocument()
})

test("getByRole test", () => {
    render(<TestingHeader title={"my headers"}/>)
    // add options when there are the same multiple elements
    const headingElement = screen.getByRole("heading", { name : "my headers" })
    expect(headingElement).toBeInTheDocument()
})

test("getByTitle test", () => {
    render(<TestingHeader title={"my headers"}/>)
    const headingElement = screen.getByTitle("header")
    expect(headingElement).toBeInTheDocument()
})

test("getByTestId test", () => {
    render(<TestingHeader title={"my headers"}/>)
    const headingElement = screen.getByTestId("cat-testId")
    expect(headingElement).toBeInTheDocument()
})

// Unit tests with FIND_BY(async)
test("getByTestId test", async () => {
    render(<TestingHeader title={"my headers"}/>)
    const headingElement = await screen.findByTestId("cat-testId")
    expect(headingElement).toBeInTheDocument()
})

// Unit tests with QUERY_BY
test("queryByTestId test", () => {
    render(<TestingHeader title={"my headers"}/>)
    const headingElement = screen.queryByTestId("dog-testId")
    expect(headingElement).not.toBeInTheDocument()
})

// Unit tests with GET_ALL_BY
test("getAllByTestId test", () => {
    render(<TestingHeader title={"my headers"}/>)
    const headingElement = screen.getAllByRole("heading")
    expect(headingElement.length).toBe(2)
})

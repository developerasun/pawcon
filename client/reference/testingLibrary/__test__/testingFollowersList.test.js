import { render, screen } from "@testing-library/react";
import TestingFollowersList from '../testingFollowersList'

describe("TestingFollowersList", ()=>{
    // before each test runs 
    beforeEach(()=>{
        console.log("ran BEFORE each test")
    })
    
    afterEach(()=>{
        console.log("ran AFTER each test")
    })

    // before all tests run
    beforeAll(()=>{
        console.log("now test will begin")
    })
    
    afterAll(()=>{
        console.log("test ended")
    })

    // test block 1 
    test("should find one user item", async () => {
        render(<TestingFollowersList />)
        
        const followerDivElement = await screen.findByTestId("follower-item-0")
        expect(followerDivElement).toBeInTheDocument()
    })
})

// test block 2 
test("should find all user items", async () => {
    render(<TestingFollowersList />)

    // findBy method is asynchronously done
    const followerDivElement = await screen.findAllByTestId(/follower-item/i)
    console.log(followerDivElement.length)
    expect(followerDivElement.length).toBe(5)
})
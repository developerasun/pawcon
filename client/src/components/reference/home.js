import { useState } from "react"
import useFetch from "./customHook/useFetch"

const Home = () => {
    // create a reactive value
    // variable, function to change the variable
    
    const [age, setAge] = useState(25)
    const [test, testUseEffect] = useState("test")
    // you can rename the imported value from custom hook 
    const { name : myName, isPending, content, error } = useFetch(`https://jsonplaceholder.typicode.com/todos/3`)
    const handleClick = () => {
         // triggers React to re-render the component in browser with a new value
        setAge(38)
    }
    const doTest = () => { 
        testUseEffect("clicked and test began")
    }

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && 
                <div style={{
                    backgroundColor:"black", 
                    color:"white", 
                    fontSize:"3rem", 
                    textAlign: "center"
                }}>
                    Now loading ...
                </div>}
            {content && 
                <div>
                    <h2>Homepage</h2> 
                    <p>{myName} is {age} old</p>
                    <p>{test}</p>
                    <button onClick={handleClick}>Click Me</button>
                    <button onClick={doTest}>start test</button>
                </div>}    
        </div>
    )
}

export default Home
import { useState, useEffect } from "react"

// useEffect is to run rendering in every code

const Home = () => {
    // create a reactive value
    // variable, function to change the variable
    const [name, setName] = useState('mario') // any data type can be used in useState hook
    const [age, setAge] = useState(25)

    const handleClick = () => {
        setName('luigi') // triggers React to re-render the component in browser with a new value
        setAge(38)
    }

    useEffect(()=>{
        console.log('use effect ran')
    }) // it does not return anything. Callback will run every time a component is re-rendered

    return (
        <div>
            <h2>Homepage</h2> 
            <p>{name} is {age} old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Home
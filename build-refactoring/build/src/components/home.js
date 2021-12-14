import { useState, useEffect } from "react"

// useEffect is to run rendering in every code

const Home = () => {
    // create a reactive value
    // variable, function to change the variable
    const [name, setName] = useState('mario') // any data type can be used in useState hook
    const [age, setAge] = useState(25)
    const [test, testUseEffect] = useState("test")
    const [isPending, setIsPending] = useState(true)
    const [content, setContent] = useState(false)

    const handleClick = () => {
        setName('luigi') // triggers React to re-render the component in browser with a new value
        setAge(38)
    }

    const doTest = () => { 
        testUseEffect("clicked and test began")
    }

    // fetch data within useEffect with loading message
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/2')
            .then( res => { return res.json() })
            .then( (data) => { 
                console.log(data) 
                setName(data.title)

                setTimeout(()=>{
                    setIsPending(false)
                    setContent(true)
                }, 1000)
            })
    }, [])

    return (
        <div>
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
                    <p>{name} is {age} old</p>
                    <p>{test}</p>
                    <button onClick={handleClick}>Click Me</button>
                    <button onClick={doTest}>start test</button>
                </div>}    
        </div>
    )
}

export default Home
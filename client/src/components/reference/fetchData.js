// FETCHING DATA IN REACT/JS
// import React, { useState, useEffect } from 'react';
// const fetchData = async () => { 
//   const response = await fetch('http://localhost:8888/.netlify/functions/hello')
//   const data = await response.json()
//   console.log(data)
//   return data
// }

// function NotApp() {
//   const [msg, setMsg] = useState("")
//   const [click, setClick] = useState(false)

//   const handleClick = () => setClick(!click)

//   useEffect(async ()=> {
//     const data = await fetchData()
//     console.log("this is data : ", data)
//     setMsg(data.message)
//   }, [click]) 

//   return (
//     <div className="App">
//       <h1>Netlify Serverless with React</h1>
//       <a href="/.netlify/functions/hello">menu 1</a>
//       <p>Message from function : {msg}</p>
//       <label>useEffect dependency </label>
//       <button onClick={handleClick}>{click ? "clicked" : "not clicked"}</button>
//     </div>
//   );
// }
// export default App;




// FETCHING DATA IN REACT/TS
// const [trigger, setTrigger] = React.useState<boolean>(false) // button status
// const [testData, setTestData] = React.useState<string>("") // fetched data
// const abortController = new AbortController() // for useEffect cleanup 

// const handleClick = () => { setTrigger(!trigger) } // button click handler

// React.useEffect( ()=> {

//   // counter
//   const counter = document.querySelector(".counter") as HTMLParagraphElement
//   IncreaseToTarget( { target : 201, count : 0, speed : 10, display: counter})

//   // fetch data if button clicked
//   if (trigger) {
//     // IIFE : asynchronous anonymous function
//     (async ()=> {
//       const data = await fetchItem( "https://jsonplaceholder.typicode.com/users/1", abortController)
//       console.log("thisis : ", data)
//       setTestData(`Welcome back, ${data.name}`)
//     })()
//   }

//   // execute clean up function
//   return () => abortController.abort()
// }, [trigger]) // dependency
// {/* <button onClick={handleClick}>Get Data</button>
// <p>fetched data : {testData}</p> */}
// import React, { useState, useEffect } from 'react';

const fetchData = async () => { 
  const response = await fetch('http://localhost:8888/.netlify/functions/hello')
  const data = await response.json()
  console.log(data)
  return data
}

function NotApp() {
  const [msg, setMsg] = useState("")
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  useEffect(async ()=> {
    const data = await fetchData()
    console.log("this is data : ", data)
    setMsg(data.message)
  }, [click]) 

  return (
    <div className="App">
      <h1>Netlify Serverless with React</h1>
      <a href="/.netlify/functions/hello">menu 1</a>
      <p>Message from function : {msg}</p>
      <label>useEffect dependency </label>
      <button onClick={handleClick}>{click ? "clicked" : "not clicked"}</button>
    </div>
  );
}

// export default App;

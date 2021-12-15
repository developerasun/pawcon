import { useState, useEffect } from 'react'

// create a custom hook. Hook name should start with 'use'
const useFetch = (url) => {
    const [name, setName] = useState('No Name') // any data type can be used in useState hook
    const [isPending, setIsPending] = useState(true)
    const [content, setContent] = useState(false)
    const [error, setError] = useState(null)
        // fetch data within useEffect with loading message
        useEffect(()=>{
           
            fetch(url)
                .then( res => { 
                    console.log(res)
                    if (!res.ok) { // depending on response's ok status, contents shown will be different
                        setIsPending(false)
                        setContent(false)
                        throw Error('could not fetch the data')
                    }
                    return res.json() 
                })
                .then( (data) => { 
                    setName(data.title +"by jake ")
    
                    setTimeout(()=>{
                        setIsPending(false)
                        setContent(true)
                        setError(null)
                    }, 1000)})
                .catch((err)=>{
                    console.log(err) 
                    setError(err.message)
                 }) // the above throw Error will be shown here
        }, [url]) // useEffect(callback, dependency)

        return { name, isPending, content, error } // custom book useFetch returns an object with four properties
}

export default useFetch
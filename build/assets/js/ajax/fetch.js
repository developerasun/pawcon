// Get external data from https://jsonplaceholder.typicode.com with 1) XMLHttepRequest or 2) fetch

const resource_root = "https://jsonplaceholder.typicode.com/todos/"
const resource_entity = Math.floor(Math.random()*200).toString()

export const getRandomJSON = async ()=>{
    const response = await fetch(resource_root+resource_entity)
    
    if (response.status !== 200) { 
        throw new Error("could not fetch data")
    }

    const data = await response.json()
    console.log(data)
    return data // async function always returns a Promise 
}
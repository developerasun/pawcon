import { useHistory, useParams } from "react-router-dom";
import { artworks } from "./gallery";
import images from "../img";
import { useState } from "react";
import useFetch from "./customHook/useFetch";

const Details = () => {

    // Import route parameter hook for dynamic routing
    const { title } = useParams() // the title is set in Route component path parameter 
    const [ isLoading, setLoading ] = useState(true)
    const history = useHistory()
    const { name, isPending, content, error } = useFetch('https://jsonplaceholder.typicode.com/todos/2')

    const handleClick = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/2', {
            method: 'DELETE'
        }).then(()=>{
            console.log("delted")
        })
    }
    const cardPicked = artworks.map((item, index)=> {
        if (item.title === title) { // check if card name is the same with route parameter
            setTimeout(()=>setLoading(false), 1000 )

            // each list item should have a key
            return (
                <div key={Math.random()*artworks.length}> 
                    <img src={images[index]} alt="cat"></img>
                    <p>By : {item.author}</p>    
                    <p>Created at : {item.date}</p>
                </div>)
        }
        return null
    })

    return ( 
        <div>
            {isLoading && <p>Loading ...</p>}
            {!isLoading && 
                <article>
                    <h2>Your card choice is : { title }</h2>
                    {cardPicked}
                    {/* <p>{name}</p> // back to here once familiar with server
                    <button onClick={handleClick}>delete JSON title</button> */}
                </article>}
        </div>
     );
}
 
export default Details;
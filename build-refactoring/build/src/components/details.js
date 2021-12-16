import { useParams } from "react-router-dom";
import { artworks } from "./gallery";
import images from "../img";

const Details = () => {

    // Import route parameter hook for dynamic routing
    const { title } = useParams() // the title is set in Route component path parameter 

    const cardPicked = artworks.map((item, index)=> {
        if (item.title === title) { // check if card name is the same with route parameter
            return (
                <div>
                    <img src={images[index]} alt="cat"></img>
                    <p>By : {item.author}</p>    
                    <p>Created at : {item.date}</p>
                </div>)
        }
        return null
    })

    return ( 
        <div>
            <h2>Your card choice is : { title }</h2>
            {cardPicked}
        </div>
     );
}
 
export default Details;
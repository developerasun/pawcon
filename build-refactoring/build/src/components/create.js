import { useState } from 'react';
import '../sass/create.css'

const Create = () => {

    const  [title, setTitle] = useState('Enter your title')
    const  [body, setBody] = useState('Enter your content')
    const  [author, setAuthor] = useState('Jake')
    const  [isPending, setPending] = useState(false)

    const handleSubmit = (event) => { 
        event.preventDefault()
        
        // When form submitted, it collects values in the form and 
        // returns an array. 
        console.log(event)
        console.log(event.target)
        console.log(event.target[0])
        const formValue = { title, body, author }
        console.log(formValue)

        // pending is true
        setPending(true)

        fetch("https://jsonplaceholder.typicode.com/todos/", { // back to here again once familiar with Node.js
            method : 'POST', 
            headers : { 'Cotent-Type' : 'application/json'}, 
            body: JSON.stringify(formValue)
        }).then(()=>{
            console.log("new card added")
            setPending(false)
        })
    }
    return ( 
        <div className='form-create'>
            <h2> Add a new card</h2>
            <form onSubmit={handleSubmit}>
                <div className='card-title'>
                    <label>Card title</label>
                    <input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(event)=>setTitle(event.target.value)}
                    />
                </div>

                <div className='card-body'>
                    <label>Card body</label>
                    <textarea 
                    required
                    value={body}
                    onChange={(event)=>setBody(event.target.value)}
                    
                    /> 
                </div>

                <div className='card-author'>
                    <label>Card author</label>
                    <select
                    value={author}
                    onChange={(event)=>{setAuthor(event.target.value)}}
                    >
                        <option value="Jake">Jake</option>
                        <option value="Elly">Elly</option>
                    </select>
                </div>

                <div> Check result : 
                    <p>{title}</p>
                    <p>{body}</p>
                    <p>{author}</p>
                </div>
                {!isPending && <button>Add card</button>}
                {isPending && <button disabled>Adding card...</button>}
            </form>
        </div>
     );
}
 
export default Create;
import React, { useState } from 'react';

// forms in React : tracking what user have typed => saving it in state
const NewSongForm = ( { addSong } ) => {
    const [songName, setSongName] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        addSong(songName)
        setSongName('')
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <label>song name</label>
            {/* event.target.value : Returns the value of the data at the cursor's current position. */}
            <input type={"text"} placeholder='enter a song name' value={songName} required onChange={(e)=> setSongName(e.target.value)}/>
            <input type={"submit"} value={"Add song"}/>
        </form>
     );
}
 
export default NewSongForm;
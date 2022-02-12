import React, { useState, useEffect } from 'react';
import { v4 as uuidV4 } from 'uuid';
import NewSongForm from './newSongForm';

// useEffect : similar to lifecycle method in class component
// normally, when component needs an update, we had to use lifecyle method in class component
// useState => replace this.state in class component 
// useEffect => replace lifecycle methods in class component. useEffect hook is used
// for every render/re-render of a component 

function SongList() {
    const [age, setAge] = useState(28)
    const [songs, setSongs] = useState([
        {title : 'hey', id : 1},
        {title : 'wow', id : 2},
        {title : 'hello', id : 3},
        {title : 'newly added', id : 4},
    ])

    const AddSong = (title) => {
        setSongs([...songs, { title , id: uuidV4()}])
    }

    // useEffect dependecy : the hook will only run based on the dependency
    useEffect(()=>{console.log("useEffect ran")}, [songs])

    return ( 
        <div>
            <ul>
                {songs.map((song)=>{
                    return <li key={song.id}>{song.title}</li>
                })}
            </ul>
            {/* <button onClick={AddSong}>Add song</button> */}
            <NewSongForm addSong={AddSong}/>
            <button onClick={()=>setAge(age + 1)}>age counter : {age}</button>
        </div>
     );
}

export default SongList;
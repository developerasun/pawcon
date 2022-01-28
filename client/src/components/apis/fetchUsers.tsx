import * as React from 'react';
import axios from 'axios'

export interface  fetchUsersProps {
}

export function fetchUsers (props:  fetchUsersProps) {
    React.useEffect(()=>{
        // 
        (async () => {
            const users = await axios.get('/apis/users')
            const data = users.data
            console.log(data)
        })()
    
    }, [])
  return (
    <div>
      
    </div>
  );
}

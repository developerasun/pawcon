import React from 'react'
import '../../sass/css/nav.css'
import nameContainer from './stateNames/nameContainer';

const Navbar = ( {setPage} ) => {
    return ( 
        <nav>
            <button onClick={()=>setPage(nameContainer.setPageConst.people)}>People</button>
            <button onClick={()=>setPage(nameContainer.setPageConst.planet)}>Planet</button>
        </nav>
     );
}
 
export default Navbar;
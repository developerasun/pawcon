import { v4 as uuidV4 } from "uuid";
import { useContext } from "react";
import { ListContext } from "./context/listDataContext";

const DummyList = () => {
    const { dummyList } = useContext(ListContext)
    return ( 
        <div>
            {dummyList.map((item)=>{
                return <li key={uuidV4()}>Functional context provider : {item}</li>
            })}
        </div>
     );
}
 
export default DummyList;
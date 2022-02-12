import React, { useState } from "react";
import { useQuery, QueryClient, QueryClientProvider } from 'react-query' // import useQuery hook
import { ReactQueryDevtools } from "react-query/devtools";
import nameContainer from "./stateNames/nameContainer";
import Person from "./person";
import '../../sass/css/people.css'

const queryClient = new QueryClient()
const btnStyle = {
    "fontSize" : "1rem", 
    "padding": "0.5rem", 
    "backgroundColor": "rgb(54, 192, 169)", 
    "borderCollapse":"collapse",
    "border": 0,
    "cursor":"pointer",
    "color":"white"
}


const fetchPeople = async (page) => {
    const res = await fetch(`http://swapi.dev/api/people/?page=${page}`)
    return res.json()
}

const People = () => {
    const [page, setPage] = useState(1)
    // data : shows the query data
    // status : shows query status(loading, sucess, error)
    
    const { data, status } = useQuery([nameContainer.setPageConst.people, page], ()=>fetchPeople(page), {
        keepPreviousData:true, 
        cacheTime: 500000, 
        // staleTime Infinity => no network request happens, data only fetched from cache
        staleTime: Infinity
    })
    console.log(data)
    return ( 
        <div style={{"textAlign":"center"}}>
            <p>List of People You Should Research</p>
            { status === "loading" && <p>loading ...</p>}
            { status === "success" && (
                <div className="pepleContainer" >
                    <div className="buttons" style={{
                        "display":"flex",
                        "flexFlow" : "row nowrap",
                        "gap":"0.3rem",
                        "justifyContent":"center",
                        "marginTop":"1rem", 
                    }}>
                        <button style={btnStyle} 
                                onClick={()=>setPage(num => Math.max(num - 1, 1))}
                                disabled={page==1}
                                >Prev</button>
                        <div style={btnStyle}>{page}</div>
                        <button style={btnStyle} 
                                onClick={()=>setPage(num => Math.max(num + 1, 1))}
                                disabled={!data || !data.next}
                        >Next</button>
                    </div>
                    {data.results.map((item)=> {
                        return <Person key={item.name} person={item} />
                    })}
                </div>)
            }
            { status === "error" && <p>error occurs ...</p>}
        </div>
     );
}
 
// RenderPlanet component renders the planet with QueryClient/provider
const RenderPeople = () => {
    return ( 
        <QueryClientProvider client={queryClient}>
            <People />
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
     );
}
 
export default RenderPeople;
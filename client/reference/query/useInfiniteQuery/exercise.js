import React from "react";
import { useInfiniteQuery, QueryClient, QueryClientProvider } from 'react-query' // import useQuery hook
import { ReactQueryDevtools } from 'react-query/devtools'
import nameContainer from "./stateNames/nameContainer"
import Planet from "./planet"

const queryClient = new QueryClient()
const btnStyle = {
    "fontSize" : "1rem", 
    "padding": "0.5rem", 
    "backgroundColor": "rgb(76, 172, 204)", 
    "borderCollapse":"collapse",
    "border": 0,
    "cursor":"pointer",
    "color":"white"
}

const fetchPlanet = async ( {pageParam = 1} ) => {

    try { 
        const res = await fetch(`http://swapi.dev/api/planets/?page=${pageParam}`)
        const result = await res.json()
    
        return { 
            planetArr : result, 
            nextPage : pageParam + 1
        } 
    }
    catch(err) { 
        console.log(err)
    }
}

const Planets = () => {
    // useQuery hook : useQuery(query_key(string), callback(fetch), option )
    // data : shows the query data
    // status : shows query status(loading, sucess, error)
    const { 
            data, 
            isFetchingNextPage, 
            hasNextPage, 
            fetchNextPage,  
            status
        } = useInfiniteQuery(nameContainer.setPageConst.planet, fetchPlanet,
        // Query options
        {
        getNextPageParam : (lastPage, pages) => lastPage.nextPage,
        // data is in fresh status for 2000ms(2 sec)
        staleTime: 2000, 
        cacheTime: 500000, // data cached for 5 mins
        onSuccess: ()=>console.log("data succesfully fetched ...", data)
    })
    return ( 
        <div style={{"textAlign":"center"}}>
            <p>List of Planets You Should Explore</p>
            { status === "loading" && <p>loading ...</p>}
            { status === "success" && (
                <div className="planetContainer">
                    {console.log(data.pages)}
                    <div className="buttons" style={{
                        "display":"flex",
                        "flexFlow" : "row nowrap",
                        "gap":"0.3rem",
                        "justifyContent":"center",
                        "marginTop":"1rem", 
                    }}>
                    <button style={btnStyle} 
                            onClick={()=>fetchNextPage()}
                            disabled={!hasNextPage || isFetchingNextPage}
                            >Next</button>
                    </div>
                    {/* data.pages array containing the fetched pages */}
                    {data.pages.map((item)=> {
                        console.log(item)
                        console.log(item.planetArr.results)
                        return item.planetArr.results.map((planet)=> {
                            return <Planet key={planet.name} planet={planet} />
                        })
                    })}
                </div>)
            }
            { status === "error" && <p>error occurs ...</p>}
        </div>
     );
}
 
// RenderPlanet component renders the planet with QueryClient/provider
const RenderPlanet = () => {
    return ( 
        <QueryClientProvider client={queryClient}>
            <Planets />
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
     );
}
 
export default RenderPlanet;
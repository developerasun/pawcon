import * as React from 'react'
import { useQuery, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

const RenderUseQueryTest = () => {
  return (
  <QueryClientProvider client={queryClient}>
    <UseQueryTest />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  )
}

export function UseQueryTest () {
    // data : shows the query data
  // status : shows query status(loading, sucess, error)
    const { data, status } = useQuery(
    ['query key here'], 
    ()=>{console.log("callback(fetch here)")}, 
    {
      // query option here (unit : ms)
        cacheTime: 5 * 60 * 1000, // default is 5 mins
        staleTime : 0, // default is 0
        onSuccess : () => {console.info("fetch success")}
    })
    return (
    <div>
        
    </div>
    );
}

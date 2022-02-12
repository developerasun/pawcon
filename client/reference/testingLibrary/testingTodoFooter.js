function TestingTodoFooter( {incompleTasks} ) {
    return ( 
    <p style={{"display":"none"}}>{incompleTasks} {incompleTasks===1 ? "task left" : "tasks left" }</p>    
     );
}

export default TestingTodoFooter;
function TestingHeader({title}) {
    return ( 
    <>
        <h2>{title}</h2> 
        <h2 title="header" data-testid="cat-testId">Cats</h2> 
    </>
    );
}

export default TestingHeader;
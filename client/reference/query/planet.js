// ({planet}) : get a specific prop named "planet"
import '../../sass/css/planet.css'
const Planet = ( {planet} ) => {
    return ( 
        <div className="planetCard">
            <h2 className="title">About {planet.name}</h2>
            <p className="text">{planet.name} is located at : {planet.terrain}. <br/>
            And its population is : {planet.population}</p>
        </div>
     );
}

export default Planet;
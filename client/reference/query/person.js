import '../../sass/css/person.css'
const Person = ( {person} ) => {
    return ( 
        <div className="personCard">
            <h2 className="title">About {person.name}</h2>
            <p className="text">height : {person.height}, gender : {person.gender}. <br/>
            And the person has : {person.eye_color} eyes</p>
        </div>
     );
}

export default Person;
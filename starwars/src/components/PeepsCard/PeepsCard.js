import React from 'react'

 function PeepsCard(props) {
    return (
        <div>
    <h1>{props.people.name}</h1>
    <h2>{props.people.films}</h2>
<p>{props.people.birth_year}</p>
<p>{props.people.homeworld}</p>
<p>{props.people.species}</p>
    <h3>{props.people.gender}</h3>
 <p>{props.people.hair_color}</p>
 <p>{props.people.skin_color}</p>
 <p>{props.people.eye_color}</p>
 <p>Vehicles:{props.people.vehicles}</p>
 <p>Starships:{props.people.starships}</p>
 
        </div>
    )
}

export default PeepsCard;
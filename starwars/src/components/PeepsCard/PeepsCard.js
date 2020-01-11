import React from 'react'

 const PeepsCard=(props)=>{
    return(
        <div>
 <h1>{props.person.name}</h1>
    <h2>{props.person.films}</h2>
<p>{props.person.birth_year}</p>
<p>{props.person.homeworld}</p>
<p>{props.person.species}</p>
    <h3>{props.person.gender}</h3>
 <p>{props.person.hair_color}</p>
 <p>{props.person.skin_color}</p>
 <p>{props.person.eye_color}</p>
 <p>Vehicles:{props.person.vehicles}</p>
 <p>Starships:{props.person.starships}</p> 
 this is a component
        </div>
    )
}

export default PeepsCard;
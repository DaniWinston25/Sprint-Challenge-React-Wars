import React from 'react'
import styled from 'styled-components';

// styles for site //
 const Wrapper = styled.div`
 background-image: url('./sw-bg.jpg');
  background-size: cover;
  width: auto;
  height: auto;
`





 const PeepsCard=(props)=>{
    return(
        <Wrapper>
        <div className ='wrapper'>
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
        </div></Wrapper>
    )
}

export default PeepsCard;
import React from 'react'
import styled from 'styled-components';



// styles for site //
 const Wrapper = styled.div`
 background-image: url('./sw-bg.jpg');
 background-size: cover;
 display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: center;
`
const H1 = styled.h1`
font-size: 4rem;
font-family: 'Days One';
color: #2e557c;
text-shadow: 6px 6px 6px #ad7d37;
`

  const Link = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:inherit;
    height:auto;
    font-family: "Days One";
  background: #FFE807;
  border-radius: 20px;
  border: 2px solid black;
  color: black; 
  margin-bottom: 5px;
`
const Link1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width:inherit;
height:auto;
font-family: "Days One";
background: #e7250a;
border-radius: 10px;
border: 2px solid black;
color: black; 
margin-bottom: 4px;
`

const Link2 = styled.div`
display: flex;
justify-content: center;
width:inherit;
height:inherit;
font-family: "Days One";
background: #b62321;
border-radius: 10px;
border: 2px solid black;
color: black; 
`
const BirthYear = styled.p`
display: flex;
flex-directon: row;
justify-content: flex-start;
font-family: 'Days One';
color: #1d652f;

font-size: 1.5rem;

`
const Info = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
font-size: 2rem;
color: lightseagreen;
font-family:'Days One';
text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000;`

const Species = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
width:inherit;
height:inherit;
font-family: "Days One";
background: #007692;
border-radius: 10px;
border: 2px solid black;
color: black; 
`
const Homeworld = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
width:inherit;
height:inherit;
font-family: "Days One";
background: #a1a332;
border-radius: 10px;
border: 2px solid black;
color: black; 
margin-bottom: 4px;
`



 const PeepsCard=(props)=>{
    return(
        <Wrapper>
        <div className ='wrapper'>
            <H1>
 <h1>{props.person.name}</h1>
 </H1>
    <h2><Link to= {props.person.films}>Films</Link></h2>
    <h2><Link1 to ={props.person.vehicles}> Vehicles</Link1></h2>
 <h2><Link2 to={props.person.starships}>StarShips</Link2></h2> 
 <BirthYear>
<p>{props.person.birth_year}</p>  
</BirthYear>
<Info>
<h3>{props.person.gender}</h3>
</Info>
<Info>
 <p>{props.person.hair_color}</p>
 </Info>
 <Info>
 <p>{props.person.skin_color}</p>
 </Info>
 <Info>
 <p>{props.person.eye_color}</p>
 </Info>
<p><Homeworld><link to={props.person.homeworld}/>Homeworld</Homeworld></p>
<p><Species> <link to= {props.person.species}/>Species</Species></p>
 
 
        </div></Wrapper>
    )
}

export default PeepsCard;
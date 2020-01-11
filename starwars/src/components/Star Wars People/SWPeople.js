import React from 'react';
// import PeepsCard from './../PeepsCard/PeepsCard';




function SWPeople(props){
    // console.log("string",props)
    props.data.map((people, index)=>{
        return(
            <div>
                {/* <PeepsCard key ={index} people={people}/>  */}
                This is the first component
            </div>
        )
    })}
;


export default SWPeople;
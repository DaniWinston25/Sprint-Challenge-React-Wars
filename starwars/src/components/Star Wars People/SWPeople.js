import React from 'react';
import PeepsCard from './../PeepsCard/PeepsCard';



function SWPeople(props){
    {props.data.map((people, index)=>{
        return(
            <div>
                <PeepsCard key ={index} people={people}/>
            </div>
        )
    })}
}


export default SWPeople;
import React from 'react';
import PeepsCard from './../PeepsCard/PeepsCard';

 function SWPeeps(props) {
     return(
     function newFunction() {
         return props.data.map((person, index) => {
             return <PeepsCard person={person} key={index} />;
         });
     }
 )}
export default SWPeeps;
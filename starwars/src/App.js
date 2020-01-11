import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import SWPeople from './components/Star Wars People/SWPeople';

const App = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const[data, setData]= useState([]);

  useEffect(()=>{
      axios
      .get('https://swapi.co/api/people/')
      .then(res => {
        console.log("THE DATA FROM THE API: ", res.data)
        setData(res.data)
      })
      .catch(err=>console.log(err))
  },[]) 

// console.log(props)
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
console.log("THE DATA: ", data)
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <SWPeople data={data}/>
    
    </div>
  );
}

export default App;

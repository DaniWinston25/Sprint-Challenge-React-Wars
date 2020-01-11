import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import SWPeeps from './components/SWPeeps/SWPeeps';

const App = () => {

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
 

  return (
    <div className="App">
      <SWPeeps data ={data}/>
      <h1 className="Header">React Wars</h1>
    
    </div>
  );

}
export default App;

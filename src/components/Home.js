import React, { useState } from 'react'
import Departments from './Departments';
import Companies from './Companies';
import CheckList from './CheckList';
import Form from './Form';

import img from '../assets/images/checklist.jpeg'
const Home = () => {
    const [state, setState]= useState("");
    

    const [buttonStates, setButtonStates] = useState({});
  
    const buttonStyles = {
      backgroundColor: '',
   
    };




    const SwitchBtn = (id)=>{
        setState(id)
        setButtonStates((prevState) => {
            const updatedButtonStates = {};
            Object.keys(prevState).forEach((key) => {
              updatedButtonStates[key] = key === id;
            });
            return updatedButtonStates;
          }); setButtonStates((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
          }));
    }

    const getButtonStyle = (id) => {
        return {
          ...buttonStyles,
          backgroundColor: buttonStates[id] ? 'orange' : '',
          color: buttonStates[id] ? 'white' : '',
        };
      };

  return (
    <>
        <h1>ISSUE</h1>
        <div className='switch_btns' style={{marginBottom:"20px"}}>
            <button className='urgent_btn' style={getButtonStyle(1)} onClick={()=>SwitchBtn(1)}>Urgent</button>
            <button className='typical_btn' style={getButtonStyle(2)} onClick={()=>SwitchBtn(2)}>Typical</button>
        </div>

        <div>
        <div style={{marginBottom:"10px"}}>
        {state=== 1? 'Urgent Page': state===2? 'Typical Page': null}
        </div>

        <div>
        <Departments/>
        <Companies/>
        <CheckList/>
        <Form/>
     
    </div>
        </div>
    </>
  )
}

export default Home
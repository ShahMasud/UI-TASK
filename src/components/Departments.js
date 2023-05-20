import React, {useState} from 'react'
const Departments = () => {

  const [buttonStates, setButtonStates] = useState({
    
  });

  const buttonStyles = {
    backgroundColor: '',
  };

  const SwitchBtn = (id)=>{

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
    <div className='heading'>Relating To What Department</div>
    <div className='switch_btns custom_class'>
            <button className='urgent_btn btn' style={getButtonStyle(1)} onClick={()=>SwitchBtn(1)}>Administrative</button>
            <button className='btn' style={getButtonStyle(2)} onClick={()=>SwitchBtn(2)}>Finance</button>
            <button className='btn' style={getButtonStyle(3)} onClick={()=>SwitchBtn(3)}>Accounting</button>
            <button className='btn' style={getButtonStyle(4)} onClick={()=>SwitchBtn(4)}>Sales</button>
            <button className='btn' style={getButtonStyle(5)} onClick={()=>SwitchBtn(5)}>Marketing</button>
            <button className='btn' style={getButtonStyle(6)} onClick={()=>SwitchBtn(6)}>Logistic</button>
            <button className='btn' style={getButtonStyle(7)} onClick={()=>SwitchBtn(7)}>Human Resources</button>
            <button className='btn'style={getButtonStyle(8)} onClick={()=>SwitchBtn(8)}>Supplier</button>
            <button className='typical_btn' style={getButtonStyle(9)} onClick={()=>SwitchBtn(9)}>Security</button>
        </div>


        <div style={{marginTop:"50px"}}>

        </div>
    </>
  )
}

export default Departments
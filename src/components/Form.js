import React, { useState } from "react";
import Deadline from "./Deadline";
import { FaBeer } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
const Form = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [data, setData] = useState({});

  const [buttonStates, setButtonStates] = useState({});
  
    const buttonStyles = {
      backgroundColor: '',
   
    };

  //   const SwitchBtn = (id)=>{
  //     setState(id)
  //     setButtonStates((prevState) => {
  //         const updatedButtonStates = {};
  //         Object.keys(prevState).forEach((key) => {
  //           updatedButtonStates[key] = key === id;
  //         });
  //         return updatedButtonStates;
  //       }); 
  //       setButtonStates((prevState) => ({
  //         ...prevState,
  //         [id]: !prevState[id],
  //       }));
  // }

  const getButtonStyle = (id) => {
      return {
        ...buttonStyles,
        backgroundColor: buttonStates[id] ? 'orange' : '',
        color: buttonStates[id] ? 'white' : '',
      };
    };


  

  const InputData = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const DeleteData = (id) => {
    const unsetData = Object.keys(data).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {});
    setData(unsetData);
    setSelectedFile(null);


    setButtonStates((prevState) => {
      const updatedButtonStates = {};
      Object.keys(prevState).forEach((key) => {
        updatedButtonStates[key] = key === id;
      });
      return updatedButtonStates;
    }); 
    setButtonStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      <div className="form">
        <div>
          <label htmlFor="issue" placeholder="issue">
            Issue
          </label>
          <br />
          <br />
          <textArea
            className="input_1"
            type="textArea"
            onChange={InputData}
            value={data.issue}
            name="issue"
          ></textArea>
        </div>

        <div>
          <label for="html">Choices</label>
          <br />
          <br />
          <input
            type="text"
            className="input_3"
            onChange={InputData}
            value={data.choice}
            name="choice"
          />
        </div>

        <div>
          <label htmlFor="">Choices</label>
          <br />
          <br />
          <input
            type="text"
            className="input_3"
            onChange={InputData}
            value={data.choice2}
            name="choice2"
          />
        </div>
        <div>
          <label htmlFor="">Choices</label>
          <br />
          <br />
          <input
            type="text"
            className="input_3"
            onChange={InputData}
            value={data.choice3}
            name="choice3"
          />
        </div>
        <div>
          <label htmlFor="">Note</label>
          <br />
          <br />
          <input
            type="text"
            className="input_4"
            onChange={InputData}
            value={data.note}
            name="note"
          />
        </div>

        <label htmlFor="file" className="custom-file-upload">
          {selectedFile ? selectedFile.name : <FaCloudUploadAlt size="40px" />}
          <input
            type="file"
            id="file"
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />
        </label>
      </div>
      <Deadline/>

      <div className="end_btns">
        <button style={getButtonStyle(1)} className="" type="button" onClick={()=>DeleteData(1)}>
          Delete
        </button>
        <button>Save</button>
        <button>Submit</button>
      </div>
    </>
  );
};

export default Form;

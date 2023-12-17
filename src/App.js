// src/App.js

import React, { useState } from 'react';
import axios from 'axios';
import FaceRecognitionResult from './FaceRecognitionResult';
import LabelsResult from './label'
import './App.css';
function App() {
  const [file, setFile] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [result, setResult] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInvoke = async () => {
    const formData = new FormData();
    formData.append('image', file);

    try {
        console.log("API Invoked with URL:",`http://localhost:5000/${selectedOption}`)
        const response = await axios.post(`http://localhost:5000/${selectedOption}`, formData);
        setResult(response.data);
      
    } catch (error) {
      console.error('Error invoking API:', error);
    }
  };

  return (
   < div>
    <div className="App">
    <div className="logo">
      <h1>Image Recognition App</h1>
    </div>
    <div className="search-box">
      <input type="file" onChange={handleFileChange} />
      <br />
      <select onChange={handleDropdownChange} value={selectedOption}>
        <option value="">Select an option</option>
        <option value="analyze/faces">Detect Faces</option>
        <option value="analyze/labels">Detect Labels</option>
        <option value="analyze/moderation">Detect Moderation</option>
        <option value="analyze/text">Detect Text</option>
        {/* Add more options as needed */}
      </select>
      <br />
      <button onClick={handleInvoke} disabled={!file || !selectedOption}>
        Invoke API
      </button>
    </div>
    {result && (
  <>
    {selectedOption === "analyze/faces" && <FaceRecognitionResult faces={result.faces} />}
    {selectedOption === "analyze/labels" && <div>{<LabelsResult labels={result.labels} />}</div>}
    {selectedOption === "analyze/moderation" && <div>{JSON.stringify(result)}</div>}
    {/* Add more cases as needed */}
    {selectedOption !== "analyze/faces" && selectedOption !== "analyze/labels" && selectedOption !== "analyze/moderation" && <div>{JSON.stringify(result)}</div>}
  </>
)}

    
   
  </div>
   <div className="footer">
   <p>Powered by ReactJS © {new Date().getFullYear()}</p>
 </div></div>
  );
}

export default App;

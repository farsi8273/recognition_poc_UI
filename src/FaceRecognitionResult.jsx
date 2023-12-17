import React from 'react';
import './App.css';
const FaceRecognitionResult = ({ faces }) => {
  return (
    <div>
      <h2>Face Recognition Results</h2>
      <p>Number of Faces: {faces.length}</p>

      {faces.map((face, index) => (
        <div key={index} >
          <h3>Face {index + 1}</h3>
          <table className="face-table">
            <tbody>
              {Object.entries(face).map(([feature, value]) => (
                <tr key={feature}>
                  <td>{feature}:</td>
                  <td>
                    {typeof value === 'object' && !Array.isArray(value)
                      ? Object.entries(value).map(([subFeature, subValue]) => (
                          <div key={subFeature}>
                            {subFeature}: {subValue.toString()}
                          </div>
                        ))
                      : Array.isArray(value)
                      ? value.map((emotion, idx) => (
                          <div key={idx}>
                            {emotion.Type}: {emotion.Confidence}
                          </div>
                        ))
                      : value.toString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default FaceRecognitionResult;

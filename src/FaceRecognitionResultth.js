import React from 'react';

const FaceRecognitionResult = ({ faces }) => {
  // Function to extract table headers from the first face
  const getTableHeaders = (face) => {
    if (!face) return [];
    return Object.keys(face).map((feature) => (
      <th key={feature}>{feature}</th>
    ));
  };

  return (
    <div>
      <h2>Face Recognition Results</h2>
      <p>Number of Faces: {faces.length}</p>

      {faces.length > 0 && (
        <table className="face-table">
          <thead>
            <tr>{getTableHeaders(faces[0])}</tr>
          </thead>
          <tbody>
            {faces.map((face, index) => (
              <tr key={index}>
                {Object.values(face).map((value, idx) => (
                  <td key={idx}>
                    {typeof value === 'object' && !Array.isArray(value)
                      ? Object.values(value).join(', ')
                      : Array.isArray(value)
                      ? value.map((emotion) => `${emotion.Type}: ${emotion.Confidence}`).join(', ')
                      : value.toString()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FaceRecognitionResult;

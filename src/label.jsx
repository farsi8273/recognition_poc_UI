import React from 'react';
import './App.css';
const LabelsResult = ({ labels }) => {
  return (
    <div>
    <h2>Labels Result</h2>
    <table className="face-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Confidence</th>
          <th>Bounding Box</th>
          <th>Instance Confidence</th>
        </tr>
      </thead>
      <tbody>
        {labels.map((label, index) => (
          <tr key={index}>
            <td>{label.name}</td>
            <td>{label.confidence}</td>
            <td>
              {label.instances && (
                <ul>
                  {label.instances.map((instance, instanceIndex) => (
                      <li key={instanceIndex}>
                        {JSON.stringify(instance.bounding_box)}
                      </li>
                    ))}
                </ul>
              )}
            </td>
            <td>
              {label.instances && (
                <ul>
                  {label.instances.map((instance, instanceIndex) => (
                    <li key={instanceIndex}>
                      {instance.confidence}
                    </li>
                  ))}
                </ul>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default LabelsResult;

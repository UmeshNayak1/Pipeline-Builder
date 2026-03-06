// outputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";

export const OutputNode = ({ id, data }) => {

  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );

  const [outputType, setOutputType] = useState(
    data?.outputType || "Text"
  );

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <div className="node output-node">

      {/* INPUT CONNECTION */}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
      />

      {/* HEADER */}
      <div className="node-header">
        Output Node
      </div>

      {/* BODY */}
      <div className="node-body">
        <label>Name</label>
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
        />

        <label>Type</label>
        <select value={outputType} onChange={handleTypeChange}>
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </div>

    </div>
  );
};
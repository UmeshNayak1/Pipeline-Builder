// // llmNode.js

// import { Handle, Position } from 'reactflow';

// export const LLMNode = ({ id, data }) => {

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-system`}
//         style={{top: `${100/3}%`}}
//       />
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-prompt`}
//         style={{top: `${200/3}%`}}
//       />
//       <div>
//         <span>LLM</span>
//       </div>
//       <div>
//         <span>This is a LLM.</span>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-response`}
//       />
//     </div>
//   );
// }


// llmNode.js

import { Handle, Position } from "reactflow";

export const LLMNode = ({ id, data }) => {
  return (
    <div className="node">

      {/* INPUT HANDLES */}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: "35%" }}
      />

      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: "70%" }}
      />

      {/* HEADER */}
      <div className="node-header">
        LLM Node
      </div>

      {/* BODY */}
      <div className="node-body">
        <p style={{ margin: 0, fontSize: "13px", opacity: 0.8 }}>
          This node represents a LLM.
        </p>
      </div>

      {/* OUTPUT HANDLE */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />

    </div>
  );
};
import { Handle, Position } from "reactflow";

export default function BaseNode({
    title,
    inputs = [],
    outputs = [],
    children,
    width = 220
}) {
return (
    <div className="node" style={{ width }}>
    <div className="node-header">{title}</div>

      {/* INPUT HANDLES */}
    {inputs.map((h, index) => (
        <Handle
            key={h}
            type="target"
            position={Position.Left}
            id={h}
          style={{ top: 40 + index * 20 }}
        />
    ))}

    <div className="node-body">
        {children}
    </div>

      {/* OUTPUT HANDLES */}
        {outputs.map((h, index) => (
        <Handle
            key={h}
            type="source"
            position={Position.Right}
            id={h}
          style={{ top: 40 + index * 20 }}
        />
        ))}
    </div>
    );
}
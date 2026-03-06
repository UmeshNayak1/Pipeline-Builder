// submit.js

import { useStore } from "./store";

export const SubmitButton = () => {

  // get nodes & edges from global store (ReactFlow state)
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {

      const response = await fetch(
        "https://pipeline-builder-1-cscz.onrender.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nodes,
            edges,
          }),
        }
      );

      const data = await response.json();

      // user-friendly alert
      alert(
`Pipeline Analysis

Number of Nodes: ${data.num_nodes}
Number of Edges: ${data.num_edges}
Is DAG: ${data.is_dag ? "Yes" : "No"}`
      );

    } catch (error) {
      console.error("Submission failed:", error);
      alert("Backend connection failed");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        marginBottom: "20px",
        backgroundColor: "#1e293b",
        padding: "10px",
      }}
    >
      <button onClick={handleSubmit}>
        Submit Pipeline
      </button>
    </div>
  );
};
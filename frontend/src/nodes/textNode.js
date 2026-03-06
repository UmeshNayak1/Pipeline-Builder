// textNode.js

import { useState, useMemo } from "react";
import BaseNode from "./baseNode";

export const TextNode = ({ id, data }) => {

  const [currText, setCurrText] = useState(
    data?.text || "{{input}}"
  );

  /* ----------------------------------
    Extract variables from {{variable}}
  -----------------------------------*/
  const extractVariables = (text) => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...text.matchAll(regex)];
    return [...new Set(matches.map(m => m[1]))]; // remove duplicates
  };

  // recompute only when text changes
  const variables = useMemo(
    () => extractVariables(currText),
    [currText]
  );

  /* ----------------------------------
    Auto resize textarea
  -----------------------------------*/
  const handleTextChange = (e) => {
    setCurrText(e.target.value);

    // auto height grow
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <BaseNode
      title="Text"
      inputs={variables.map(v => `${id}-${v}`)}
      outputs={[`${id}-output`]}
      width={260}
    >
      <label>
        Text:
        <textarea
          value={currText}
          onChange={handleTextChange}
          placeholder="Type text using {{variables}}"
          style={{
            resize: "none",
            overflow: "hidden",
            minHeight: "40px"
          }}
        />
      </label>
    </BaseNode>
  );
};
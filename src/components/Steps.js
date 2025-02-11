import React from "react";

export default function Steps({ steps }) {
  return (
    <div className="mw-none-ns pa3 tl">
      <h2>Steps</h2>
      <ol>
        {steps.map((step, i) => {
          return <li key={i}>{step}</li>;
        })}
      </ol>
    </div>
  );
}
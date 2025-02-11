import React from "react";

export default function Ingredients({ ingredients }) {
  return (
    <div className="mw-none-ns pa3 tl">
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ing, i) => {
          return (
            <li key={i}>
              {ing.quantity} {ing.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
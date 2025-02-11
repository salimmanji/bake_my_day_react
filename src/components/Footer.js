import React from "react";

function Footer({ onFilterChange, types }) {
  return (
    <div>
      {types.map((type, index) => (
        <button className="ma3" key={index} onClick={() => onFilterChange(type)}>
          {type+"s"} 
        </button>
      ))}
    </div>
  );
}

export default Footer;
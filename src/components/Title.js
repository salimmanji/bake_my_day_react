import React from "react";

export default function Title({ name, author }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{author}</p>
    </div>
  );
}
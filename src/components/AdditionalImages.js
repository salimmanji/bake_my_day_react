import React from "react";

function AdditionalImages({ uris, name }) {
  if (uris.length > 1) {
    return uris.map((uri, i) => {
      if (uri.includes("http")) {
        return <img key={i} className="h4 grow-large" src={uri} alt={name} />;
      } else {
        return <img key={i} className="h4 grow-large" src={`img/${uri}`} alt={name} />;
      }
    });
  }
}

export default AdditionalImages;
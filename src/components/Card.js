import React from 'react';
import Ingredients from "./Ingredients";
import Title from "./Title";
import Steps from "./Steps";
import FirstImage from "./FirstImage";
import AdditionalImages from "./AdditionalImages";

const Card = ({ name, author, type, ingredients, steps, imgURI }) => {

  let firstImage = "";
  if (imgURI.length === 0) {
    firstImage = "img/void.svg";
  } else if (imgURI[0].includes("http")) {
    firstImage = imgURI[0];
  } else {
    firstImage = `img/${imgURI[0]}`;
  }

  return (
    <div className="tc bg-light-gray dib br3 grow bw1 shadow-5 test fl w-25 pa2 ml6 mb4">
      <Title name={name} author={author}/>
      <FirstImage imgSrc={firstImage} name={name}/>
      <Ingredients ingredients={ingredients}/>
      <Steps steps={steps} />
      <AdditionalImages uris={imgURI} name={name} />
    </div>
  );
};

export default Card;
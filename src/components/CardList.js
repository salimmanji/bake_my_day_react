import React from "react";
import Card from "./Card";

const CardList = ({ recipes }) => {
  return (
    <div className="pa3">
      {recipes.map((recipe, i) => {
        return (
          <Card
            key={i}
            name={recipe.name}
            author={recipe.author}
            type={recipe.type}
            ingredients={recipe.ingredients}
            steps={recipe.steps}
            imgURI={recipe.imageURI}
          />
        );
      })}
    </div>
  );
};

export default CardList;
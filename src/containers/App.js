import "./App.css";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import Searchbox from "../components/Searchbox";
import Footer from "../components/Footer";
import recipes from "../data/recipes";
import { useState } from "react";

function App() {
  const [searchfield, setSearchfield] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [types] = useState(["appetizer", "meal", "cookie", "dessert", "all Recipe"]);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
    const filteredRecipes = recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    setFilteredRecipes(filteredRecipes);
  };

  const onFilterChange = (type) => {
    const filteredRecipes = recipes.filter((recipe) => {
      return recipe.type.some((t) =>
        t.toLowerCase().includes(type.toLowerCase())
      );
    });
    if (filteredRecipes.length > 0) {
      setFilteredRecipes(filteredRecipes);
    } else {
      setFilteredRecipes(recipes);
    }
  };

  return !recipes.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h2 className="f2 mt1 mb3">Bake My Day</h2>
      <Searchbox searchChange={onSearchChange} />
      <Scroll >
        <CardList recipes={filteredRecipes} />
      </Scroll >
      <Footer types={types} onFilterChange={onFilterChange} />
    </div>
  );
}

export default App;
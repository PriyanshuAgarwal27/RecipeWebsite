import { useMemo } from "react";
import { CARD_IMAGE } from "../Utils/constants";
import "../Css/RecipeList.css";
const RecipesCard = ({ recipeName, authorName, tags, description }) => {
  const truncatedDescription = useMemo(() => {
    if (description.length >= 100) {
      return description.substring(0, 100) + "...";
    }
    return description;
  }, [description]);
  return (
    <div className="receipe-card">
      <div className="card-header">
        <div className="recipename">{recipeName}</div>
        <div className="author">~ {authorName}</div>
      </div>
      <div className="card-image">
        <img alt="card" src={CARD_IMAGE} />
      </div>
      <div className="description">{truncatedDescription}</div>

      <div className="tag">
        {tags.map((tag) => (
          <div key={tag} className="recipe-tag">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesCard;

import { useMemo } from "react";
import { Link } from "react-router-dom";
import { CARD_IMAGE } from "../Utils/constants";
import "../Css/RecipeList.css";
const RecipesCard = ({
  recipeName,
  authorName,
  tags,
  description,
  id,
  imageUrl,
}) => {
  const truncatedDescription = useMemo(() => {
    if (description.length >= 100) {
      return description.substring(0, 100) + "...";
    }
    return description;
  }, [description]);
  return (
    <Link
      key={id}
      className="receipe-card"
      to={"/recipes/" + id}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div>
        <div className="card-header">
          <div className="recipename">{recipeName}</div>
          <div className="author">~ {authorName}</div>
        </div>
        <div
          className="card-image"
          style={{
            background: `url(${imageUrl})`,
          }}
        >
          {/* <img alt="card" src={imageUrl} /> */}
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
    </Link>
  );
};

export default RecipesCard;

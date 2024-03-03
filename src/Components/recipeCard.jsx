import React from "react";
import '../Css/body.css';
const RecipesCard = (props) => {

  return( 
  <div className="receipe-card">
    <div className="user">{props.userName}</div>
    <div className="recipename">{props.recipeName}</div>
    <div className="bottom-card">
    <div className="author" style={{backgroundColor:'red'}}>{props.authorName}</div>
    <div className="tag"style={{backgroundColor:'blue'}}>{props.tags.map(tag => <div className="recipe-tag">{tag}</div>)}</div>
    </div>
   
  </div>);
};

export default RecipesCard;

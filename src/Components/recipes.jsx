import React from "react";
import '../Css/recipes.css';
import Header from "./header.jsx";
import { Outlet } from "react-router-dom";

const Recipes = () =>{
    return(
    <div>
        <Header/>
        <Outlet/>    
    </div>);
    

};
export default Recipes;
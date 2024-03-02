import React from "react";
import '../Css/recipes.css';
import Header from "./header.jsx";
import MockData from '../Utils/MockData.js';
import { Outlet } from "react-router-dom";

const Recipes = () =>{
    console.log({MockData});;
    return(
    <div>
        <Header/>
        <Outlet/>    
    </div>);
    

};
export default Recipes;
import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import "../assets/Styles/ShowRecipe.css";


const ShowRecipe = () => {

    const {id}=useParams();
    const[recipe, setRecipe]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:8080/recipes/show/${id}`)
        .then((response)=>response.json())
        .then((data)=>setRecipe(data))
    }); 
  return (
    <div>
        <div className="container show-container">
            <h2 className="recipe-Name my-3">{recipe.recipeName}</h2>
            <h4 className="category-Name my-3">{recipe.category}</h4>
            <h6 className="sdes my-3">{recipe.shortDescription}</h6>
            <h6 className="method">Method of cooking:</h6>
            <p className="recipe-method">{recipe.description}</p>


        </div>

    </div>
  )
}

export default ShowRecipe
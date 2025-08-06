import React from 'react';
import "../assets/Styles/Main.css";
import Card from "./Card.jsx";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer.jsx";

const Main = () => {

  const[recipe,setRecipes]=useState([]);
   const navigate = useNavigate();

   useEffect(() => {
    fetch("http://localhost:8080/recipes")
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);


  async function deleteRecipe(id){
    try{
      await fetch(`http://localhost:8080/recipes/${id}`, {method :'DELETE'})
      setRecipes(recipe.filter(recipe=>recipe.id!=id))
    }
    catch(err){
      console.log(err);
    }


    


  }

  async function showRecipes(id){
      try{
        const rows=await fetch(`http://localhost:8080/recipes/show/${id}`, {method:'GET'})
        const data= await rows.json();
        navigate(`/recipes/show/${id}`);




      }
      catch(err){
        console.log(err);
      }
    }

  async function editRecipes(id){
    try{
        
        navigate(`/recipes/edit/${id}`);




      }
      catch(err){
        console.log(err);
      }

  }
  return (
    <div>
        <div className="main">
            <h1 class="title">Recipe connect </h1>
            <p>Welcome to Recipe sharing Website here you can share your Favourite recipes for people to enjoy cooking at their home </p>
            <div className="addBtn">
              <button className="btn btn-danger" onClick={()=>navigate("recipes/add")}>Add new Recipe</button>
            </div>
        </div>
       <div className="container my-3">
        <div className="content ">
        {recipe.map((recipe) => (
          <Card
            key={recipe.id}
            id={recipe.id}
            name={recipe.recipeName}
            sdes={recipe.shortDescription}
            category={recipe.category}
            onDelete={deleteRecipe}
            onShow={showRecipes}
            onEdit={editRecipes}
          />
        ))}
      </div>

       </div>
       <Footer />
    </div>
  )
}

export default Main
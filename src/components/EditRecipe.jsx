import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../assets/Styles/EditRecipes.css";

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/recipes/show/${id}`)
      .then(res => res.json())
      .then(data => setRecipe(data));
  }, [id]);

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:8080/recipes/edit/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe)
    });
    navigate('/');
  };

  if (!recipe) return <p>Loading recipe...</p>; // 

  return (
    <div className="edit-recipe-container">
      <h2 className="edit-name">Edit Recipe</h2>
      <form onSubmit={handleSubmit} className="form form-edit">
        <input
          type="text"
          name="recipeName"
          value={recipe.recipeName}
          onChange={handleChange}
          placeholder="Recipe Name"
          className="name-edit"
        />
        <input
          type="text"
          name="category"
          value={recipe.category}
          onChange={handleChange}
          placeholder="Category"
          className="category-edit"
        />
        <input
          type="text"
          name="shortDescription"
          value={recipe.shortDescription}
          onChange={handleChange}
          placeholder="Short Description"
          className="Sdsc-text"
        />
        <textarea
          name="description"
          value={recipe.description}
          onChange={handleChange}
          placeholder="Full Description"
          className="desc-text"
        />
        <button type="submit" className="form-submit">Update Recipe</button>
      </form>
    </div>
  );
};

export default EditRecipe;

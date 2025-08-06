import React from 'react';
import "../assets/Styles/AddRecipe.css";
import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const formData = {
            recipeName: e.target.recipeName.value,
            category: e.target.category.value,
            shortDescription: e.target.shortDescription.value,
            description: e.target.description.value,
        };

        try {
            const response = await fetch("http://localhost:8080/recipes/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Recipe added successfully!");
                navigate("/"); 
            } else {
                alert("Failed to add recipe.");
            }
        } catch (error) {
            console.error("Error submitting recipe:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="add-recipe-container">
            <h2 className="my-3 title-add">Add New Recipe</h2>
            <form onSubmit={handleSubmit} className="form-layout my-3">
                <label className="form-label my-2">Enter your Title of the Recipe</label>
                <input type="text" name="recipeName" className="form-control" required />

                <label className="form-label my-2">Enter the category of the Recipe (Like Indian, Chinese)</label>
                <input type="text" name="category" className="form-control" required />

                <label className="form-label my-2">Give a short and sweet Description for the Recipe</label>
                <textarea
                    name="shortDescription"
                    className="form-control"
                    rows="2"
                    placeholder="A short and sweet description"
                    required
                ></textarea>

                <label className="form-label my-2">Now enter the methods to cook that recipe</label>
                <textarea
                    name="description"
                    className="form-control"
                    rows="5"
                    placeholder="Detailed cooking steps"
                    required
                ></textarea>

                <div className="d-flex justify-content-center mt-3">
                    <button className="btn btn-danger form-submit-btn" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddRecipe;

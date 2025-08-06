package com.example.Server.Service;


import com.example.Server.Model.Recipe;
import com.example.Server.Repository.RecipeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {

    @Autowired
    RecipeRepo repo;




    public List<Recipe> getAllRecipes() {

        return repo.findAll();
    }

    public void deleteRecipe(int Id) {
        repo.deleteById(Id);

    }

    public void addRecipe(Recipe recipe) {

        repo.save(recipe);
    }

    public Recipe showRecipe(int id) {
        return repo.findById(id).orElse(null);
    }

    public void editRecipe(int id, Recipe updatedRecipe) {
        Recipe recipe=repo.findById(id).orElse(null);
                if(recipe!=null){
                    recipe.setRecipeName(updatedRecipe.getRecipeName());
                    recipe.setCategory(updatedRecipe.getCategory());
                    recipe.setShortDescription(updatedRecipe.getShortDescription());
                    recipe.setDescription(updatedRecipe.getDescription());
                }

                repo.save(recipe);


    }
}

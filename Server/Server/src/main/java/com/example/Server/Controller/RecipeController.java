package com.example.Server.Controller;


import com.example.Server.Model.Recipe;
import com.example.Server.Service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class RecipeController {

    @Autowired
    RecipeService service;


    @GetMapping("recipes")
    public List<Recipe> getAllRecipes(){
        return service.getAllRecipes();


    }

    @DeleteMapping("recipes/{Id}")
    public void deleteRecipe(@PathVariable("Id") int Id){
        service.deleteRecipe(Id);
    }

    @PostMapping("recipes/add")
    public void addRecipe(@RequestBody Recipe recipe) {
        service.addRecipe(recipe);
    }


    @GetMapping("recipes/show/{id}")
    public Recipe showRecipe(@PathVariable("id") int id){
        return service.showRecipe(id);
    }


    @PutMapping("recipes/edit/{id}")
    public void editRecipe(@PathVariable("id") int id,@RequestBody Recipe updatedRecipe){
        service.editRecipe(id,updatedRecipe);
    }






}

package com.example.Server.Repository;

import com.example.Server.Model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepo extends JpaRepository <Recipe,Integer>{

}

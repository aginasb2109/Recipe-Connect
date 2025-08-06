package com.example.Server.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Recipe {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String recipeName;
    private String category;
    private String shortDescription;
    private String description;

    public Recipe(String recipeName, String category, String shortDescription, String description) {
        this.recipeName = recipeName;
        this.category = category;
        this.shortDescription = shortDescription;
        this.description = description;
    }

    public Recipe() {
    }
}

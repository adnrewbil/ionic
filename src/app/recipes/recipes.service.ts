import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe[] = [
    {
      id: "r1",
      title: 'Shnitsel',
      imageUrl: 'https://picsum.photos/200/300',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: "r2",
      title: 'Spaghetti',
      imageUrl: 'https://picsum.photos/200/300',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }
}

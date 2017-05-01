import {EventEmitter, Injectable} from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
      new Recipe(
        1,
        'A Test Description 1',
        'This is a Test Description',
        'http://www.seriouseats.com/recipes/assets_' +
        'c/2015/12/20151218-braised-chicken-thigh-cabbage-pancetta-recipe-kenji-14-thumb-1500xauto-428923.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 25)
        ]
      ),
      new Recipe(
        2,
        'A Test Description 2',
        'This is a Test Description',
        'http://www.seriouseats.com/recipes/assets_' +
        'c/2015/12/20151218-braised-chicken-thigh-cabbage-pancetta-recipe-kenji-14-thumb-1500xauto-428923.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('Buns', 1)
        ]
      )
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
      return this.recipes.slice();
    }

    addIngToSList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
    }
}

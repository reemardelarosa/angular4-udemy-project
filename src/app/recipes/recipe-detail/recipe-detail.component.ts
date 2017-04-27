import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from  '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private slService: ShoppingListService) {}
  // constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    // console.log(this.slService);
  }

  onAddToShoppingList() {
    // let sService = this.slService;
    // ingredients.forEach(function (ingredient) {
    //   sService.addIngredient(ingredient);
    // });
    this.slService.addIngredients(this.recipe.ingredients);
    // this.recipeService.addIngToSList(this.recipe.ingredients);
  }

}

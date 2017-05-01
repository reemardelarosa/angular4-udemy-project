import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
      private slService: ShoppingListService,
      private rService: RecipeService,
      private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.recipe = this.rService.getRecipes()[id]
    this.route.params
      .subscribe(
        (params) => {
            this.recipe = this.rService.getRecipes()[+params['id']]
        }
    );

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

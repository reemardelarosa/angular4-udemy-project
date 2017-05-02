import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  id: number;
  editMode = false;
  buttonText: String;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          if (this.editMode) {
            this.recipe = this.recipeService.getRecipe(this.id);
            this.buttonText = 'Edit';
          } else {
            this.recipe = this.recipeService.createEmptyRecipe();
            this.buttonText = 'Create';
          }
        }
      );
  }

  onSubmitRecipe() {

  }

}

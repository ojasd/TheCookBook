import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit, OnDestroy {
recipeList;
paramsKey;
recipeData;
subscriber;
constructor(private activatedRoute: ActivatedRoute,
            private cookieService: CookieService) { }

  ngOnInit() {
    this.getParamsMap();
  }

  getParamsMap() {
    this.subscriber = this.activatedRoute.paramMap.subscribe(
      res => {
        this.paramsKey = res['params'].recipe_name;
        this.recipeList = JSON.parse(this.cookieService.get('recipeList'));
        this.recipeData = this.recipeList.filter(
          recipeName => recipeName.recipe_name === this.paramsKey
        )[0];
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}

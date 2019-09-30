import { Component, OnDestroy, OnInit } from '@angular/core';
import { CookbookService } from '../services/cookbook.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.component.html',
  styleUrls: ['./show-recipe.component.css']
})
export class ShowRecipeComponent implements OnInit, OnDestroy {
  recipeData;
  subscriber;
  constructor(private cookbookService: CookbookService,
              private cookieService: CookieService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.subscriber = this.cookbookService.getAPIData().subscribe(
      res => {
        this.recipeData = res;
      },
      (err) => console.log(err),
      () => {
        this.cookieService.set('recipeList', JSON.stringify(this.recipeData));
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}

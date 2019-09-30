import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipes: boolean;
  addRecipe: boolean;

  constructor() {
    this.addRecipe = false;
    this.showRecipes = false;
  }

  toggleAdd(event: any) {

  }
}

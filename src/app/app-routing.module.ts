import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowRecipeComponent } from './show-recipe/show-recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import {ViewRecipeComponent} from './view-recipe/view-recipe.component';

const appRoutes: Routes = [
  { path: 'home', component: ShowRecipeComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: 'view-recipe/:recipe_name', component: ViewRecipeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

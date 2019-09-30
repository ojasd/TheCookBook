import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { ShowRecipeComponent } from './show-recipe/show-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CookbookService } from './services/cookbook.service';
import {HttpClientModule} from '@angular/common/http';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddRecipeComponent,
    ShowRecipeComponent,
    ViewRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ CookbookService, CookieService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

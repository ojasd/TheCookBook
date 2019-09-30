import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CookbookService} from '../services/cookbook.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit, OnDestroy {
  recipeForm: FormGroup;
  recipeCategories;
  addRecipe: boolean;
  stepCounter: number;
  @Input() inputArray;
  subscriber;

  constructor(private formBuilder: FormBuilder,
              private cookbookService: CookbookService,
              private router: Router) {
    this.recipeCategories = ['Appetizers', 'Beverages', 'Soups', 'Salads', 'Deserts', 'Main Dishes', 'Side Dishes'];
    this.addRecipe = false;
    this.stepCounter = 1;
    this.inputArray = [];
    this.createRecipeForm();
  }

  createRecipeForm() {
    this.recipeForm = this.formBuilder.group({
      recipeName: ['', Validators.required],
      categories: [''],
      ingredients: [''],
      time: [''],
      steps: this.formBuilder.array([this.createRecipeSteps()])
    });
  }

  createRecipeSteps() {
    return this.formBuilder.group({
      subTitle: [''],
      images: [''],
      links: [''],
      optionalContent: ['']
    });
  }

  ngOnInit() {
  }

  clearForm() {
    this.recipeForm.reset();
  }

  nextStep(event) {
    this.stepCounter++;
    this.addRecipe = true;
    (this.recipeForm.controls['steps'] as FormArray).push(this.createRecipeSteps());
  }

  deleteStep(index: number): void {
    (this.recipeForm.controls['steps'] as FormArray).removeAt(index);
  }

  submitRecipe() {
    const newRecipeObject = {
      recipe_name: this.recipeForm.get('recipeName').value,
      body: this.recipeForm.value
    };
    if (this.recipeForm.valid) {
      this.subscriber = this.cookbookService.postAPIData(newRecipeObject).subscribe(
        res => {
          // console.log(res);
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log('Successfully created a new recipe');
          this.router.navigate(['/home']);
        }
      );
    } else {
      Object.keys(this.recipeForm.controls).forEach(field => {
        const control = this.recipeForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}

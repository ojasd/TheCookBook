# TheCookBook

The Cook Book is a Full Stack Application created using Angular 7 (Front End Framework), Sails.js (Node.js Framework) and MongoDB (NoSQL Database).

#### Folder Structure
The Sails.js framework also rests within this folder structure in `backend` folder at root location.

#### Steps to run the application:

1. `git clone` the application locally. 
2. run `npm install` inside `TheCookBook` folder and then inside `backend/CookBookAPI` folder.
3. To run the Sails.js application (API), run `nodemon app.js` from root location of `CookBookAPI` folder 
4. To run Angular 7 application, run `npm run start-proxy` at root location of `TheCookBook` folder.
5. Please make sure MongoDB is already running locally on port 27017. The Sails.js application is set to create collections on MongoDB directly but the connection should be set first.

#### API List

  1. GET `/loadrecipes` - To get the list of all recipes.
  2. POST `/create` - To create a new recipe and add to the database
  3. PUT `/update/:recipe_name` - To update an existing recipe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

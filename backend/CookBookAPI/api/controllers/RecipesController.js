/**
 * RecipesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {

  show: function (req, res) {
    Recipes.find({}).exec(function (err, recipes) {
      if (err) {
        res.send(500, {error: err +  'Database Error'});
      }

      res.json(recipes);
    });
  },

  create: function (req, res) {

    var recipe_name = req.body.recipe_name;
    var body = req.body.body;

    var recipe = {
      recipe_name: recipe_name,
      body: body
    };

    Recipes.create(recipe).exec(function (err, recipes) {
      if (err) {
        res.status(500).send({error: err + 'Database Error'});
      }
      res.json(recipes);
    });
  },

  update: function (req, res) {
    var recipe_name = {recipe_name: +req.param('recipe_name')};
    var body = req.body.body;


    Recipes.update(recipe_name, {body: body}).exec(function (err, recipe) {
      if (err) {
        return res.send(500, {error: err + 'Database Error'});
      }
      return res.json(recipe);
    });
  }
};

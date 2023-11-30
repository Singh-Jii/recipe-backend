const recipe_model = require('../model/recipe_model');


exports.make_recipe = async (request, response) => {


  try {


    const { name, category, ingredients, instructions, price } = request.body;


    const my_recipy = new recipe_model({ name, category, ingredients, instructions, price });


    await my_recipy.save();


    response.status(201).json({ msg: 'recipe created' });


  } 
  
  
  catch (er) {


    response.status(500).json({ msg: 'error' });


  }

  
};

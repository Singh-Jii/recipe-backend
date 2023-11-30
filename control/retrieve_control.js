const recipe_model = require('../model/recipe_model');


exports.get_evry_recipe = async (request, response) => {


  try {


    const my_rec = await recipe_model.find();


    response.status(200).json(my_rec);


  } 
  
  
  catch (er) {


    response.status(500).json({ msg: 'error' });


  }

  
};

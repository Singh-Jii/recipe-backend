const recipe_model = require('../model/recipe_model');


exports.get_category = async (request, response) => {


  const { my_categ } = request.params;


  try {


    const my_rec = await recipe_model.find({ my_categ });


    response.status(200).json(my_rec);


  } 
  
  catch (er) {


    response.status(500).json({ msg: 'error' });


  }

  
};

const recipe_model = require('../model/recipe_model');


exports.del_recipe = async (request, response) => {


  const { my_id } = request.params;


  try {


    const my_recipy = await recipe_model.findByIdAndDelete(my_id);


    if (my_recipy) {


      response.status(200).json({ msg: 'deletion completed' });


    } 
    
    else {

      response.status(404).json({ msg: 'not available' });


    }


  } 
  
  catch (er) {


    response.status(500).json({ msg: 'error' });


  }

  
};

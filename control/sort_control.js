const recipe_model = require('../model/recipe_model');


exports.sort_price = async (request, response) => {


  const { my_ordr } = request.params;


  try {


    const choose_drction = my_ordr === 'asc' ? 1 : -1;


    const my_rec = await recipe_model.find().sort({ price: choose_drction });


    response.status(200).json(my_rec);


  } 
  
  
  catch (er) {


    response.status(500).json({ msg: 'error' });


  }

  
};

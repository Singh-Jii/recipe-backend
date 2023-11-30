const valid_middleware = (request, response, next) => {


    const { name, category, ingredients, instructions, price } = request.body;
  

    if (!name || !category || !ingredients || !instructions || !price) {


      return response.status(400).json({ msg: 'everything needed' });


    }
  
    next();


  };
  
  
  module.exports = { valid_middleware };
  
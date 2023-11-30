const mongo = require('mongoose');


const my_schema = new mongo.Schema({


  name: { 
    
    type: String, 
    
    required: true 
  
  
  },


  category: { 
    
    type: String, 
    
    
    required: true 
  
  
  },


  ingredients: { 
    
    type: String, 
    
    required: true 
  
  
  },


  instructions: { 
    
    
    type: String, 
    
    
    required: true 
  
  
  
  },


  price: { 
    
    type: Number, 
    
    required: true 
  
  
  },


});



module.exports = mongo.model('Recipe', my_schema);

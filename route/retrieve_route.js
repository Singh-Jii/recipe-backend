const exp = require('express');


const my_route = exp.Router();

const retrieve_control = require('../control/retrieve_control');


my_route.get('/', retrieve_control.get_evry_recipe);


module.exports = my_route;

const exp = require('express');


const my_route = exp.Router();


const post_control = require('../control/post_control');


my_route.post('/', post_control.make_recipe);


module.exports = my_route;

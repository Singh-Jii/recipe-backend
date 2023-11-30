const exp = require('express');


const my_route = exp.Router();


const filter_control = require('../control/filter_control');


my_route.get('/:category', filter_control.get_category);


module.exports = my_route;

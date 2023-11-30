const exp = require('express');


const my_route = exp.Router();

const sort_control = require('../control/sort_control');


my_route.get('/:order', sort_control.sort_price);


module.exports = my_route;

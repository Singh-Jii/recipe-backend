const exp = require('express');


const my_route = exp.Router();


const del_control = require('../control/delete_control');


my_route.delete('/:id', del_control.del_recipe);


module.exports = my_route;

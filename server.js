const exp = require('express');


const bp = require('body-parser');


const database = require('./db');

const mongo = require('mongoose');


const env_file = require('dotenv');


env_file.config();

const application = exp();


const my_port = process.env.PORT || 3001;

application.use(bp.json());

application.use('/api/post', require('./route/post_route'));


application.use('/api/retrieve', require('./route/retrieve_route'));


application.use('/api/delete', require('./route/delete.route'));


application.use('/api/filter', require('./route/filter_route'));


application.use('/api/sort', require('./route/sort_route'));

mongo.connect(process.env.mongo_link, {


  useNewUrlParser: true,


  useUnifiedTopology: true,


});


application.listen(my_port, () => {


  console.log(`${my_port}`);

  
});

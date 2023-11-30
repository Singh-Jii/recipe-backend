const mongo = require('mongoose');


const env_file = require('dotenv');


env_file.config();

const database = async () => {


  try {


    await mongo.connect(process.env.mongo_link, {


      useNewUrlParser: true,


      useUnifiedTopology: true,


    });


    console.log('database connected');


  } 
  
  
  catch (er) {


    console.log('error', er.msg);


    process.exit(1);


  }


};


module.exports = database;

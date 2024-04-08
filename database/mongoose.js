const mongoose = require('mongoose');

mongoose.Promise = global.Promise;       //This will allow for Asynchronous communication with the database

mongoose.connect('mongodb://127.0.0.1:27017/taskmanagerdb')
.then(() => {                                       //this will be called upon successful connection
    console.log("DB connected successfully!")
})
.catch((error => {                                  //this will be called in case of any error in connection
    console.log(error);
}));



module.exports = mongoose;
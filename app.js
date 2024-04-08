const express = require('express');

const app = express();

/* app.listen(3000, function(){
    console.log('server started on port 3000');
}); */

//The above script can be written using arrow function which got introduced from ECMAScript 6 (ES6 in 2015)
app.listen(3000, () => {
    console.log('server started on port 3000');
});


const mongoose = require('./database/mongoose');   //mongoose is imported here in app.js

mongoose.set('strictQuery',false);

//Also we have installed nodemon (project folder -> npm install nodeman --save-dev) which will automatically detect the changes in .js files and updates the response without restarting the express server. Once it's installed, we can execute the app.js by using the command-> nodemon app.js instead of the command -> node app.js